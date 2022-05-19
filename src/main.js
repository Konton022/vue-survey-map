import { createApp } from 'vue';

import App from './App.vue';
import router from './router/index';
import store from './store/index';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/firebase/config';

onAuthStateChanged(auth, (user) => {
    if (user) {
        store.commit('user/SET_USER', user);
        store.commit('user/SET_USER_AUTH', true);
        // store.dispatch('todos/subscribeToFirebase');
        // store.dispatch('todos/setFilteredTodoAction');
        router.push('/mapapp');
    } else {
        router.push('/');
    }
});

createApp(App).use(router).use(store).mount('#app');
