<template>
  <div class="app">
    <div class="mySidenav">
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

<style>
*{
    font-family: 'Dosis', sans-serif;
    color: var(--cor-da-letra);
}
.app{
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  max-width: 100%;
  /* padding: 0 0 1% 0; */
  /* border: 1px solid black; */
}
.mySidenav{
  /* height: 100%; */
  width: 1%;
  /* border: 1px solid white; */
  /* border: 1px solid black; */
}
.pages{
  position: relative;
  width: 100%;
  margin: 0;
  height: 100%;
}
.card{
    background-color: white;
    border: .5px solid rgb(192, 194, 201);
    border-radius: 10px;
    box-shadow: 5px 10px 15px rgb(187, 186, 186);
}
.title{
    color: var(--cor-da-letra) !important;
}
.perfil{
    max-width: 100%;
}
.atalho{
    /* width: 100%; */
    margin-top: 2% !important;
    /* display: flex;
    justify-content: space-between; */
}
.resumoCommit{
    width: 100%;
    padding: 0 2% 0 0;
}
.ultimosProj{
    width: 100%;
    padding: 0 0  0 2%;
}
</style>
