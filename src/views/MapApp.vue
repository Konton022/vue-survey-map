<template>
     <div class="map">
        <h1>Map</h1>

        <div class="map-wrapper">
            <map-list/>
            <map-component/>
        </div>
     </div>
</template>
<script>

import MapComponent from '@/components/MapComponent.vue'
import MapList from '@/components/MapList.vue'

export default {
    components: {
        MapComponent,
        MapList

    }, 
    data() {
        return {           
            coords:[56.838290378039666, 60.6034161659809],
            zoom: 15
        }
    },

}
</script>
<style scoped>
    .map-wrapper {
        display: grid;
        grid-template-columns: 30% 70%;
        gap: 10px;
    }
</style>