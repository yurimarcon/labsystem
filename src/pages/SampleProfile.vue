<template>
    <div>
        <BotoesSuperior/>
    </div>
    <div class="container">
        <div class="columns is-tablet">
            <div class="column is-4-tablet">
                <h1 class="title">Nome da Amostras</h1>
            </div>
        </div>
        <hr>
        <div class="card">
            <div class="container">
                <h1 class="title">Matriz</h1>
            </div>
                <MatrizComponent/>           

        </div>
    </div>
</template>

<script>
import { mapGetters} from 'vuex'
import BotoesSuperior from '../components/BotoesSuperior'
import MatrizComponent from '../components/MatrizComponent'

export default {
    name:'SampleProfile',
    components:{
        BotoesSuperior,
        MatrizComponent
    },
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