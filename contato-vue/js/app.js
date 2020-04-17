/**
 * Arquivo principal da aplicação 
 * Cria a instancia do objeto vuejs
 * 
 * Author: Maycon de Moraes
 * Date:  08/04/2020
 */

 
const router = new VueRouter({routes});

var App = new Vue({
    el: '#app',
    router,
    data: {
        titulo: 'CRUD Contato Vue.js',
    },
    methods: {
        
    },
    ready: {

    }
}); 