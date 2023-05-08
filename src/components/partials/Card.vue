
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

    <div class="ct-card ">

        <div class="imageDiv">
            <img class="w-100" v-if="image == null" src="../../../public/NoImage.png" alt="NoImage">
            <img v-else class="w-100" :src="`https://image.tmdb.org/t/p/w780${image}`" :alt="title">
        </div>

        <div class="back-ground-wrapper"></div>
        
        <div class="infoDiv">
            <h4>{{ title }}</h4>
            <h5>{{ originalTitle }}</h5>
            <img :src="`flags/language-${language}.svg`" :alt="language">
            <div>
                <span v-for="(star,index) in vote" :key="index"><i class="fa-solid fa-star vote-star"></i></span>
                <span v-for="(star,index) in (5 - vote)" :key="index"><i class="fa-solid fa-star"></i></span>
            </div>
        </div>

        
    </div>
  
</template>

<style lang="scss" scoped>

    .ct-card{
        width: 220px;
        height: 330px ;
        padding: 0 10px 20px 10px;
        cursor: pointer;
        position: relative;
        overflow: hidden;

        .imageDiv{
            width: 100%;
            height: 100%;

            img{
                width: 100%;
                height: 100%;
                object-fit: cover;
            }

        }

        .back-ground-wrapper{
            width: 220px;
            height: 330px;
            position: absolute;
            top: 100%;
            transition: all 1s;
            padding: 0 10px;
        }

        .infoDiv{
            position: absolute;
            top: 100%;
            transition: all 1.5s;
            color: white;

            h4{
                font-size: 22px;
                margin-top: 10px;
            }

            h5{
                font-size: 15px;
            }

            img{
                width: 30px;
            }

            .vote-star{
                color: #FFAB00;
            }
        }

       
    }

    .ct-card:hover{
            
            .back-ground-wrapper{
                background-color: rgba(0, 0, 0, 0.521);
                top: 0;
            }

            .infoDiv{
                top: 0;
            }
        }

</style>