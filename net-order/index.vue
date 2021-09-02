<template>
  <div v-loading="loading" class="bgc">
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
                      <el-form-item label="选择地市：" prop="city">
                        <el-radio-group
                          v-for="(item,index) in citys"
                          :key="item.id"
                          v-model="form.city"
                          @change="selectRule([item,'city'])"
                        >
                          <!-- :class="{selectBgc: currentIndex === index}" -->
                          <el-radio-button :label="item.label" :class="{defaultSelect:index === defaultNum}" @click="handleSelectBtn(index)"></el-radio-button>
                        </el-radio-group>
                      </el-form-item>
                    </div>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="24">
                    <div>
                      <el-form-item label="预存范围：" prop="deposits">
                        <el-radio-group
                          v-for="(item,index) in resDate.deposits"
                          :key="item"
                          v-model="form.deposits"
                          @change="selectRule([item,'deposits'])"
                        >
                          <el-radio-button :label="item" @click="handleSelectBtn(index)"></el-radio-button>
                        </el-radio-group>
                      </el-form-item>
                    </div>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="24">
                    <div>
                      <el-form-item label="保底消费：" prop="baseRulePrice">
                        <el-radio-group v-for="(item,index) in resDate.baseRulePrice" :key="item" v-model="form.baseRulePrice" @change="selectRule([item,'baseRulePrice'])">
                          <el-radio-button :label="item" @click="handleSelectBtn(index)"></el-radio-button>
                        </el-radio-group>
                      </el-form-item>
                    </div>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="24">
                    <div>
                      <el-form-item label="靓号规则：" prop="numRule">
                        <el-radio-group v-for="(item,index) in resDate.numRule" :key="item" v-model="form.numRule" @change="selectRule([item,'numRule'])">
                          <el-radio-button :label="item" @click="handleSelectBtn(index)"></el-radio-button>
                        </el-radio-group>
                      </el-form-item>
                    </div>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="24">
                    <div>
                      <el-form-item label="选择号段：" prop="telePer">
                        <el-radio-group v-for="(item,index) in resDate.telePer" :key="item" v-model="form.segment" @change="selectRule([item,'segment'])">
                          <el-radio-button :label="item" @click="handleSelectBtn(index)"></el-radio-button>
                        </el-radio-group>
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
                      <el-input v-model="serchValue" placeholder="试试输入你想要的号码"></el-input>
                    </div>
                    <div v-else class="jq_input">
                      <!-- 数组存 -->
                      <el-input v-model="prValue[0]" maxlength="1" class="n-ipt"></el-input>
                      <el-input v-model="prValue[1]" maxlength="1" class="n-ipt"></el-input>
                      <el-input v-model="prValue[2]" maxlength="1" class="n-ipt"></el-input>
                      <span class="n-spl"></span>
                      <el-input v-model="prValue[3]" maxlength="1" class="n-ipt"></el-input>
                      <el-input v-model="prValue[4]" maxlength="1" class="n-ipt"></el-input>
                      <el-input v-model="prValue[5]" maxlength="1" class="n-ipt"></el-input>
                      <el-input v-model="prValue[6]" maxlength="1" class="n-ipt"></el-input>
                      <span class="n-spl"></span>
                      <el-input v-model="prValue[7]" maxlength="1" class="n-ipt"></el-input>
                      <el-input v-model="prValue[8]" maxlength="1" class="n-ipt"></el-input>
                      <el-input v-model="prValue[9]" maxlength="1" class="n-ipt"></el-input>
                      <el-input v-model="prValue[10]" maxlength="1" class="n-ipt"></el-input>
                    </div>
                    <el-button type="primary" size="medium" plain class="searchBtn" @click="onSearch()">搜索</el-button>
                    <el-button type="primary" plain class="tabBtn" style="" @click="changeSearch">{{ changeBtnName }}</el-button>
                  </el-form-item>
                  <div class="xh_gmyy_img" style="display: inline-block; float: right">
                    <el-popover
                      placement="bottom"
                      title="怎么预约？"
                      width="200"
                      trigger="click"
                      :content="makeTipText"
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
                <!-- <div class="pagination-container">
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
                </div> -->
              </el-row>
            </div>
            <div class="t-hmWrap">
              <el-row>
                <el-col v-for="item in pageData.results" :key="item.teleCode" :span="6">
                  <el-card class="N_hmPart" shadow="never">
                    <div class="n_hover" @click="selectNum(item)">
                      <h6>{{ item.teleCode.substring(0,3) }}<u class="ucolor1">{{ item.teleCode.substring(3,7) }}</u>{{ item.teleCode.substring(7,11) }}</h6>
                      <div class="clearfix">
                        <span class="fl partInfor">
                          预&nbsp;存:￥<u>{{ item.deposits }}</u>
                        </span>
                        <span class="fr partBtn">
                          <a href="javascript:;" telcode="18458421258" deposits="500" rulebasefee="98" inlen="60">
                            预 约
                          </a>
                        </span>
                      </div>
                      <div class="partDiv clearfix">
                        <span class="fl partInfor">
                          保&nbsp;底：￥<u>{{ item.ruleBaseFee }}</u>
                        </span>
                      </div>
                      <div class="partDiv clearfix">
                        <span class="fl partInfor">
                          合&nbsp;约期：￥<u>{{ item.rulePrice }}</u>
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
                  layout="prev, pager, next, jumper"
                  :page-size="size"
                  :current-page="page"
                  :page-count="pageData.total"
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                >
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
import CommonApi from '@api/modules/common'
import NetOrderApi from './api/net-order'

