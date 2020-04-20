import Vue from "vue";
import Router from "vue-router";
import homePage from "@/page/home";
import helloworld from "@/components/HelloWorld";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "homePage",
      component: homePage
    },
    {
      path: "/hello",
      name: "hello",
      component: helloworld
    }
  ]
});
