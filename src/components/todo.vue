<template lang="pug">
  
    div.todo
        todo-input(@addTodo="addTodo")
        todo-list(:todos="todos")
        div
            pre {{todos}}  
</template>

<script>

import todoInput from './todoinput'
import todoList from './todolist'

    export default {
        name: 'todo',
        data() {
            return {
                todos: []
            }
        },
        components: {
            todoInput, todoList
        },
        methods: {
            addTodo(todo) {
                this.todos.push(todo);
            }
        },
    }
</script>

<style lang="scss" scoped>
.todo {
  margin-top: 100px;
  background: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
}
</style>