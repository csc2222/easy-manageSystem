import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import router from './router'
import store from './store'
import './api/mock'
import Cookie from 'js-cookie'

Vue.config.productionTip = false
Vue.use(ElementUI);


//添加全局前置导航守卫
router.beforeEach((to,from,next)=>{
  //判断token是否存在
  const token =Cookie.get('token')
  //如果token不存在，证明当前用户未登录，应该跳转至登录页
  if(!token&&to.name!=='login'){
    next({name:'login'})
  }else if (token&&to.name==='login'){
    next({name:'home'})
  }else{
    next();
  }
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

