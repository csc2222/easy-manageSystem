export default{
    state:{
        isCollapse: false ,//控制菜单展开还是收起
        tabList:[
            {
                path: '/',
                name: 'home',
                lable: '首页',
                icon: 's-home',
                url: 'Home/Home'
            }
        ]//面包屑
    },
    mutations: {
        //修改菜单展开收起的方法
        collapseMenu(state){
            state.isCollapse=!state.isCollapse
        },
        //更新面包屑
        selectMenu(state,val){
            //判断添加的数据是否为首页
            if(val.name!=='home'){
                const index=state.tabList.findIndex(item=>item.name===val.name)
                //如果不存在
                if(index=== -1){
                    state.tabList.push(val)
                }
            }
        }
    }
}