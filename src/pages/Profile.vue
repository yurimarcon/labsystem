<template>
    <div>
        <BotoesSuperior/>
    </div>
    <div class="container">
        <h1 class="title">Meus Dados</h1>
        <hr class="hr">
        <div class="tile is-ancestor">
        <div class="tile is-vertical is-8">
            <div class="tile">
                <div class="tile is-parent">
                    <article class="tile is-child notification is-info">
                    <div>
                        <p class="title">Foto do perfil<i class="ml-6 fas fa-pencil-alt"></i></p>
                        <hr>
                    </div>
                    <!-- <p class="subtitle">With an image</p> -->
                    <figure class="image is-1by1">
                        <img class="is-rounded" :src=fotoPerfil>
                    </figure>
                    </article>
                </div>
                <div class="tile is-parent is-7 is-vertical">
                    <article class="tile is-child notification is-primary">
                        <p class="title">Dados pessoais <i class="ml-6 fas fa-pencil-alt"></i></p>
                        <hr>
                        <p class="is-size-5"><span class="has-text-weight-bold">Nome:</span>  {{nomeAluno}}</p>
                        <p class="is-size-5"><span class="has-text-weight-bold">RA:</span>  {{RA}}</p>
                        <p class="is-size-5"><span class="has-text-weight-bold">Celular:</span>  {{celular}}</p>
                        <p class="is-size-5"><span class="has-text-weight-bold">E-mail:</span>  {{email}}</p>
                        <!-- <p class="subtitle">Top tile</p> -->
                    </article>
                    <article class="tile is-child notification is-warning">
                        <p class="title">Curso</p>
                        <!-- <hr> -->
                        <!-- <p class="subtitle">Bottom tile</p> -->
                        <p class="is-size-4 has-text-weight-bold">{{curso}}</p>
                    </article>
                </div>
            </div>
            <div class="tile is-parent">
            <article class="tile is-child notification is-danger">
                <p class="title">Notificações críticas</p>
                <p class="subtitle">Em caso de dúvidas procure a secretaria</p>
                <div class="content">
                Você não possui notificações críticas nesse momento.
                </div>
            </article>
            </div>
        </div>
        <div class="tile is-parent">
            <article class="tile is-child notification is-success">
            <p class="title">Sobre a plataforma</p>
            <!-- <p class="subtitle">With even more content</p> -->
            <hr>
            <div class="content">
                <div class="content is-size-5">
                    <p class="has-text-white">
                        Lorem ipsum inceptos blandit dictum quisque tristique cursus tempus platea, dapibus quisque volutpat dictum fames taciti etiam cursus himenaeos, suscipit donec suspendisse magna a nam adipiscing ante. ornare class in accumsan in hac tristique ipsum nostra habitant, porta torquent magna cubilia sit in lacinia mollis luctus id, fames nisl etiam eu pharetra arcu suscipit dapibus. odio eu quisque accumsan leo nibh lacus lorem sodales neque semper ultrices diam eros tincidunt, fames lacinia etiam nulla malesuada per proin non nulla molestie egestas venenatis. mollis lacus rhoncus praesent non ligula class porta eros, viverra imperdiet donec in nec varius dictum auctor, morbi ut convallis ullamcorper turpis metus condimentum. 
                    </p>
                    <p class="has-text-white">
                        Sed libero vel eget, habitant tristique. 
                    </p>
                </div>
            </div>
            </article>
        </div>
        </div>
    </div>
</template>

<script>
import BotoesSuperior from '../components/BotoesSuperior'
import {mapGetters} from 'vuex'
export default {
    name:'Home',
    components:{BotoesSuperior},
    computed:mapGetters(['nomeAluno','RA','email','celular','fotoPerfil','curso']),
}
</script>

<style scoped>
.hr{
    background-color:var(--cor-do-hr-theme);
}
</style>