import Vue from 'vue'
import Router from 'vue-router'
import First from './views/First.vue'
import Secound from './views/Secound.vue'
import Third from './views/Third.vue'
import Last from './views/Last.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/frist',
      name:'frist',
      component:First
    },{
      path:'/secound',
      name:'secound',
      component:Secound
    },{
      path:'/thrid',
      name:'thrid',
      component:Third
    },{
      path:'/last',
      name:'last',
      component:Last
    }
  
  ]
})
