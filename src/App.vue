<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <!-- 头部组件 -->
      <Header :KeyUpTaskName="KeyUpTaskName" />
      <!-- 列表组件 -->
      <List
        :todos="todos"
        :deleteTaskValue="deleteTaskValue"
        :updateTodo="updateTodo"
      />

      <!-- 底部组件 -->
      <Footer
        :todos="todos"
        :checkAll="checkAll"
        :deleteAllChecked="deleteAllChecked"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, watch, onMounted } from 'vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import List from './components/List.vue';

import { Todo } from './types/todos';

import { saveTodos, readTodos } from './utils/localStorageUtils';
export default defineComponent({
  name: 'App',
  components: {
    Header,
    Footer,
    List,
  },
  setup() {
    // 定义了一个数组 里边的对象是按照接口Todo形式进行规范的
    const state = reactive<{ todos: Todo[] }>({
      todos: [
        {
          name: '徐涛',
          checked: false,
          id: '111',
        },
      ],
    });

    // 初始化加载
    onMounted(() => {
      setTimeout(() => {
        // state.todos = readTodos();
      }, 2000);
    });

    // 添加数据
    const KeyUpTaskName = (todo: Todo) => {
      state.todos.unshift(todo);
    };

    // 删除数据
    const deleteTaskValue = (id: string) => {
      state.todos = state.todos.filter((item) => {
        return item.id !== id;
      });
    };

    // 更新选中状态
    const updateTodo = (todo: Todo, checked: boolean) => {
      todo.checked = checked;
    };

    // 全选，全不选
    const checkAll = (checked: boolean) => {
      // 遍历数组
      state.todos.forEach((todo) => {
        todo.checked = checked;
      });
    };

    // delete 已完成的任务
    const deleteAllChecked = () => {
      state.todos = state.todos.filter((todo) => {
        return !todo.checked;
      });
    };
    // 监视todos
    watch(() => state.todos, saveTodos, { deep: true });

    return {
      ...toRefs(state),
      KeyUpTaskName,
      deleteTaskValue,
      updateTodo,
      checkAll,
      deleteAllChecked,
    };
  },
});
</script>
<style lang="stylus" scoped></style>
