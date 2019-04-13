<template>
    <div class="main-header-con" :style="{paddingLeft: shrink?'60px':'200px'}">
        <div class="main-header">
            <div class="navicon-con">
                <Button :style="{transform: 'rotateZ(' + (this.shrink ? '-90' : '0') + 'deg)'}" type="text" @click="toggleShrink">
                    <Icon type="md-menu" size="32"></Icon>
                </Button>
            </div>
            <div class="header-middle-con">
                <div class="main-breadcrumb">
                    <Breadcrumb>
                        <BreadcrumbItem 
                            v-for="item in currentPath" 
                            :href="item.path" 
                            :key="item.id"
                        ><Icon :type="item.icon"> </Icon> {{item.name}}</BreadcrumbItem>
                    </Breadcrumb>
                </div>
            </div>
            <div class="header-avator-con">
                <!-- <div  class="message-con">
                    <Dropdown trigger="click">
                        <Tooltip :content="msgTip" placement="bottom">
                            <Badge :count="3" >
                                <Icon type="md-notifications" size="22"/>
                            </Badge>
                        </Tooltip>
                        <DropdownMenu slot="list">
                            <DropdownItem>123123</DropdownItem>
                            <DropdownItem>123123</DropdownItem>
                            <DropdownItem>123123</DropdownItem>
                            <DropdownItem>123123</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    
                </div> -->
                <div class="user-dropdown-menu-con">
                <Row type="flex" justify="end" align="middle" class="user-dropdown-innercon">
                    <Dropdown transfer trigger="click" @on-click="SelectedDropDownItem">
                        <a href="javascript:void(0)">
                            <span class="main-user-name">{{ User.userName }}</span>
                            <Icon type="arrow-down-b"></Icon>
                        </a>
                        <DropdownMenu transfer slot="list">
                            <DropdownItem name="accInfo"  >
                                个人中心
                            </DropdownItem>
                            <DropdownItem name="logOff" divided>
                                退出登录
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>                 
                </Row>
                </div>
            </div>
        </div>
        <div class="tags-con">
            <TagList ></TagList>
        </div>
    </div>
</template>

<script>
import TagList  from '../tag-list'
export default {
    data(){
        return {
            shrink:false,
        }
    },
    computed:{
         User(){
            return this.$store.state.Usertoken.SystemToken;
        },
        currentPath(){
            let page = this.$store.getters.current(this.$route.name);
            var rs= [
                { path:'/',name:'首页',icon:'md-speedometer' }
            ];
            if (page && page.name!='dashboard'){
                rs.push({
                    path:page.path,
                    name:page.title,
                    icon:page.icon
                })
            }
            return rs;
                

        }
    },
    methods:{
        SelectedDropDownItem(name){
            console.log(name);
            switch(name){
                case "logOff":
                    // this.$store.dispatch('SIGN_OFF');
                    // this.$store.dispatch('CLOSE_ALL_TAGS')
                    this.$store.state.Usertoken.SystemToken=null;
                    this.$router.push('/login'); 
                    break;
                case "accInfo":
                    // this.$router.push('/account/info');
                    break;
            }
        },
        toggleShrink(){
            this.shrink=!this.shrink;
            this.$emit('toggleShrink',this.shrink);
        }
    },
    components:{TagList},

}
</script>
