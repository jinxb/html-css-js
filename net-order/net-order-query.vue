<template>
  <div class="netOrderQuery">
    <div class="mautoall">
      <!--右侧内容开始-->
      <div class="layout">
        <img src="http://www.zj.10086.cn/pcweb/shop/images/pic-04.jpg" width="100%">
        <el-form ref="form" :model="form" :inline="true">
          <div class="numBox">
            <!-- 标题 -->
            <div class="yydcx_bt">
              查号码预约单
            </div>
            <!--  -->
            <div class="shopMsg_all">
              <el-row>
                <el-col :span="12">
                  <el-form-item label="证件号码：" prop="idCard">
                    <el-input v-model="form.idCard" maxlength="18"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="12">
                  <el-form-item label="预约号码：" prop="number">
                    <el-input v-model="form.number" maxlength="11"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="12" style="width: 39%;">
                  <el-form-item label="预约密码：" prop="password">
                    <el-input v-model="form.password" maxlength="6"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="12" class="tipsStyle">
                  <el-form-item label="预约密码与预约号码可任填一项" prop="password" required>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="12" class="authCodeStylle">
                  <el-form-item label="验证码：" prop="authCode" required>
                    <el-input
                      v-model.trim="form.authCode"
                      name="authCode"
                      type="text"
                      :maxlength="5"
                      @keyup.enter.native="handleLogin"
                    ></el-input>
                    <img class="fl j-changeyzm j-myyzm" src="//www.zj.10086.cn/shop-front-web/sinoaptcha1.jpg" height="29" title="看不清？点击图片重新获取验证码！" align="middle">
                    <!-- <img
                      :src.sync="jcaptcha"
                      class="validate"
                      @click="changeCaptcha"
                    /> -->
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row class="n-btn">
                <el-button class="btn" @click="handleQuery()"></el-button>
              </el-row>
            </div>
          </div>
        </el-form>
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
      }
    }
  },
  methods: {
    handleQuery() {
    }
  }
}
</script>

<style lang="scss">
.netOrderQuery{
  .mautoall {
    margin-left: auto;
    margin-right: auto;
    width: 1200px;
    border: 2px solid #e4edf4;
    padding: 27px 30px;
    border-radius: 5px;
    .layout {
      position: relative;
      .yydcx_bt{
        font-size: 15px;
        color: #006fd8;
        padding-top: 40px;
        padding-left: 215px;
      }
      .shopMsg_all{
        padding-left: 140px;
        padding-top: 25px;
        .el-input__inner{
          width: 315px;
          height: 29px;
          line-height: 25px;
          font-size: 15px;
          padding: 0;
          text-indent: 1rem;
          border: 1px solid rgb(118, 118, 118);
          border-radius: 0;
        }
        .el-form-item__label{
          color: #006fd8;
          display: inline-block;
          font-size: 15px;
          font-family: '宋体';
        }
        .el-col-24{
          .el-input{
            width: 0;
          }
        }
        .el-form-item{
          margin-bottom: 17px;
        }
        .tipsStyle{
          .el-form-item__label{
            display: inline-block;
            font-size: 14px;
            color: #929292;
          }
        }
        .authCodeStylle{
          .el-input{
            width: 115px;
          }
          .el-form-item__label{
            width: 88px;
          }
          .el-input__inner{
            width: 108px;
          }
          img{
            vertical-align: top;
            margin-top: 6px;
          }
        }
        .n-btn{
          .el-button{
            width: 116px;
            height: 38px;
            background: url(http://www.zj.10086.cn/pcweb/shop/images/bg-22.jpg) center no-repeat;
            margin-left: 88px;
            cursor: pointer;
          }
        }
      }
    }
  }

}
</style>
