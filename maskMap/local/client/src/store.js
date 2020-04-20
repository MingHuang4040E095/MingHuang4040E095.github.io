import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    maskInfoArray: [], //所有的資訊
    filterMarksCounty: [],
    filterMarksTown: [],
    detail: {}
  },
  mutations: {
    getMaskInfo(state, data) {
      state.maskInfoArray = data;
    },
    filterMarksCounty(state, data) {
      state.filterMarksCounty = data;
    },
    filterMarksTown(state, data) {
      state.filterMarksTown = data;
    },
    getDetail(state, data) {
      state.detail = data;
    }
  },
  actions: {
    getMaskInfo: context => {
      return axios
        .get(
          "https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json"
        )
        .then(result => {
          context.commit("getMaskInfo", result.data.features);
        })
        .catch(err => {
          console.log(err);
        });
    },
    filterMarksCounty: (context, data) => {
      context.commit("filterMarksCounty", data);
    },
    filterMarksTown: (context, data) => {
      context.commit("filterMarksTown", data);
    },
    getDetail: (context, data) => {
      context.commit("getDetail", data);
      console.log(data);
    }
  }
});
