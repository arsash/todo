<template lang="pug">
    div
     .todo__item
            label.label
              .input_block
                  input(type='checkbox').input
              .title {{todo.name}}
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
}

.todo__item {
  display: flex;
  align-items: center;

  &:hover {
    .remove {
      display: flex;
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
</style>