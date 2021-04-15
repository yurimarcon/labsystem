<template>
  <div class="app">
    <div class="nav">
      <Navbar/>
    </div>
    <div class="pages">
      <router-view/>
    </div>

  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style scoped>

.app{
  display: flex;
  width: 100%;
  max-width: 100%;
}
.nav{
  position: relative;
  width: 25%;
}
.pages{
  position: relative;
  width: 100%;
  /* margin: 5% 0 2% 4%; */
  margin: 0 ;
}
</style>
