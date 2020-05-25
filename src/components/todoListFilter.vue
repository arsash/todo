<template lang="pug">
    div
     button.btn(
         v-for="filter in filters"
         @click="filterTodos(filter)"
         :class="{active: currentFilter === filter}"
         type='button'
     ) {{ filter }}
</template>

<script>
    export default {
        data() {
            return {
                filters: ['all', 'active', 'completed'],
                currentFilter: 'all'
            }
        },
        methods: {
            filterTodos(filter) {
                this.currentFilter = filter
                this.$emit('filterTodos', filter)
                
            }
        },
    }
</script>

<style lang="scss" scoped>
.btn {
    margin-right: 20px;
    border: none;
    background: transparent;
    font-weight: 300;
    color: inherit;
    cursor: pointer;
    border: 1px solid transparent;
    border-radius: 3px;
    outline: none;
    
    &.active {
        border-color: rgba(175, 47, 47, 0.2);
        background: aliceblue;
    }
    
    &:last-child {
        margin-right: 0;
    }
}
</style>