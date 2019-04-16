<template>
    <div>   
    <Row>
      <h3>用户设置</h3>
         <Table border  ref="selection" :columns="columns4" :data="historyData"></Table>
         <Page :total="count" :page-size="tiao" :current="ye" show-sizer   show-total @on-change="Yebian" @on-page-size-change="TiaoBian" style="margin-top:10px;"/>
     <Modal
                v-model="modal2"
                title="修改用户信息"
                @on-ok="XiuTi"
              >
                <Form ref="Dui" :model="Dui" :label-width="100">
                       
                </Form>
            </Modal>
    </Row>
        
    </div>
</template>
<script>
export default {
    data(){
        return{
             Dui:{
                id:'',
                roleName:'',    
                description:'',
            },//进行修改角色

            modal1:false,
            modal2:false,
            columns4: [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: '角色名称',
                        key: 'roleName'
                    },
                    {
                        title: '角色描述',
                        key:'description',
                    }
                    ,{
                    title:'操作',
                    render:(h,obj)=>{
                        let btn2 = {
                            // 属性
                            props:{
                                type:'success',
                            },
                            style:{
                                marginRight:'8px'
                            },
                            // 事件
                            on:{
                                click:()=>{
                                     this.Dui.roleName=obj.row.roleName;
                                     this.Dui.description=obj.row.description;
                                     this.Dui.id=obj.row.id;
                                     this.modal2=true;
                                }
                            }
                        };
                         let btn3 = {
                            // 属性
                            props:{
                                type:'error',
                            },
                            // 事件
                            on:{
                                click:()=>{
                                    alert("删除");
                                }
                            }
                        };
                        let arry = [
                           
                            h('Button',btn2,'修改'),
                            h('Button',btn3,'删除'),
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
         if(this.$store.state.Usertoken.Dan==null || this.$store.state.Usertoken.Dan==''){
             this.$router.push('/User');
         }
    },
    methods:{
        Chu(name){
            this.$store.dispatch(name).then(res=>{
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
        Chu(name,dui){
            this.$store.dispatch(name,dui).then(res=>{
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
            //页数发生改变
            Yebian(s){
                let kai=(s-1)*this.tiao;//开始
                let jie=s*this.tiao;//结束
                this.historyData=this.zong.slice(kai,jie);
            },
            //条数发生改变
            TiaoBian(s){ 
                this.historyData=this.zong.slice(0,s);
            },
            //修改进行提交
            XiuTi(){
                console.log(this.Dui);
                //this.Chu('UserGaiAction',this.Dui);
            }
        
            
    }
}
</script>
