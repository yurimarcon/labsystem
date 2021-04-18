<template>
    <div class="botoeszinhos">
        <div>
            <!-- <img  class="btnImg" src="../assets/mais.svg" alt="sinalDeMais"> -->
            <router-link to="/newSample">
                <i class="far fa-plus fa-2x" alt='criar estudo'></i>
            </router-link>
        </div>
        <div>
            <i class="far fa-comments fa-2x" alt='ajuda'></i>
        </div>
    </div>
</template>

<script>

export default {
    name: 'BotoesSuperior',
}
</script>

<style scoped>
.botoeszinhos{
    display: flex;
    justify-content: flex-end;
    padding: 1% 3% 0 0;
    height: 60px;
}
.botoeszinhos div{
    margin-left: 15px ;
    margin-right: 15px ;
}
.botoeszinhos div i{
    cursor: pointer;
    /* margin-left: 1%;
    margin-right: 1%;
    width: 25px;
    padding: 0; */
}
.botoeszinhos div i:hover{
    padding: 5% 0 0 0;
    color: slateblue;
}
</style>