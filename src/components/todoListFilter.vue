<template lang="pug">
    div
     button.btn(type='button') all
     button.btn(type='button').active active
     button.btn(type='button') completed
</template>

<script>
    export default {
        
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
    }
    
    &:last-child {
        margin-right: 0;
    }
}
</style>