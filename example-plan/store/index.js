/**
 * @author umin 326663876@qq.com
 * @since 2018/08/01
 * @copyright Copyright (c) 2018, YZKJ
 * @description store
 */
import api from './api';
import app from 'public/store';

export default {
  modules: {
    app,

    /**
     * index 页面共享状态
     */
    index: {
      namespaced: true,
      state: {},
      mutations: {},
      actions: {
        /**
         * 获取同事圈列表数据
         * @param {Object} data [必填] 请求参数，具体查看api参数说明
         * @param {Object} success [必填] 成功回调
         */
        getList({commit}, {data, success}) {
          console.log('index.js ===> getList');
          api.getList(data, response => {
            success(response.list);
          });
        }
      }
    },

    /**
     * detail 页面共享状态
     */
    detail: {
      namespaced: true,
      state: {},
      actions: {
        /**
         * 获取同事圈详情数据
         * @param {Object} data [必填] 请求参数，具体查看api参数说明
         * @param {Object} success [必填] 成功回调
         */
        getDetail({state}, {data, success}) {
          api.getDetail(data, response => {
            success(response.detail);
          });
        }
      }
    }
  }
};
