<template>
    <div>
        App
        <span>测试</span>
        <Home/>

        <DataList :datalist="['abc','cba','nba']"/>
    </div>
</template>
<script>
import Home from './pages/Home';


export default {
    name:'App',
    // template:'<button>abc</button>',
    components:{
        Home,
    }
}
</script>
<style lang='scss'>
 div{
     span{color:#f00}
 }
</style>