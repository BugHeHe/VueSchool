import api from '../../utils/API'
let ap = api('Menu');
const state={
    Menus:[],
}
const mutations={
    //
    MneuListMutations(state,data){
        state.Menus=data;
    }
}
const actions={
    //根据当前人登录的信息 获取该权限所拥有的的 功能
    MenuList({commit},user){
        ap.SelectListFirstOrDefault('',user).then(res=>{
            commit('MneuListMutations',res.data);
            return res.data;
        }).catch(er=>{
            commit('MneuListMutations',null);
            console.log(er);
        });
    }
    
}
const getters={

}
export default {
    state, mutations, actions, getters
}