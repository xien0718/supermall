<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" @titleClick="titleClick" ref="nav"></detail-nav-bar>
    <scroll class="content" ref="scroll" @scroll="contentScroll" :probe-type="3">
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :goodsDetailInfo="goodsDetailInfo" :goods="goods" @imgLoad="imgLoad"></detail-goods-info>
      <detail-goods-param :goodsParam="goodsParam" ref="params"></detail-goods-param>
      <detail-comment :comment="comment" ref="comment"></detail-comment>
      <goods-list :goods="recommends" ref="recommends"></goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>

    <detail-bottom-bar @addCart="addCart"></detail-bottom-bar>
    <toast></toast>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";
import DetailNavBar from "./childComps/DetailNavBar";

import {
  getDetail,
  Goods,
  Shop,
  GoodsParam,
  getRecommend
} from "network/detail"; //导入所需的已经分类好的数据

import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailGoodsParam from "./childComps/DetailGoodsParam";
import DetailComment from "./childComps/DetailComment";
import DetailBottomBar from "./childComps/DetailBottomBar";

import BackTop from "components/content/backTop/BackTop";
import GoodsList from "components/content/goods/GoodsList";
import Toast from "components/common/toast/Toast";

import { debounce } from "common/utils";
import { imgLoadMixin, backTopMixin } from "common/mixin";
import { mapActions } from "vuex";
export default {
  name: "Detail",
  mixins: [imgLoadMixin, backTopMixin],
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      goodsDetailInfo: {},
      goodsParam: {},
      comment: {},
      recommends: [],
      themeTopYs: [],
      getScrollPosition: null,
      currentIndex: 0
    };
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailGoodsParam,
    DetailComment,
    DetailBottomBar,
    GoodsList,
    Scroll,
    Toast
  },
  created() {
    //1.保存从url传入的iid
    this.iid = this.$route.params.iid;
    //2.用封装好的函数请求商品详情数据
    getDetail(this.iid).then(res => {
      console.log(res);

      //1.获取轮播数据
      const data = res.result;
      this.topImages = data.itemInfo.topImages;
      //2.获取商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      //3.获取店铺信息
      this.shop = new Shop(data.shopInfo);

      //4.获取商品详情数据
      this.goodsDetailInfo = data.detailInfo;

      //5.获取商品参数和尺码数据
      this.goodsParam = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );

      //6.请求评论数据
      if (data.rate.list) {
        this.comment = data.rate.list[0];
      }
    });

    //3.请求商品详情页的推荐数据
    getRecommend().then(res => {
      this.recommends = res.data.list;
    });
    //4.请求完图片数据后 再计算点击navbar滚动到的位置
    this.getScrollPosition = debounce(() => {
      this.themeTopYs = [];
      this.themeTopYs.push(0);
      this.themeTopYs.push(this.$refs.params.$el.offsetTop);
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
      this.themeTopYs.push(this.$refs.recommends.$el.offsetTop);
      this.themeTopYs.push(Number.MAX_VALUE);
      console.log(this.themeTopYs);
    }, 100);
  },
  methods: {
    imgLoad() {
      this.$refs.scroll.refresh();
      this.getScrollPosition();
    },
    titleClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 0);
      console.log(this.themeTopYs);
    },
    contentScroll(position) {
      const positionY = -position.y;
      //当currentIndex不等于当前scrollposition（对应themeTopYs数组中某一个元素）的时候，将currentIndex和该数组序号对应的高度
      for (let i = 0; i < this.themeTopYs.length - 1; i++) {
        if (
          this.currentIndex !== i &&
          positionY >= this.themeTopYs[i] &&
          positionY < this.themeTopYs[i + 1]
        ) {
          this.currentIndex = i;
          this.$refs.nav.currentIndex = this.currentIndex;
        }
      }
      this.isShowBackTop = positionY > 1000;
    },
    ...mapActions({ add: "addCartx" }),
    addCart() {
      //1.取出已经请求并保存在data中的数据，放到cartItem中
      const cartItem = {};
      cartItem.image = this.topImages[0];
      cartItem.title = this.goods.title;
      cartItem.desc = this.goods.desc;
      cartItem.price = this.goods.realPrice; //lowNowPrice
      cartItem.iid = this.iid;

      //2.添加到购物车界面 //3.点then：点击提示添加购物车成功或数量+1
      // this.$store.dispatch("addCart", cartItem).then(res => {
      //   console.log(res);
      // });
      //23的mapActions写法
      this.add(cartItem).then(res => {
        this.$toast.show(res, 1500);
      });
    }
  },
  mounted() {},
  destroyed() {
    this.$bus.$off("goodsItemImgLoad", this.detailImgListener);
  }
};
</script>

<style scoped>
#detail {
  position: relative;
  height: 100vh;
  z-index: 12;
  background-color: #fff;
}
.detail-nav {
  background-color: #fff;
  z-index: 10;
}
.content {
  position: absolute;
  top: 44px;
  bottom: 52px;
  left: 0;
  right: 0;
}
</style>