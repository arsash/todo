<template lang="pug">
    div
        h1 Todo item view
        h2 {{$route.params.todo}}
        button(
            @click="goBack"
        ) Back
</template>

<script>
    export default {
        methods: {
            goBack() {
                this.$router.go(-1)
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>