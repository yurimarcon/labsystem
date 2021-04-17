<template>
    <div>
        <BotoesSuperior/>
    </div>
  <div class="container">
      <h1>Diretório</h1>
  </div>
</template>

<script>
import BotoesSuperior from '../components/BotoesSuperior'
export default {
    name:'Directory',
    components:{BotoesSuperior}
}
</script>

<style>
.container{
    max-width: 100%;
    margin-left: 5%;
    margin-right: 5%;
}
</style>