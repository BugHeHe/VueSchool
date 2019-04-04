<template>
    <DropdownMenu style="padding:0;text-align:left;">
        <template v-for="c in item.children" >
            <DropdownItem :key="c.id" v-if="c.children==undefined" :name="c.name">
                <Icon :type="c.icon" /><span style="padding-left:8px;">
                    {{c.title}}
                </span>
            </DropdownItem>
            <Dropdown  placement="right" v-else :key="c.id">
                <DropdownItem >
                    <Icon :type="c.icon" />
                        <span style="padding-left:8px;">
                            {{c.title}}
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
