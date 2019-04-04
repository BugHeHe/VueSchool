
import store from '@/store'

class MenuTagHelper{
    
    static getMenus(){
        return store.getters.menus;
    }

    static openTag(name){
        store.dispatch('open',name);
    }

    static getTags(){
        return store.getters.tags;
    }


    static closeTag(vm,tag){
        if (vm.$route.name==tag.name){
            // 如果关闭的是最后一个 则 往前
            let index = vm.pageTagsList.indexOf(tag);
            if (index == vm.pageTagsList.length-1 && index>=1){
                vm.$router.push({
                    name:vm.pageTagsList[index-1].name
                })
            }else if (index<vm.pageTagsList.length-1){
                vm.$router.push({
                    name:vm.pageTagsList[index+1].name
                })
            }
        }
        store.dispatch('close',tag);
    }
    static closeAll(vm){
        for(let t= MenuTagHelper.getTags().length-1;t>=1;t--){
            MenuTagHelper.closeTag(vm,MenuTagHelper.getTags()[t]);
        }

    }
    static closeOther(vm,tag){
        for(let t= MenuTagHelper.getTags().length-1;t>=1;t--){
            let temp = MenuTagHelper.getTags()[t];
            if (temp.name==tag){
                continue;
            }
            MenuTagHelper.closeTag(vm,temp);
        }

    }
    static scorll(vm,e){
        var type = e.type;
            let delta = 0;
            if (type === 'DOMMouseScroll' || type === 'mousewheel') {
                delta = (e.wheelDelta) ? e.wheelDelta : -(e.detail || 0) * 40;
            }
           // console.log(delta);
            let left = 0;
            if (delta > 0) {
                left = Math.min(0, vm.tagBodyLeft + delta);
            } else {
                if (vm.$refs.scrollCon.offsetWidth - 100 < vm.$refs.scrollBody.offsetWidth) {
                    if (vm.tagBodyLeft < -(vm.$refs.scrollBody.offsetWidth - vm.$refs.scrollCon.offsetWidth + 100)) {
                        left = vm.tagBodyLeft;
                    } else {
                        left = Math.max(vm.tagBodyLeft + delta, vm.$refs.scrollCon.offsetWidth - vm.$refs.scrollBody.offsetWidth - 100);
                    }
                } else {
                    vm.tagBodyLeft = 0;
                }
            }
            vm.tagBodyLeft = left;
    }
}


export default MenuTagHelper;