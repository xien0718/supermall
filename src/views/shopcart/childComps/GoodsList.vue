<template>
  <div class="goods-list">
    <goods-list-item v-for="(item,index) in list" :key="index" :cart-goods="item"></goods-list-item>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";
import GoodsListItem from "./GoodsListItem";
import { mapGetters } from "vuex";
export default {
  name: "goodsList",
  data() {
    return {};
  },
  components: { Scroll, GoodsListItem },
  computed: {
    ...mapGetters({ list: "cartList" })
  },
  methods: {},

  mounted() {}
};
</script>

<style scoped>
.goods-list {
  width: 100%;
}
</style>