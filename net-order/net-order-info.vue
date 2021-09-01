<template>
  <div class="orderInfo-bgc">
    <div class="wrap">
      <div class="mautoall" style="padding-top: 0px">
        <div class="layout">
          <el-form ref="form" :model="form" :inline="true" label-width="120px">
            <div class="numBox">
              <!-- 标题 -->
              <h3 class="n-title">
                <em>海量选号</em>
              </h3>
              <!--  -->
              <div class="shopMsg_all">
                <el-row>
                  <el-col :span="12">
                    <el-form-item label="手机号码：" prop="num">
                      <span>{{ form.num }}</span>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item label="号码归属：" prop="cityName">
                      <span>{{ form.cityName }}</span>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="24">
                    <el-form-item label="价格：" prop="deposits">
                      <span class="fl j-numlistprice"><em class="dw rcl">￥</em><em class="jg rcl">{{ form.deposits }}</em>元</span>
                      <span class="fl j-numlitbdhyq">（含话费<em class="rcl">{{ form.deposits }}</em>元，保底<em class="rcl">{{ form.ruleBaseFee }}</em>元/月，合约期<em class="rcl">{{ form.inLen }}</em>个月）</span>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="12">
                    <el-form-item label="购买方式：" prop="manner">
                      <el-input v-model="form.manner" placeholder="请输入身份证号码" class="busi-style" readonly></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12" class="otherStyle">
                    <el-form-item label="营业厅选择：" prop="businessHall">
                      <el-input
                        v-if="form.businessHall"
                        v-model="form.businessHall"
                        class="busi-style"
                        disabled
                      >
                      </el-input>
                      <el-button type="primary" class="busi-btn" @click="handleHallView()">
                        {{ form.businessHall === '' ? '选择营业厅':'换营业厅' }}
                      </el-button>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="12">
                    <el-form-item label="客户姓名：" prop="name">
                      <el-input v-model="form.name" placeholder="请输入客户姓名"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item label="身份证号码：" prop="idCard">
                      <el-input v-model="form.idCard" placeholder="请输入身份证号码" :maxlength="18"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="10">
                    <el-form-item label="联系电话：" prop="phoneNum">
                      <el-input v-model="form.phoneNum" placeholder="请输入电话号码" :maxlength="11"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="14" class="otherStyle">
                    <el-form-item label="验证码：" prop="authCode">
                      <el-input
                        v-model.trim="form.authCode"
                        name="authCode"
                        type="text"
                        placeholder="请输入图形验证码"
                        :maxlength="4"
                        @keyup.enter.native="handleLogin"
                      ></el-input>
                      <img class="fl j-changeyzm j-myyzm" src="//www.zj.10086.cn/shop-front-web/sinoaptcha1.jpg" height="29" title="看不清？点击图片重新获取验证码！" align="middle">
                      <el-button class="changeBtn" @click="handleChange()">换一张</el-button>
                      <!-- <img
                        :src.sync="jcaptcha"
                        class="validate"
                        @click="changeCaptcha"
                      /> -->
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row class="n-btn">
                  <el-button class="btn" @click="handleMake()">确认预约</el-button>
                </el-row>
              </div>
              <div>
                <img src="../../assets/images/net-order/pic-01.jpg" width="100%">
              </div>
            </div>
          </el-form>
        </div>
      </div>
    </div>
    <el-dialog :visible.sync="addVisible" append-to-body width="77%" top="5vh" custom-class="my-info-dialog">
      <div
        slot="title"
        class="top_fl"
      >
        可预约营业厅
      </div>
      <busi-view
        v-if="addVisible"
        ref="busiView"
        :cityId="cityId"
        @changeRow="changeRow"
      >
      </busi-view>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="handleConfirmAdd">
        </el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
// import SchoolApi from '@api/modules/school'
import busiView from './component/businessHallView.vue'

import {validMobile, validIDCard} from '../../utils/validate'

