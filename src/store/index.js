  
import { createStore } from 'vuex';
import moduloAmostras from './modules/amostras';
import moduloUsuario from './modules/usuario';

const store = createStore({
    modules:{
        moduloUsuario, moduloAmostras
    }
});

export default store;