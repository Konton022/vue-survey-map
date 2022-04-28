<template>
     <div class="map">
        <h1>Map</h1>
        <map-component></map-component>
     </div>
</template>
<script>

import MapComponent from '@/components/MapComponent.vue'

export default {
    components: {
        MapComponent

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

</style>