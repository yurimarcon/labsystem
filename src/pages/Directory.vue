<template>
    <div>
        <BotoesSuperior/>
    </div>
    <div class="container">
        <div class="columns is-tablet">
            <div class="column is-4-tablet">
                <h1 class="title">Minhas Amostras</h1>
            </div>
            <div class="column is-8-tabelt center">
                <div class="field has-addons">
                    <div class="control is-expanded">
                        <input class="input" type="text" placeholder="Nome da amostra">
                    </div>
                    <div class="control">
                        <a class="button is-info" @click="pesquisar">
                        Pesquisar
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <hr>
        <div class="columns is-multiline is-desktop">
            <div class="column is-6-desktop is-12-mobile" 
            v-for="amostra, index in amostras" :key="index">
                <CardAmostra :titulo=amostra.titulo :descricao=amostra.descricao :dataUltimaAlteracao=amostra.dataUltimaAlteracao />
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters} from 'vuex'
import BotoesSuperior from '../components/BotoesSuperior'
import CardAmostra from '../components/CardAmostra'

export default {
    name:'Directory',
    components:{BotoesSuperior,CardAmostra},
    computed: mapGetters(['amostras']),
    data(){
        return{
            pesquisa: mapGetters(['amostras'])
        }
    },
    methods:{
        pesquisar(){
            console.log(this.pesquisa)
        }
    }
}
</script>

<style scoped>
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.2/css/bulma.min.css";

hr{
    background-color: rgba(214, 214, 214, .5);
}
</style>