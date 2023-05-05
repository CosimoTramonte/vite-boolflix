
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
        <input v-model="store.FilmTitle" type="text">
        <button class="btn btn-dark mx-3" @click="$emit('startResearch')">Search</button>
    </div>

</template>

<style>

</style>