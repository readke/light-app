<template>
<div class="page-tabbar">
  <co-header fixed title="问题风险点">
    <fallback slot="left"></fallback>
    <a slot="right" @click="add()">新增</a>
  </co-header>

  <div class="co-wrapper">
    <!-- <div class="page-content-main">
        <co-cell class="page-part" title="当前选中" :value="selected"></co-cell>
      </div> -->

    <co-tab-container class="page-tabbar-container" v-model="selected">
      <co-tab-container-item id="已解决">
        <div class="co-wrapper">
          <cus-loading :load-method="loadAction" :list="yList">
            <div class="co-view-cell co-line-down" v-for="(item, i) in yList"  @click="toDetail(item.dangeId)">
              <div class="co-view-cell-content co-col-xs-10">
                <p class="title co-ellipsis" v-text="'风险点：'+item.dangeContent"></p>
                <p v-text="'责任人：'+ item.taskPerson"></p>
                <p v-text="'最后期限：'+ item.endDate"></p>
              </div>
              <!-- <div class="co-view-cell-status co-col-xs-2">
                <span v-text="item.endDate"></span>
              </div> -->
              <!-- <i class="co-cell-allow-right"></i> -->
            </div>
          </cus-loading>
        </div>
        <!-- <co-cell v-for="(dange, index) in yList" :title="'已解决 ' + dange.dangeContent" :key='index'></co-cell> -->
      </co-tab-container-item>
      <co-tab-container-item id="未解决">
        <co-cell v-for="n in 5" :title="'未解决 ' + n" :key='n'></co-cell>
      </co-tab-container-item>
    </co-tab-container>
  </div>

  <co-tabbar v-model="selected" fixed>
    <co-tab-item id="已解决">
      <i slot="icon" class="coicon" :class="{'coicon-service_fill': selected == '已解决', 'coicon-service': selected !== '已解决'}"></i>
      已解决
    </co-tab-item>
    <co-tab-item id="未解决">
      <!-- <img slot="icon" src="../assets/100x100.png"> -->
      <i slot="icon" class="coicon" :class="{'coicon-order_fill': selected == '未解决', 'coicon-order': selected !== '未解决'}"></i>
      未解决
    </co-tab-item>

  </co-tabbar>
</div>
</template>

<script>
export default {
  name: 'page-tabbar',
  data() {
    return {
      selected: '已解决',
      yList: this.$store.state.list
    };
  },
  methods: {
    loadAction({
      data,
      resolve
    }) {},
    add() {
      this.$router.push('/add');
    },
    toDetail(dangeId) {
      this.$router.push({
        name: 'detail',
        params: {
          dangeId
        }
      });
    }
  }
};
</script>

<style lang="less">
.page-tabbar {
  .co-wrapper {
    bottom: 2.25rem !important;
  }

  .button-wrapper {
    display: inline-block;
    width: 100%;
    padding: 20px 10px;
  }

  .co-tabbar>.co-tab-item.is-selected {
    color: @theme-color;
  }
}
</style>
