<template lang="pug">
    div
     .todo__item
            label.label(:class="{checked: todo.checked}")
              .input_block
                  input(type='checkbox' @change="changeTodo" :checked="todo.checked").input
              .title {{todo.name}}
            router-link(
              tag="button"
              :to="`/view/${todo.name}`"
              class="view"
            ) more ...
            button(type='button' @click="removeTodo").remove x
</template>

<script>
    export default {
        name: 'listItem',
        props: {
            todo: Object
        },
        methods: {
            removeTodo() {
                this.$emit('removeTodo', this.todo.id)
            },
            changeTodo(e) {
              console.log(e.target.checked)
              const todoItem = {
                ...this.todo,
                checked: e.target.checked
              }
              this.$emit('checkTodo', todoItem)
            }
        }
    }
</script>

<style lang="scss" scoped>
.remove {
    background: transparent;
    color: red;
    border: none;
    cursor: pointer;
    font-size: 20px;
    visibility: hidden;
}

.view {
  visibility: hidden;
  border: none;
  cursor: pointer;
  padding: 10px 25px;
  margin-right: 15px;

  &:hover {
    // background: aliceblue;
  }
}

.todo__item {
  display: flex;
  align-items: center;

  &:hover {
    .remove {
      visibility: visible;
    }

    .view {
      visibility: visible;
    }
  }
}

.label {
  display: flex;
  align-items: center;
  flex: 1;
}

.input_block {
  width: 60px;
}

.checked .title {
  text-decoration: line-through;
  color: green;
}
</style>