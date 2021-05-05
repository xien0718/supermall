<template>
  <div v-if="Object.keys(goodsParam).length !== 0" class="goods-param">
    <table v-for="(table,index) in goodsParam.tables" class="info-size" :key="index">
      <tr v-for="(tr,indey) in table" :key="indey">
        <td v-for="(td ,indez) in tr" :key="indez">{{td}}</td>
      </tr>
    </table>
    <table class="info-param">
      <tr v-for="(tr,indea) in goodsParam.set" :key="indea">
        <td class="key">{{tr.key}}</td>
        <td class="value">{{tr.value}}</td>
      </tr>
    </table>
    <div v-if="goodsParam.image.length !== 0" class="info-img">
      <img :src="goodsParam.image" alt />
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailGoodsParam",
  data() {
    return {};
  },
  props: {
    goodsParam: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  components: {},
  methods: {},
  // computed: {
  //   trr: function() {
  //     return this.tr2.reverse();
  //   }
  // },
  mounted() {}
};
</script>

<style scoped>
.goods-param {
  padding: 15px;
  border-bottom: 5px solid #f2f5f8;
}
.goods-param table {
  font-size: 14px;

  width: 100%;
  border-collapse: collapse;
}
.goods-param table tr td {
  border-bottom: 1px solid #f3f3f3;
  padding: 9px 0;
}
.info-size tr td {
  width: 55px;
  display: inline-block;
}
.info-size {
  border-bottom: 3px solid #f3f3f3;
}
.info-param .key {
  width: 30%;
}
.info-param .value {
  color: #eb4868;
}
</style>