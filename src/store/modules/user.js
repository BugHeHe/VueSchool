import api from '../../utils/API.js'
let ap = new api('User');
const state = {
   SystemToken:null,
   UserList:[]
}
const mutations = {
    SystemLogin(state,data){
        state.SystemToken=data;
    },
    SystemList(state,data){
        state.UserList=data;
    }
}
const actions = {
    SystemUserLogin({commit},user){
        return ap.SelectListFirstOrDefault('UserLogin',user).then(res=>{
            console.log(res.data);
            if(res.data==null || res.data==''){
                return false;
            }else
            {
                commit('SystemLogin', res.data);
                return true;
            }
        }).catch(er=>{
            console.log(er+"出现错误");
            return false;
        })
    },
    SystemListUser({commit}){
        return ap.SelectList('').then(res=>{
            console.log(res.data);
            if(res.data==null || res.data==''){
                return null;
            }else{
                commit('SystemList',res.data);
                return res.data;
            }
        }).catch(er=>{
            console.log("出现错误"+er);
        })
    }
}

const getters = {
    user_token(state){
        return state.SystemToken;
    },
    UserListGetter(state){
        return state.SystemList;
    }
}

export default {
    state,mutations,actions,getters
}
