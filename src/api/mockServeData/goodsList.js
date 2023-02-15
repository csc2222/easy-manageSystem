import Mock from 'mockjs'

export default{
        //删除商品
        deleteGood:config=>{
            const {id}=JSON.parse(config.body)
            if(!id){
                return {
                    code:-999,
                    message:'参数不正确'
                }
            }else{
                List=List.filter(u=>u.id !=id)
                return {
                    code:20000,
                    message:'删除成功'
                }
            }
        },
}