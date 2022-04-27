<template>
   <yandex-map :coords="coords" :zoom="zoom">
          
    </yandex-map> 
</template>
<script>

import { yandexMap } from 'vue-yandex-maps'

export default {
    data() {
        return {           
            coords:[56.838290378039666,60.6034161659809],
            zoom: 12
        }
    },
    components: { yandexMap },
}
</script>
<style scoped>

</style>