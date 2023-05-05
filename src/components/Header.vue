
<script>
import SearchPart from "./partials/SearchPart.vue"

export default {
    name: "Header",
    components:{
        SearchPart
    },
    methods: {
        researchMovie() {
            this.$emit('startResearchMovie');
        },
    }
}
</script>

<template>

    <div class="ct-container d-flex align-items-center justify-content-between mx-5">

        <div class="image-div">
            <img src="../../public/logo-boolflix_720.png" alt="logo">
        </div>

        <SearchPart @startResearch="researchMovie"/>
    </div>

</template>

<style lang="scss" scoped>

    .ct-container{
        height: 70px;

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