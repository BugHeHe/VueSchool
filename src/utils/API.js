import axios from 'axios'

class API{
    constructor(Controllers){
        this.api =`http://localhost:8084/api/${Controllers}`;
    }
    /**
    * 查询表中所有的内容 返回list集合
    */
    SelectList(action) {
        return axios.post(this.api + `/${action}`);
    }
    /**
     * 插入数据 参数为对象
     * @param {参数为对象} obj 
     */
    Insert(action, obj) {
        return axios.post(this.api + `/${action}`, obj);
    }
    /**
     * 修改操作 参数为对象
     * @param {参数为对象} obj 
     */
    Update(action, obj) {
        return axios.post(this.api + `/${action}`, obj);
    }

    /**
     * 删除操作，参数为ID
     * @param {参数为主键ID} id 
     */
    Delete(action, id) {
        return axios.post(this.api + `/${action}`, id);
    }
    /**
     * 
     * @param {aciton 名称} action 
     * @param {参数为对象} obj 
     */
    SelectListFirstOrDefault(action,obj){
        return axios.post(this.api+`/${action}`,obj);
    }
}
export default API;