export default {
  data() {
    return {
      loading: false,
      searchFlag: true,
      defaultNum: 0,
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
        cityId: '', // 归属地市id
        suiteId: '', // 营销包ID
        deposits: '', // 预存范围
        baseRulePrice: '', // 保底消费
        inLen: '', // 合约期
        numRule: '', // 号码规则
        segment: '', // 号段
        sort: '', // 排序
        telCodePer: '', // 号码号段
        telCode: '', // 精准搜索号码片段
        noFourNumber: 'N' // 是否不含4， 枚举值，Y:不含4
      },
      pageData: {
        total: 0,
        results: []
      },
      page: 1,
      size: 24,
      serchValue: '', // 搜索值
      prValue: [], // 精确值
      cityName: '', // 归属地市名
      citys: [], // 城市列表
      resDate: {}, // 号码规则信息列表
      telInfoList: [], // 号码信息列表
      selectedNum: '', // 选中的号码
      value: ''
    }
  },
  computed: {
    changeBtnName: function() {
      return this.searchFlag === true ? '精确搜索' : '模糊搜索'
    },
    makeTipText: function() {
      return `                       选择您喜欢的号码，填写领取号码时出示的证件信息，就可以到您选择的营业厅购买您预约的号码，您预约的号码我们将为您保留自预约时间起的48小时。`
    }
  },
  created() {
  },
  mounted() {
    this.qryCitys()
  },
  methods: {
    selectRule(arr) {
      const [item, str] = arr
      console.log(item, str)
      this.defaultNum = ''
      if (str === 'city') {
        this.form.cityId = item.value
        this.cityName = item.label
        // 选择城市 -> 规则
        this.qryNumFilterCond()
      }
      // 规则 -> 更新符合规则号码
      this.qryNumList()
    },
    changeSearch() {
      this.searchFlag = !this.searchFlag
    },
    selectRuleBtn(index, item) {
      // 控制颜色及图标的改变
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
      // 规则请求
      if (index === 0) {
        if (item.state) {
          this.form.sort = 'HD|D'
        } else {
          this.form.sort = 'HD|U'
        }
      }
      if (index === 1) {
        if (item.state) {
          this.form.sort = 'BP|D'
        } else {
          this.form.sort = 'BP|U'
        }
      }
      if (index === 2) {
        if (item.state) {
          this.form.sort = 'P|D'
        } else {
          this.form.sort = 'P|U'
        }
      }
      console.log(this.form.sort)
      this.qryNumList()
    },
    // 点击刷新请求 改变背景色
    handleSelectBtn(index) {
      this.currentIndex = index
    },
    handleSizeChange(size) {
      this.size = size
      this.qryNumList()
    },
    handleCurrentChange(currentPage) {
      this.page = currentPage
      this.qryNumList()
    },
    // handleResetQuery() {
    //   // 号码 预存 保底 合约期
    //   this.form = {
    //     num: '',
    //     deposits: '',
    //     baseRulePrice: '',
    //     tenor: '',
    //     pageNum: 1,
    //     pageSize: 10
    //   }
    // },
    qryCitys() {
      const params = {
        code: 'CITY_CODE'
      }
      CommonApi.qryDict(params).then(resp => {
        const data = resp.data
        data.forEach((item, inx, arr) => {
          if (item.value === '000') {
            arr.splice(inx, 1)
          }
        })
        this.citys = data
        if (this.citys) {
          this.qryNumList()
          // 根据城市id请求相应号码规则
          this.qryNumFilterCond()
        }
      })
    },
    // 搜索框搜索事件
    onSearch() {
      if (!this.searchFlag) {
        console.log(this.prValue)
        if (this.prValue.length !== 0) {
          const arr = Array.of('|', '|', '|', '|', '|', '|', '|', '|', '|', '|', '|')
          this.form.telCode = arr.map((item, index) => {
            if (this.prValue[index]) {
              item = this.prValue[index]
            }
            return item
          }).join('')
          this.page = 1
          this.qryNumList()
        } else {
          this.qryNumList()
        }
      } else {
        if (this.serchValue) {
          this.form.telCode = this.serchValue
          this.page = 1
          this.qryNumList()
        } else {
          this.qryNumList()
        }
      }
    },
    // 调用接口搜索号码
    qryNumList() {
      this.loading = true
      // 赋默认值
      if (!this.form.cityId) {
        console.log(this.citys)
        this.form.cityId = this.citys[0].value
        this.cityName = this.citys[0].label
      }
      const params = {
        cityId: this.form.cityId,
        deposits: this.form.deposits,
        numRule: this.form.numRule,
        telCodePer: this.form.telCodePer,
        telCode: this.form.telCode,
        baseRulePrice: this.form.baseRulePrice,
        noFourNumber: this.form.noFourNumber,
        sort: this.form.sort,
        page: this.page,
        size: this.size
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
      SchoolApi.searchNum(params).then((resp) => {
        this.loading = false
        console.log(resp)
        this.pageData.total = resp.data.total || 0
        this.pageData.results = resp.data.telInfoList
        // if (resp.data.telInfoList && resp.data.telInfoList.length > 0) {
        //   let telInfo = {}
        //   for (let i = 0; i < resp.data.telInfoList.length; i++) {
        //     telInfo = data.telInfoList[i]
        //     telInfo.selected = false
        //     this.telInfoList.push(telInfo)
        //   }
        //   console.log(this.pageData.results)

        //   this.noTelData = false
        // } else {
        //   this.noTelData = true
        // }
      })
        .catch((e) => {
          this.loading = false
        })
    },
    qryNumFilterCond() {
      const params = {
        channelCode: 'c1s0k3',
        cityId: this.form.cityId
      }
      console.log(params)
      NetOrderApi.qryNumFilterCond(params).then(resp => {
        // this.resDate = resp.resdata
        const newDate = resp.data.map(item => {
          if (item.numSearchType === 1) {
            this.resDate.deposits = item.numSearchList
          }
          if (item.numSearchType === 2) {
            this.resDate.baseRulePrice = item.numSearchList
          }
          if (item.numSearchType === 3) {
            this.resDate.numRule = item.numSearchList
          }
        })
        this.resDate = newDate.map(item => {
          item.unshift({ paramName: '全部' })
        })
        console.log(this.resDate)
      })
    },
    // 选择号码
    selectNum(item) {
      const city = {
        label: this.cityName,
        value: this.form.cityId
      }
      const params = {
        city,
        item
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
  /*elementui loading css 覆盖 开始*/
  .el-loading-spinner .circular{
    width: 42px;
    height: 42px;
    animation: loading-rotate 2s linear infinite;
    display: none;
  }
  .el-loading-spinner{
    background: url('../../assets/images/net-order/wating.gif') no-repeat;
    background-size: 80px 80px;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 50%;
    left: 45%;
  }
  .el-loading-mask{
    background-color: rgba(255,255,255,.0);
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
      .defaultSelect{
        color: #FFF;
        background-color: #FF8800;
        border-color: #FF8800;
        box-shadow: -1px 0 0 0#FF8800;
        border-radius: 0;
        .el-radio-button__inner{
        color: #FFF;
        }
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
          margin-left: 20px;
          .el-input__inner{
             text-align: center;
             padding: 0;
             width: 32px;
             height: 32px;
             /* margin-left: 20px; */
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
      font-weight: normal;
      font-size: 100%;
      margin: 0;
      margin-bottom: 15px;
      font-size: 12px;
      background: url('../../assets/images/net-order/n-barBg.jpg')
        repeat-x 0 -1px;
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
        padding: 20px 18px 0 30px;
        /* .el-pagination button, .el-pagination span:not([class*=suffix]){
          font-size: 18px;
        }
        .el-pager li{
          margin: 0;
          font-size: 20px;
        } */
      }
    }
  }
  .selectBgc {
    color: #fff;
    background-color: #FF8800;
  }
}
}
</style>
