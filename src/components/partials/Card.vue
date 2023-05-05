
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

    <div class="ct-card d-flex flex-column align-items-center">

        <img class="w-100" v-if="image == null" src="../../../public/NoImage.png" alt="NoImage">
        <img v-else class="w-100" :src="`https://image.tmdb.org/t/p/w780${image}`" :alt="title">
        <h4>{{ title }}</h4>
        <h5>{{ originalTitle }}</h5>
        <img :src="`flags/language-${language}.svg`" :alt="language">
        <div>
            <span v-for="(star,index) in vote" :key="index"><i class="fa-solid fa-star vote-star"></i></span>
            <span v-for="(star,index) in (5 - vote)" :key="index"><i class="fa-solid fa-star"></i></span>
        </div>
        
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

        .vote-star{
            color: #FFB02E;
        }
    }

</style>