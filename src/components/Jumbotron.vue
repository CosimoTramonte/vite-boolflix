
<script>
import {store} from "../data/store";
import Card from "./partials/Card.vue";
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default {
    name: "Jumbotron",
    components:{
        Card,
        Swiper,
        SwiperSlide
    },
    setup() {
      return {
        modules: [Pagination, Navigation, Autoplay],
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
    <swiper
        :slidesPerView="1"
        :spaceBetween="30"
        :autoplay="{
            delay: 10000,
            disableOnInteraction: false,
        }"
        :loop="true"
        :pagination="{
        clickable: true,
        }"
        :navigation="true"
        :modules="modules"
        class="mySwiper"
    >
        <swiper-slide v-for="(card,index) in store.resultArrayUpcomingMovies" :key="index">

            <div class="jumboDiv">

                <div class="imageDiv">

                    <img  v-if="card.backdrop_path == null" src="../../public/NoImage.png" alt="NoImage">
                    <img v-else  :src="`https://image.tmdb.org/t/p/original${card.backdrop_path}`" :alt="card.original_title">

                </div>

                <div class="infoDiv">

                    <h1>{{ card.title }}</h1>
                    <h5>{{ card.original_title }}</h5>
                    <p>{{ card.overview }}</p>
                    <div>
                        <span v-for="(star,index) in Math.round(card.vote_average/2)" :key="index"><i class="fa-solid fa-star vote-star"></i></span>
                        <span v-for="(star,index) in (5 - Math.round(card.vote_average/2))" :key="index"><i class="fa-solid fa-star"></i></span>
                    </div>

                </div>

                <div class="faded"></div>

            </div>

        </swiper-slide>

  </swiper>
</template>

<style lang="scss" scoped>

    .jumboDiv{
        width: 100vw;
        height: 70vh;
        padding-right: 50px;
        position: relative;
        overflow: hidden;

        .faded{
            height: 100px;
            width: 100%;
            position: absolute;
            bottom: 0;
            background: linear-gradient(180deg, transparent, rgba(37, 37, 37, 0.61),#111);
        }

        .imageDiv{
            height: 100%;
            width: 100%;
            position: absolute;

            img{
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        .infoDiv{
            position: absolute;
            width: 30%;
            z-index: 10;
            bottom: 25%;
            margin-left: 50px;

            p{
                max-height: 220px;
                overflow-x: hidden;
                
            }

            .vote-star{
                color: #FFAB00;
            }
        }
    }

</style>