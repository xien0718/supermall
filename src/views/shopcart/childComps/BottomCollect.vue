<template>
  <div class="bottom-collect">
    <div class="left">
      <check-button
        :is-checked="isSelectAll"
        :class="{checkButton:!isSelectAll}"
        @click.native="checkAllClick"
      ></check-button>
      <span class="check-all">全选</span>
      <span class="total">合计:</span>
      <span>{{total}}</span>
    </div>
    <button class="right" @click="calcClick">去结算({{length}})</button>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton";
import { mapGetters } from "vuex";
export default {
  name: "bottomcollect",
  data() {
    return {};
  },
  components: {
    CheckButton
  },
  methods: {
    checkAllClick() {
      if (this.isSelectAll) {
        this.list.forEach(item => (item.checked = false));
      } else {
        this.list.forEach(item => (item.checked = true));
      }
    },
    calcClick() {
      if (!this.isSelectAll) {
        //全选取反  是 全不选
        this.$toast.show("请选择购买的商品", 1500);
      }
    }
  },
  mounted() {},
  computed: {
    ...mapGetters({
      length: "checkedLength",
      total: "totalPrice",
      list: "cartList"
    }),
    // totalPrice() {
    //   return (
    //     "¥" +
    //     this.$store.state.cartList
    //       .filter(item => item.checked)
    //       .reduce((preValue, item) => {
    //         return preValue + item.price * item.count;
    //       }, 0)
    //       .toFixed(2)
    //   );
    // }
    isSelectAll() {
      if (this.list.length === 0) {
        return false;
      } else {
        return !this.list.filter(item => !item.checked).length;
      }
      //没有被选中的为0，即全选了，length为0返回false，取反为true
      //需求：全选的时候,即没有被选中的长度为0，isSelectAll为true
    }
  },
  filters: {}
};
</script>

<style scoped>
.bottom-collect {
  background-color: #edecee;
  height: 40px;
  display: flex;
  justify-content: space-between;
  padding-left: 8px;
}
.left {
  display: flex;
  align-items: center;
}
.check-all {
  font-size: 14px;
  color: #9b9a9b;
  margin-left: 7px;
}
.total {
  font-size: 14px;
  margin-left: 14px;
}
.right {
  background-color: #ff5101;
  border: 0;
  color: #ffffff;
  font-size: 14px;
  padding: 0 15px;
}
.checkButton {
  background-color: #fff;
  border-color: #ffffff;
}
</style>