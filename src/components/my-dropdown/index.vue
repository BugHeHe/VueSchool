<template>
    <Dropdown @on-click="select">
        <Button type="primary">
            {{item.menuName}}
            <Icon type="ios-arrow-down"></Icon>
        </Button>
        <my-dropmenu :item="item" slot="list" placement="right-start"></my-dropmenu>
    </Dropdown>
</template>

<script>
import MyDropmenu from './my-dropmenu.vue'
export default {
    props:['item'],
    components:{MyDropmenu},
    methods:{
        select(active){
            this.$emit('on-select',active);
        }
    }
}
</script>
