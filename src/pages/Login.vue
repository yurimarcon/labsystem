<template>
    <section class="hero is-light is-fullheight">
        <div class="hero-body">
            <div class="container">
            <div class="columns is-centered">
                <div class="column is-5-tablet is-4-desktop is-3-widescreen">
                <div class="box">
                <!-- <form action="" class="box">kk -->
                    <div class="field">
                    <label for="" class="label">Email</label>
                    <div class="control has-icons-left">
                        <input type="email" placeholder="email@email.com" class="input" id="login" v-model=login required>
                        <span class="icon is-small is-left">
                        <i class="fa fa-envelope"></i>
                        </span>
                    </div>
                    </div>
                    <div class="field">
                    <label for="" class="label">Password</label>
                    <div class="control has-icons-left">
                        <input type="password" placeholder="*******" id="senha" class="input" required>
                        <span class="icon is-small is-left">
                        <i class="fa fa-lock"></i>
                        </span>
                    </div>
                    </div>
                    <button class="button is-primary is-medium is-fullwidth" id="entrar" @click="logar" >Entrar</button>
                    <button class="button is-info is-light is-small is-fullwidth mt-2">Esqueci minha senha</button>
                <!-- </form> -->
                </div>
                </div>
            </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Login',
    data(){
        return{
            login: '',
            senha: ''
        }
    },
    methods:{
        logar(){
            if(this.login == "e@e"){
                window.location.href = "/home";
                document.getElementById('login').classList.remove('is-danger')
                document.getElementById('senha').classList.remove('is-danger')
            }else{
                // alert('Login incorreto')
                document.getElementById('login').classList.add('is-danger')
                document.getElementById('senha').classList.add('is-danger')
                this.login = ""
            }
        },

    }
}
</script>

<style>

</style>