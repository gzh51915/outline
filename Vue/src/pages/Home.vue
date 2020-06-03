<template>
    <!-- 能在这里直接使用的变量一定是组件实例的属性 -->
    <div>
        <!-- <ul>
            <li v-for="item in datalist" :key="item">{{item}}</li>
        </ul>
        {{mynumber}}
        {{mynumber2()}}

        <DataList/> -->

        <Todolist>
            <template v-slot:title>
            <h1>6月待办事项</h1>
            </template>
            <template v-slot:pagination="scope">
                <!-- scope就是slot的props -->
                <div>总数：{{scope.size}}，完成：{{scope.doneSize}}，未完成：{{scope.undoneSize}}</div>
            </template>
        </Todolist>
    </div>
</template>
<script>
import Todolist from '~/Todolist/Todolist.vue'
export default {
    data:()=>({
    //    datalist:['a','b','c'],
    //    numbers:[10,11,2,3,5,8,20]
    }),
    computed:{
        // mynumber(){ //getter
        //     return this.numbers.filter(item=>item<10)
        // }
    },
    methods:{
        // mynumber2(){
        //     return this.numbers.filter(item=>item<10)
        // }
    },
    created(){
         console.log(this)
    },
    components:{
        Todolist
    }
}
</script>
<style>

</style>