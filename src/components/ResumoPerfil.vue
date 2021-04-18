<template>
    <div id="resumoUsuario" class="card">
        <div class="column">
            <h1 class="title">Olá <b>{{aluno}}!</b></h1>
            <h3 class="subtitle">
                <p><b>Curso: </b><span> {{curso}}</span></p>
                <p><span> Faculdade de técnologia do estado de São Paulo</span></p>
            </h3>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name:'ResumoPerfil',
    computed:mapGetters(['aluno','curso'])
}
</script>

<style scoped>

#resumoUsuario h1, h3 p{
    padding: 5px;
}
h1{
    font-weight: 500;
}

</style>