export default {
  components: {
    busiView
  },
  data() {
    return {
      form: {
        num: '',
        cityName: '', // 选择地市
        price: '', // 价格
        deposits: '', // 预存
        ruleBaseFee: '', // 保底
        inLen: '', // 合约期
        manner: '预约至附近营业厅', // 购买方式
        businessHall: '', // 营业厅
        name: '', // 客户姓名
        idCard: '', // 身份证
        phoneNum: '', // 联系电话
        authCode: '' // 验证码
      },
      cityId: '',
      // 是否展示营业厅选择弹窗
      addVisible: false,
      // 保存选中的营业厅信息
      hallInfo: {},
      pageData: {
        total: 0,
        results: [],
        pageNum: 1,
        pageSize: 24
      },
      telInfoList: [], // 号码信息列表
      selectedNum: '', // 选中的号码
      cities: [
        {
          value: 'Beijing',
          label: '北京'
        },
        {
          value: 'Shanghai',
          label: '上海'
        },
        {
          value: 'Nanjing',
          label: '南京'
        },
        {
          value: 'Chengdu',
          label: '成都'
        },
        {
          value: 'Shenzhen',
          label: '深圳'
        },
        {
          value: 'Guangzhou',
          label: '广州'
        }
      ],
      value: ''
    }
  },
  computed: {
    changeBtnName: function() {
      return this.searchFlag === true ? '精确搜索' : '模糊搜索'
    },
    allinputed: function(){
      let tips = ''
      if (this.businessHall) {
        tips = '请选择营业厅'
        return tips
      }
      if (!this.form.name) {
        tips = '客户姓名必须输入' 
        return tips
      }
      if (!this.form.idCard || !validIDCard(this.form.idCard)) {
        tips = '身份证号码格式不合法!请填写二代身份证号码!'
        return tips
      }
      if (!this.form.phoneNum) {
        tips = '请输入联系电话'
        return tips
      }
      if (!validMobile(this.form.phoneNum)) {
        tips = '请输入正确的联系电话'
        return tips
      }
    }
  },
  created() {
    if (this.$route.params.city) {
      const {city,item} = this.$route.params
      console.log(item)
      this.form.cityName = city.label
      this.cityId = city.value
      this.form.num = item.teleCode
      this.form.price = item.rulePrice
      this.form.inLen = item.inLen
      this.form.ruleBaseFee = item.ruleBaseFee
      this.form.deposits = item.deposits
    }
  },
  mounted() {
    // this.qryNumList()
  },
  methods: {
    handleHallView() {
      this.addVisible = true
      console.log(this.addVisible)
    },
    handleConfirmAdd() {
      this.form.businessHall = this.hallInfo.hallName
      this.addVisible = false
    },
    changeRow(val) {
      // this.currentRow = val
      console.log('=changeRow===', val)
      this.hallInfo = val
    },
    // 确认预约
    handleMake() {
      // 1. 判断用户信息是否填写完整
      if(this.allinputed){
        alert(this.allinputed)
        return false
      }
      // 2. 判断用户输入信息格式是否有误
      // 3. 预约逻辑
      const params = {
            name: 'jinbin',
            age: '18'
          }
          this.$router.push({
            name: 'netOrderResult',
            params
          })
    }
      
  }
}
</script>
<style lang="scss">
.orderInfo-bgc{
  background-color: #fff;
  .wrap {
    /* background: #fff; */
    font-size: 12px;
    width: 1200px;
    margin: 0px auto;
    padding: 0;
    color: #525252;
    overflow-x: visible;
    overflow-y: visible;
    font-family: "宋体";
    /* .el-dialog__body{
      padding: 30px 0px;
    } */
    .numBox{
      border-top: 4px solid #b92724;
      border-left: 2px solid #dfdfdf;
      border-bottom: 2px solid #dfdfdf;
      border-right: 2px solid #dfdfdf;
      .el-input{
        width: 230px;
      }
      .otherStyle{
        img{
            vertical-align: top;
            margin-top: 6px;
          }
        .el-input{
          margin-right: 10px;
        }
        .changeBtn.el-button{
          margin-left: 10px;
          padding: 0;
          border: none;
          font-size: 16px;
          color: #006fd8;
          text-decoration: underline;
        }
        .changeBtn.el-button:focus, .changeBtn.el-button:hover{
            color: #006fd8;
            border-color: #fff;
            background-color: #fff;
        }
      }
      .otherStyle.el-col-12{
          width: 500px;
      }
      .otherStyle.el-col-14{
        width: 558px;
        margin-right: 0px;
        margin-left: 20px;
        .el-input{
          width: 230px;
          margin-right: 15px;
        }
        .el-form-item__content{
        line-height: 42px;
        }
        .el-input__inner{
          text-align: left;
          padding: 0 0 0 8px;
          color: #b3b3b3;
          font-family: '宋体';
          font-size: 18px;
          border-radius: 0px;
        }
      }
      .el-form-item__content{
        line-height: 42px;
      }
      .el-input__inner{
        text-align: left;
        padding: 0 0 0 8px;
        color: #3f3f3f;
        font-family: '宋体';
        font-size: 18px;
        border-radius: 0px;
      }
      .busi-style{
        .el-input__inner{
          background: url('../../assets/images/net-order/bg-13.png') right bottom no-repeat;
          border: 1px solid #ff5c00;
          color: #3f3f3f;
        }
      }
      .busi-btn{
        vertical-align: top;
        padding: 0 18px;
        height: 36px;
        width: 108px;
        background: url('../../assets/images/net-order/bg-14.png') center no-repeat;
        background-size: 100% 100%;
        border: none;
        color: #ffffff;
        line-height: 36px;
        font-size: 15px;
        margin-top: 3px;
        cursor: pointer;
        text-align: center;
      }
      .n-btn{
        text-align: center;
        .btn{
        width: 254px;
        height: 68px;
        text-align: center;
        background: url('../../assets/images/net-order/bg-15.png') center no-repeat;
        font-size: 36px;
        color: #ffffff;
        margin: 0 auto;
        margin-top: 60px;
        margin-bottom: 72px;
        cursor: pointer;
        }
      }
    }
    .n-title {
        height: 62px;
        margin: 0;
        margin-bottom: 15px;
        background: url('../../assets/images/net-order/n-barBg.jpg')
          repeat-x 0 -1px;
        font-weight: normal;
        font-size: 100%;
        /* span {
          font-size: 13px;
        } */
    }
    .n-title em {
        display: block;

        width: 120px;
        height: 61px;
        line-height: 61px;
        text-align: center;
        margin-left: -1px;

        font-size: 20px;
        font-weight: normal;
        font-style: normal;

        background: url('../../assets/images/net-order/n-titleBg.png')
          no-repeat;
        color: #fff;
    }
    .shopMsg_all{
        padding-left: 52px;
        padding-top: 60px;
        .el-col-24{
          .el-form-item__label{
            text-align: left;
            font-size: 18px;
            color: #3f3f3f;
          }
          .el-form-item__content{
            font-size: 18px;
          }
          .rcl{
            color: #e4393c;
          }
          .jg{
            font-size: 24px;
          }
          em {
            font-weight: normal;
            font-style: normal;
          }
        }
        .el-col-12,.el-col-10,.el-col-14{
          margin-right: 110px;
          width: 385px;
          line-height: 42px;
          margin-bottom: 5px;
          font-size: 18px;
          .el-form-item__label{
            text-align: left;
            font-size: 18px;
            color: #3f3f3f;
          }
          .el-form-item__content{
            font-size: 18px;
          }
        }
        .el-col-10{
          margin-right: 90px;
        }
    }
  }
}
  .my-info-dialog{
      height: 90%;
      margin: auto;
      /* div:nth-child(1){
        padding: 0;
      } */
      .el-dialog__header{
        padding: 0;
        height: 58px;
        background: #f2f2f2;
        border-radius: 5px 5px 0 0;
        padding-left: 17px;
      }
      .el-dialog__headerbtn{
        font-size: 25px;
        border: 2px solid #909399;
        border-radius: 50%;
        width: 30px;
        height: 30px;
        top: 15px;
      }
      .el-dialog__headerbtn:focus .el-dialog__close, .el-dialog__headerbtn:hover .el-dialog__close{
        color: #909399;
      }
      .el-dialog__body{
        padding: 5px 26px;
      }
      .el-dialog__footer{
        text-align: center;
          margin: 0 auto;
        .el-button{
          width: 110px;
          height: 38px;
          background: url('../../assets/images/net-order/bg-21.jpg') center no-repeat;
          margin-top: 17px;
          margin-bottom: 20px;
          cursor: pointer;
        }
        .el-button--primary{
           color: #FFF;
           background-color:#fff;
           border-color: #fff;
        }
        .el-button--primary.is-active, .el-button--primary:active{
           background-color:#fff;
           border-color: #fff;
        }
      }
      .top_fl{
        float: left;
        display: inline;
        font-size: 20px;
        color: #333333;
        background: url('../../assets/images/net-order/pic-02.png') left center no-repeat;
        line-height: 58px;
        padding-left: 54px;
      }
    }
</style>
