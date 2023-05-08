
<script>
import Header from "./components/Header.vue";
import FilmContainer from "./components/FilmContainer.vue";
import TVSeries from "./components/TVSeries.vue";
import PopularMovies from "./components/PopularMovies.vue";
import TopRatedMovies from "./components/TopRatedMovies.vue";
import Jumbotron from "./components/Jumbotron.vue";
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
    PopularMovies,
    TopRatedMovies,
    Jumbotron
  },
  methods:{
    getApiUpcomingMovies(){
      axios.get(store.apiUrlUpcomingMovies, {
        params:{
          language: "it",
          page: 1
        }
      })
      .then(result =>{
        store.resultArrayUpcomingMovies = result.data.results;
        console.log(store.resultArrayUpcomingMovies);
      })
    },

    getApiTopRatedMovies(){
      store.resultArrayFilm=[];
      store.resultArrayTVSeries=[];
      axios.get(store.apiUrlTopRatedMovies, {
        params:{
          language: "it",
          page: 1
        }
      })
      .then(result =>{
        store.resultArrayTopRatedMovies = result.data.results;
        console.log(store.resultArrayTopRatedMovies);
      })
    },

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
    this.getApiPopularMovies();
    this.getApiTopRatedMovies();
    this.getApiUpcomingMovies()
  }
}
</script>

<template>

  <Header @startResearchMovie="getApiFilm" @startResearchTVSeries="getApiTVSeries" @researchHome="getApiPopularMovies"/>

  <div class="homeDiv" v-if=" store.resultArrayTVSeries.length == 0 & store.resultArrayFilm.length == 0" >
    <Jumbotron />
    <PopularMovies />
    <TopRatedMovies/>
  </div>

  <div class="researhDiv" v-else>
    <FilmContainer />
    <TVSeries />
  </div>


  

</template>

<style lang="scss">
  @use "./scss/main.scss";

  .homeDiv,
  .researhDiv{
    background-color: #111;
    color: white;
  }
</style>