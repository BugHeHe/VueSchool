<template>
    <Layout class="main">
        <div class="sider-menu-con" :style="{width: shrink?'60px':'200px', overflow: shrink ? 'visible' : 'auto'}">
            <keep-alive>
                <sider-menu :shrink="shrink" theme="dark"  >
                    <logo-con slot="top" :shrink="shrink" title="ThinKr.Monitor" mini_title="TM"></logo-con> 
                </sider-menu>
            </keep-alive>
        </div>
        <main-header @toggleShrink="(x)=>shrink=x"></main-header>
        <div class="single-page-con" :style="{left: shrink?'60px':'200px'}">
            <div class="single-page">
                <keep-alive >
                    <router-view></router-view>
                </keep-alive>
            </div>
        </div>
    </Layout>
</template>

<script>
import '../assets/css/admin.css'
import SiderMenu from '../components/sider-menu'
import MainHeader from '../components/main-header'
import LogoCon from '../components/logo-con'
export default {
    data(){
        return {
            shrink:false,
        }
    },
    created(){
         if(this.$store.state.Usertoken.SystemToken==null || this.$store.state.Usertoken.SystemToken==""){
           return this.$router.push('/login');
        }
        this.$store.dispatch('load_menus',this.$store.state.Usertoken.SystemToken.id);
    },
    components:{SiderMenu,LogoCon,MainHeader}
}
</script>
