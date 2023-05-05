
<script>
export default {
    name:"Card",
    props:{
        image: String,
        title: String,
        originalTitle: String,
        language: String,
        vote: Number
    }
}
</script>

<template>

    <div class="ct-card">

        <img class="w-100" v-if="image == null" src="../../../public/NoImage.png" alt="NoImage">
        <img v-else class="w-100" :src="`https://image.tmdb.org/t/p/w780${image}`" :alt="title">
        <h4>{{ title }}</h4>
        <h5>{{ originalTitle }}</h5>
        <img :src="`flags/language-${language}.svg`" :alt="language">
        <h6>{{ vote }}</h6>

    </div>
  
</template>

<style lang="scss" scoped>

    .ct-card{
        width: calc(100% / 4 - 20px);
        margin: 20px 10px;
        border: 1px solid black;

        img{
            width: 30px;
        }
    }

</style>