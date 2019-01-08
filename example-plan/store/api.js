/**
 * @author umin 326663876@qq.com
 * @since 2018/08/01
 * @copyright Copyright (c) 2018, YZKJ
 * @description store
 */
export default {
  /**
  * 获取同事圈列表数据
  * @param {int} data.p [必填] 翻页参数，页码
  * @param {int} data.s [必填] 翻页参数，每页条数
  * @param {int} data.orgId [选填] 组织id
  * @param {Function} success [必填] 成功回调
  */
  getList: (data, success) => {
    console.log('data =>', data);
    corNative.request({
      url: '/api/v1/work/getWorkList',
      method: 'post',
      data: Object.assign({
        orgId: ''
      }, data)
    }, response => {
      success(response);
    });
  },
  /**
  * 获取同事圈详情数据
  * @param {int} data.id [必填] 详情id
  * @param {Function} success [必填] 成功回调
  */
  getDetail: (data, success) => {
    console.log('getDetail data => ', data);
    corNative.request({
      url: '/api/v1/work/getDetail',
      method: 'post',
      data: data
    }, response => {
      console.log('response =>', response);
      success(response);
    });
  }
};
