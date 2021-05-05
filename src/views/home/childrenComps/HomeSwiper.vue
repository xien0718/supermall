<template>
  <swiper>
    <swiper-item v-for="item in banners" :key="item.id">
      <a :href="item.link">
        <!-- @load监听图片加载 -->
        <img :src="item.image" @load="swiperImgLoad" />
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";

export default {
  name: "HomeSwiper",
  props: {
    banners: {
      type: Array,
      default() {
        return {};
      }
    }
  },
  data() {
    return { isLoad: true };
  },
  components: { Swiper, SwiperItem },
  methods: {
    swiperImgLoad() {
      //最初设置isload为true，若为true，发射事件同时改为false，再有图片加载时isload为false，不继续执行，达到类似防抖效果
      if (this.isLoad) {
        this.$emit("swiperImgLoad");
        this.isLoad = false;
      }
    }
  },
  mounted() {}
};
</script>

<style scoped>
</style>