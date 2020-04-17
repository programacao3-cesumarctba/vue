/**
 * Arquivo de configuração de rotas de todas as aplicação
 */

// Paginas
const ContatoLista      = {template: `<contato-lista></contato-lista>`};
const ContatoForm       = {template: `<contato-form></contato-form>`};

// Rotas
const routes = [
    {
        name: 'home',
        path: '/',
        component: ContatoLista
    },
    {
        name: 'contatoNovo',
        path: '/contato/novo',
        component: ContatoForm
    },
    {
        name: 'contatoEditar',
        path: '/contato/editar/:id',
        component: ContatoForm
    },
    {
        name: 'contatoExcluir',
        path: '/contato/excluir/:id',
        component: ContatoForm
    }
];
