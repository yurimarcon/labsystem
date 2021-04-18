<template>
    <article class="card message is-warning">
        <div class="message-header">
            <p class="title titleLight">Últimos trabalhos</p>
        </div>
        <div class="message-body">
            <div v-for="amostra, index in amostras" :key="index">
                <CardAmostra :titulo=amostra.titulo :descricao=amostra.descricao :dataUltimaAlteracao=amostra.dataUltimaAlteracao />
            </div>
        </div>
    </article>
</template>

<script>
import CardAmostra from './CardAmostra'
import { mapGetters } from 'vuex';

export default {
    components:{CardAmostra},
    name: "UltimosProjetos",
    computed:mapGetters(['amostras']),
}
</script>

<style scoped>
div{
    max-width: 100%;
    width: 100%;
}
h1{
    margin-top: 4%
}
.titleLight{
    color: white !important;
}
</style>