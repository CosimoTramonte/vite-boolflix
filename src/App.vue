
<script>
import Header from "./components/Header.vue";
import FilmContainer from "./components/FilmContainer.vue";
import TVSeries from "./components/TVSeries.vue";
import PopularMovies from "./components/PopularMovies.vue"
import {store} from "./data/store";
import axios from "axios";


export default {
  name: "App",
  data(){
    return{
      store
    }
  },
  components:{
    Header,
    FilmContainer,
    TVSeries,
    PopularMovies
  },
  methods:{
    getApiPopularMovies(){
      store.resultArrayFilm=[];
      store.resultArrayTVSeries=[];
      axios.get(store.apiUrlPopularMovies, {
        params:{
          language: "it",
          page: 1
        }
      })
      .then(result =>{
        store.resultArrayPopularMovies = result.data.results;
        console.log(store.resultArrayPopularMovies);
      })
    },

    getApiFilm(){
      axios.get(store.apiUrlMovies, {
        params:{
          query:store.SearchTitle,
          language: "it",
        }
      })
      .then(result=>{
        store.resultArrayFilm = result.data.results;
        console.log(store.resultArrayFilm, store.SearchTitle);
      })
    },

    getApiTVSeries(){
      axios.get(store.apiUrlTVSeries, {
        params:{
          query:store.SearchTitle,
          language: "it",
        }
      })
      .then(result =>{
        store.resultArrayTVSeries = result.data.results;
        console.log(store.resultArrayTVSeries, store.SearchTitle);
      })
    }
  },
  mounted(){
    this.getApiFilm();
    this.getApiTVSeries();
    this.getApiPopularMovies()
  }
}
</script>

<template>

  <Header @startResearchMovie="getApiFilm" @startResearchTVSeries="getApiTVSeries" @researchPopularMovie="getApiPopularMovies"/>
  <FilmContainer v-if="store.resultArrayFilm.length >= 1"/>
  <TVSeries v-if="store.resultArrayTVSeries.length >= 1"/>
  <PopularMovies v-else/>

</template>

<style lang="scss">
  @use "./scss/main.scss";
</style>