<template>
    <div>
        <h1>用户设置</h1>
         <Table border ref="selection" :columns="columns4" :data="historyData"></Table>
           
            <Page :total="count" :page-size="tiao" :current="ye" show-sizer   show-total @on-change="Yebian" @on-page-size-change="TiaoBian"/>
    </div>
</template>
<script>
export default {
    data(){
        return {
                 columns4: [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: '姓名',
                        key: 'name'
                    },
                    {
                        title: '年龄',
                        key:'age',
                    },{
                        title:'家庭住址',
                        key:'address',
                    }
                ],
                zong:[],//总数据
                historyData:[],//显示的数据
                ye:2,//当前页数
                count:50,//总页数
                tiao:10,//每页条数

        }
    },
    created(){
            this.$http.get('http://192.168.43.25:8088/api/Info/GetList').then(res=>{
                    this.zong=res.data;
                    this.count=this.zong.length;
                    if(this.count<this.tiao){
                        this.historyData=this.zong;
                    }else{
                        this.historyData=this.zong.slice(0,this.tiao);
                    }
            })
    },
    methods:{
           
            Yebian(s){
                let kai=(s-1)*this.tiao;//开始
                let jie=s*this.tiao;//结束
                this.historyData=this.zong.slice(kai,jie);
            },
            TiaoBian(s){ 
                this.historyData=this.zong.slice(0,s);
            }
    }
}
</script>