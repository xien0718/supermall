<template>
  <div class="goods">
    <goods-list-item v-for="(item,index) in goods" :goods-item="item" :key="index"></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem";

export default {
  name: "GoodsList",
  data() {
    return {};
  },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    GoodsListItem
  },
  methods: {},
  mounted() {}
};
</script>

<style scoped>
.goods {
  padding: 0 2%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>