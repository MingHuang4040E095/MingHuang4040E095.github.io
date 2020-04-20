<template>
  <div id="map"></div>
</template>

<script>
import L from "leaflet";
import MarkerClusterGroup from "leaflet.markercluster";
// import Control from "leaflet-control-geocoder";
export default {
  data() {
    return {
      mapObj: {},
      MarkerClusterGroup: new L.MarkerClusterGroup(),
      greenIcon: {},
      myLocateIcon: {},
      find: false
    };
  },
  computed: {
    maskInfoArray() {
      return this.$store.state.maskInfoArray;
    },
    filterMarksCounty() {
      return this.$store.state.filterMarksCounty;
    },
    filterMarksTown() {
      return this.$store.state.filterMarksTown;
    }
  },
  watch: {
    filterMarksCounty(data) {
      this.markOnMap(data);
    },
    filterMarksTown(data) {
      this.markOnMap(data);
    }
  },
  methods: {
    mapInit() {
      this.mapObj = L.map("map").setView([22.604799, 120.2976256], 13);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(this.mapObj);
      //https://www.flaticon.com/free-icon/maps-and-flags_252025
      this.greenIcon = new L.Icon({
        iconUrl: require("@/assets/maps-and-flags.png"),
        shadowUrl:
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
        iconSize: [30, 33],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [45, 35]
      });
      this.findMe();
    },
    markOnMap(data, myloate) {
      this.MarkerClusterGroup.clearLayers();
      let markerArray = [];
      data.forEach(item => {
        let lat = item.geometry.coordinates[1];
        let lng = item.geometry.coordinates[0];

        let marker = L.marker([lat, lng], {
          icon: this.greenIcon
        })
          .bindPopup(
            `
        <table>
        <tbody>
          <tr>
            <td>名稱 : </td>
            <td>${item.properties.name}</td>
          </tr>
          <tr>
            <td>電話 : </td>
            <td>${item.properties.phone}</td>
          </tr>
          <tr>
            <td>地址 : </td>
            <td>${item.properties.address}</td>
          </tr>
          <tr>
            <td>成人口罩數量 : </td>
            <td>${item.properties.mask_adult}</td>
          </tr>
          <tr>
            <td>兒童口罩數量 : </td>
            <td>${item.properties.mask_child}</td>
          </tr>
        </tbody>
        </table>
        <style>
          tr > td:first-child{
            text-align:right;
            width:90px;
          }
          .leaflet-popup-content-wrapper, .leaflet-popup-tip {
            background:#ff8f74;
            color:#ffffff;
          }
          .leaflet-container a.leaflet-popup-close-button{
            color:#fff;
          }
        </style>
        `
          )
          .on("click", () => {
            this.$store.dispatch("getDetail", item.properties);
          });
        markerArray.push(marker);
      });
      if (this.find === true) {
        markerArray.push(myloate);
      }
      if (this.find !== true) {
        this.mapObj.setView(
          [markerArray[0]._latlng.lat, markerArray[0]._latlng.lng],
          12
        );
      }
      this.MarkerClusterGroup.addLayers(markerArray);

      this.mapObj.addLayer(this.MarkerClusterGroup);
    },
    findMe() {
      this.myLocateIcon = new L.Icon({
        iconUrl: require("@/assets/placeholder.png"),
        shadowUrl:
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
        iconSize: [30, 33],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [45, 35]
      });

      this.mapObj.locate({
        setView: true,
        maxZoom: 16
      });

      this.mapObj.on("locationfound", e => {
        // var radius = e.accuracy / 2;
        this.find = true;
        let myloate = L.marker(e.latlng, {
          icon: this.myLocateIcon
        }).bindPopup("現在位置");
        this.markOnMap(this.maskInfoArray, myloate);
        this.find = false;
      });

      this.mapObj.on("locationerror", e => {
        this.find = false;
        this.markOnMap(this.maskInfoArray);
        alert("定位失敗");
      });
    },
    getMask() {
      return new Promise((resolve, reject) => {
        resolve(this.$store.dispatch("getMaskInfo"));
      });
    }
  },
  async mounted() {
    window.maskMap = this;
    await this.getMask()
      .then(() => {
        this.mapInit();
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>
<style>
#map {
  width: 100%;
  height: 100%;
  border-radius: 8px;
}
</style>
