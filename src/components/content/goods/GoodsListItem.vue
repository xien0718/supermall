<template>
  <div class="goods-item">
    <img :src="showImg" alt @load="imgLoad" @click="itemClick" />
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  data() {
    return {};
  },
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  computed: {
    showImg() {
      return this.goodsItem.image || this.goodsItem.show.img;
    }
  },
  components: {},
  methods: {
    imgLoad() {
      this.$bus.$emit("goodsItemImgLoad");
    },
    //监听图片点击
    itemClick() {
      this.$router.push("/detail/" + this.goodsItem.iid);
    }
  },
  mounted() {}
};
</script>

<style scoped>
.goods-item {
  width: 49%;
}
.goods-item img {
  width: 100%;
  border-radius: 5px;
}
.goods-info {
  line-height: 1.5;
  text-align: center;
}
.goods-info p {
  padding-left: 3%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.goods-info .price {
  color: var(--color-high-text);
}
.goods-info .collect {
  position: relative;
  padding-left: 15%;
}
.goods-info .collect::before {
  content: "";
  position: absolute;
  left: 8px;
  top: 1px;
  width: 14px;
  height: 14px;
  background: url(~assets/img/common/collect.svg) 0 0/14px 14px;
}
</style>