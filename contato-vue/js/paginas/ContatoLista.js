/**
 * Criação de paginas 
 * 
 * Listagem de contatos
 * 
 * Author: Maycon de Moraes
 * Date: 08/04/2020
 */

Vue.component('contato-lista',{
    data: function () {
        return {
            contatos: []
        }
    },
    mounted: function(){
        ContatoService.API.get().then(data => { 
           this.contatos = data 
        })
    },
    template: `<div id='lista'>
                        <div class='text-center'>    
                            <router-link class='btn btn-outline-primary btn-sm' :to="{name: 'contatoNovo'}"> Novo Contato </router-link>
                        </div>  
                        <br>   
                <table class='table table-bordered table-striped'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Telefone</th>
                            <th>Celular</th>
                            <th>Email</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                        <tbody>
                            <tr v-for="contato in contatos">
                                <td>{{contato.id}}</td>
                                <td>{{contato.nome}}</td>
                                <td>{{contato.telefone}}</td>
                                <td>{{contato.celular}}</td>
                                <td>{{contato.email}}</td>
                                <td> <router-link class='btn btn-outline-success btn-sm' :to="{name: 'contatoEditar',  params: {id : contato.id}}"> Editar </router-link>                                 
                                     <router-link class='btn btn-outline-danger btn-sm' :to="{name: 'contatoExcluir', params: {id : contato.id}}"> Excluir </router-link>   
                                </td>
                            </tr>
                        </tbody>
                </table>
            </div>`,
});  