<template>
    <div class="container" :class="{'show': showSidebar}">
        <div class="control">
            <i class="fas fa-bars" @click="showNav"></i>
            <!--<i v-show="showLink" key="0">Opções</i>-->
        </div>
        <!--
        <div class="container columns is-desktop is-centered">
            <div class="column">
                <div class="logo">
                    <div class="">
                        <img class="image is-128x128" src="../assets/labsystem-logo.jpg" alt="logo">
                    </div>
                </div>
            </div>
        </div>-->
        <div class="navigation-links">
            <transition-group name="fade">
                <ul>
                    <div>
                        <li class="link"><router-link to="/home">
                            <i class="fas fa-home"></i>
                            <i v-show="showLink" key="1">Início</i> 
                        </router-link></li>
                    </div>
                    <div>
                        <li><router-link to="/directory">
                            <i class="fas fa-folder-open"></i>
                            <i v-show="showLink" key="2">Diretório</i>
                        </router-link></li>
                    </div>
                    <div>
                        <li><router-link to="/profile">
                            <i class="fas fa-user-circle"></i>
                            <i v-show="showLink" key="3">Meus Dados</i>
                        </router-link></li>
                    </div>
                    <div>
                        <li><router-link to="/login">
                            <i class="fas fa-door-open"></i>
                            <i v-show="showLink" key="4">Sair</i>
                        </router-link></li>
                    </div>
                </ul>
            </transition-group>
        </div>
    </div>
</template>

<script>
  export default {
    data: () => {
      return {
        showSidebar: false,
        showLink: false
      }
    },
    methods: {
      showNav() {
        if(this.showSidebar) {
          this.showLink = false;
          setTimeout(() => {
            this.showSidebar = false;
          }, 500);
        }
        else {
          this.showSidebar = true;
          setTimeout(() => {
            this.showLink = true;
          }, 500);
        }
      }
    }
  }
</script>

<style scoped>
.container {
    position: relative;
    top: 0;
    left: 0;
    width: 60px;
    padding: 0px;
    min-height: calc(100vh - 20px);
    background-color: rgb(255, 255, 255);
    box-shadow: 0 0 10px rgb(116, 116, 116);
    border: solid rgb(97, 97, 97);
    border-width: 0 1px 0 0;
    z-index: 999;
    height: 100%;
    transition: all .5s ease-in-out;
}
.control {
    color: var(--cor-da-letra);
    display: flex;
    padding-left: 15px;
    justify-content: left;
    align-items: left;
    width: 50px;
    margin-bottom: 10px;
    padding-top: 10px;
    font-size: 2rem;

}
i {
justify-content: left;
align-items: left;
font-size: 2rem;
cursor: pointer;
padding: 10px 0;
transition: all .5s ease-in-out;
}
i:hover {
    color: slateblue;
}
    
.show {
    width: 200px;
}
    

.navigation-links {
    padding-top: 14px;
    float: left;
    display: flex;
    justify-content: left;
    align-items: left;
}
div {
font-size: 1.35rem;
padding-left: 5px;
margin-bottom: 18px;
cursor: pointer;
}
</style>