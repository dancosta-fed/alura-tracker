import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Tarefas from '../views/Tarefas.vue'
import Projetos from '../views/Projetos/Projetos.vue'
import Formulario from '../views/Formulario.vue'
import Lista from '../views/Projetos/Lista.vue'

const rotas: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Tarefas',
        component: Tarefas
    },
    {
        path: '/projetos',
        component: Projetos,
        children: [
            {
                path: '',
                name: 'Projetos',
                component: Lista
            },
            {
                path: 'novo',
                name: 'Novo Projeto',
                component: Formulario
            },
            {
                path: ':id',
                name: 'Editar Projetos',
                component: Formulario,
                props: true
            },
        ]
    }
]


const roteador = createRouter({
    history: createWebHashHistory(),
    routes: rotas
})

export default roteador;