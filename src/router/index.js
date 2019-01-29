import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home/home.vue'
import call from '../components/call/call.vue'
import join from '../components/join/join.vue'
import coreBusiness from '../components/business/core-business.vue'
import monetaryFund from '../components/business/business-detail/monetary-fund.vue'
import privateFund from '../components/business/business-detail/private-fund.vue'
import hedgeFund from '../components/business/business-detail/hedge-fund.vue'
import digitalAsset from '../components/business/business-detail/digital-asset.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: home,
    },
    {
      path: '/core-business',
      component: coreBusiness,
      children: [
        {
          path: 'monetary-fund',
          component: monetaryFund
        },
        {
          path: 'private-fund',
          component: privateFund
        },
        {
          path: 'hedge-fund',
          component: hedgeFund
        },
        {
          path: 'digital-asset',
          component: digitalAsset
        }
      ]
    },
    {
      path: '/call',
      component: call
    },
    {
      path: '/join',
      component: join
    }
  ]
})
