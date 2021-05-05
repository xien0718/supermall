<template>
  <div v-if="Object.keys(comment).length !==0" class="comment">
    <div class="header">
      <div class="title">用户评价</div>
      <div class="more">
        更多
        <span class="arrow-right"></span>
      </div>
    </div>
    <div class="user">
      <img :src="comment.user.avatar" alt />
      <div class="name">{{comment.user.uname}}</div>
    </div>

    <div class="content">{{comment.content}}</div>
    <div class="param">
      <span class="date">{{comment.created|showDate}}</span>
      <span>{{comment.style}}</span>
    </div>
    <div class="illustration">
      <img v-for="(item,index) in comment.images" :src="item" alt :key="index" />
    </div>
    <div class="store-reply">{{comment.explain}}</div>
  </div>
</template>

<script>
import { formatDate } from "common/utils";
export default {
  name: "DetailComment",
  data() {
    return {};
  },
  props: {
    comment: {
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
    showDate: function(value) {
      let date = new Date(value * 1000);
      return formatDate(date, "yyyy/MM/dd hh:mm:ss");
    }
  }
};
</script>

<style scoped>
.comment {
  padding: 0 15px;
  border-bottom: 5px solid #f2f5f8;
}
.comment .header {
  padding: 15px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 3px solid #f5f3f5;
}
.comment .header .title {
  font-size: 15px;
}
.comment .header .more {
  font-size: 13px;
}
.comment .header .more span {
  display: inline-block;
  width: 9px;
  height: 9px;
  border-right: 1px solid #9a9a9a;
  border-bottom: 1px solid #9a9a9a;
  transform: rotate(-45deg);
}
.comment .user {
  display: flex;
  align-items: center;
  padding: 15px 0 10px;
}
.comment .user img {
  border-radius: 50%;
  width: 40px;
}
.comment .user .name {
  margin-left: 10px;
}
.comment .content {
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 8px;
}
.comment .param {
  font-size: 12px;
  color: #989898;
  margin-bottom: 25px;
}
.comment .param .date {
  margin-right: 10px;
}
.comment .store-reply {
  font-size: 10px;
  line-height: 1.5;
  margin-bottom: 25px;
}
.comment .illustration img {
  width: 70px;
  margin-right: 5px;
}
</style>