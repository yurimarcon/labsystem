<template>
    <div class="container" :class="{'show': showSidebar}">
        <div class="control">
            <i class="fas fa-bars" @click="showNav"></i>
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
        </div>
        <div class="navigation-icons">
            <i class="fas fa-home"></i>
            <i class="fas fa-folder-open"></i>
            <i class="fas fa-user-circle"></i>
            <i class="fas fa-door-open"></i>
        </div>-->
        <div class="navigation-links">
            <transition-group name="fade">
                <ul>
                    <div v-show="showLink" key="1">
                        <li><router-link to="/home">
                            <i>Início</i> 
                        </router-link></li>
                    </div>
                    <div v-show="showLink" key="2">
                        <li><router-link to="/directory">
                            <i>Diretório</i>
                        </router-link></li>
                    </div>
                    <div v-show="showLink" key="3">
                        <li><router-link to="/profile">
                            <i>Meus Dados</i>
                        </router-link></li>
                    </div>
                    <div v-show="showLink" key="4">
                        <li><router-link to="/login">
                            <i>Sair</i>
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
    width: 70px;
    padding: 10px;
    min-height: calc(100vh - 20px);
    background-color: rgb(175, 174, 174);
    border: solid rgb(97, 97, 97);
    border-width: 0 1px 0 0;
    z-index: 999;
    transition: all .5s ease-in-out;
}
    .control {
      color: var(--cor-da-letra);
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50px;
      margin-bottom: 10px;
    }
      i {
        font-size: 2rem;
        cursor: pointer;
        transition: all .5s ease-in-out;
      }
    
    .show {
      width: 200px;
    }
    
      /* .control > i {
        color: #fff;
        transform: rotateZ(-180deg);
      }*/
      .navigation-icons {
        color: #fff;
      }
    
    .navigation-icons {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 50px;
      float: left;
    }
      i {
        font-size: 2rem;
        padding: 10px 0;
        cursor: pointer;
        transition: all .5s ease-in-out;
      }
        i:hover {
          color: #fff;
        }
    .navigation-links {
      padding-top: 14px;
      float: left;
    }
      div {
        font-size: 1.35rem;
        padding-left: 10px;
        margin-bottom: 18px;
        cursor: pointer;
      }
        div:hover {
          color: #fff;
        } 
</style>