<template>
  <Menu id="menu"/>
  <div id="Body" class="container shadow min-vh-100">
   <router-view/>
  </div>
  <Footer/>
</template>

<script>
import Footer from "./components/Footer";
import Menu from "./components/Menu";

export default {
  name: 'App',
  components: {
    Menu,
    Footer,
  }
}
</script>

<style>
  #Body{
    background-color: #f7f7f7;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
