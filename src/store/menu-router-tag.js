
import router from '@/router'
import loader from '@/utils/cmp-loader'
import axios from 'axios'
import api from '../utils/API.js'
let ap = new api('mokuai');

const state = {
    menus:[],   //菜单
    tags:[
        {
            id:'dashboard',
            name:'dashboard',
            path:'/',
            icon:'md-speedometer',
            close:false
        }
    ]     //标签
}
const mutations = {
    /**
     *
     * 设置菜单数据
     * @param {状态对象} state
     * @param {数据} data
     */
    set_menus(state,data){
        state.menus=data;
    },

    set_tags(state,menu){
        if (state.tags.filter(t=>t.id===menu.id).length>0)
            return;
        state.tags.push(menu);
    },
    unshift_tag(state,tag){
        let x =state.tags.indexOf(tag);
        state.tags.splice(x,1);
    },
    removeall_tags(state){
        state.tags.splice(1);
    }
}
function getMenu(menu,name){
    if (menu.name==name)
        return menu;
    if (menu.children!=undefined){
        for(let c of menu.children){
            if (c.name==name){
                return c;
            }
        }
        return getMenu(c,name);
    }
}

const actions = {
    /**
     * 获取所有的菜单数据
     * @param {commit} 提交对象 
     */
    load_menus({ commit }, UserID){
         ap.SelectListFirstOrDefault('MenuList', { id: UserID }).then(res => {
            if (res.data == '' || res.data == null) {
                commit('set_menus', null);
            } else {
                commit('set_menus', res.data);
            }

        }).catch(er => {
            console.log(er+"出现错误");
        });
    },
    open({commit,state},name){
        let menu = null;
        for(let m of state.menus){
            menu = getMenu(m,name);
        }
        commit('set_tags',menu);
    },
    close({commit},tag){
        commit('unshift_tag', tag);

    },
    closeall({commit}){
        commit('removeall_tags');
    }
}



function setComponent(route){
    route["component"]=loader(route.view);
    if (route.children!=undefined){
        for(let c of route.children){
            setComponent(c);
        }
    }
    return route;
}

const getters = {
    menus(state){
        for(let m of state.menus){
            m = setComponent(m);
        }
        router.addRoutes(state.menus);
        return state.menus;
    },
    tags(state){
        return state.tags;
    },
    current:(state,name)=>(name)=>{
        return state.tags.filter(t=>t.name==name)[0];
    }
}
export default {
    state,mutations,actions,getters
}

 