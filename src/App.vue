
<script>
import Header from "./components/Header.vue";
import FilmContainer from "./components/FilmContainer.vue";
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
    FilmContainer
  },
  methods:{
    getApi(){
      axios.get(store.apiUrlMovies, {
        params:{
          query:store.FilmTitle,
          language: "it",
        }
      })
      .then(result=>{
        store.resultArray = result.data.results;
        console.log(store.resultArray);
      })
    }
  },
  mounted(){
    this.getApi();
  }
}
</script>

<template>

  <Header @startResearchMovie="getApi" />
  <FilmContainer/>
</template>

<style lang="scss">
  @use "./scss/main.scss";
</style>