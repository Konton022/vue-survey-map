<template>
    <div ref="mapContainer" class="leaflet-map">
    </div>
</template>
<script>
import leaflet from "leaflet"

export default {
    methods: {
        createMapInstance() {
            const map = leaflet.map(this.$refs.mapContainer, {preferCanvas:true}).setView([56.838290378039666, 60.6034161659809], 12)
            const mapLayer = leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'});
            map.addLayer(mapLayer)
            return map

        },
        renderMap(){
            console.log("renderMap", this.createMapInstance());
        }
    },
    mounted(){
        this.renderMap()
    }

}
</script>
<style scoped>
    @import 'leaflet/dist/leaflet.css';
    .leaflet-map{
        width: 100%;
        height: 600px;
    }
</style>