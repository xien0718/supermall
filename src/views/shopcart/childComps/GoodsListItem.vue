<template>
  <div class="goods-list-item">
    <div class="check-button">
      <check-button :is-checked="cartGoods.checked" @click.native="checkClick"></check-button>
    </div>
    <div class="goods-img">
      <img :src="cartGoods.image" alt />
    </div>
    <div class="goods-info">
      <div class="title">{{cartGoods.title}}</div>
      <div class="desc">{{cartGoods.desc}}</div>
      <div class="info">
        <div class="price">¥{{cartGoods.price}}</div>
        <div class="count">x{{cartGoods.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton";
export default {
  name: "GoodsListItem",
  data() {
    return {};
  },
  props: {
    cartGoods: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  components: {
    CheckButton
  },
  methods: {
    checkClick() {
      this.cartGoods.checked = !this.cartGoods.checked;
    }
  },
  mounted() {}
};
</script>

<style scoped>
.goods-list-item {
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom: 2px solid #e2e1e3;
  padding: 7px 0;
}
.check-button {
  margin: 0 3px;
}

.goods-img {
  height: 100%;
  width: 60px;
  margin-right: 10px;
}
.goods-img img {
  height: 100%;
  width: 56px;
  border-radius: 6px;
}
.goods-info {
  display: flex;
  flex-direction: column;
  width: 202px;
}
.goods-info .title {
  color: black;
  font-size: 15px;
  margin: 2px 0 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.goods-info .desc {
  font-size: 12px;
  margin-bottom: 28px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.goods-info .info {
  display: flex;
  justify-content: space-between;
}
.goods-info .price {
  color: #ff5300;
}
.goods-info .count {
  color: black;
}
</style>