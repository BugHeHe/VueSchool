<template>
    <!-- 标签栏 -->
    <div ref="scrollCon" @DOMMouseScroll="handlescroll" @mousewheel="handlescroll" class="tags-outer-scroll-con">
        <!-- 右边那个操作用的按钮 -->
        <div class="close-all-tag-con">
            <Dropdown transfer @on-click="handle_options">
                <Button size="small" type="primary">
                    标签选项
                    <Icon type="arrow-down-b"></Icon>
                </Button>
                <DropdownMenu slot="list">
                    <DropdownItem name="clear_all">关闭所有</DropdownItem>
                    <DropdownItem name="clear_other">关闭其他</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
        <!-- 左侧可以滚动的区域 -->
        <div ref="scrollBody" class="tags-inner-scroll-body" :style="{left: tagBodyLeft + 'px'}">
            <transition-group name="taglist-moving-animation">
                <Tag type="dot" 
                    @click.native="changePage(item)"
                    @on-close="closePage(item)" 
                    v-for="item in pageTagsList" 
                    :key="item.id" 
                    :color="item.name==$route.name?'primary':'default'"
                    :closable ="item['close']==undefined"
                    ref="TagList">{{item.title}}
                </Tag>
            </transition-group>
        </div>
    </div>
</template>
<script>
import Helper from '../../utils/menu-helper.js'
export default {
    data(){
        return {
            tagBodyLeft: 0,
        }
    },
    computed:{
        pageTagsList(){
            return Helper.getTags();
        },
    },
    methods:{
        changePage(tag){
            if (this.$route.name==tag.name)
                return;
            this.$router.push({
                name:tag.name
            })
        },

        /**  关闭标签 */
        closePage (tag) {            
            Helper.closeTag(this,tag);
        },
        
        handle_options(btn){
            switch(btn){
                case "clear_all":
                    Helper.closeAll(this);
                    break;
                default :
                    Helper.closeOther(this,this.$route.name);
                    break;
            }
        },

        /**
         * 处理标签栏 滚动事件
         */
        handlescroll (e) {
            Helper.scorll(this,e);
        }
    }
}
</script>

