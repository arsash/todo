<template lang="pug">
  div.todolist
    .content
      ul.list
        li.item
          .todo__item
            label.label
              .input_block
                  input(type='checkbox').input
              .title todo name
            button(type='button').remove x
        li.item
          .todo__item
            label.label
              .input_block
                  input(type='checkbox').input
              .title todo name
            button(type='button').remove x
        li.item
          .todo__item
            label.label
              .input_block
                  input(type='checkbox').input
              .title todo name
            button(type='button').remove x

    .footer
      .footer_content
        .counter 10 items left
        .filter
          todoListFilter
                        
</template>

<script>

import todoListFilter from './todoListFilter.vue'
export default {
  components: {
    todoListFilter
  }
}
</script>

<style lang="scss" scoped>
.list {
    font-size: 24px;
    border-bottom: 1px solid #ededed;
}

.item {
  border-bottom: 1px solid #ededed;
  padding: 15px;
  &:last-child {
    border-bottom: 0 none;
  }
}

.remove {
  display: none;
  color: red;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 20px;
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

.footer {
  color: #777;
  padding: 10px 15px;
  text-align: center;
  position: relative;
  font-size: 14px;
  &:before {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 50px;
    overflow: hidden;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6, 0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6, 0 17px 2px -6px rgba(0, 0, 0, 0.2);
  }
}

.footer_content {
  display: flex;
  align-items: center;
  position: relative;
}

.filter {
  flex: 1;
}
</style>