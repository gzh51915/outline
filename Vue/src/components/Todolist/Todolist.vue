<template>
  <div class="totolist">
    <div>
      <slot name="title" />
    </div>
     <!-- <slot /> -->
    <table>
      <thead>
        <tr>
          <td>#</td>
          <td>待办事项</td>
          <td>时间</td>
          <td>状态</td>
          <td>操作</td>
        </tr>
      </thead>
      <tbody>
        <!-- <tr v-for="(item,idx) in data" :key="item.id">
                    <td>{{idx+1}}</td>
                    <td>{{item.title}}</td>
                    <td>{{new Date(item.date).toLocaleDateString()}}</td>
        </tr>-->
        <TodoItem v-for="(item,idx) in data" :key="item.id" :data="item" :index="idx" />
      </tbody>
    </table>
   
    <div>
      <slot 
        name="pagination" 
        :size="data.length" 
        :doneSize="doneList.length" 
        :undoneSize="undoneList.length"
        />
    </div>
  </div>
</template>
<script>
import TodoItem from "./TodoItem.vue";
import Bus from "./Bus"; // 得到一个vue实例

export default {
  data() {
    return {
      data: [
        {
          id: 1,
          title: "复习Vue知识",
          done: false,
          date: Date.now()
        },
        {
          id: 2,
          title: "完善Vue的项目",
          done: false,
          date: Date.now() + 100
        }
      ]
    };
  },
  computed:{
      doneList(){
          return this.data.filter(item=>item.done)
      },
      undoneList(){
          return this.data.filter(item=>!item.done)
      }
  },
  components: {
    TodoItem
  },
  mounted() {
    // 给Bus实例添加事件
    Bus.$on("create", this.createItem);
    Bus.$on("delete", this.removeItem);
    Bus.$on("done", this.doneItem);

    //   Bus.$emit('done')
  },
  methods: {
    createItem(title) {
      const newData = {
        id: this.data.length + 1,
        title,
        done: false,
        date: Date.now()
      };

      this.data.unshift(newData);
    },
    removeItem(idx) {
      this.data.splice(idx, 1);
    },
    doneItem(idx) {
      this.data[idx].done = true;
    }
  }
};
</script>