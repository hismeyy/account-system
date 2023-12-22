import {createRouter, createWebHistory} from 'vue-router';
import Table from '../views/table/table-index.vue';
import Scene from '../views/account/scene/scene-index.vue';
import Wallet from '../views/account/wallet/wallet-index.vue';
import Wish from "@/views/wish/wish-index.vue";
import System from "@/views/setting/system/system-index.vue";
import Dict from "@/views/setting/dict/dict-index.vue";

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
    },
    {
        path: '/wish',
        name: 'Wish',
        component: Wish,
    },
    {
        path: '/setting-system',
        name: 'System',
        component: System,
    },
    {
        path: '/setting-dict',
        name: 'Dict',
        component: Dict,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
