<template>
    <div class="markers-list">
        <h3>Markers list</h3>
        <ul>
            <li v-for="local of getLocations" :key="local.lat">{{local.title}}</li>
        </ul>
    </div>
    
</template>
<script>

import {mapGetters} from 'vuex'

export default {
    data(){
        return {

        locals: null
        }
    },
    methods: {
        
    },
    computed:{
        ...mapGetters({
            getLocations: 'lmap/GET_LOCATIONS'
        })
    }
   
}
</script>
<style scoped>
    h3 {
        color: whitesmoke;
    }
    .markers-list {
        min-width: 20rem;
        background-color: grey;
    }
</style>