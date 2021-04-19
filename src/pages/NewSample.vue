<template>
    <div>
        <BotoesSuperior/>
    </div>
    <div class="container">
        <h1 class="title">Criação de nova amostra</h1>
        <hr>
        <div class="columns card">
            <div class="column is-6-desktop">
                <div class="field">
                    <label class="label">Nome da amostra</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Título" v-model=amostraRascunho.titulo>
                    </div>
                </div>
                <div class="field">
                    <label class="label">Descrição</label>
                    <div class="control">
                        <textarea class="textarea" placeholder="Informações sobre a amostra" v-model=amostraRascunho.descricao></textarea>
                    </div>
                </div>

                <div class="card">
                    <table class="table is-fullwidth">
                        <thead>
                            <th>#</th>
                            <th>Componente</th>
                            <th>Ag</th>
                        </thead>
                        <tbody v-for="elemento, index in amostraRascunho.elementos" :key="index">
                            <tr>
                                <th>{{index +1}}</th>
                                <th>
                                    <div class="field">
                                        <div class="control">
                                            <input class="input" type="text" placeholder="Componente">
                                        </div>
                                    </div>
                                </th>
                                <th>
                                    <div class="field">
                                        <div class="control">
                                            <input class="input" type="text" placeholder="Agente">
                                        </div>
                                    </div>
                                </th>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <th>

                                </th>
                                <th>
                                    Adicione ou remova elementos
                                </th>
                                <th>
                                    <div class="field is-grouped">
                                        <div class="control">
                                            <button class="button is-link is-rounded" @click="adicionaElemento">+</button>
                                        </div>
                                        <div class="control">
                                            <button class="button is-danger is-rounded" @click="removeElemento">-</button>
                                        </div>

                                    </div>
                                </th>
                            </tr>
                        </tfoot>

                    </table>
                </div>

                <div class="field salvar">
                    <div class="control">
                        <button class="button is-link is-fullwidth">Salvar</button>
                    </div>
                </div>
            </div>

            <div class="column is-6-desktop imagemAmostra">
                <div class="">
                    <figure class="">
                        <img src="../../static/amostra6.svg" alt="">
                    </figure>
                    <div class="file is-info is-large is-boxed">
                        <label class="file-label">
                            <input class="file-input" type="file" name="resume">
                            <span class="file-cta">
                                <span class="file-icon">
                                    <i class="fas fa-cloud-upload-alt"></i>
                                </span>
                                <span class="file-label">
                                    Informe uma imagem...
                                </span>
                            </span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import { mapGetters} from 'vuex'
import BotoesSuperior from '../components/BotoesSuperior'

export default {
    name:'NewSample',
    components:{BotoesSuperior},
    data(){
        return{
            amostraRascunho:{
                titulo:'',
                descricao:'',
                elementos:[
                    {
                        componente:'',
                        agente:''
                    },
                    {
                        componente:'',
                        agente:''
                    },
                    {
                        componente:'',
                        agente:''
                    },
                    {
                        componente:'',
                        agente:''
                    },
                ]
            }
        }
    },
    methods:{
        adicionaElemento(){
            this.amostraRascunho.elementos.push({
                        
                        componente:'',
                        agente:''
                    })
        },
        removeElemento(){
            this.amostraRascunho.elementos.pop({
                        componente:'',
                        agente:''
                    })
        }
    }
}
</script>

<style scoped>
hr{
    background-color: rgba(214, 214, 214, .5);
}
.imagemAmostra{
    display: flex;
    justify-content: center;
}
img{
    padding: 5%;
    height: 400px;
    width: auto;
}
.file{
    justify-content: center;
}
.salvar{
    margin-top: 2%;
}
</style>