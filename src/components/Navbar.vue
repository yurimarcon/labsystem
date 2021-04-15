<template>
  <div class="nav">
      <div class="logo">
        <img src="../assets/moleculas.svg" alt="logo">
        <h1>LabSystem</h1>
      </div>

      <div class="opcoes">
          <ul>
              <li><router-link to="/home">Início</router-link></li>
              <li><router-link to="/directory">Diretório</router-link></li>
              <li><router-link to="/profile">Cadastro</router-link></li>
              <li><router-link to="/login">Sair</router-link></li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
    name:'Navbar',
    methods:{
        fechar(){
            console.log('x')
        }

    }

    }
</script>

<style scoped>
.nav{
    display: block;
    position: relative;
    top: 0;
    /* left: -300; */
    width: 100% !important;
    height: 100vh;
    background-color: rgb(255, 255, 255);
    box-shadow: 0 0 10px rgb(116, 116, 116);
    /* transition: to right 1s; */
}
img{
    padding: 10%;
    height: 50px;
}
.logo{
    display: flex;
    width: 100%;
    height: 90px;
}
.logo h1{
    width: 100%;
    color: var(--cor-da-letra);
    position: relative;
    font-family: 'Dosis', sans-serif;
    font-weight: 700;
    font-size: 170%;
    padding: 6% 0 0 0;
    margin-left: -10px;
}
.opcoes{
    padding: 5%;
}
.opcoes ul{
    /* position: relative; */
}
.opcoes ul li{
    list-style-type: none;
    width: 100%;
    margin: 8%;

}
.opcoes ul li a{
    color: var(--cor-da-letra);
    text-decoration: none;
    cursor: pointer;
    font-family: 'Dosis', sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
}
.opcoes ul li a:hover{
    color: slateblue;
}
</style>