
<script>
export default {
    name:"NavBar"
}
</script>

<template>

    <div class="nav-bar">
        <ul class="nav-list">
            <li @click="$emit('startResearchHome')">Home</li>
            <li>Serie TV</li>
            <li>Film</li>
            <li >Popolari</li>
            <li>La mia lista</li>
        </ul>
    </div>
  
</template>

<style lang="scss" scoped>

    .nav-list{
        list-style: none;
        display: flex;
        justify-content: space-between;
        align-items: center;

        li{
            color: white;
            padding: 12px 10px 0;
            font-weight: 500;
            cursor: pointer;
        }
    }

</style>