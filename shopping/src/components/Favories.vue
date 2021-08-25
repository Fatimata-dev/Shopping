<template>
    <div>
        <h1>Favories</h1>
        <div class="grid">
            <div class="grid-item"></div>
            <div class="grid-item"></div>
            <div class="grid-item"></div>
            <div class="grid-item"></div>

            <div class="grid-item"></div>
            <div class="grid-item"></div>
            <div class="grid-item"></div>
            <div class="grid-item"></div>

            <div class="grid-item"></div>
            <div class="grid-item"></div>
            <div class="grid-item"></div>
            <div class="grid-item"></div>

            <div class="grid-item"></div>
            <div class="grid-item"></div>
            <div class="grid-item"></div>
            <div class="grid-item"></div>

            
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style  scoped>
    h1{
        text-align: center;
        font-size: 40px;
        font-family: Arial, Helvetica, sans-serif;
        margin: 50px 0;
    }
    .grid{
        max-width: 1300px;
        width: 80%;
        height: auto;
        /* border: 1px solid #333; */
        display: grid;
        grid-template-columns: repeat(auto-fill, 300px);
        justify-content: center;
        grid-gap: 10px;
        margin: auto;
    }
    .grid-item{
        width: 300px;
        height: 200px;
        background: #333;
    }
</style>