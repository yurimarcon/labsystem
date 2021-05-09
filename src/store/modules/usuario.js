const moduloUsuario = {
    state       : {
        session     : true, 
        nomeAluno   :'Aluno da Silva',
        RA          :'123.123.123.123',
        email       :'email.aluno@email.com',
        celular     :'11 1234-1234',
        curso       :'Engenharia molecular',
        fotoPerfil  :'https://segredosdomundo.r7.com/wp-content/uploads/2019/06/dollify-o-que-e-e-como-usar-o-app-que-cria-caricaturas-fofinhas-16.jpg',
    },
    getters     : {
        session         : state => state.session,
        nomeAluno       : state => state.nomeAluno,
        RA              : state => state.RA,
        email           : state => state.email,
        celular         : state => state.celular,
        curso           : state => state.curso,
        fotoPerfil      : state => state.fotoPerfil,
    },
    actions     : {},
    mutations   : {}
}

export default moduloUsuario