import ElemenyUI from 'element-ui'

export default {

  async install(Vue,options){

    Vue.config.productionTip = false

    Vue.prototype.$env = process.env.NODE_ENV

    Vue.prototype.$baseUrl = process.env.BASE_URL


    Vue.use(ElemenyUI)
  }
}
