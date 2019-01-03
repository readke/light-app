<template>
  <div class="page-tabbar">
    <co-header fixed title="问题风险点">
      <fallback slot="left"></fallback>
      <a slot="right" @click="add()">新增</a>
    </co-header>

    <div class="co-wrapper">
      <div class="page-content-main">
        <co-cell class="page-part" title="当前选中" :value="selected"></co-cell>
      </div>

      <co-tab-container class="page-tabbar-container" v-model="selected">
        <co-tab-container-item id="已解决">
          <co-cell v-for="n in 10" :title="'已解决 ' + n" :key='n'></co-cell>
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

<script type="es6">
export default {
  name: 'page-tabbar',
  data() {
    return {
      selected: '已解决'
    };
  },
  methods: {
    add() {
      this.$router.push('/add');
    }
  }
};
</script>

<style lang="less">
  .page-tabbar{
    .co-wrapper{
      bottom: 2.25rem!important;
    }
    .button-wrapper{
      display: inline-block;
      width: 100%;
      padding: 20px 10px;
    }
    .co-tabbar > .co-tab-item.is-selected{
      color: @theme-color;
    }
  }
</style>
