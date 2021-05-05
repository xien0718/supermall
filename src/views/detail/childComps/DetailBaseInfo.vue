<template>
  <div v-if="Object.keys(goods).length !==0" class="base-info">
    <div class="info-title">{{goods.title}}</div>
    <div class="info-price">
      <span class="n-price">{{goods.newPrice}}</span>
      <span class="o-price">{{goods.oldPrice}}</span>
      <span class="discount" v-if="goods.discount">{{goods.discount}}</span>
    </div>
    <div class="info-other">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="info-service">
      <span class="info-service-item" v-for="index in goods.services.length-1" :key="index">
        <img :src="goods.services[index-1].icon" alt />
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  data() {
    return {};
  },
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  components: {},
  methods: {},
  mounted() {}
};
</script>

<style scoped>
.base-info {
  padding: 14px 7px 0;
  line-height: 1.2;
  border-bottom: 6px solid #f2f5f8;
}
.info-title {
  font-size: 16px;
  color: #222;
  margin-bottom: 10px;
}
.info-price .n-price {
  font-size: 24px;
  color: var(--color-high-text);
}
.info-price .o-price {
  margin-left: 5px;
  color: #a7a7a7;
  font-size: 12px;
  text-decoration: line-through;
}
.info-price .discount {
  position: relative;
  top: -4px;
  left: 4px;
  color: #ffffff;
  font-size: 12px;
  background-color: var(--color-high-text);
  border-radius: 100px;
  padding: 2px 5px;
}
.info-other {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  color: #a7a7a7;
  border-bottom: 1px solid rgba(153, 153, 153, 0.2);
  padding-bottom: 5px;
}
.info-service {
  font-size: 13px;
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
}
/* .info-service-item {
} */
.info-service-item img {
  width: 13px;
}
</style>