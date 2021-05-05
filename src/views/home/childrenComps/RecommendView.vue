<template>
  <div class="recommend">
    <div v-for="item in recommends" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt />
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  data() {
    return {};
  },
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {},
  methods: {},
  mounted() {}
};
</script>

<style scoped>
.recommend {
  padding: 15px 0;
  display: flex;
  border-bottom: 10px solid #eee;
}
.recommend-item {
  flex: 1;
  text-align: center;
}
.recommend-item img {
  width: 80%;
  margin-bottom: 8px;
}
</style>