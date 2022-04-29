import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

const lmap = {
    namespaced: true,
    state() {
        return {
            defaultCoords: [56.838290378039666, 60.6034161659809],
            defaultZoom: 12,
            mapInstance: null,
        };
    },
    mutations: {
        SET_MAP_INSTANCE(state, instance) {
            state.mapInstance = instance;
        },
    },
    actions: {
        createMapInstance({ rootGetters, commit }, mapContainer) {
            console.log(mapContainer);
            const coords = rootGetters['lmap/GET_DEFAULT_COORDS'];
            const zoom = rootGetters['lmap/GET_DEFAULT_ZOOM'];
            const map = leaflet
                .map(mapContainer, { preferCanvas: true })
                .setView(coords, zoom);
            const mapLayer = leaflet.tileLayer(
                'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                {
                    attribution:
                        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                }
            );
            map.addLayer(mapLayer);
            console.log('map', map);
            commit('SET_MAP_INSTANCE', map);
        },
        removeMapInstance({ rootGetters, commit }) {
            const map = rootGetters['lmap/GET_MAP_INSTANCE'];
            map.remove();
            commit('SET_MAP_INSTANCE', null);
        },
    },
    getters: {
        GET_DEFAULT_COORDS(state) {
            return state.defaultCoords;
        },
        GET_DEFAULT_ZOOM(state) {
            return state.defaultZoom;
        },
        GET_MAP_INSTANCE(state) {
            return state.mapInstance;
        },
    },
};

export default lmap;
