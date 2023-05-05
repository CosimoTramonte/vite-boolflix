
<script>
import {store} from "../data/store";
import Card from "./partials/Card.vue";

export default {
    name: "PopularMovies",
    components:{
        Card
    },
    data(){
        return{
            store
        }
    }
}
</script>

<template>

    <div class="container">
        <h1>Film Popolari</h1>

        <div class="card-container d-flex flex-wrap">

            <Card 
            v-for="(card,index) in store.resultArrayPopularMovies" :key="index"
            :image="card.poster_path"
            :title="card.title"
            :originalTitle= "card.original_title"
            :language= "card.original_language"
            :vote= "Math.round(card.vote_average/2)"
            />

        </div>

    </div>

</template>

<style>

</style>