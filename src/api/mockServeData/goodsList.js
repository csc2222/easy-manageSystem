import Mock from 'mockjs'

export default{
        //删除商品
        deleteGood:config=>{
            const {goods_id}=JSON.parse(config.body)
            if(!goods_id){
                return {
                    code:-999,
                    message:'参数不正确'
                }
            }else{
                List=List.filter(u=>u.goods_id!=goods_id)
                return {
                    code:20000,
                    message:'删除成功'
                }
            }
        },
}