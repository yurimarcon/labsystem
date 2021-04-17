<template>
    <div>
        <BotoesSuperior/>
    </div>
    <div class="container">
        <div class="perfil">
            <ResumoPerfil/>
        </div>
        <div class="atalho">
            <div class="resumoCommit">
                <UltimosCommits/>
            </div>
            <div class="ultimosProj">
                <UltimosProjetos/>
            </div>
        </div>
    </div>
</template>

<script>
import ResumoPerfil from '../components/ResumoPerfil'
import UltimosCommits from '../components/UltimosCommits'
import UltimosProjetos from '../components/UltimosProjetos'
import BotoesSuperior from '../components/BotoesSuperior'

export default {
    name:'Home',
    components: {ResumoPerfil,UltimosCommits,UltimosProjetos,BotoesSuperior}
}
</script>

<style>
*{
    font-family: 'Dosis', sans-serif;
    color: var(--cor-da-letra);
}
.card{
    background-color: white;
    border: .5px solid rgb(192, 194, 201);
    border-radius: 10px;
    box-shadow: 5px 10px 15px rgb(187, 186, 186);
}
.container{
    max-width: 100%;
    margin-left: 5%;
    margin-right: 5%;
}
.perfil{
    max-width: 100%;
}
.atalho{
    width: 100%;
    margin: 2% 0 0 0;
    display: flex;
    justify-content: space-between;
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