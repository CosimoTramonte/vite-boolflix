
<script>
import SearchPart from "./partials/SearchPart.vue"
import NavBar from "./partials/NavBar.vue";

export default {
    name: "Header",
    components:{
        SearchPart,
        NavBar
    },
    methods: {
        researchMovie() {
            this.$emit('startResearchMovie');
        },
        researchTVSeries(){
            this.$emit('startResearchTVSeries');
        },
        researchPopularMovies(){
            this.$emit('researchPopularMovie')
        }
    }
}
</script>

<template>

    <div class="ct-container d-flex align-items-center justify-content-between px-5">

        <div class="image-div">
            <img src="../../public/logo-boolflix_720.png" alt="logo">
        </div>

        <NavBar @startResearchPopularFilm="researchPopularMovies" />
        
        <SearchPart @startResearchFilm="researchMovie" @startResearchTVSeries="researchTVSeries"/>
    </div>

</template>

<style lang="scss" scoped>

    .ct-container{
        height: 70px;
        background-color: #0B0B0B;

        .image-div{
            height: 100%;
            width: auto;

            img{
                height: 100%;
                width: 50%;
                object-fit: contain;
            }
        }
        
    }

</style>