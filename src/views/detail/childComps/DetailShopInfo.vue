<template>
  <div class="shop-info">
    <div class="shop-top">
      <img :src="shop.logo" alt />
      <span class="title">{{shop.name}}</span>
    </div>
    <div class="shop-middle">
      <div class="shop-middle-item shop-middle-left">
        <div class="info-sells">
          <div class="sells-count">{{shop.sells|sellCountFilter}}</div>
          <div class="sells-text">总销量</div>
        </div>
        <div class="info-goods">
          <div class="goods-count">{{shop.goodsCount}}</div>
          <div class="goods-text">全部宝贝</div>
        </div>
      </div>
      <div class="shop-middle-item shop-middle-right">
        <table>
          <tr v-for="(item,index) in shop.score" :key="index">
            <td>{{item.name}}</td>
            <td class="score" :class="{betterScore:item.isBetter}">{{item.score}}</td>
            <td class="rank" :class="{betterRank:item.isBetter}">
              <span>{{item.isBetter?'高':'低'}}</span>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">进店逛逛</div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  data() {
    return {};
  },
  props: {
    shop: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  components: {},
  methods: {},
  mounted() {},
  filters: {
    sellCountFilter(value) {
      return value < 10000 ? value : (value / 10000).toFixed(1) + "万";
    }
  }
};
</script>

<style scoped>
.shop-info {
  padding: 25px 10px;
  border-bottom: 6px solid #f2f5f8;
}
.shop-top {
  display: flex;
  line-height: 45px;
}
.shop-top img {
  width: 45px;
  height: 45px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  margin-right: 10px;
}
.shop-bottom {
  margin: 25px auto 0;
  border-radius: 10px;
  background-color: #f2f5f8;
  line-height: 30px;
  text-align: center;
  width: 150px;
  height: 30px;
}
.shop-middle {
  display: flex;
  align-items: center;
  margin-top: 30px;
}
.sells-count,
.goods-count {
  color: #404040;
  margin-bottom: 10px;
  font-size: 18px;
}
.sells-text,
.goods-text {
  font-size: 12px;
}
.shop-middle-item {
  flex: 1;
}
.shop-middle-left {
  border-right: 1px solid #e5e5e5;
  display: flex;
  justify-content: space-evenly;
}
.info-goods,
.info-sells {
  text-align: center;
}
.shop-middle-right {
  font-size: 13px;
}
.shop-middle-right table {
  margin-left: 22px;
  width: 120px;
}
.shop-middle-right table td {
  padding: 5px 0;
}
.shop-middle-right .score {
  margin-left: 10px;
}
.shop-middle-right .rank span {
  color: #ffffff;
}
.shop-middle-right .score {
  color: #5ea732;
}
.shop-middle-right .rank span {
  background-color: #5ea732;
}
.shop-middle-right .betterScore {
  color: #f13e3a;
}
.shop-middle-right .betterRank span {
  background-color: #f13e3a;
}
</style>