import {createRouter, createWebHistory} from 'vue-router';
import Table from '../views/table/table-index.vue';

const routes = [
    {
        path: '/',
        name: 'Table',
        component: Table,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
