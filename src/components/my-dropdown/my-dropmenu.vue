<template>
    <DropdownMenu style="padding:0;text-align:left;">
        <template v-for="c in item.menu" >
            <DropdownItem :key="c.id" v-if="c.menu==undefined" :name="c.menuName">
                <Icon :type="c.icon" /><span style="padding-left:8px;">
                    {{c.menuName}}
                </span>
            </DropdownItem>
            <Dropdown  placement="right" v-else :key="c.id">
                <DropdownItem >
                    <Icon :type="c.icon" />
                        <span style="padding-left:8px;">
                            {{c.menuName}}
                        </span>
                    <Icon type="ios-arrow-forward" style="margin-left:16px;" ></Icon>
                </DropdownItem> 
                <MyMenu :item="c" slot="list"></MyMenu>
            </Dropdown>
        </template>            
    </DropdownMenu>
</template>

<script>
export default {
    props:['item'],
    name:"MyMenu"
}
</script>
