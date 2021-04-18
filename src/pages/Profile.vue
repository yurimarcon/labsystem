<template>
    <div>
        <BotoesSuperior/>
    </div>
    <div class="container">
        <h1 class="title">Meus Dados</h1>
        <hr>
    </div>
</template>

<script>
import BotoesSuperior from '../components/BotoesSuperior'
export default {
    name:'Home',
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