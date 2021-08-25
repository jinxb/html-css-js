<template>
  <div class="hall-wrap">
    <el-form
      :model="queryParam"
      label-width="60px"
      :inline="true"
      @submit.native.prevent
    >
      <el-row>
        <el-col :span="24">
          <el-form-item>
            <el-button v-for="(o,index) in 13" :key="o" type="primary" :class="['cityBtn',{selectedBtn: currentIndex === index}]" @click="handleCityBtn(index)">{{ o }}</el-button>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row class="searchRow">
        <el-form-item>
          <el-input v-model="queryParam.gradeName" clearable placeholder="搜索营业厅" class="searchInput" prefix-icon="el-icon-search" @keyup.enter.native.prevent="handleEnterSearch"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            class="searchBtn"
            @click="handleSearch()"
          >
            查询
          </el-button>
        </el-form-item>
      </el-row>
    </el-form>
    <div class="tableView">
      <el-table
        ref="table"
        highlight-current-row
        :data="testData"
        style="width: 100%"
        :row-key="(record) => record.pkgId"
        @current-change="selectCurrentRow"
        @selection-change="handleSelectionChange"
      >
        <el-table-column label="营业厅名称" prop="hallName" width="250">
          <template slot-scope="testData">
            <el-radio v-model="form.hallName" :label="testData.row.hallName" @change="selectedRadio()"></el-radio>
          </template>
        </el-table-column>
        <el-table-column label="地址" prop="address" width="460"> </el-table-column>
        <el-table-column label="联系电话" prop="number" width="180"> </el-table-column>
        <el-table-column label="营业时间" prop="time" width="200"> </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
// import packageApi from "./package-api";

export default {
  props: {
    cityInfo: {
      type: Array,
      default: () => {
        return []
      }
    },
    busiInfo: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0,
      form: {
        hallName: '',
        address: '',
        number: '',
        time: ''
      },
      testData: [{
        hallName: '杭州上城天城路营业厅',
        address: '江干区天城路207号',
        number: '',
        time: '周一、周二、周三、周四、周五、周六、周日 09:00-12:00 12:00-18:00'
      },
      {
        hallName: '杭州上城吴山营业厅',
        address: '杭州市上城区延安南路50号',
        number: '',
        time: '周一、周二、周三、周四、周五、周六、周日 09:00-12:00 12:00-18:00'
      },
      {
        hallName: '杭州上城庆春路营业厅',
        address: '上城区庆春地址庆春路137-1',
        number: '',
        time: '周一、周二、周三、周四、周五、周六、周日 09:00-12:00 12:00-18:00'
      },
      {
        hallName: '杭州上城吴山营业厅',
        address: '杭州市上城区延安南路50号',
        number: '',
        time: '周一、周二、周三、周四、周五、周六、周日 09:00-12:00 12:00-18:00'
      },
      {
        hallName: '杭州上城庆春路营业厅',
        address: '上城区庆春地址庆春路137-1',
        number: '',
        time: '周一、周二、周三、周四、周五、周六、周日 09:00-12:00 12:00-18:00'
      },
      {
        hallName: '杭州上城吴山营业厅',
        address: '杭州市上城区延安南路50号',
        number: '',
        time: '周一、周二、周三、周四、周五、周六、周日 09:00-12:00 12:00-18:00'
      },
      {
        hallName: '杭州上城庆春路营业厅',
        address: '上城区庆春地址庆春路137-1',
        number: '',
        time: '周一、周二、周三、周四、周五、周六、周日 09:00-12:00 12:00-18:00'
      },
      {
        hallName: '杭州上城吴山营业厅',
        address: '杭州市上城区延安南路50号',
        number: '',
        time: '周一、周二、周三、周四、周五、周六、周日 09:00-12:00 12:00-18:00'
      },
      {
        hallName: '杭州上城庆春路营业厅',
        address: '上城区庆春地址庆春路137-1',
        number: '',
        time: '周一、周二、周三、周四、周五、周六、周日 09:00-12:00 12:00-18:00'
      },
      {
        hallName: '杭州上城吴山营业厅',
        address: '杭州市上城区延安南路50号',
        number: '',
        time: '周一、周二、周三、周四、周五、周六、周日 09:00-12:00 12:00-18:00'
      },
      {
        hallName: '杭州上城庆春路营业厅',
        address: '上城区庆春地址庆春路137-1',
        number: '',
        time: '周一、周二、周三、周四、周五、周六、周日 09:00-12:00 12:00-18:00'
      },
      {
        hallName: '杭州上城吴山营业厅',
        address: '杭州市上城区延安南路50号',
        number: '',
        time: '周一、周二、周三、周四、周五、周六、周日 09:00-12:00 12:00-18:00'
      },
      {
        hallName: '杭州上城庆春路营业厅',
        address: '上城区庆春地址庆春路137-1',
        number: '',
        time: '周一、周二、周三、周四、周五、周六、周日 09:00-12:00 12:00-18:00'
      }],
      loading: false,
      queryParam: {
        cityIds: [],
        gradeName: '金金金'
      },
      regions: [],
      pageData: {
        total: 0,
        results: [],
        pageNum: 1,
        pageSize: 10
      },
      outPackages: [],
      cachePackages: []
    }
  },
  created() {
    // this.$util.dictMap((fn, map) => {
    //   this.regions = this._.sortBy(fn('CITY_CODE', map), ['sort'])
    //   this.regions = this.regions.filter((region) => {
    //     return region.value !== '000'
    //   })
    // })
    // this.cityId && this.cityId !== '' && (this.queryParam.cityIds = this.cityId)
    // this.cachePackages = this.packages
    this.loading = true
  },
  mounted() {
    // if (this.packageIds.length > 0) {
    //   this.handleSearch(this.packageIds)
    // } else {
    //   this.handleSearch()
    // }
  },
  methods: {
    selectedRadio() {
      console.log('aaa')
    },
    selectCurrentRow(val) {
      this.$emit('changeRow', JSON.parse(JSON.stringify(val)))
    },
    checked() {
      this.cachePackages.forEach((item) => {
        const data = this.pageData.results.find((temp) => {
          if (item.pkgId === temp.pkgId) {
            temp.exist = true
            return true
          } else {
            return false
          }
        })
        if (data) {
          this.$refs['table'].toggleRowSelection(data, true)
        }
      })
    },
    handleEnterSearch() {
      this.pageData.pageNum = 1
      this.queryParam.pageNum = 1
      this.handleQuery()
    },
    handleSearch(pkgIds) {
      console.log('查询')
      this.pageData.pageNum = 1
      this.queryParam.pageNum = 1
      this.handleQuery(pkgIds)
    },
    handleQuery(pkgIds) {
      // const param = {
      //   cityIds: this.queryParam.cityIds,
      //   gradeName: this.queryParam.gradeName,
      //   pageNum: this.pageData.pageNum,
      //   pageSize: this.pageData.pageSize,
      //   suitId: this.suitid || ''
      // }
      // if (pkgIds) {
      //   param.pkgIds = pkgIds
      // }
      this.loading = true
      // packageApi.queryPackageList(JSON.stringify(param)).then((res) => {
      //   console.log("res", res)
      //   this.pageData.total = res.total
      //   this.pageData.results = res.records.map(item=>{
      //     item.exist = false
      //     return item
      //   });
      //   this.$nextTick(() => {
      //     this.checked()
      //     this.loading = false
      //   })
      // })
    },
    handleSelectionChange(val) {
      // console.log("handleSelectionChange", val)
      this.outPackages = []
      for (const item of val) {
        if (!this._.isEmpty(item)) {
          this.outPackages.push({
            pkgId: item.pkgId,
            marketId: item.marketId,
            marketName: item.marketName,
            gradeId: item.gradeId,
            gradeName: item.gradeName,
            cityId: item.cityId
          })
        }
      }
    },
    // 切换城市
    handleCityBtn(index) {
      this.currentIndex = index
    }
  }
}
</script>

