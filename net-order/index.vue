<template>
  <div class="bgc">
    <div class="wrap">
      <div id="breadNav" class="clearfix">
        <el-breadcrumb separator-class="el-icon-arrow-right" class="bread-crumd">
          <el-breadcrumb-item>网上营业厅</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/' }">预约号码查询</el-breadcrumb-item>
        </el-breadcrumb>
        <el-breadcrumb separator-class="el-icon-arrow-right" class="bread-crumd">
          <el-breadcrumb-item>首页</el-breadcrumb-item>
          <el-breadcrumb-item>网上营业厅</el-breadcrumb-item>
          <el-breadcrumb-item>海量选号</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="mautoall" style="padding-top: 0px">
        <!-- 预约弹窗 -->
        <!-- <div class="hm_zmyy1" style="display: none;">
              <div class="arrow1"></div>
              <h6 class="ico2"><a href="javascript:void(0)" title="关闭" class="fright hm_zmyy2"><img src="./images/sj_sharegb.gif" alt="关闭"></a>怎么预约？</h6>
              <p>选择您喜欢的号码，填写领取号码时出示的证件信息，就可以到您选择的营业厅购买您预约的号码，您预约的号码我们将为您保留自预约时间起的48小时。</p>
            </div> -->
        <div class="layout">
          <el-form ref="form" :model="form" :inline="true" label-width="130px">
            <div class="numBox">
              <!-- 标题 -->
              <h3 class="n-title">
                <span style="line-height: 61px; color: red; float: right">因实名制认证问题，目前商城暂只提供号码预约服务，后期会恢复号码购买服务，敬请谅解。</span><em>海量选号</em>
              </h3>
              <div class="propList">
                <!-- 多选 -->
                <el-row>
                  <el-col :span="24">
                    <div>
                      <el-form-item label="选择地市：" prop="num">
                        <el-radio-group
                          v-for="(item,index) in cities"
                          id="city"
                          :key="item.value"
                          v-model="form.city"
                          @change="selectCityId()"
                        >
                          <!-- :class="{selectBgc: currentIndex === index}" -->
                          <el-radio-button :label="item.label" @click="handleSelectBtn(index)"></el-radio-button>
                        </el-radio-group>
                      </el-form-item>
                    </div>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="24">
                    <div>
                      <el-form-item label="预存范围：" prop="num">
                        <el-radio-group
                          v-for="(item,index) in cities"
                          id="city"
                          :key="item.value"
                          v-model="form.priceScope"
                          @change="selectCityId()"
                        >
                          <el-radio-button :label="item.label" @click="handleSelectBtn(index)"></el-radio-button>
                        </el-radio-group>
                      </el-form-item>
                    </div>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="24">
                    <div>
                      <el-form-item label="保底消费：" prop="num">
                        <el-radio-group v-for="(item,index) in cities" id="city" :key="item.value" v-model="form.consume" @change="selectCityId()">
                          <el-radio-button :label="item.label" @click="handleSelectBtn(index)"></el-radio-button>
                        </el-radio-group>
                      </el-form-item>
                    </div>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="24">
                    <div>
                      <el-form-item label="靓号规则：" prop="num">
                        <el-radio-group v-for="(item,index) in cities" id="city" :key="item.value" v-model="form.rule" @change="selectCityId()">
                          <el-radio-button :label="item.label" @click="handleSelectBtn(index)"></el-radio-button>
                        </el-radio-group>
                      </el-form-item>
                    </div>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="24">
                    <div>
                      <el-form-item label="选择号段：" prop="num">
                        <el-radio-group v-for="(item,index) in cities" id="city" :key="item.value" v-model="form.segment" @change="selectCityId()">
                          <el-radio-button :label="item.label" @click="handleSelectBtn(index)"></el-radio-button>
                        </el-radio-group>
                        <el-radio-button label="123"></el-radio-button>
                        <el-radio-button label="123"></el-radio-button>
                        <el-radio-button label="123"></el-radio-button>
                        <el-radio-button label="123"></el-radio-button>
                        <!-- <el-radio-button label="123"></el-radio-button>
                        <el-radio-button label="123"></el-radio-button>
                        <el-radio-button label="123"></el-radio-button>
                        <el-radio-button label="123"></el-radio-button>
                        <el-radio-button label="123"></el-radio-button>
                        <el-radio-button label="123"></el-radio-button>
                        <el-radio-button label="123"></el-radio-button>
                        <el-radio-button label="123"></el-radio-button>
                        <el-radio-button label="123"></el-radio-button>
                        <el-radio-button label="123"></el-radio-button> -->
                      </el-form-item>
                    </div>
                  </el-col>
                </el-row>
              </div>
            </div>
            <div class="n-sBox">
              <!-- 号码搜索 -->
              <el-row>
                <el-col :span="24">
                  <el-form-item label="号码搜索：" prop="num" class="n_search">
                    <div v-if="searchFlag" class="mh_input">
                      <el-input v-model="form.segment" placeholder="试试输入你想要的号码"></el-input>
                    </div>
                    <div v-else class="jq_input">
                      <!-- 数组存 -->
                      <el-input v-model="form.segment" maxlength="1" class="n-ipt"></el-input>
                      <el-input v-model="form.segment" maxlength="1" class="n-ipt"></el-input>
                      <el-input v-model="form.segment" maxlength="1" class="n-ipt"></el-input>
                      <span class="n-spl"></span>
                      <el-input v-model="form.segment" maxlength="1" class="n-ipt"></el-input>
                      <el-input v-model="form.segment" maxlength="1" class="n-ipt"></el-input>
                      <el-input v-model="form.segment" maxlength="1" class="n-ipt"></el-input>
                      <el-input v-model="form.segment" maxlength="1" class="n-ipt"></el-input>
                      <span class="n-spl"></span>
                      <el-input v-model="form.segment" maxlength="1" class="n-ipt"></el-input>
                      <el-input v-model="form.segment" maxlength="1" class="n-ipt"></el-input>
                      <el-input v-model="form.segment" maxlength="1" class="n-ipt"></el-input>
                      <el-input v-model="form.segment" maxlength="1" class="n-ipt"></el-input>
                    </div>
                    <el-button type="primary" size="medium" plain class="searchBtn">搜索</el-button>
                    <el-button type="primary" plain class="tabBtn" style="" @click="changeSearch">{{ changeBtnName }}</el-button>
                  </el-form-item>
                  <div class="xh_gmyy_img" style="display: inline-block; float: right">
                    <el-popover
                      placement="bottom"
                      title="怎么预约？"
                      width="200"
                      trigger="click"
                      content="选择您喜欢的号码，填写领取号码时出示的证件信息，就可以到您选择的营业厅购买您预约的号码，您预约的号码我们将为您保留自预约时间起的48小时。"
                    >
                      <el-button slot="reference" class="hm_zmyy">怎么预约？</el-button>
                    </el-popover>
                  </div>
                </el-col>
              </el-row>
            </div>
          </el-form>
          <!-- 搜索结果 -->
          <div class="pageDiv">
            <div class="n-rank">
              <el-row>
                <el-button v-for="(item,index) in orderRule" :key="item.value" :class="['ruleBtn', {init: item.state}, {up: isUp === index }, {down: isDown === index }]" @click="selectRuleBtn(index,item)">{{ item.value }}</el-button>
                <!-- 分页信息 -->
                <div class="pagination-container">
                  <el-pagination
                    background
                    layout="slot, prev, pager, next"
                    :page-size="pageData.pageSize"
                    :current-page="pageData.pageNum"
                    :total="pageData.total"
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                  >
                    <span>共有{{ pageData.total }}个号码符合要求</span>
                  </el-pagination>
                </div>
              </el-row>
            </div>
            <div class="t-hmWrap">
              <el-row>
                <el-col v-for="o in 24" :key="o" :span="6">
                  <el-card class="N_hmPart" shadow="never">
                    <div class="n_hover" @click="selectNum(o)">
                      <h6>188<u class="ucolor1">8888</u>8888</h6>
                      <div class="clearfix">
                        <span class="fl partInfor">
                          预&nbsp;存:￥<u>500</u>
                        </span>
                        <span class="fr partBtn">
                          <a href="javascript:;" telcode="18458421258" deposits="500" rulebasefee="98" inlen="60">
                            预 约
                          </a>
                        </span>
                      </div>
                      <div class="partDiv clearfix">
                        <span class="fl partInfor">
                          保&nbsp;底：￥
                          <u>98/月</u>
                        </span>
                      </div>
                      <div class="partDiv clearfix">
                        <span class="fl partInfor">
                          合&nbsp;约期：￥
                          <u>60/月</u>
                        </span>
                      </div>
                    </div>
                  </el-card>
                </el-col>
                <!-- <van-grid-item
                  v-for="(item, index) in telInfoList"
                  :key="item.teleCode"
                  @click="selectNum(index)"
                >
                  <div class="telList">
                    <h2>{{ item.teleCode }}</h2>
                  </div> -->
              </el-row>
            </div>
            <div class="n-pageBox" style="left: 50%">
              <!-- 分页信息 -->
              <div
                class="pagination-container"
                style="margin-left: 50%; transform: translate(-50%)"
              >
                <el-pagination
                  background
                  layout="prev, pager, next,slot, jumper"
                  :page-size="pageData.pageSize"
                  :current-page="pageData.pageNum"
                  :page-count="pageData.total"
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                >
                  <span>共{{ 5 }}页</span>
                </el-pagination>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SchoolApi from '@api/modules/school'

