<template>
  <div class="shopcart">
    <!-- 导航 -->
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{length}})</div>
    </nav-bar>

    <!-- 加购列表 -->
    <scroll class="content" ref="scroll">
      <goods-list></goods-list>
    </scroll>

    <!-- 底部汇总 -->
    <bottom-collect></bottom-collect>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";
import GoodsList from "./childComps/GoodsList";
import BottomCollect from "./childComps/BottomCollect";
import { mapGetters } from "vuex";
export default {
  name: "Shopcart",
  data() {
    return {};
  },
  components: { NavBar, GoodsList, Scroll, BottomCollect },
  methods: {},
  computed: {
    ...mapGetters({ length: "cartListLength" })
  },
  activated() {
    this.$refs.scroll.refresh();
  },
  mounted() {}
};
</script>

<style scoped>
.nav-bar {
  background-color: var(--color-tint);
  color: #ffffff;
  font-weight: 700;
}
/* height：100%  是父元素去除掉内边距后的高度  比如父元素高度是100PX，内边距是20px   则子元素设置height：100%
实际计算出了的就是  100 - 20 = 80PX
*/
.shopcart {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.content {
  flex: 1;
  height: 0;
  overflow: hidden;
}
</style>