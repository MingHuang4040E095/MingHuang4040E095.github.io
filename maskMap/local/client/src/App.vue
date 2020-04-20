<template>
  <div id="app">
    <el-container class="display-full">
      <el-header class="header">
        <navbar />
      </el-header>
      <transition name="bounce">
        <router-view />
      </transition>
    </el-container>
  </div>
</template>

<script>
import navbar from "@/components/navbar";
export default {
  name: "App",
  components: {
    navbar
  }
  // watch: {
  //   $route(to, from) {
  //     const toDepth = to.path.split("/").length;
  //     const fromDepth = from.path.split("/").length;
  //     console.log(toDepth);
  //     console.log(fromDepth);
  //     this.transitionName = toDepth < fromDepth ? "bounce" : "bounce";
  //   }
  // }
};
</script>
<style>
/* @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+TC&display=swap"); */
/* .bounce-enter-active {
  animation: bounce-in 1.5s;
}
.bounce-leave-active {
  animation: bounce-out 1.5s;
}
@keyframes bounce-in {
  0% {
    display: none;
    transform: scale(0.8) translateX(100%);
  }
  10% {
    display: block;
  }
  100% {
    transform: scale(1) translateX(0%);
  }
}
@keyframes bounce-out {
  0% {
    opacity: 1;
    transform: scale(1) translateX(0%);
  }
  50% {
    transform: scale(0.8);
  }
  100% {
    opacity: 0;
    transform: scale(1) translateX(-100%);
  }
} */

html,
body {
  color: #828894;
  font-family: Microsoft JhengHei;
  background-color: #f3f1f1;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  text-decoration: none;
  box-sizing: border-box;
}
.display-full {
  height: 100vh !important;
}
/* .display-full > section {
  display: inline-block;
} */
header {
  background-color: #ffffff;
  box-shadow: 0 2px 0 #e6e6e6;
}
</style>
