<template>
    <Tooltip :content="item.moduleName" placement="right">
        <Button @click="Select(item.name)" style="width: 65px;margin-left: -5px;padding:10px 0;border-radius:0" type="text">
            <Icon :size="20" :color="IconColor"  :type="item.icon"></Icon>
        </Button>
    </Tooltip>
</template>
<script>
export default {
    props:{
        theme:{
            type:String,
            default:'dark'
        },
        item:{
            type:Object,
            default:null,
            
        }
    },
    computed:{
        IconColor () {
            return this.theme === 'dark' ? '#fff' : '#495060';
        }
    },
    methods:{
        Select (active) {
            this.$emit('on-select', active);
        }
    }
}
</script>