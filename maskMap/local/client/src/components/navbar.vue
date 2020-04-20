<template>
  <el-row type="flex" justify="space-between" align="middle">
    <div>口罩地圖</div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      justify="space-between"
    >
      <el-menu-item index="1">github</el-menu-item>
      <el-menu-item index="2">資料來源</el-menu-item>
    </el-menu>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      // activeIndex: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
