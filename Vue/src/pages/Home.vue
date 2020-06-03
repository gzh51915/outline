<template>
    <!-- 能在这里直接使用的变量一定是组件实例的属性 -->
    <div>
        <ul>
            <li v-for="item in datalist" :key="item">{{item}}</li>
        </ul>
        {{mynumber}}
        {{mynumber2()}}

        <DataList/>
    </div>
</template>
<script>
import DataList from '~/Datalist'
export default {
    data:()=>({
       datalist:['a','b','c'],
       numbers:[10,11,2,3,5,8,20]
    }),
    computed:{
        mynumber(){ //getter
            return this.numbers.filter(item=>item<10)
        }
    },
    methods:{
        mynumber2(){
            return this.numbers.filter(item=>item<10)
        }
    },
    created(){
         console.log(this)
    },
    components:{
        DataList
    }
}
</script>
<style>

</style>