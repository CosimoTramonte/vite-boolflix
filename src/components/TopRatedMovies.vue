
<script>
import {store} from "../data/store";
import Card from "./partials/Card.vue";
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';



export default {
    name: "PopularMovies",
    components:{
        Card,
        Swiper,
        SwiperSlide
    },
    setup() {
      return {
        modules: [Pagination],
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

    <div class="container my-4">
        <h1>Top Rated Film</h1>

        <div class="card-container d-flex flex-wrap">

            <swiper
            :slidesPerView="1"
            :spaceBetween="30"
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
                <swiper-slide v-for="(card,index) in store.resultArrayTopRatedMovies" :key="index">
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

<style lang="scss" scoped></style>