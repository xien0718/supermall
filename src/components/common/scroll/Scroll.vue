<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Scroll",
  data() {
    return {
      scroll: null
    };
  },
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  components: {},
  methods: {
    scrollTo(x, y, time = 500) {
      this.scroll && this.scroll.scrollTo(x, y, time); //先判断scroll组件是否替换template中 组件名标签 成功，为true再执行返回顶部
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp();
    },

    //将请求的图片加载完成后刷新scrollerHeight
    refresh() {
      this.scroll.refresh();
    },
    //封装函数 获得滚动的xy
    getScrollY() {
      return this.scroll ? this.scroll.y : 0; //this.scroll有值吗，有的话返回y坐标，没有返回0
    }
  },
  mounted() {
    //1.创建bscroll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    });

    //2.监听滚动位置
    this.scroll.on("scroll", position => {
      this.$emit("scroll", position); //把 滚动事件的触发 和 页面内容滚动的距离 发射出去
    });

    //3.监听上拉加载更多事件
    if (this.pullUpLoad) {
      this.scroll.on("pullingUp", () => {
        this.$emit("pullingUp");
      });
    }
  }
};
</script>

<style scoped>
</style>