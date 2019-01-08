<template>
<div class="page-detail">
  <co-header title="详情">
    <fallback slot="left"></fallback>
  </co-header>
  <div class="co-wrapper">
    <co-cell :title="'风险点：  '+yDange.dangeContent"></co-cell>
    <co-cell :title="'责任人：'+yDange.taskPerson"></co-cell>
    <co-cell :title="'开始时间：'+yDange.startDate"></co-cell>
    <co-cell :title="'截止时间：'+yDange.endDate"></co-cell>
    <co-cell v-if="yDange.status" :title="'已解决'"></co-cell>
    <co-cell v-else :title="'未解决'"></co-cell>
  </div>
</div>
</template>

<script>
const NAMESPACE = 'detail';
export default {
  name: NAMESPACE,
  activated() {
    // 获取详情数据
    this.getDetail(
      {
        id: this.$route.params.dangeId
      },
      data => {
        console.log('success', data);
        this.content = data.detail.content;
      }
    );
  },
  data() {
    return {
      yDange: {},
      yList: this.$store.state.list
    };
  },
  methods: {
    getDetail(data, fallback) {
      let dange = this.exist(data.id, this.yList);
      console.log('dange =>', dange, this.yList);
      if (dange) {
        console.log(dange);
        this.yDange = dange;
      } else {
        console.log('--' + dange + '---');
      }
      // console.log('getDetail data => ', data);
      // console.log('fallback', fallback);
      // corNative.request({
      //   url: '/api/v1/work/getDetail',
      //   method: 'post',
      //   data: data
      // }, response => {
      //   console.log('response =>', response);
      //   fallback(response);
      // });
    },
    exist(id, list) {
      console.log('dangeId=>', id);
      console.log('list =>', list);
      for (let i of list) {
        console.log('i=>', i);
        if (i.dangeId === id) {
          return i;
        }
      }
      return '';
    }
  }
};
</script>

<style lang="less">
.page-detail {
  .co-wrapper {
    padding: 6px;
  }
}
</style>
