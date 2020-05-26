<template lang="pug">
    .todo_input
        div.error {{validation.firstError('todo.name')}}
        input(
            type="text"
            placeholder="My TODO list ..."
            autofocus
            v-model="todo.name"
            :class="{validError : validation.hasError()}"
            @keydown.enter="addTodo"
            ).input
</template>

<script>
import { Validator } from 'simple-vue-validator';
let uniqID = 1;
export default {
    mixins: [require("simple-vue-validator").mixin],
  validators: {
    "todo.name"(value) {
      return Validator.value(value).required('Поле не должно быть пустым');
    }
  },
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
            this.$validate().then(success => {
                if(!success) return;

                uniqID++;
                this.$emit('addTodo', {...this.todo});
                this.todo.name = '';
                this.todo.id = uniqID;

                this.validation.reset();
            })
            
        }
    },
}
</script>

<style lang="scss" scoped>
.todo_input {
    position: relative;
}

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

.validError {
    border: 1px solid red;
}

.error {
    position: absolute;
    top: -30px;
    color: red;
    font-weight: bold;
}
</style>