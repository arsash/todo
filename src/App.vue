<template lang="pug">
  .container
    todo
    todo
</template>

<script>
import todo from './components/todo.vue'

export default {
  name: 'App',
  data() {
    return {
      
    }
  },
  components: {
    todo
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  font-size: 16px;
  margin-top: 60px;
  background: #f5f5f5;
  font-weight: 300;
  line-height: 1.42;
}

.container {
  width: 600px;
  margin: 0 auto;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

ul {
  margin: 0;
  padding: 0;

  li {
    list-style: none;
  }
}

* {
  box-sizing: border-box;;
}
</style>
