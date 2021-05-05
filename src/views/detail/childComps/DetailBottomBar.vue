<template>
  <div class="bottom-bar">
    <div class="common left">
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon store"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon collect"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="common right">
      <div class="add" @click="addCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBottomBar",
  data() {
    return {};
  },
  components: {},
  methods: {
    addCart() {
      this.$emit("addCart");
    }
  },
  mounted() {}
};
</script>

<style scoped>
.bottom-bar {
  height: 52px;
  background-color: #ffffff;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
}
.bottom-bar .common {
  flex: 1;
  display: flex;
}
.bottom-bar .common div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
}
.bottom-bar .left .icon {
  /* border: 0.1px solid black; */
  width: 22px;
  height: 22px;
}
.bottom-bar .left .service {
  background: url("~assets/img/detail/detail_bottom.png") 0 -53px;
  background-size: 100%;
}
.bottom-bar .left .store {
  background: url("~assets/img/detail/detail_bottom.png") 0 -99px;
  background-size: 100%;
}
.bottom-bar .left .collect {
  background: url("~assets/img/detail/detail_bottom.png") 0 0;
  background-size: 100%;
}
.bottom-bar .left .text {
  font-size: 13px;
}
.bottom-bar .right {
  font-size: 14px;
}
.bottom-bar .right .add {
  background-color: #ffe817;
}
.bottom-bar .right .buy {
  background-color: #f69;
  color: #ffffff;
}
</style>