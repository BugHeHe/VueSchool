<template>
    <Menu :theme="theme" width="200" @on-select="Select" accordion>
        <!-- 循环遍历所有的菜单数据 -->
        <template v-for="item in menuList">
            <!-- 如果不包含子项集合 -->
            <MenuItem v-if="isEmpty(item)" :name="item.moduleName" :key="item.id">
                <Icon v-if="item.icon!=null || item.icon!=undefined" :type="item.icon " size=14  :key="'menuicon' + item.moduleName"></Icon>
                <span class="layout-text" :key="'item.moduleName' + item.moduleName">{{item.moduleName}}</span>  
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
        menuList:{type:Array},
    },
    created(){
    },
    methods:{
        /*
         * @augments active 选中的菜单的名字
         */
        Select (active) {
            this.$emit('on-select', active);
        },
        isEmpty(item){
            if (item.menu===undefined || item.menu===null)
                return true;
            if (item.menu!=undefined && item.menu!=null){
                if (item.menu.length===0)
                    return true;
            }
            return false;
        }
    }
}
</script>

