
<template>
<div class="page-field">
  <co-header fixed title="增加">
    <fallback slot="left"></fallback>
    <a slot="right" @click="save()">保存</a>
  </co-header>
  <div class="co-wrapper">
    <div class="page-part page-content-main">
      <cus-form ref="formRefs" :fields="fields" @formInput></cus-form>
    </div>
  </div>
  <cus-loading :load-method="loadAction"></cus-loading>
</div>
</template>

<script>
const NAMESPACE = 'page-form';
export default {
  name: NAMESPACE,
  data() {
    return {
      list: [],
      pList: [],
      fields: {
        taskPerson: {
          required: false,
          name: '负责人',
          inputType: 'text',
          state: '',
          value: '',
          valueCode: ''
        },
        startDate: {
          required: true,
          name: '开始日期',
          state: '',
          inputType: 'date',
          value: corJS.getDate(1)
        },
        endDate: {
          required: true,
          name: '最后期限',
          state: '',
          inputType: 'date',
          value: corJS.getDate(1)
        },
        dangeContent: {
          required: true,
          name: '风险点',
          rows: '4',
          state: '',
          inputType: 'textarea',
          value: ''
        },
        status: {
          name: '是否解决',
          state: '',
          inputType: 'switch',
          value: ''
        }
      }
    };
  },
  methods: {
    loadAction() {
      // var l = this.list;
      // corNative.requestAjax(
      //   {
      //     url: 'http://172.18.8.18/mpm/api/v3/crm/getEmployeeInfo',
      //     method: 'get'
      //   },
      //   data => {
      //     this.list = data;
      //     console.log(data);
      //     for (let u of data) {
      //       console.log(u.userName);
      //       this.pList.push({
      //         value: u.userId,
      //         text: u.userName
      //       });
      //     }
      //     console.log(this.list);
      //     this.fields.taskPerson.selectData = this.pList;
      //   }
      // );
    },
    save() {
      // let result = this.$refs.formRefs.validAndData('save');
      let sta = this.$refs.formRefs.getFieldValue('status');
      console.log(sta);
      let result = true;
      console.log('store=>', this.$store.state.count);
      if (result) {
        // this.$messagebox.alert('验证成功', '提示');
        // let taskPerson = this.$refs.formRefs.getFieldValue('taskPerson');
        let taskPerson = this.$refs.formRefs.getFieldValue('taskPerson');
        console.log(taskPerson);
        // let dangeId = new Date().getTime();
        let startDate = this.$refs.formRefs.getFieldValue('startDate');
        let endDate = this.$refs.formRefs.getFieldValue('endDate');
        let dangeContent = this.$refs.formRefs.getFieldValue('dangeContent');
        let status = this.$refs.formRefs.getFieldValue('status');
        if (!status) {
          status = false;
        }
        this.$store.commit('cList', {
          'dangeId': 1,
          'taskPerson': taskPerson,
          'startDate': startDate,
          'endDate': endDate,
          'dangeContent': dangeContent,
          'status': status
        });
        this.$router.back(-1);
      }
    },
    // 获取登陆信息(同步)
    getLoginInfo: function() {
      alert(corMPortal.getLoginInfo());
    },
    getFieldValue() {
      let val = this.$refs.formRefs.getFieldValue('principal');
      console.log('====getFieldValue====', val);
    },
    setFieldValue() {
      this.$refs.formRefs.setFieldValue('principal', '', () => {
        console.log('=----赋值成功-----------------');
      });
    }
  },
  created() {
    setTimeout(() => {
      this.setFieldValue();
      setTimeout(() => {
        this.getFieldValue();
      }, 1000);
    }, 1000);
  }
};
</script>
