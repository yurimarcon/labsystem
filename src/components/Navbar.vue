<template>
    <div v-if="session">
        <div class="containerApp" :class="{'show': showSidebar}">
            <div class="control">
                <i v-if="!showSidebar" class="fas fa-bars" @click="showNav"></i>
                <i v-if="showSidebar" class="fas fa-times" @click="showNav"></i>
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
                    <ul @click="hiddenNav">
                        <li class="link"><router-link to="/home">
                            <i class="fas fa-home"></i>
                            <i v-show="showLink" key="1">Início</i> 
                        </router-link></li>
                        <li><router-link to="/directory">
                            <i class="fas fa-folder-open"></i>
                            <i v-show="showLink" key="2">Diretório</i>
                        </router-link></li>
                        <li><router-link to="/profile">
                            <i class="fas fa-user-circle"></i>
                            <i v-show="showLink" key="3">Meus Dados</i>
                        </router-link></li>
                        <li><router-link to="/login">
                            <i class="fas fa-door-open"></i>
                            <i v-show="showLink" key="4">Sair</i>
                        </router-link></li>
                    </ul>
                </transition-group>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
  export default {
    data: () => {
      return {
        showSidebar: false,
        showLink: false,
      }
    },
    methods: {
        showNav() {
            if(this.showSidebar) {
            this.showLink = false;
            setTimeout(() => {
                this.showSidebar = false;
            }, 200);
            }
            else {
            this.showSidebar = true;
            setTimeout(() => {
                this.showLink = true;
            }, 500);
            }
        },
        hiddenNav(){
            this.showLink = false;
            setTimeout(() => {
                this.showSidebar = false;
            }, 200);
        }
    },
    computed:mapGetters(['session'])
  }
</script>

<style scoped>
.containerApp {
    position: fixed;
    top: 0;
    left: 0;
    width: 60px;
    padding: 0px;
    /* min-height: calc(100vh - 20px); */
    background-color: rgb(255, 255, 255);
    box-shadow: 0 0 10px rgb(116, 116, 116);
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
li,a {
    display: flex;
    width: 100%;
    justify-content: left;
    align-items: center;
    font-size: 2rem;
    cursor: pointer;
    /* padding: 10px 0; */
}
i:hover {
    color: var(--cor-do-hover-letra);
}
.navigation-links ul li i{
        line-height: 2.5;
        animation: fadein .5s;
    }
.show {
    width: 250px;
}
@keyframes fadein {
    from {
        opacity:0;
    }
    to {
        opacity:1;
    }
}
.navigation-links{
    padding-top: 14px;
    padding-left: 10px;
    float: left;
    display: flex;
    justify-content: left;
    /* align-items: left; */
}
@media only screen and (max-width: 600px) {
    .containerApp {
        position: fixed;
        margin: 3px 0 0 5px;
        width: 57px;
        padding: 2px 0 0 0;
        /* min-height: calc(100vh - 20px); */
        background-color: rgb(255, 255, 255);
        box-shadow: 0 0 10px rgb(116, 116, 116);
        border: solid rgb(97, 97, 97);
        border-width: 0 1px 0 0;
        z-index: 999;
        height: 55px;
        border-radius: 10px;
        transition: height 1s ease-in-out, width 1s ease-in-out;
    }
    .containerApp li i{
        display:none;
    }
    .containerApp.show li i {
        display: flex;
        animation: fadein 2s;
    }
    @keyframes fadein {
        from {
            opacity:0;
        }
        to {
            opacity:1;
        }
    }
    .show {
        width: 90%;
        height: 60%;
        /* min-height: calc(100vh - 20px); */
        transition: height 1s ease-in-out, width 1s ease-in-out;
    }
    .navigation-links {
        padding-top: 14px;
        float: left;
        display: flex;
        justify-content: left;
        align-items: left;
        height: 60px;
    }
}
</style>