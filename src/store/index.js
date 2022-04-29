import { createStore } from 'vuex';
import lmap from './lmap';

const store = createStore({
    modules: {
        lmap,
    },
});

export default store;
