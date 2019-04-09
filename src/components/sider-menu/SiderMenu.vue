<template>
    <Menu :theme="theme" width="200" @on-select="Select">
        <!-- 循环遍历所有的菜单数据 -->
        <template v-for="item in menuList">
           {{item.modulename}}
            <!-- 如果不包含子项集合 -->
            <MenuItem v-if="isEmpty(item)" :name="item.modulename" :key="item.id">
                <Icon v-if="item.icon!=null || item.icon!=undefined" :type="item.icon " size=14  :key="'menuicon' + item.modulename"></Icon>
                <span class="layout-text" :key="'modulename' + item.moduleName">{{item.moduleName}}</span>  
            </MenuItem>
            <sub-sider-menu :item="item" v-else :key="item.id" />
        </template>
    </Menu>
</template>
<script>
import SubSiderMenu from './SubSiderMenu.vue'
export default {
    components:{SubSiderMenu},
    props:{
        theme:{type:String,default:'light'},

        // 菜单列表数据源
        menuList:[],
    },
    created(){
         let userid=this.$store.state.Usertoken.SystemToken.id;
         this.$store.dispatch('MenuList1actions').then(res=>{
             if(res){
                 console.log(this.$store.state.menu.MenuList);
                 this.menuList=this.$store.state.menu.MenuList;
                 console.log("-----------"+this.menuList);

             }else
             {
                 alert("出现错误");
             }
         });
    },
    methods:{
        /*
         * @augments active 选中的菜单的名字
         */
        Select (active) {
            this.$emit('on-select', active);
        },
        isEmpty(item){
            if (item.children===undefined || item.children===null)
                return true;
            if (item.children!=undefined && item.children!=null){
                if (item.children.length===0)
                    return true;
            }
            return false;
        }
    }
}
</script>

