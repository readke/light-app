import { Popup } from 'coui';
import list.vue from '/list/list.vue'
Vue.component(Popup.name, Popup);
<template>
  <div class='page-index'>
    <co-header title='计划列表'>
      <fallback slot='left'></fallback>
    </co-header>
    <div class='co-wrapper co-scroller'>
      <cus-loading :load-method='loadAction'></cus-loading>
    </div>
    <co-cell
      v-for='ls in list'
      :title='ls.excute_plan_info'
      :label='ls.date'
      @click.native='toDetail(ls.id,ls.excute_plan_info)'
    >
      <span style='color: green'>{{ls.realname}}</span>
    </co-cell>
  </div>
</template>

<script type='es6'>
// import {mapActions} from 'vuex';

// const NAMESPACE = 'index';
/*
corJS.ready(function() {

  corNative.requestAjax({
    url: 'http://172.18.8.18/mpm/api/v3/crm/getAjaxMyExcutePlan',
    data: {
      limit: '10',
      offset: '0'
    },
    method: 'get'
  }, function(data) {
    console.log(data);
  });
});
*/
export default {
  // name: 'index',
  data() {
    return {
      list: []
    };
  },
  methods: {
    // ...mapActions(NAMESPACE, ['getList']),
    /**
     * 动态数据加载
     * @param {int} data.p 翻页参数，页码
     * @param {int} data.s 翻页参数，每页条数
     * @param {Function} resolve 根据用户上下拉操作自动解析并返回结果
     */

    loadAction() {
      corNative.requestAjax(
        {
          url: 'http://172.18.8.18/mpm/api/v3/crm/getAjaxExcutePlan',
          data: {
            limit: '10',
            offset: '0'
          },
          method: 'get'
        },
        data => {
          this.list = data.rows;
          console.log(this.list);
        }
      );
    },
    test() {
      console.log('init');
    },
    /**
     * 页面跳转
     * @param {int} data.id 详情id
     */
    toDetail(id, info) {
      console.log(info);
      this.$router.push({
        name: 'detail',
        params: { id, info }
      });
    }
  }
};
</script>

<style lang='less' rel='stylesheet/less'>
a {
  padding: 10px;
}
</style>
