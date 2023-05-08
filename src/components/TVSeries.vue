
<script>
import {store} from "../data/store";
import Card from "./partials/Card.vue"

export default {
    name:"TVSeries",
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
        <h1>TV Series Cercati</h1>

        <div class="card-container d-flex flex-wrap">

            <Card 
            v-for="(card,index) in store.resultArrayTVSeries" :key="index"
            :image="card.poster_path"
            :title="card.name"
            :originalTitle= "card.original_name"
            :language= "card.original_language"
            :vote= "Math.round(card.vote_average/2)"
            />

        </div>

    </div>
</template>

<style lang="scss" scoped>

    .container{

        h1{
            padding: 80px 0 20px 0;
        }
    }

</style>