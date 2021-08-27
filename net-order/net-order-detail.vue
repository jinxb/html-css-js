<template>
  <div class="netOrderDetail">
    <div class="mautoall">
      <!--右侧内容开始-->
      <div class="layout">
        <div class="N_wrapCon">
    		<div class="ddxq_all">
                <div class="ddxq_top">
                    订单详情
                </div>
                <div class="ddxq_content">
                    <div class="content_list">
                        <span class="bt jg">您的订单状态：<em class="j-ddzt">待办理</em></span>
                    </div>
                    <div class="content_list">
                        <span class="bt">订单明细</span>
                        <div class="content_ddmx clearw j-ddmx">
                            
                        <span class="fl">订单编号：DD202108270937344310000057305324</span><span class="fl">订单类型：预约订单</span><span class="fl">下单时间：2021-08-27 09:37:34</span></div>
                    </div>
                    <div class="content_list">
                        <span class="bt">预约人信息</span>
                        <div class="content_yyrxx j-ddyyrxx">
                            
                        <p>姓 名：欧****</p><p>联系电话：132****6856</p><p>预约人身份证号码：352224********2025</p><p>自取营业厅：杭州上城天城路营业厅</p><p>营业厅地址：江干区天城路207号</p><p>营业厅联系电话：</p><p>营业时间：周一、周二、周三、周四、周五、周六、周日 09:00-12:00 12:00-18:00</p></div>
                    </div>
                    <div class="content_list">
                        <span class="bt">商品信息</span>
                        <div class="content_spxx top clearw">
                            <div class="fl left">
                                商品
                            </div>
                            <div class="fl right">
                                数量
                            </div>
                        </div>
                        <div class="content_spxx bottom clearw">
                            <div class="fl left clearw">
                                <div class="fl pthm">
                                    普通号码
                                </div>
                                <div class="fl tel j-telnum">
                                    号码：<em>15158841402</em>
                                </div>
                            </div>
                            <div class="fl right">
                                1
                            </div>
                        </div>
                    </div>
                </div>
                <div class="ddxq_btn clearw">
                    <div class="fl j-ddxqfh">
                        返回
                    </div>
                    <div class="fr j-ddxqqxyy" style="display: none;">
                        取消预约
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        idCard: '',
        number: '',
        password: '',
        authCode: ''
      },
      size: ''
    }
  },
  methods: {
    handleQuery() {
    }
  }
}
</script>

<style lang="scss">
body{
  background-color: #fff;
}
.netOrderDetail{
  .mautoall {
      margin-left: auto;
      margin-right: auto;
      width: 1200px;
      padding-top: 0px;
      em{
        font-weight: normal;
        font-style: normal;
      }
      .layout {
          position: relative;
          .N_wrapCon {
            width: 1200px;
          }
          .ddxq_all {
            border: 2px solid #dcdcda;
            border-radius: 7px;
            margin-top: 13px;
            .ddxq_top {
                height: 35px;
                line-height: 35px;
                font-size: 16px;
                color: #525252;
                border-radius: 7px 7px 0 0;
                padding-left: 15px;
                border-bottom: 2px solid #cdcdcb;
                background: url(http://www.zj.10086.cn/pcweb/shop/images/bg-24.jpg) left center repeat-x;
            }
            .ddxq_content {
                padding: 22px 62px;
                margin-top: 2px;
                .content_list {
                  border-bottom: 2px solid #999999;
                  margin-top: 25px;
                  .bt {
                      font-size: 15px;
                      color: #525252;
                      line-height: 23px;
                      height: 23px;
                      display: block;
                      background-color: #def2fa;
                      padding-left: 5px;
                  }
                  .bt.jg {
                    margin-bottom: 24px;
                  }
                  .bt em {
                      color: #ff0000;
                  }
                  .fl {
                      float: left;
                      display: inline;
                  }
                  .clearw {
                      overflow: hidden;
                  }
                  .content_ddmx {
                      padding: 12px 0;
                      span.fl {
                        font-size: 15px;
                        color: #999999;
                        margin-right: 236px;
                        line-height: 22px;
                      }
                  }
                  .content_yyrxx {
                      padding: 12px 0;
                      p {
                        font-size: 15px;
                        color: #999999;
                        line-height: 22px;
                    }
                  }
                  .content_spxx {
                      background: url(http://www.zj.10086.cn/pcweb/shop/images/bg-25.png) left center repeat-x;
                      .fl.left {
                          width: 60%;
                      }
                      .fl.right {
                          width: 40%;
                      }
                  }
                  .content_spxx.top  {
                    .fl {
                        font-size: 15px;
                        color: #696969;
                        padding-top: 16px;
                        padding-bottom: 12px;
                      }
                    .fl.left{
                      padding-left: 23.5%;
                      box-sizing: border-box;
                    }
                    .fl.right {
                      text-align: center;
                    }
                  }
                  
                  .content_spxx.bottom {
                      border-bottom: 2px solid #d6d6d6;
                      margin-bottom: 16px;
                      .fl {
                        text-align: center;
                        font-size: 15px;
                        color: #999999;
                        height: 48px;
                        line-height: 48px;
                    }
                      .fl.pthm {
                        width: 39%;
                        border-right: 2px solid #efefef;
                        box-sizing: border-box;
                    }
                    .fl.tel {
                        width: 61%;
                        text-align: left;
                        padding-left: 35px;
                        box-sizing: border-box;
                        border-right: 2px solid #efefef;
                    }
                  }
                }
            }
            .ddxq_btn {
                width: 272px;
                height: 46px;
                margin: 0 auto;
                margin-bottom: 15px;
                .fl,.fr {
                    width: 130px;
                    height: 46px;
                    font-size: 18px;
                    color: #ffffff;
                    text-align: center;
                    line-height: 46px;
                    background: url(http://www.zj.10086.cn/pcweb/shop/images/bg-26.jpg) center no-repeat;
                    box-sizing: border-box;
                    border: 2px solid #e34f2b;
                    border-radius: 7px;
                    cursor: pointer;
                }
            }
          }
      }
  }
}



</style>
