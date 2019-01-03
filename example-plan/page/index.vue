import { Calendar } from 'coui';
import { isContext } from 'vm';
import { Popup } from 'coui';
import list.vue from '/list/list.vue'
Vue.component(Popup.name, Popup);
Vue.component(Calendar.name, Calendar);
<template>
<div class='page-cell'>
  <co-header title='工作日报'>
    <fallback slot='left'></fallback>
    <a slot="right" @click="save()">保存</a>
  </co-header>
  <co-calendar :singleSelect="true" ref="calendar" @changeMY="updateYM" :yearAndMonth="now" @clickDate="getDate"></co-calendar>

  <div>
    <p class="co-pd-a04">工作日报</p>
    <co-field placeholder="请输入工作日报" type="textarea" rows="2" v-model="content"></co-field>
  </div>
  <!-- <div>
    <p class="co-pd-a04">下周工作计划</p>
    <co-field placeholder="请输入下周工作计划" type="textarea" rows="2" v-model="nextWeek"></co-field>
  </div> -->
  <div>
    <co-cell title='风险问题' to='dange' class='page-content-main'></co-cell>
  </div>
</div>
</template>

<script>
export default {
  name: 'index',
  data() {
    return {
      now: corJS.getDate(1),
      isContent: true,
      content: 'init',
      selectDate: '',
      nextWeek: '',
      oldContent: ''
    };
  },
  created() {
    console.log(this.$route.query.p);
    this.oldContent = this.content;
  },
  methods: {
    getDate(date) {
      console.log(this.now);
      // console.log(date);
      console.log(date.year + '-' + date.month + '-' + date.day);
      this.selectDate = date.year + '-' + date.month + '-' + date.day;
    },
    updateYM(date) {},
    save() {
      console.log('save');
      console.log(this.selectDate);
      if (this.validate()) {
        console.log(this.content);
        this.oldContent = this.content;
      } else {
        console.log('not modif');
      }
    },
    validate() {
      if (this.content === '') {
        return false;
      } else if (this.content === this.oldContent) {
        return false;
      }
      return true;
    }
  }
};
</script>

<style lang="less">
.img-wrapper {
  text-align: center;
  height: 150px;
  line-height: 180px;
}

.daily-content {
  line-height: 1.6
}
</style>
