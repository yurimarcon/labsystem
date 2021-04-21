<template>
<div class="card">
    <table class="table is-fullwidth">
        <thead>
            <th>#</th>
            <th>Componente</th>
            <th>Concentração</th>
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
                            <input class="input" type="text" placeholder="%">
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
                    Adicione ou remova Componente
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
</template>

<script>
export default {
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
.salvar{
    margin-top: 2%;
}
</style>