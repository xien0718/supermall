import {
  debounce
} from 'common/utils.js'
import BackTop from 'components/content/backTop/BackTop'
//监听图片加载完毕和防抖

export const imgLoadMixin = {
  data() {
    return {
      imgListener: null
    }
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 50);
    this.imgListener = () => {
      refresh();
    };
    this.$bus.$on("goodsItemImgLoad", this.imgListener);

  }
}
export const backTopMixin = {
  data() {
    return {
      isShowBackTop: false
    }
  },
  components: {
    BackTop
  },
  methods: {
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 1000);
    }
  }
}
