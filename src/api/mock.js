import Mock from 'mockjs'
import homeApi from './mockServeData/home'
import permission from './mockServeData/permission'
import user from './mockServeData/user'
import goodsList from '../api/mockServeData/goodsList'
//定义接口请求拦截
Mock.mock('/api/home/getData',homeApi.getStatisticalData)

//用户列表的数据
Mock.mock('/api/user/add','post',user.createUser)
Mock.mock('/api/user/edit','post',user.updateUser)
Mock.mock('/api/user/del','post',user.deleteUser)
Mock.mock('/api/goodsList/del','post',goodsList.deleteGood)
Mock.mock(/api\/user\/getUser/,user.getUserList)
Mock.mock(/api\/permission\/getMenu/,'post',permission.getMenu)