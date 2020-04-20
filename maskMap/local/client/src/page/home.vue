<template>
  <el-container>
    <!-- <el-button @click="drawer = true" type="primary" style="margin-left: 16px;">
      点我打开
    </el-button>
    <el-drawer title="我是标题" :visible.sync="drawer" :with-header="false">
      <boxCardSearch />
      <boxCardDetail v-if="detailCard" />
    </el-drawer> -->
    <el-aside width="300px" class="detail-padding">
      <boxCardSearch />
      <boxCardDetail v-if="detailCard" />
    </el-aside>
    <el-container>
      <el-main class="map-padding">
        <maskMap />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import boxCardSearch from "@/components/boxCardSearch";
import boxCardDetail from "@/components/boxCardDetail";
import maskMap from "@/components/maskMap";
import axios from "axios";
export default {
  components: {
    boxCardSearch,
    boxCardDetail,
    maskMap
  },
  data() {
    return {
      detailCard: false,
      drawer: false
    };
  },
  computed: {
    detail() {
      return this.$store.state.detail;
    }
  },
  watch: {
    detail() {
      this.detailCard = true;
    }
  },
  methods: {},
  mounted() {}
};
</script>
<style>
.map-padding {
  padding: 10px 10px 10px 5px;
}
.detail-padding {
  padding: 10px 5px 10px 10px;
}
</style>
