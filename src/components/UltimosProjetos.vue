<template>
  <div class="card">
      <h1>Últimos trabalhos</h1>
      <hr>
      <div class="amostras" v-for="amostra, index in amostras" :key="index">
          <div class="card amostra">
            <img :src="amostra.imagem" alt="imagemTeste">
            <div >
                <h1>{{amostra.titulo}}</h1>
                <h3>{{amostra.descricao}}</h3>
                <div class="ultimaAtualizacao">
                    <span><b>Data da ultima alteração: </b>{{amostra.dataUltimaAlteracao}}</span>
                </div>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: "UltimosProjetos",
    data(){
        return{
            amostras:[
                {
                    imagem              : "https://www.researchgate.net/profile/Sofia-Bessa/publication/267389221/figure/fig3/AS:637401739296770@1528979825258/Figura-05-Resultado-do-Teste-do-Vidro-na-AMOSTRA-2-solo-com_Q320.jpg",
                    titulo              : "Vidro Radioativo",
                    descricao           : "Estudo com base em teorias desenvolvidas por estudo pessoal para redução de resistencia de energia.",
                    dataUltimaAlteracao : "2021-04-16"
                },
                {
                    imagem              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsqAg3C7BmWxEmT8Cxx5ITIq6dDYyxnwkWOpxcf9wSY2kIDxUnCfdWAnkP_vMLwkWpOqw&usqp=CAU",
                    titulo              : "Vidro Radioativo",
                    descricao           : "Estudo com base em teorias desenvolvidas por estudo pessoal para redução de resistencia de energia.",
                    dataUltimaAlteracao : "2021-04-17"
                },
                {
                    imagem              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjhp_7ioV4Pw0It-0j8F4andsm7xBYiyXwjwD4r_Mm6yvOwBOHb_w2HzMOxzPnU-E5bqQ&usqp=CAU",
                    titulo              : "Vidro Radioativo",
                    descricao           : "Estudo com base em teorias desenvolvidas por estudo pessoal para redução de resistencia de energia.",
                    dataUltimaAlteracao : "2021-04-18"
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
.amostras{
    display: block;
    margin:auto;
    margin-bottom: 3%;
    width: 90%;
}
.amostra{
    cursor: pointer;
    display: flex;
    margin: 2% 0 1% 0;
}
.amostra:hover{
    background-color: rgb(240, 240, 240);
    padding: 0 1% 0 1%;
}
.amostra img{
    border-radius: 10px;
    width: auto;
    height: auto;
    max-width: 100px;
    max-height: 100px;
    padding: 7px 0 2px 7px;
}
.amostra div{
    display: block;
}
.amostra div h1{
    font-size: 140%;
}
.amostra div h3{
    font-size: 100%;
    font-weight: 500;
    width: 90%;
    margin: auto;
}
.ultimaAtualizacao{
    float: right;
    font-size: 90%;
    width: 55%;
    margin: auto;
    margin-top: 1%;
}
</style>