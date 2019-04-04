# ThinKr.MicroService.Monitor

基于VUE 开发的 微服务同一监控平台

## 组件说明

### sider-menu
   此组件为侧边栏菜单组件。
   属性列表：
   theme 主题颜色      String      dark/light(默认值) .
   shrink 是否折叠     Boolean     true/false(默认不折叠)
   menu-list 菜单列表  Array       默认为[]
       菜单项属性：
           id          菜单项编号，可对应数据表中主键
           name        菜单项名称，此名称需要参与到路由规则中，因此必须和路由规则中的 路由项 的name 对应。
           title       显示的文本
           icon        显示的图标
           children    子菜单列表，其中列表项的 数据结构与菜单项的 数据结构一致。本属性可以不进行设置。#   V u e S c h o o l  
 