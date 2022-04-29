<template>
    <div ref="mapContainer" class="leaflet-map">
    </div>
</template>
<script>

import {mapActions} from "vuex"
export default {
    methods: {
       ...mapActions({createMap: "lmap/createMapInstance"}) 
    },
    mounted(){
        this.createMap(this.$refs.mapContainer)
    },
    beforeUnmount() {

    }

}
</script>
<style scoped>
    
    .leaflet-map{
        width: 100%;
        height: 600px;
    }
</style>