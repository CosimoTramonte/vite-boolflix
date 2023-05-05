
<script>
import {store} from "../../data/store"

export default {
    name:"SearchPart",
    data(){
        return{
            store
        }
    }
}
</script>

<template>

    <div>
        <input v-model="store.SearchTitle" type="text">
        <button class="btn btn-dark mx-3" @click="$emit('startResearchFilm'), $emit('startResearchTVSeries')">Search</button>
    </div>

</template>

<style>

</style>