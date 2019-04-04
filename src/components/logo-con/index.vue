<template>
    <div  class="logo-con">
        <div v-if="!shrink" class="logo-big" style="font-size:16px;">{{title}}<small style="font-weight:400;font-size:40%"> beta 1.0</small></div>
        <div v-if="shrink" class="logo-mini" style="font-size:16px">{{mini_title}}</div>
    </div>
</template>

<script>
export default {
    props:{shrink:{type:Boolean,default:false},title:{type:String,default:'application'},mini_title:{type:String,default:'AP'}}
}
</script>