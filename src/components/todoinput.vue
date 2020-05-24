<template lang="pug">
    .todo_input
        input(
            type="text"
            placeholder="What Todo? ..."
            autofocus
            v-model="todo.name"
            @keydown.enter="addTodo"
            ).input
</template>

<script>
let uniqID = 1;
export default {
    data() {
        return {
            todo: {
                id: uniqID,
                name: '',
                checked: false
            }
        }
    },
    methods: {
        addTodo() {
            uniqID++;
            this.$emit('addTodo', {...this.todo});
            this.todo.name = '';
            this.todo.id = uniqID;
        }
    },
}
</script>

<style lang="scss" scoped>
.input {
    font-size: 24px;
    padding: 16px 16px 16px 60px;
    border: 1px solid transparent;
    background: rgba(0, 0, 0, 0.003);
    box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
    line-height: 1.4em;
    outline: none;
    color: inherit;
    width: 100%;
    background: #fff;
}
</style>