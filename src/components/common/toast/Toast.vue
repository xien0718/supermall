<template>
  <div class="toast" v-show="isShow">{{msg}}</div>
</template>

<script>
export default {
  name: "Toast",
  data() {
    return {};
  },
  data() {
    return {
      msg: "",
      isShow: false
    };
  },
  components: {},
  methods: {
    show(msg, duration = 2000) {
      //参数默认值写法1
      //参数默认值写法2 duration = duration || 2000;

      this.isShow = true;
      this.msg = msg;
      setTimeout(() => {
        this.isShow = false;
        this.msg = "";
      }, duration);
    }
  },
  mounted() {}
};
</script>

<style scoped>
.toast {
  position: fixed;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 5px;
  top: 50%;
  left: 50%;
  font-size: 16px;
  padding: 10px 15px;
  color: #ffffff;
  text-align: center;
  transform: translate(-50%, -50%);
  white-space: nowrap;
  z-index: 999;
}
</style>