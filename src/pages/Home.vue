<template>
    <div>
        <div>
            <BotoesSuperior/>
        </div>
        <div class="container">
            <div class="perfil">
                <ResumoPerfil/>
            </div>
            <div class="atalho columns is-desktop">
                <div class="resumoCommit column">
                    <HistoricoDeContribuicoes/>
                    <UltimosCommits/>
                </div>
                <div class="ultimosProj column">
                    <UltimosProjetos/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ResumoPerfil from '../components/ResumoPerfil'
import UltimosCommits from '../components/UltimosCommits'
import UltimosProjetos from '../components/UltimosProjetos'
import HistoricoDeContribuicoes from '../components/HistoricoDeContribuicoes'
import BotoesSuperior from '../components/BotoesSuperior'

export default {
    name:'Home',
    components: {ResumoPerfil,UltimosCommits,UltimosProjetos,BotoesSuperior,HistoricoDeContribuicoes}
}
</script>

<style scoped>
</style>