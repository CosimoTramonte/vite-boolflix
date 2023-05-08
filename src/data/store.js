import {reactive} from "vue";

export const store = reactive({
    apiUrlMovies:"https://api.themoviedb.org/3/search/movie?api_key=ece65189423782ce0c47b4299a0d8a0b",
    resultArrayFilm: [],
    apiUrlTVSeries:"https://api.themoviedb.org/3/search/tv?api_key=ece65189423782ce0c47b4299a0d8a0b",
    resultArrayTVSeries: [],
    apiUrlPopularMovies:"https://api.themoviedb.org/3/movie/popular?api_key=ece65189423782ce0c47b4299a0d8a0b",
    resultArrayPopularMovies:[],
    pagesPopularMovies: 1,
    apiUrlTopRatedMovies:"https://api.themoviedb.org/3/movie/top_rated?api_key=ece65189423782ce0c47b4299a0d8a0b",
    resultArrayTopRatedMovies:[],
    pagesTopRatedMovies: 1,
    apiUrlUpcomingMovies: "https://api.themoviedb.org/3/movie/upcoming?api_key=ece65189423782ce0c47b4299a0d8a0b",
    resultArrayUpcomingMovies:[],
    SearchTitle:"",
})
