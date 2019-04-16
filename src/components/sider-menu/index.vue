<template>
    <div :class="theme!='dark'?'ivu-minible-menu':'ivu-minible-menu-dark'" v-if="Menus!=null && Menus!=undefined">
        <slot name="top"></slot>
        <SiderMenu :theme="theme" :menuList="Menus" v-show="!shrink" @on-select="handleSelect" /> 
        <SiderMenuMini :theme="theme" :menuList="Menus" v-show="shrink" @on-select="handleSelect"  />
    </div>
</template>
<script>

import SiderMenu from './SiderMenu.vue';
import SiderMenuMini from './SiderMenuMini.vue';
import Helper from '@/utils/menu-helper.js'
export default {
    props:{
        theme:{ type:String, default:'light'},
        shrink: { type: Boolean, default: false }
    },
    computed: {
        Menus(){
            return Helper.getMenus();
        }
    },
    created(){
    },
    methods: {
        handleSelect (name) {
            if (name!=this.$route.name){
                this.$router.push({
                    name: name
                });
                Helper.openTag(name);
            }
        }
    },
    components:{
        SiderMenu,SiderMenuMini
    }
}
</script>

