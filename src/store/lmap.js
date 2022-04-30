import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

//----TO FIX BUG LEAFLET WITH DEFAULT ICONS-----//
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
//-------------------------------------------------------------//

const lmap = {
    namespaced: true,
    state() {
        return {
            defaultCoords: [56.838290378039666, 60.6034161659809],
            defaultZoom: 12,
            mapInstance: null,
            locations: [
                { lat: 56.846131682978, lon: 60.589738200697916, title: 'job' },
                {
                    lat: 56.90915729377061,
                    lon: 60.82291341534423,
                    title: 'home',
                },
            ],
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
            //----TO FIX BUG LEAFLET WITH DEFAULT ICONS-----//
            let DefaultIcon = leaflet.icon({
                iconUrl: icon,
                shadowUrl: iconShadow,
            });
            leaflet.Marker.prototype.options.icon = DefaultIcon;
            //----------------------------------------------
            map.addLayer(mapLayer);
            console.log('map', map);
            commit('SET_MAP_INSTANCE', map);
        },
        removeMapInstance({ rootGetters, commit }) {
            const map = rootGetters['lmap/GET_MAP_INSTANCE'];
            map.remove();
            commit('SET_MAP_INSTANCE', null);
        },
        addMarker({ rootGetters }, marker) {
            const map = rootGetters['lmap/GET_MAP_INSTANCE'];
            console.log('map marker', map);
            const m = leaflet
                .marker([marker.lat, marker.lon])
                .bindPopup(`<b>${marker.title}<b>`);

            console.log('m', m);
            map.addLayer(m);
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
        GET_LOCATIONS(state) {
            return state.locations;
        },
    },
};

export default lmap;
