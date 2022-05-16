import { createStore } from 'vuex';
import lmap from './lmap';
import user from './user';

const store = createStore({
    modules: {
        lmap,
        user,
    },
});

export default store;
