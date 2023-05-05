
<script>
import Header from "./components/Header.vue";
import FilmContainer from "./components/FilmContainer.vue";
import TVSeries from "./components/TVSeries.vue";
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
    TVSeries
  },
  methods:{
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
  }
}
</script>

<template>

  <Header @startResearchMovie="getApiFilm" @startResearchTVSeries="getApiTVSeries"/>
  <FilmContainer/>
  <TVSeries/>

</template>

<style lang="scss">
  @use "./scss/main.scss";
</style>