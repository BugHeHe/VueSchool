<template>
    <div>
        <div v-for="(item, index) in menuList" style="text-align: center;" :key="index">
            <!-- 如果只是一级菜单。 -->
            <my-drop-item :item="item" :theme="theme" v-if="isEmpty(item)"/>
            <Dropdown  v-else  placement="right" :key="index" @on-click="Select">
                <Button  style="width: 65px;margin-left: -5px;padding:10px 0;border-radius:0" type="text">
                    <Icon :size="20" :color="IconColor" :type="item.icon" />
                </Button>
                <my-dropmenu :item="item" slot="list" />
            </Dropdown>
        </div>
    </div>
</template>
<script>
import MyDropItem from '../my-dropdown/my-dropitem.vue'
import MyDropmenu from '../my-dropdown/my-dropmenu.vue'
export default {
    components:{MyDropItem,MyDropmenu},
    props:{
        theme:{
            type:String,
            default:'dark'
        },
        menuList:{
            type:Array
        },
    },
    computed:{
        IconColor () {
            return this.theme === 'dark' ? '#fff' : '#495060';
        }
    },
    methods:{
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
