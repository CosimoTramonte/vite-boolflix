
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

    <div class="d-flex align-items-center">
        <input v-model="store.SearchTitle" type="text">
        <button class="btn btn-dark mx-3" @click="$emit('startResearchFilm'), $emit('startResearchTVSeries')"><i class="fa-solid fa-magnifying-glass"></i></button>
    </div>

</template>

<style>

button{
    font-size: 18px !important;
    background-color: #0B0B0B !important;
    border: none !important;
}

</style>