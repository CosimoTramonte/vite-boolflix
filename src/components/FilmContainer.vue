
<script>
import {store} from "../data/store";
import Card from "./partials/Card.vue"

export default {
    name:"CardContainer",
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
        <h1>Film Cercati</h1>

        <div class="card-container d-flex flex-wrap">

            <Card 
            v-for="(card,index) in store.resultArray" :key="index"
            :title="card.title"
            :originalTitle= "card.original_title"
            :language= "card.original_language"
            :vote= "card.vote_average"
            />

        </div>

    </div>
  
</template>

<style>

</style>