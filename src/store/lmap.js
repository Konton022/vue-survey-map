import leaflet from "leaflet"
import 'leaflet/dist/leaflet.css'

const lmap = {
    state(){
        return {
            defaultCoords: [56.838290378039666, 60.6034161659809 ],
            defaultZoom: 12
        }
    },
    mutations: {},
    actions: {
        createMapInstance({getters}, mapContainer) {
            console.log(mapContainer);
            const map = leaflet.map(mapContainer, {preferCanvas:true}).setView(getters.GET_DEFAULT_COORDS, getters.GET_DEFAULT_ZOOM)
            const mapLayer = leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'});
            map.addLayer(mapLayer)
            return map
        },

    },
    getters: {
        GET_DEFAULT_COORDS(state){
            return state.defaultCoords
        },
        GET_DEFAULT_ZOOM(state){
            return state.defaultZoom
        }
    }
}

export default lmap