
<script>
import {store} from "../data/store";
import Card from "./partials/Card.vue";
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination,Mousewheel } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';



export default {
    name: "PopularMovies",
    components:{
        Card,
        Swiper,
        SwiperSlide,
    },
    setup() {
      return {
        modules: [Pagination, Mousewheel],
      };
    },
    data(){
        return{
            store
        }
    }
}
</script>

<template>

    <div class="container py-4">

        <div class="d-flex align-items-center">
            <h1>Popular Film</h1>

            <div class="buttonDiv px-4">
                <button class="mx-2 p-1 bg-danger" @click="$emit('prevPage')"> Prev </button>
                <button class="mx-2 p-1 bg-danger" @click="$emit('nextPage')"> Next </button>
            </div>

        </div>
        

        <div class="card-container d-flex flex-wrap">

            <swiper
            :slidesPerView="1"
            :spaceBetween="30"
            :mousewheel="true"
            :pagination="{
            clickable: true,
            }"
            :breakpoints="{
            '640': {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            '768': {
                slidesPerView: 4,
                spaceBetween: 40,
            },
            '1024': {
                slidesPerView: 5,
                spaceBetween: 50,
            },
            }"
            :modules="modules"
            class="mySwiper"
            >
                <swiper-slide v-for="(card,index) in store.resultArrayPopularMovies" :key="index">
                    <Card 
                        :image="card.poster_path"
                        :title="card.title"
                        :originalTitle= "card.original_title"
                        :language= "card.original_language"
                        :vote= "Math.round(card.vote_average/2)"
                    />

                </swiper-slide>

            </swiper>

        </div>

    </div>

</template>

<style lang="scss" scoped>
    .buttonDiv{

        button{
            border-radius: 10px;
            background-color: #DB202C !important;
            color: white;
            font-weight: 500;
        }
    }
</style>