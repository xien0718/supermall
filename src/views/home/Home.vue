<template>
  <div id="home">
    <!-- 导航 -->
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control
      :titles="['流行','新款','精选']"
      @tabClick="tabClick"
      ref="tabControl1"
      class="tab-control"
      v-show="isTabFixed"
    ></tab-control>

    <!-- 可滚动部分 -->
    <scroll
      class="content"
      ref="scroll"
      :pull-up-load="true"
      :probe-type="3"
      @scroll="contentScroll"
      @pullingUp="loadMore"
    >
      <!-- 轮播 -->
      <home-swiper :banners="banners" @swiperImgLoad="swiperImgLoad"></home-swiper>

      <!-- 推荐 -->
      <recommend-view :recommends="recommends"></recommend-view>

      <!-- featureview -->
      <feature-view></feature-view>

      <!-- tab可控制选项卡 -->
      <tab-control :titles="['流行','新款','精选']" @tabClick="tabClick" ref="tabControl2"></tab-control>
      <!-- 商品列表 -->
      <goods-list v-show="$store.state.tabShow===0" :goods="showPopGoods"></goods-list>
      <goods-list v-show="$store.state.tabShow===1" :goods="showNewGoods"></goods-list>
      <goods-list v-show="$store.state.tabShow===2" :goods="showSellGoods"></goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
//公共组件导入
import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backTop/BackTop";
//子组件导入
import HomeSwiper from "./childrenComps/HomeSwiper";
import RecommendView from "./childrenComps/RecommendView";
import FeatureView from "./childrenComps/FeatureView";

//导入 发送网络请求的 方法
import { getHomeMultidata, getHomeGoods } from "network/home";

//导入utils.js中设置的防抖函数
import { debounce } from "common/utils";

//导入mixin
import { imgLoadMixin, backTopMixin } from "common/mixin";

export default {
  name: "home",
  mixins: [imgLoadMixin, backTopMixin],
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [], scrollY: 0 },
        new: { page: 0, list: [], scrollY: 0 },
        sell: { page: 0, list: [], scrollY: 0 }
      },
      currentType: "pop",
      tabCtrlOffsetTop: 0, //保存的是第二个tabControl的offsetTop
      isTabFixed: false,
      saveY: 0
    };
  },
  //页面被创建的时候发送请求
  created() {
    //请求多个数据
    this.getHomeMultidata();
    //请求goods数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll
  },
  methods: {
    //事件监听相关方法
    tabClick(index) {
      //每次切换的时候，
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;

      //
      if (this.isTabFixed) {
        //在底下点击的时候，如果当前活跃的选项卡滚动距离不是0，就滚到该值，是0就从初始位置开始
        if (this.goods[this.currentType].scrollY) {
          this.$refs.scroll.scrollTo(
            0,
            -this.goods[this.currentType].scrollY,
            0
          );
        } else {
          this.$refs.scroll.scrollTo(0, -this.tabCtrlOffsetTop, 0);
        }
      } //在上面点击的时候，不用操作
    },
    contentScroll(position) {
      //1.返回顶部按钮超过1000显示 小于1000隐藏
      this.isShowBackTop = -position.y > 1000;
      //2.滚动距离超过tabControl2的offsetTop则position：fixed
      this.isTabFixed = -position.y >= this.tabCtrlOffsetTop;
      //3.保存活跃的tab选项卡的y轴滚动距离
      //滚下来的时候。记录当前活跃的选项卡的滚动位置，初始为0
      if (this.isTabFixed) {
        this.goods[this.currentType].scrollY = -position.y;
      }
    },
    loadMore() {
      this.getHomeGoods(this.currentType);
      this.$refs.scroll.refresh();
    },
    //在common.files中utils.js中设置防抖函数

    //网络请求相关方法
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        //数组解构
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;

        //请求并渲染完数据以后调用 finishPullUp()以便能够再次使用上拉加载更多
        this.$refs.scroll.finishPullUp();
      });
    },

    //监听图片加载完成
    swiperImgLoad() {
      //2.获取tabControl2的offsetTop
      this.tabCtrlOffsetTop = this.$refs.tabControl2.$el.offsetTop;
    }
  },
  computed: {
    showPopGoods() {
      return this.goods.pop.list;
    },
    showNewGoods() {
      return this.goods.new.list;
    },
    showSellGoods() {
      return this.goods.sell.list;
    }
  },
  //dom渲染完成的时候，template中 组件名标签 被 组件template替换的时候
  mounted() {},
  activated() {
    this.$refs.scroll.refresh();
    this.$refs.scroll.scrollTo(0, this.saveY, 0);
  },
  deactivated() {
    //1.切换到其他页面的时候，保存当前屏幕滚动的距离y值
    this.saveY = this.$refs.scroll.getScrollY();
    //2.切换到其他页面时，取消首页的监听事件
    this.$bus.$off("goodsItemImgLoad", this.homeImgListener); //第一个参数是要取消的自定义事件，第二个是在哪个函数中取消
  }
};
</script>

<style scoped>
#home {
  height: 100vh;
  position: relative;
}

.home-nav {
  background-color: var(--color-tint);
  color: #ffffff;
}

.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
.tab-control {
  position: relative;
  z-index: 9;
}
</style>
