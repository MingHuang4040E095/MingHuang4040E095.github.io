<template>
  <el-card class="box-card">
    <el-button
      type="primary"
      class="margin-xs bg-main"
      size="medium"
      @click="findMe"
      >移至我的位置</el-button
    >
    <el-select
      class="el-select margin-xs"
      v-model="county"
      placeholder="請選擇 縣/市"
      @change="getCounty"
    >
      <el-option
        v-for="item in countysList"
        :key="item"
        :label="item"
        :value="item"
      >
      </el-option>
    </el-select>
    <el-select
      v-if="county"
      class="el-select margin-xs"
      v-model="town"
      placeholder="請選擇 區/鄉/鎮"
      @change="getTown"
    >
      <el-option
        v-for="item in townsList"
        :key="item"
        :label="item"
        :value="item"
      >
      </el-option>
    </el-select>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      countysList: [
        "臺北市",
        "新北市",
        "桃園市",
        "臺中市",
        "高雄市",
        "臺南市",
        "基隆市",
        "新竹市",
        "新竹縣",
        "苗栗縣",
        "彰化縣",
        "雲林縣",
        "嘉義市",
        "嘉義縣",
        "屏東縣",
        "宜蘭縣",
        "花蓮縣",
        "臺東縣",
        "南投縣",
        "澎湖縣",
        "金門縣",
        "連江縣"
      ],
      county: "",
      townsList: [],
      town: ""
    };
  },
  computed: {
    maskInfoArray() {
      return this.$store.state.maskInfoArray;
    },
    filterMarksCounty() {
      return this.$store.state.filterMarksCounty;
    }
  },
  methods: {
    async getCounty() {
      this.town = "";
      let marksInformation = [];
      this.maskInfoArray.forEach(item => {
        if (item.properties.county == this.county) {
          marksInformation.push(item);
        }
      });
      this.$store.dispatch("filterMarksCounty", marksInformation);
      //取得區或鎮或鄉
      this.townsList = [];
      marksInformation.forEach(getTown => {
        if (this.townsList.indexOf(getTown.properties.town) === -1) {
          this.townsList.push(getTown.properties.town);
        }
      });
    },
    getTown() {
      let marksInformation = [];
      this.filterMarksCounty.forEach(item => {
        if (item.properties.town == this.town) {
          marksInformation.push(item);
        }
      });
      this.$store.dispatch("filterMarksTown", marksInformation);
    },
    findMe() {
      window.maskMap.findMe();
    }
  },
  mounted() {}
};
</script>
<style scoped>
.el-select {
  width: 100%;
}
.el-button--medium {
  width: 100%;
}
.margin-xs {
  margin: 5px 0;
}
.bg-main {
  background-color: #fab1a0;
  border-color: #fab1a0;
}
</style>
