<template>
  <div class="check-button" :class="{checked:isChecked}">
    <img src="~assets/img/cart/tick.svg" alt />
  </div>
</template>

<script>
export default {
  name: "CheckButton",
  data() {
    return {};
  },
  props: {
    isChecked: {
      type: Boolean,
      default: false
    }
  },
  components: {},
  methods: {},
  mounted() {}
};
</script>

<style scoped>
.check-button {
  border-radius: 50%;
  border: 2px solid #e2e1e3;
  width: 16px;
  height: 16px;
  font-size: 0;
}
.check-button img {
  width: 12px;
}
.checked {
  background-color: var(--color-tint);
  border: 2px solid transparent;
}
</style>