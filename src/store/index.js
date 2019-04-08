import vuex from 'vuex'
import vue from 'vue'
import menu from './modules/Menu.js'
import menuTags from './menu-router-tag'
import Usertoken from './modules/user.js'
vue.use(vuex)
const store =new vuex.Store({
    modules:{
        menuTags,
        Usertoken,
        menu,
    }
});

export default store;