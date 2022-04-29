<template>
    <div ref="mapContainer" class="leaflet-map">
    </div>
    {{locations}}
</template>
<script>

import {mapActions,  mapGetters} from "vuex"
export default {
    name: 'MapComponent',
    data(){
        return {
            locals: null
        }
    },
    methods: {
        ...mapActions({
           createMap: "lmap/createMapInstance", 
           removeMap:"lmap/removeMapInstance", 
           addMarker:"lmap/addMarker"
        }),
        set_locals(){
            this.locals = this.locations
            console.log('locals', this.locals);
        }
    },
    
    mounted(){
        this.createMap(this.$refs.mapContainer);
        this.set_locals()
        for(let loc of this.locals){
            console.log('loc',loc);
            this.addMarker(loc)
        }
        
    },
    beforeUnmount() {
        this.removeMap()
    },
    computed:{
        ...mapGetters({
            locations: "lmap/GET_LOCATIONS"
        })
    },

    // watch: {
    //     locals(locations){
    //         for(let loc of locations){
    //             console.log(loc);
    //             this.addMarker(loc)
    //         }
    //     }
    // }, 
    // setup(){
    //     this.locals = this.locations
    // }

}
</script>
<style scoped>
    
    .leaflet-map{
        width: 100%;
        height: 600px;
    }
</style>