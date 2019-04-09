import api from '../../utils/API.js'
let ap = new api('mokuai');
const state = {
    MenuList:[],
}
const mutations = {
    MneuListMutations(state, data) {
        state.MenuList = data;
    }
}
const actions = {
    //根据当前人登录的信息 获取该权限所拥有的的 功能
    MenuList1actions({commit}) {
        return ap.SelectListFirstOrDefault('MenuList').then(res => {
            if (res.data == '' || res.data==null) {
                commit('MneuListMutations', null);
                return false;
            } else {
                commit('MneuListMutations', res.data);
                return true;
            }

        }).catch(er => {
            console.log(er);
            return false;
        });
    }

}

const getters = {
    MenuListGetter(state) {
        return state.MenuList;
    }
}

export default {
    state, mutations, actions, getters
}

