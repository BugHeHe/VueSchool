import api from '../../utils/API.js'
let ap = new api('User');
const state = {
   SystemToken:null
}
const mutations = {
    SystemLogin(state,data){
        state.SystemToken=data;
    }
}
const actions = {
    SystemUserLogin({commit},user){
        return ap.SelectListFirstOrDefault('UserLogin',user).then(res=>{
             commit('SystemLogin',res.data);
             return res.data;
        }).catch(er=>{
            console.log(er+"出现错误");
            return false;
        })
    }
}

const getters = {
    user_token(state){
        return state.SystemToken;
    }
}

export default {
    state,mutations,actions,getters
}
