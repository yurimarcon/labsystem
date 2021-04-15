<template>
  <div class="card">
        <h1>Últimas alterações</h1>
        <hr>
        <table>
            <thead >
                <th>Amostra</th>
                <th>Observação</th>
                <th>Data</th>
            </thead>
            <tbody>
                <tr v-for="amostra, index in amostras" :key="index">
                    <th>{{amostra.titulo}}</th>
                    <th>{{amostra.observacao}}</th>
                    <th>{{amostra.data}}</th>
                </tr>
            </tbody>
        </table>
  </div>
</template>

<script>
export default {
    name: "UltimosCommits",
    data(){
        return{
            amostras:[
                {
                    titulo    : "Vidro radioativo",
                    observacao : "Criação do estudo",
                    data        : "2021-04-16 00:23:15"
                },
                {
                    titulo    : "Vidro radioativo",
                    observacao : "Inclusão de dados amostrais",
                    data        : "2021-04-16 00:27:30"
                },
                {
                    titulo    : "Vidro radioativo",
                    observacao : "Inclusão de dados amostrais",
                    data        : "2021-04-16 00:27:30"
                },
            ]
        }
    }
}
</script>

<style scoped>
div{
    max-width: 100%;
    width: 100%;
}
h1{
    margin-left: 5%
}
hr{
    width: 90%;
}
table{
    margin-top: 2%;
    width: 100%;
}
tbody tr th{
    max-width: 30px;
    cursor: pointer;
    font-weight: 500;
    border-top: 1px solid rgb(197, 197, 197);
    height: 30px;
}
tbody tr:hover{
    background-color: rgb(240, 240, 240);
}
</style>