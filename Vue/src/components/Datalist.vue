<template>
    <div>datalist
        <ul>
            <li v-for="item in datalist" :key="item">{{item}}</li>
        </ul>

    </div>
</template>
<script>
export default {
    props:{
        datalist:{
            type:Array,
            default:function(){
                return [10,20]
            }
        }
    },
    data(){
        return {
            page:1,
            size:10
        }
    },
    mounted(){
        console.log('datalist',this)
    }
}
</script>