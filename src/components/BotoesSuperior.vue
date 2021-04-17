<template>
    <div class="botoeszinhos">
        <div>
            <img  class="btnImg" src="../assets/mais.svg" alt="sinalDeMais">
        </div>
        <div>
            <img  class="btnImg" src="../assets/msg.svg" alt="iconEmail">
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
    cursor: pointer;
    padding: 1% 3% 0 0;
    height: 50px;
}
.botoeszinhos div{
    margin-left: 15px ;
    margin-right: 15px ;
}
.btnImg{
    margin-left: 1%;
    margin-right: 1%;
    width: 25px;
    padding: 0;
}
.btnImg:hover{
    padding: 5% 0 5% 0;
}
</style>