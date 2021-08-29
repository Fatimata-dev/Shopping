<template>
    <div>
        <h1>Favories</h1>
        <div class="favorie" v-for="f in favories" :key="f.index">
            <p>{{f.price}}</p>

            
        </div>
    </div>
</template>

<script>
    export default {
        computed: {
            favories() {
                const res = this.$store.getters.favories 
                return  res
            }
        },
    }
</script>

<style  scoped>
    h1{
        text-align: center;
        font-size: 40px;
        font-family: Arial, Helvetica, sans-serif;
        margin: 50px 0;
    }
    /* .grid{
        max-width: 1300px;
        width: 80%;
        height: auto; */
        /* border: 1px solid #333; */
        /* display: grid;
        grid-template-columns: repeat(auto-fill, 300px);
        justify-content: center;
        grid-gap: 10px;
        margin: auto;
    }
    .grid-item{
        width: 300px;
        height: 200px;
        background: #333;
    } */
</style>