import vuex from 'vuex'
import vue from 'vue'
import menuTags from './menu-router-tag'
import Usertoken from './modules/user.js'
vue.use(vuex)
const store =new vuex.Store({
    modules:{
        menuTags,
        Usertoken
    }
});

export default store;