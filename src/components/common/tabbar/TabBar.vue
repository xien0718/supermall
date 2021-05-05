<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar",
  data() {
    return {};
  },
  components: {},
  methods: {},
  mounted() {}
};
</script>

<style scoped>
#tab-bar {
  display: flex;
  background-color: #f2f2f2;
  position: fixed;
  z-index: 11;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 0px 13px 5px rgba(0, 0, 0, 0.2);
}
</style>