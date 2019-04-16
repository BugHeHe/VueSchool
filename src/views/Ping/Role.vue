<template>
    <div>   
    <Row>
      <h1>用户设置</h1>
       
         <Table border ref="selection" :columns="columns4" :data="historyData"></Table>
         <Page :total="count" :page-size="tiao" :current="ye" show-sizer   show-total @on-change="Yebian" @on-page-size-change="TiaoBian" style="margin-top:10px;"/>
         <Modal
        v-model="modal1"
        title="Common Modal dialog box title">
        <p>Content of dialog</p>
        <p>Content of dialog</p>
        <p>Content of dialog</p>
    </Modal>
    </Row>
        
    </div>
</template>
<script>
export default {
    data(){
        return{modal1:false,
            columns4: [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: '姓名',
                        key: 'userName'
                    },
                    {
                        title: '账号',
                        key:'userCid',
                    },{
                        title:'密码',
                        key:'password',
                    }
                    ,{
                    title:'操作',
                    render:(h,obj)=>{
                        let btn1 = {
                            // 属性
                            props:{
                                type:'primary',
                                size:'small'
                            },
                            style:{
                                marginRight:'8px'
                            },
                            // 事件
                            on:{
                                click:()=>{
                                    //console.log(obj.row);//当前行的数据
                                    this.modal1=true;
                                    this.$Modal.info({
                                        title:'查看数据',
                                        content:JSON.stringify(obj.row)
                                    });
                                }
                            }
                        };
                        let btn2 = {
                            // 属性
                            props:{
                                type:'warning',
                                size:'small'
                            },
                            style:{
                                marginRight:'8px'
                            },
                            // 事件
                            on:{
                                click:()=>{
                                    alert('修改');
                                    console.log(obj.row);//当前行的数据
                                }
                            }
                        };
                         let btn3 = {
                            // 属性
                            props:{
                                type:'error',
                                size:'small'
                            },
                            // 事件
                            on:{
                                click:()=>{
                                    alert('删除');
                                    console.log(obj.row);//当前行的数据
                                    this.users.splice(obj.index,1);
                                }
                            }
                        };
                        let arry = [
                            h('Button',btn1,'Info'),
                            h('Button',btn2,'Edit'),
                            h('Button',btn3,'Delete'),
                        ]
                        return h('div',arry);
                    }
                    }
                ],
                zong:[],//总数据
                historyData:[],//显示的数据
                ye:2,//当前页数
                count:50,//总页数
                tiao:5,//每页条数

        
        }
    },
     created(){
            this.$store.dispatch('SystemListUser').then(res=>{
                if(res!=null){
                    this.zong=res;
                    this.count=this.zong.length;
                    if(this.count<this.tiao){
                        this.historyData=this.zong;
                    }else{
                        this.historyData=this.zong.slice(0,this.tiao);
                    }
                }else
                {
                    alert('没有数据');
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
