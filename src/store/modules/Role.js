import ap from '../../utils/API.js'
let app = new ap('Role');

const state={
    UserRoleList:[],
}
const mutations={
    UserRoleMu(state,data){
        state.UserRoleList=data;
    }
}
const actions={
    UserRoleAc({commit},id){
        return app.SelectListFirstOrDefault('UserList', { useid:id}).then(res=>{
            if(res.data==null || res.data==''){
                return null;
            }else{
                commit('UserRoleMu',res.data);
                return res.data;
            }
        }).catch(er=>{
            console.log("查询用户所拥有的角色时出现问题 Store中的 Role.js文件 UserRoleAC");
        })
    }
}
const getters={

}

export default {
    state,mutations,actions,getters
}