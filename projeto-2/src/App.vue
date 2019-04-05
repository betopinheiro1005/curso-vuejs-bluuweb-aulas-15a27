<template>
  <div id="app" class="container">
    <img alt="Vue logo" src="./assets/logo.png">
    <Cabecalho></Cabecalho>
    <Lista></Lista>
  </div>
</template>

<script>
import Cabecalho from './components/Cabecalho.vue'
import Lista from './components/Lista.vue'

export default {
  name: 'app',
  components: {
    Cabecalho,
    Lista
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
