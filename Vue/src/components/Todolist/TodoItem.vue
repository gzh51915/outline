<template>
  <tr>
    <td>{{index+1}}</td>
    <td>{{data.title}}</td>
    <td>{{new Date(data.date).toLocaleDateString()}}</td>
    <td>{{data.done ? '完成': '待办'}}</td>
    <td>
        <Button @click.native="handleDone">
          完成
          <template v-slot:footer>
            <span>done</span>
          </template>
          </Button>
        <Button @click.native="handleRemove">删除</Button>
    </td>
  </tr>
</template>
<script>
import Bus from './Bus';
import Button from './Button.vue';
export default {
    props:['data','index'],
    components:{
      Button
    },
    methods:{
      handleDone(){
        // console.log(666)
        // this.$parent.doneItem(this.index);
        Bus.$emit('done',this.index);
      },
      handleRemove(){
        Bus.$emit('delete',this.index);
      }
    }
};
</script>