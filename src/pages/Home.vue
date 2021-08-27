<template>
  <div id="app">
    <Header :title="this.title" :text="this.text" :price="this.price"/>
    <NavBar />
    <List />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import NavBar from '../components/NavBar.vue'
import List from '../components/List.vue'

export default {
  name: 'App',
  components: {
    Header,
    NavBar,
    List
  },
  data() { 
    return {
      title: 'Histórico Empresarial',
      text: 'O aplicativo Histórico Empresarial permite ao usuário ter acesso a todos os fatos e acontecimentos relevantes de uma empresa desde o seu ano de fundação.',
      price: 40.00
    }
  }
}
</script>

<style>
:root {
  --primary_linearGradient: linear-gradient(51deg, #f3873b 50%, #f0690a 100%);
}

#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body{
    margin: 0;
    padding: 0;
}

h1{
    margin: 0;
    padding: 0;
}
</style>
