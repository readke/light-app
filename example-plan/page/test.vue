<template>
  <div class='page-field'>
    <co-header fixed title='表单组件-合并'>
      <fallback slot='left'></fallback>
      <a slot='right' @click='save()'>保存</a>
    </co-header>

    <div class='co-wrapper'>
      <div class='page-part page-content-main'>
        <cus-form ref='formRefs' :fields='fields' @formInput></cus-form>
      </div>
    </div>
  </div>
</template>

<script type='es6'>
const NAMESPACE = 'page-form';
export default {
  name: NAMESPACE,
  data() {
    return {
      fields: {
        customerName: {
          required: true,
          name: '客户名称',
          state: '',
          /*
            icon: 's coicon coicon-add',
            isHide: 1,
            pattern: '', // 正则表达式
            validHint: '', // 验证不符合规则时的提醒
            maxLength: '', // 最大长度
            pointLength: '', // 小数点后-长度
            */
          inputType: 'text',
          value: ''
        },
        isImportant: {
          name: '是否重点客户',
          state: '',
          inputType: 'switch',
          value: ''
        },
        address: {
          name: '原生api-地址',
          inputType: 'address',
          state: '',
          isApp: 1,
          value: '',
          addressData: {
            address: '',
            province: '',
            city: '',
            adname: '',
            adcode: '',
            cityCode: '',
            longitude: '',
            latitude: ''
          }
        },
        address1: {
          required: true,
          name: '地址',
          inputType: 'address',
          isApp: 0,
          state: '',
          value: '',
          addressData: {
            address: '',
            province: '',
            provinceCode: '',
            city: '',
            adname: '',
            adcode: '',
            cityCode: '',
            longitude: '',
            latitude: ''
          }
        },
        industry: {
          required: true,
          name: '行业类别',
          inputType: 'multi',
          state: '',
          selectData: [
            {
              value: '1',
              text: '111111'
            },
            {
              value: '2',
              text: '222222'
            },
            {
              value: '3',
              text: '333333'
            },
            {
              value: '4',
              text: '444444'
            },
            {
              value: '5',
              text: '555555'
            },
            {
              value: '6',
              text: '666666'
            },
            {
              value: '7',
              text: '111111'
            },
            {
              value: '8',
              text: '222222'
            }
          ],
          value: '',
          valueCode: ''
        },
        year: {
          name: '年',
          state: '',
          inputType: 'year',
          value: ''
        },
        yearmonth: {
          name: '月份',
          state: '',
          inputType: 'yearmonth',
          value: ''
        },
        date: {
          name: '日期',
          state: '',
          inputType: 'date',
          value: ''
        },
        datetime: {
          name: '时间',
          state: '',
          inputType: 'datetime',
          value: ''
        },
        time: {
          name: '时分',
          state: '',
          inputType: 'time',
          value: ''
        },
        appendix: {
          name: '附件',
          state: '',
          uploadParam: {
            service: config.mpm,
            action: config.mpm + '/upload-file',
            headers: {
              'X-Authorization': config.jwt
            },
            contentName: 'files'
          },
          inputType: 'appendix',
          value: []
        },
        remark: {
          name: '备注',
          rows: '4',
          state: '',
          inputType: 'textarea',
          value: ''
        }
      }
    };
  },
  methods: {
    save() {
      let result = this.$refs.formRefs.validAndData('save');
      if (result) {
        this.$messagebox.alert('验证成功', '提示');
      }
    },
    getFieldValue() {
      let val = this.$refs.formRefs.getFieldValue('customerName');
      console.log('====getFieldValue====', val);
    },
    setFieldValue() {
      this.$refs.formRefs.setFieldValue('customerName', 'TCL', () => {
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
