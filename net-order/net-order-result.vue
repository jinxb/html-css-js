<template>
  <div class="netOrderResult">
    <div class="mautoall">
      <!--右侧内容开始-->
      <div class="layout">
        <div class="wrap">
            <!-- 标题 -->
          <div class="yycg_top">
            <div class="bt">恭喜，预约单提交成功！</div>
            <div class="fr">
              <span>您可以继续：<router-link :to="{path:'/school/netOrder'}">[选号]</router-link><router-link :to="{path:'/school/netOrderQuery'}">[查询其他预约单]</router-link></span>
            </div>
          </div>
          <!--  -->
          <div class="yycg_bottom">
            <div class="yycg_xq">
              <span class="fl">您预约单号为：<em class="j-custOrderNo">DD202108251629433680000057290294</em>，您的预约号为：<em class="j-telCode">18357193647</em>，您的查询密码为：<em class="j-password">210105</em></span>
              <router-link :to="{path:'/school/netOrder'}">查看预约单详情&gt;&gt;</router-link>
            </div>
            <div class="yycg_xq">
              <span class="fl">自取商品：请您在48小时内前往您预约的营业厅办理相关事宜</span>
            </div>
            <div class="yycg_xq">
              <span class="fl">送货上门：商城工作人员将在3个工作日内为您发货</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    'numbers': String,
    'phone': Number,
  },
  data() {
    return {
      password: ''
    }
  }
}
</script>

<style lang="scss">
.netOrderResult{
  .mautoall {
      margin-left: auto;
      margin-right: auto;
      width: 1200px;
      padding: 27px 30px;
      border-radius: 7px;
      em{
        font-weight: normal;
        font-style: normal;
      }
      .wrap{
        border: 2px solid #797979;
        border-radius: 7px;
      }
      .yycg_top {
        margin-top: 30px;
        padding-left: 45px;
        padding-bottom: 40px;
        padding-right: 28px;
        background: url(http://www.zj.10086.cn/pcweb/shop/images/bg-16.jpg) left bottom repeat-x;
        .bt {
            line-height: 82px;
            height: 82px;
            font-size: 44px;
            color: #eb6100;
            padding-left: 102px;
            background: url(http://www.zj.10086.cn/pcweb/shop/images/bg-23.png) left center no-repeat;
        }
        .fr {
            float: right;
            display: inline;
            font-size: 16px;
            color: #8a8989;
        }
        a {
            font-size: 16px;
            color: #eb6100;
        }
    }
      .yycg_bottom {
      padding-left: 54px;
      padding-right: 28px;
      padding-top: 28px;
      padding-bottom: 30px;
      .yycg_xq {
        margin-bottom: 25px;
        .fl{
          font-size: 18px;
          font-family: "宋体";
          color: #3c3c3c;
          em {
              font-size: 20px;
              color: #e60012;
          }
        }
        a{
          font-size: 18px;
          color: #006fd8;
          cursor: pointer;
          float: right;
          display: inline;
        }
      }
    }
  }
}

</style>

