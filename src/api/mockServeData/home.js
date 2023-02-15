//mock数据模拟
import Mock from 'mockjs'

//图表数据
let List=[]
export default {
    getStatisticalData: ()=>{
        //Mock.Random.float产生100到8000之间的随机数,最小0位,最大0位
        for(let i=0;i<7;i++){
            List.push(
                Mock.mock({
                    苹果:Mock.Random.float(100,8000,0,0),
                    vivo:Mock.Random.float(100,8000,0,0),
                    oppo:Mock.Random.float(100,8000,0,0),
                    魅族:Mock.Random.float(100,8000,0,0),
                    三星:Mock.Random.float(100,8000,0,0),
                    小米:Mock.Random.float(100,8000,0,0),
                })
            )
        }
        return{
            code:20000,
            data: {
                //饼图
                videoData:[
                    {
                        name:'小米',
                        value:2999
                    },
                    {
                        name:'苹果',
                        value:7999
                    },
                    {
                        name:'三星',
                        value:3999
                    },
                    {
                        name:'华为',
                        value:4999
                    },
                    {
                        name:'荣耀',
                        value:2999
                    }
                ],
                //柱状图
                userData: [
                    {
                        date:'周一',
                        new:5,
                        active:200
                    },
                    {
                        date:'周二',
                        new:4,
                        active:600
                    },
                    {
                        
                        date:'周三',
                        new:5,
                        active:200
                    },
                    {
                        date:'周四',
                        new:10,
                        active:500
                    },
                    {
                        date:'周五',
                        new:60,
                        active:550
                    },
                    {
                        date:'周六',
                        new:53,
                        active:700
                    },
                    {
                        date:'周日',
                        new:33,
                        active:170
                    }
                ],
                //折线图
                orderData:{
                    date:['20191001','20191002','20191003','20191004','20191005','20191006','20191007'],
                    data:List
                },
                tableData:[
                    {
                        name:'oppo',
                        todayBuy:500,
                        monthBuy:3500,
                        totalBuy:22000
                    },
                    {
                        name:'vivo',
                        todayBuy:300,
                        monthBuy:2200,
                        totalBuy:24000
                    },
                    {
                        name:'苹果',
                        todayBuy:800,
                        monthBuy:2200,
                        totalBuy:24000
                    },
                    {
                        name:'小米',
                        todayBuy:1200,
                        monthBuy:6500,
                        totalBuy:45000
                    },
                    {
                        name:'三星',
                        todayBuy:300,
                        monthBuy:2000,
                        totalBuy:34000
                    },
                    {
                        name:'魅族',
                        todayBuy:350,
                        monthBuy:3000,
                        totalBuy:22000
                    }
                ],
                goodsData:[
                    {
                        goods_id: 1,
                        goods_name: "oppo",
                        goods_price: 2000,
                        goods_number: 150,
                        goods_time:`2023年2月15日`,
                    },
                    {
                        goods_id: 2,
                        goods_name: "vivo",
                        goods_price: 2000,
                        goods_number: 150,
                        goods_time:`2023年2月15日`
                    },
                    {
                        goods_id: 3,
                        goods_name: "苹果",
                        goods_price: 6000,
                        goods_number: 150,
                        goods_time:`2023年2月15日`
                    },
                    {
                        goods_id: 4,
                        goods_name: "小米",
                        goods_price: 2000,
                        goods_number: 150,
                        goods_time:`2023年2月15日`
                    },
                    {
                        goods_id: 5,
                        goods_name: "三星",
                        goods_price: 4000,
                        goods_number: 150,
                        goods_time:`2023年2月15日`
                    },
                    {
                        goods_id: 6,
                        goods_name: "魅族",
                        goods_price: 2000,
                        goods_number: 150,
                        goods_time:`2023年2月15日`
                    },
                    {
                        goods_id: 7,
                        goods_name: "荣耀",
                        goods_price: 3000,
                        goods_number: 150,
                        goods_time:`2023年2月15日`
                    },
                    {
                        goods_id: 8,
                        goods_name: "一加",
                        goods_price: 4000,
                        goods_number: 150,
                        goods_time:`2023年2月15日`
                    },
                    {
                        goods_id: 9,
                        goods_name: "努比亚",
                        goods_price: 3000,
                        goods_number: 150,
                        goods_time:`2023年2月15日`
                    },
                    {
                        goods_id: 10,
                        goods_name: "索尼",
                        goods_price: 5000,
                        goods_number: 150,
                        goods_time:`2023年2月15日`
                    },
                    {
                        goods_id: 11,
                        goods_name: "中兴",
                        goods_price: 2000,
                        goods_number: 150,
                        goods_time:`2023年2月15日`
                    },
                    {
                        goods_id: 12,
                        goods_name: "金立",
                        goods_price: 2000,
                        goods_number: 150,
                        goods_time:`2023年2月15日`
                    }
                ]
            }
        }
    }
}