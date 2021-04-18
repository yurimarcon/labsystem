<template>
    <div class="componentNav">
        <div class="container columns is-desktop is-centered">
            <!-- <div class="column is-full-mobile"> -->
            <div class="column">
                <div class="logo">
                    <div class="">
                        <img class="image is-128x128" src="../assets/moleculas.svg" alt="logo">
                    </div>
                </div>
            </div>
            <!-- <div class="column is-8 ">
                <h1 class="title">LabSystem</h1>
            </div> -->
        </div>

        <div class="container opcoes">
            <ul>
                <li><router-link to="/home">
                    <i class="fas fa-home"><span>Início</span></i> 
                </router-link></li>
                <li><router-link to="/directory">
                    <i class="fas fa-folder-open"><span>Diretório</span></i>
                </router-link></li>
                <li><router-link to="/profile">
                    <i class="fas fa-user-circle"><span>Meus dados</span></i>
                </router-link></li>
                <li><router-link to="/login">
                    <i class="fas fa-door-open"><span>Sair</span></i>
                </router-link></li>
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

.componentNav{
    position: relative;
    /* width: 100% !important; */
    height: 100%;
    background-color: rgb(255, 255, 255);
    box-shadow: 0 0 10px rgb(116, 116, 116);
    border: 1px solid white;
}
.title{
    color: var(--cor-da-letra);
    margin-top: 20%;
    width: 100%;
}
.logo{
    height: 150px;
    padding: 15%;
    display: flex;
    justify-content: center;
}
.opcoes{
    padding: 10% 0 0 5%;
}

.opcoes ul li{
    list-style-type: none;
    width: 100%;
    margin: 8%;
}
i{
    color: var(--cor-da-letra);
    width: 100%;
}
i:hover{
    color: slateblue
}
.opcoes ul li a span{
    width: 100%;
    margin-left:5%;
    color: var(--cor-da-letra);
    text-decoration: none;
    cursor: pointer;
    font-family: 'Dosis', sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
}
.opcoes ul li a span:hover{
    color: slateblue;
}
</style>