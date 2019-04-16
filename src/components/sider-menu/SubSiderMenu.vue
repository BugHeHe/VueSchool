<template>
    <!-- 如果包含子项集合 -->
    <Submenu v-if="item.menu.length>0"  :name="item.moduleName" :key="item.id">
        <!-- 子菜单的 标题 -->
        <template slot="title">
            <Icon :type="item.icon" size=14 v-if="item.icon!=null || item.icon!=undefined"></Icon>
            <span class="layout-text" :key="'item.id' + item.moduleName">{{item.moduleName}}</span>  
        </template>
        <!-- 子菜单列表 -->
        <template v-for="child in item.menu">
            <MenuItem :name="child.name" :key='child.id' v-if="isEmpty(child)">
                <Icon :type="child.icon" size=14 ></Icon>
                <span class="layout-text">{{ child.menuName }}</span>
            </MenuItem>
            <SubSiderMenu :key="child.id" :item='child' v-else/>
        </template>
    </Submenu>
</template>

<script>
export default {
    props:['item'],
    name:'SubSiderMenu',
    methods:{
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