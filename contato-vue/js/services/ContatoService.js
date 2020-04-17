/**
 * Service - Contato
 * No arquivo de services fica toda a relaçao entre o cliente e o endpoint da API
 * 
 * Author: Maycon de Moraes
 * Date: 08/04/2020
 */ 


var ContatoService = {
    url: 'http://localhost:8080/api/contato',
    API : {
        // Retorna todos 
        get: async () => {
            let response = await axios.get(ContatoService.url);
            return response.data;
        },
        // Retorna 1
        getOne: async (id) => {
            let response = await axios.get(ContatoService.url + '?id=' + id);
            return response.data;
        },
        // Create
        post: async (contato) => {
            await axios({
                method: 'post',
                url: ContatoService.url,
                headers: {
                    'Accept': '*',
                    'Content-Type': '*',
                    'Access-Control-Allow-Origin': '*',
                },
                data: {
                    nome: contato.nome,
                    email: contato.email,
                    telefone: contato.telefone,
                    celular: contato.celular
                }
              });
        },
        // Update
        put:        () => {},
        // Delete
        delete:     () => {},
    }
};  