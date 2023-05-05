import {reactive} from "vue";

export const store = reactive({
    apiUrlMovies:"https://api.themoviedb.org/3/search/movie?api_key=ece65189423782ce0c47b4299a0d8a0b",
    apiUrlTVSeries:"https://api.themoviedb.org/3/search/tv?api_key=ece65189423782ce0c47b4299a0d8a0b",
    SearchTitle:"",
    resultArrayFilm: [],
    resultArrayTVSeries: []
})
