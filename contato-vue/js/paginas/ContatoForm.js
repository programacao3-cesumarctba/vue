/**
 * Criação de paginas 
 * 
 * Formulario de contatos
 * 
 * Author: Maycon de Moraes
 * Date: 08/04/2020
 */

Vue.component('contato-form',{
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
    methods: {
        recuperaData() {
            contato = {};
            if (this.$route.name != 'contatoNovo') {
                contato.id = document.querySelector('#id').value;
            }
            contato.nome = document.querySelector('#nome').value;
            contato.telefone = document.querySelector('#telefone').value;
            contato.celular = document.querySelector('#celular').value;
            contato.email = document.querySelector('#email').value;
            return contato;
        },
        cadastrar() {
            contato = this.recuperaData();
            let result = ContatoService.API.post(contato);
            if (result == 201) {
                return router.push({name: "home"});
            }
        },
        editar() {
            contato = this.recuperaData();
            console.log(contato);
        },
        excluir() {
            contato = this.recuperaData();            
            console.log(contato);
        }
    },
    template: `<div id='form'>                    
                    <div class='text-center'>
                        <router-link class='btn btn-outline-warning btn-sm' to='/'> Voltar </router-link> 
                    </div>
                    <div class='text-center'>
                        <h3>Fomulário</h3>
                    </div>  
                    <form>
                        <div class="form-group" v-if="$route.name != 'contatoNovo'">
                            <label for="id">ID</label>
                            <input type="" class="form-control" id="id" name="id" readonly>
                        </div>
                        <div class="form-group">
                            <label for="nome">Nome</label>
                            <input type="text" class="form-control" id="nome" name="nome">
                        </div>
                        <div class="form-group">
                            <label for="telefone">Telefone</label>
                            <input type="text" class="form-control" id="telefone" name="telefone">
                        </div>
                        <div class="form-group">
                            <label for="celular">Celular</label>
                            <input type="text" class="form-control" id="celular" name="celular">
                        </div>    
                        <div class="form-group">
                            <label for="email">E-mail</label>
                            <input type="email" class="form-control" id="email" name="email">
                        </div>
                    </form>
                    <div class='text-center'>
                        <button v-if="$route.name == 'contatoNovo'"    class="btn btn-outline-primary" v-on:click="cadastrar()">Cadastrar</button>
                        <button v-if="$route.name == 'contatoEditar'"  class="btn btn-outline-success" v-on:click="editar()">Editar</button>
                        <button v-if="$route.name == 'contatoExcluir'" class="btn btn-outline-danger" v-on:click="excluir()">Excluir</button>
                    </div>
              </div>`,
}); 