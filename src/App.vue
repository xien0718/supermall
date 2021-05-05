<template>
  <div id="app">
    <!-- 除详情页之外，保留离开时候的页面位置等数据不销毁 -->
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from "./components/content/mainTabBar/MainTabBar";

export default {
  name: "App",
  components: {
    MainTabBar
  }
};
</script>

<style>
@import "./assets/css/base.css";
/* app这里一定要设置宽度和高度是100%  */
#app {
  width: 100%;
  height: 100%;
  padding-bottom: 49px;
}
/* tab组件也设置一个固定的高度  然后 app里设置一下底内边距为这个tab组件的高度  就可以沾满屏幕而不需要用calc算  */
/* #tab-bar {
  /* height: 15vw; */
/* } */
</style>