export default {
  data() {
    return {
      searchFlag: true,
      currentIndex: 0,
      isUp: 999,
      isDown: 999,
      orderRule: [
        {
          value: '号段',
          state: false
        },
        {
          value: '保底',
          state: true
        },
        {
          value: '预存',
          state: true
        }],
      form: {
        city: '', // 选择地市
        priceScope: '', // 预存范围
        consume: '', // 保底消费
        rule: '', // 规则
        segment: '' // 号段
      },
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
    }
  },
  mounted() {
    this.qryNumList()
  },
  methods: {
    selectCityId() {
      console.log(this.form)
    },
    changeSearch() {
      this.searchFlag = !this.searchFlag
    },
    selectRuleBtn(index, item) {
      if (item.state) {
        if (this.isUp === index) {
          this.isUp = ''
          this.isDown = index
          this.orderRule[index].state = false
        } else {
          this.isDown = ''
          this.isUp = index
        }
      } else {
        if (this.isDown === index) {
          this.isDown = ''
          this.isUp = index
          this.orderRule[index].state = true
        } else {
          this.isUp = ''
          this.isDown = index
        }
      }
    },
    // 点击刷新请求 改变背景色
    handleSelectBtn(index) {
      this.currentIndex = index
    },
    handleSizeChange(size) {
      this.queryParam.pageSize = size
      this.handleQuery()
    },
    handleCurrentChange(currentPage) {
      this.queryParam.pageNum = currentPage
      this.pageData.pageNum = currentPage
      this.handleQuery()
    },

    handleResetQuery() {
      // 号码 预存 保底 合约期
      this.queryParam = {
        num: '',
        priceScope: '',
        consume: '',
        tenor: '',
        pageNum: 1,
        pageSize: 10
      }
    },
    // 调用接口搜索号码
    qryNumList() {
      const params = {
        suitId: '99',
        cityId: '571',
        page: this.pageData.pageNum,
        size: this.pageData.pageSize
      }

      // if (this.serchValue) {
      //   if (!/^[0-9]+$/.test(this.value)) {
      //     this.Dialog = true
      //     this.dialogTitle = '提示'
      //     this.dialogInfo = '请输入数字!'
      //     return
      //   }
      // }
      this.telInfoList = []
      // params.telCode = this.serchValue
      SchoolApi.searchNum(params).then((resp) => {
        const data = resp.data
        console.log(resp)
        if (data.telInfoList && data.telInfoList.length > 0) {
          let telInfo = {}
          for (let i = 0; i < data.telInfoList.length; i++) {
            telInfo = data.telInfoList[i]
            telInfo.selected = false
            this.telInfoList.push(telInfo)
          }
          this.pageData.total = data.total || 0

          // this.noTelData = false
        } else {
          // this.noTelData = true
        }
      })
    },
    // 选择号码
    selectNum(o) {
      console.log(o)
      const params = {
        name: 'jin',
        age: 18
      }
      this.$router.push({
        name: 'netOrderInfo',
        params
      })
    }
  }
}
</script>
<style lang="scss">
.bgc{
  background-color: #fff;
}
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
  #breadNav {
    display: flex;
    justify-content: space-between;
    height: 56px;
    line-height: 56px;
  }
  .bread-crumd {
  }
  .layout {
    .numBox {
      border-top: 4px solid #b92724;
      border-left: 2px solid #dfdfdf;
      border-bottom: 2px solid #dfdfdf;
      border-right: 2px solid #dfdfdf;
      font-size: 18px !important;
      .propList{
        padding-right: 60px;
      }
      .el-radio-button__orig-radio:checked+.el-radio-button__inner{
        color: #FFF;
        background-color: #FF8800;
        border-color: #FF8800;
        box-shadow: -1px 0 0 0#FF8800;
        border-radius: 0;
      }
      .el-radio-button {
        /* margin-right: 18px; */
      }
      .el-radio-button__inner:hover {
        color: #fff;
        background-color: #FF8800;
        border-radius: 0;
      }
      .el-form-item {
        margin-bottom: 10px;
      }
      .el-radio-button__inner{
        border: 0;
        font-size: 18px;
        background: none;
      }
      .el-form-item__label{
        font-size: 18px;
      }
    }
    .n-sBox{
      padding: 9px 0 9px;
      border-width: 0 2px 2px;
      border-style: solid;
      border-color: #dfdfdf;
      .el-form-item__label{
        font-size: 18px;
      }
      .n_search{
        margin-bottom: 0;
        .el-form-item__content{
          height: 40px;
        }
        .mh_input{
          display: inline-block;
          margin-right:30px;
          .el-input__inner{
             text-align: left;
             padding: 0 0 0 8px;
             margin-left: 20px;
             height: 36px;
             color: #b3b3b3;
             font-size: 18px;
          }
        }
        .jq_input{
          float:left;
          margin-right:30px;
          .el-input__inner{
             text-align: center;
             padding: 0;
             width: 32px;
             height: 32px;
             margin-left: 20px;
          }
        }
        .tabBtn{
          width: 102px;
          height: 40px;
          font-size: 18px;
          text-align: center;
          padding: 0;
          border: 0;
          background: url('../../assets/images/net-order/bg-7.png') no-repeat;;
          color: #787878;
        }
        .el-button--primary:focus, .el-button--primary:hover,.el-button.is-plain:focus, .el-button.is-plain:hover,.el-button--primary.is-plain:focus, .el-button--primary.is-plain:hover{
          border-color: #fff;
        }
        .searchBtn{
          padding-top: 8px;
          width: 80px;
          height: 36px;
          background: url('../../assets/images/net-order/bg-5.png') no-repeat;
          color: #fff;
          font-size: 18px;
          text-align: center;
        }
      }
      .hm_zmyy{
        line-height: 40px;
        font-size: 18px;
        color: #FF8800;
        background: url('../../assets/images/net-order/bg-8.png') center left no-repeat;
        padding-left: 18px;
        cursor: pointer;
        margin-left: 10px;
        text-align: center;
        border: none;
        padding-top: 0;
        padding-bottom: 0;
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

    .n-ipt {
      width: 32px;
      height: 32px;
      margin: 0 2px;
      /* border: 2px solid #d4d4d4; */
      text-align: center;
      float: left;
      font-size: 18px;
    }
    .n-spl {
      display: block;
      float: left;
      width: 22px;
      height: 40px;
      background: url('../../assets/images/net-order/line-1.png')
        center no-repeat;
    }
    .el-input__inner {
      border: 2px solid #d4d4d4;
    }
    /* 排序规则往下 */
    .ruleBtn{
      width: 97px;
      height: 53px;
      /* line-height: 53px; */
      /* border-right: 2px solid #dfdfdf; */
      font-size: 18px;
      text-align: center;
      margin: 0;
      border-radius: 0;
      background: url('../../assets/images/net-order/arror-02.png') no-repeat;
      background-position: 71px 19px;
    }
    .ruleBtn:hover{
      color: #f67001;
    }
    .pageDiv{
      border-top: 4px solid #b92724;
      border-left: 2px solid #dfdfdf;
      border-bottom: 2px solid #dfdfdf;
      border-right: 2px solid #dfdfdf;
      .n-rank{
        border-bottom: 2px solid #dfdfdf;
        .el-button{
          border: none;
          border-right:2px solid #dfdfdf;
        }
        .init{
          background: url('../../assets/images/net-order/arror-04.png') no-repeat;
          background-position: 71px 19px;
        }
        .up{
          background: url('../../assets/images/net-order/arror-05.png') no-repeat;
          background-position: 71px 19px;
          color: #f67001;
          text-decoration: none;
        }
        .down{
          background: url('../../assets/images/net-order/arror-03.png') no-repeat;
          background-position: 71px 19px;
          color: #f67001;
          text-decoration: none;
        }
        // 分页样式
        .pagination-container{
          float: right;
          padding: 10px 18px 0 0;
          .el-pagination button, .el-pagination span:not([class*=suffix]){
            font-size: 18px;
          }
          .el-pager li{
            margin: 0;
            font-size: 20px;
          }
        }
      }
    }
    /* 号码列表 */
    .N_hmPart{
      width: 300px;
      height: 200px;
      padding: 13px 0px 12px;
      box-sizing: border-box;
      border: none;
      margin: -1px;
      background: url('../../assets/images/net-order/dotted1.png') repeat-x 0 bottom;
      color: #666;
      .n_hover{
        border: 1px solid #fff;
      }
      .clearfix{
        height: 32px;
        margin-top: 10px;
      }
      .el-card__body{
        padding: 0 20px 0px 20px;
        background: url('../../assets/images/net-order/N_hmPart_bg.png') no-repeat scroll right center transparent;
      }
      .n_hover:hover{
        border: 1px solid red;
      }
      h6{
        font-size: 38px;
        margin: 0;
        color: #0178CA;
        overflow: hidden;
        padding: 0;
        margin: 0;
        font-family: "微软雅黑";
        font-weight: normal;
        u{
          color: #FF6600;
          text-decoration: none;
        }
      }
      span.partInfor{
        font-size: 20px;
        line-height: 32px;
      }
      span.partBtn {
        float: right;
        margin-right: 15px;
        width: 70px;
        height: 32px;
        line-height: 32px;
        font-size: 16px;
        background: url('../../assets/images/net-order/bg-9.png') no-repeat;
        a{
          display: block;
          font-size: 16px;
          text-align: center;
          text-decoration: none;
          color: #333;
        }
      }
      span{
        u{
            text-decoration: none;
            color: #c90000;
            font-weight: bold;
        }
      }
    }
    .n-pageBox{
      // 分页样式
      .pagination-container{
        float: right;
        padding: 10px 18px 0 0;
        .el-pagination button, .el-pagination span:not([class*=suffix]){
          font-size: 18px;
        }
        .el-pager li{
          margin: 0;
          font-size: 20px;
        }
      }
    }
  }
  .selectBgc {
    color: #fff;
    background-color: #FF8800;
  }
}
</style>
