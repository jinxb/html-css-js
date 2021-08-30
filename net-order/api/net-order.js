import request from '@utils/request'
import api from '@api'


// const API_BASE_URL = '/netOrder'
class netOrderApi{
  /**
   *  根据城市id请求相应号码规则
   */
   qryNumFilterCond(params) {
    return request({
      url: '',
      method: 'post',
      data: params
    })
  }
  

}

export default new netOrderApi()