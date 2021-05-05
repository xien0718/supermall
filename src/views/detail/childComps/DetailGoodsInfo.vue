<template>
  <div v-if="Object.keys(goodsDetailInfo).length !== 0" class="goods-info">
    <div class="goods-title">
      <div class="goods-title-top"></div>
      <div class="goods-title-text">{{goods.title}}</div>
      <div class="goods-title-bottom"></div>
    </div>
    <div class="dress-show">{{goodsDetailInfo.detailImage[0].key}}</div>
    <div class="dress-show-details">
      <img
        v-for="(item,index) in goodsDetailInfo.detailImage[0].list"
        :src="item"
        @load="imgLoad"
        alt
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailGoodsInfo",
  data() {
    return {
      counter: 0,
      imgLength: 0
    };
  },
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      }
    },
    goodsDetailInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  components: {},
  methods: {
    imgLoad() {
      this.counter += 1;
      if (this.counter === this.imgLength) {
        //每张图片加载完毕都会调用imgLoad函数，当前调用次数为counter，当所有图片加载完毕后，counter就等于goodsDetailInfo。detailImage[0].list.length即所有图片长度
        this.$emit("imgLoad"); //所有图片加载完毕后统一发送自定义事件imgLoad给scroll
      }
    }
  },
  watch: {
    //若props中goodsDetailInfo发生变化(父将该变量传给子)的时候，则执行大括号函数,把变量长度赋值给imgLength变量保存起来
    goodsDetailInfo() {
      this.imgLength = this.goodsDetailInfo.detailImage[0].list.length;
    }
  },
  mounted() {}
};
</script>

<style scoped>
.goods-title {
  padding: 25px 20px 0;
  font-size: 14px;
}
.goods-info .goods-title-top {
  position: relative;
  float: left;
  width: 90px;
  height: 1px;
  background-color: #a3a3a5;
}
.goods-info .goods-title-top::before {
  content: "";
  position: absolute;
  top: -4px;
  width: 5px;
  height: 5px;
  background-color: #1e1e1e;
}

.goods-info .goods-title-bottom {
  position: relative;
  width: 90px;
  height: 1px;
  background-color: #a3a3a5;
  float: right;
}
.goods-info .goods-title-bottom::after {
  content: "";
  position: absolute;
  top: -4px;
  right: 0;
  width: 5px;
  height: 5px;
  background-color: #1e1e1e;
}
.goods-info .goods-title-text {
  padding: 20px 0;
}
.dress-show {
  padding: 10px 20px;
  font-size: 15px;
}
.dress-show-details img {
  width: 100%;
}
</style>