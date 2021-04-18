<template>
    <div class="columns card amostra">
        <div class="column is-one-quarter">
            <figure>
                <!-- <img :src="amostra.imagem" alt="imagemTeste"> -->
                <img src="../../static/amostra6.svg" alt="imagemTeste">
            </figure>
        </div>
        <div class="container column is-three-quarters">
            <h1 class="title">{{titulo}}</h1>
            <h3>{{descricao}}</h3>
            <div class="ultimaAtualizacao">
                <span><b>Data da ultima alteração: </b>{{dataUltimaAlteracao}}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'CardAmostra',
    props:{
        titulo: String,
        descricao: String,
        dataUltimaAlteracao: String
    }
}
</script>

<style scoped>
.amostra{
    cursor: pointer;
    display: flex;
    margin: 2% 0 1% 0;
    padding: 0 1% 0 1%;
}
.amostra:hover{
    background-color: rgb(240, 240, 240);
    padding: 0 2% 0 2%;
}
.amostra img{
    border-radius: 10px;
    width: auto;
    height: auto;
    max-width: 100px;
    max-height: 100px;
    padding: 7px 0 2px 7px;
}
/* .amostra div{
    display: block;
} */
.amostra div h1{
    font-size: 140%;
}
.amostra div h3{
    max-width: 100%;
    font-weight: 500;
    margin: auto;
}
.ultimaAtualizacao{
    float: right;
    font-size: 90%;
    width: 60%;
    margin: 1% 7% 1% 0;
}
.columns:last-child {
    margin-bottom: 0;
}
</style>