<style lang="scss">
.hall-wrap{
    width: 100%;
    height: 90%;
    margin: 0 auto;
    margin: auto;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: #ffffff;
    border-radius: 5px;
    .el-button+.el-button{
      margin-left: 0px;
    }
    .el-form-item__content{
      padding-left: 0px;
    }
    .searchRow{
      height: 55px;
      padding-left: 0px;
      background: url(http://www.zj.10086.cn/pcweb/shop/images/bg-16.jpg) left bottom repeat-x;
      margin-bottom: 10px;
      .searchInput{
        .el-input__inner{
        width: 450px;
        height: 40px;
        border-radius: 40px;
        float: left;
        border: solid 1px #a9a9a9;
        }
      }
      .el-form-item__content{
        padding-left: 0px;
      }
      .searchBtn{
        width: 99px;
        height: 40px;
        font-size: 18px;
        color: #666;
        text-align: center;
        border: none;
        background: url(http://www.zj.10086.cn/pcweb/shop/images/searchc_btn.png) 0 0 no-repeat;
        float: left;
        cursor: pointer;
      }
    }
    .el-button--primary{
      color: #525252;
      background-color: #c3c3c3;
      border-color: #c3c3c3;
      border-radius: 0;
      }
    .cityBtn{
      background: url(http://www.zj.10086.cn/pcweb/shop/images/bg-17.jpg) center no-repeat;
      background-size: cover;
      width: 92px;
      height: 34px;
      line-height: 9px;
      margin-right: 20px;
      margin-top: 10px;
      cursor: pointer;
    }
    .selectedBtn{
      border-color: #ff5c00;
      background: url(http://www.zj.10086.cn/pcweb/shop/images/bg-18.png) right bottom no-repeat;
    }
    .tableView{
      padding: 20px 0px;
      height: calc(100vh - 470px);;
      overflow-y: scroll;
      max-height: 58%;
    }
    .el-table {
      border-top: 1px solid #d9d9d9;
      border-left: 1px solid #d9d9d9;
      td{
        height: 123px;
      }
      td, th.is-leaf {
      border-bottom: 1px solid #d9d9d9;
      border-right: 1px solid #d9d9d9;
      }
      th>.cell{
        text-align: center;
      }
    }
}
</style>
