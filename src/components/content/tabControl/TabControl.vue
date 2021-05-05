<template>
  <div class="tab-control">
    <div
      v-for="(item,index) in titles "
      class="tab-control-item"
      :class="{active:index===currentIndex}"
      @click="tabClick(index)"
    >
      <!--  -->
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  data() {
    return {
      currentIndex: 0
    };
  },
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {},
  methods: {
    tabClick(index) {
      this.$store.commit("changeTabIndex", index); //点击的index保存下来
      this.currentIndex = index;
      this.$emit("tabClick", index);
    }
  },
  mounted() {}
};
</script>

<style scoped>
.tab-control {
  background-color: #fff;
  display: flex;
  text-align: center;
}
.tab-control-item {
  flex: 1;
  line-height: 40px;
  height: 40px;
  font-size: 14px;
}
.tab-control-item span {
  padding: 3px;
}
.active {
  color: var(--color-high-text);
}
.active span {
  border-bottom: 3px solid var(--color-tint);
}
</style>