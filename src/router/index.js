import {createRouter, createWebHistory} from 'vue-router';
import Table from '../views/table/table-index.vue';
import Scene from '../views/account/scene/scene-index.vue';
import Wallet from '../views/account/wallet/wallet-index.vue';

const routes = [
    {
        path: '/',
        name: 'Table',
        component: Table,
    },
    {
        path: '/account-scene',
        name: 'Scene',
        component: Scene,
    },
    {
        path: '/account-wallet',
        name: 'Wallet',
        component: Wallet,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
