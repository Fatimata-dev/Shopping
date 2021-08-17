<template>
    <div class="body">
        <nav>
            <div class="nav-container">
             <div class="logo">
                    <router-link to="/">
                        <img src="https://cdn.pixabay.com/photo/2016/09/30/17/29/shopping-1705800__480.png" alt="">
                    </router-link>
             </div>
              
                
                <ul>
                    <li>
                    <router-link to="/user">
                       <i class="fas fa-user"></i>
                    </router-link>
                    </li>
                    <li>
                    <router-link to="/favories">
                        <i class="far fa-heart"></i>
                    </router-link>
                    </li>
                    <li>
                    <router-link to="/cart">
                        <i class="fas fa-shopping-cart">{{ItemTotal}}</i>
                    </router-link>
                    </li>
                </ul>
                </div>
            
        </nav>
    </div>
</template>

<script>
    export default {
         computed: {
            ItemTotal(){
        return this.$store.getters.ItemTotal
         }
         },
    }
</script>

<style  scoped>
@import url("https://fonts.googleapis.com/css2?family=Ubuntu&display=swap");

.body{
  margin: 0 auto;
  background: rgba(254, 254, 254, 0.8);
  padding-bottom: 4rem;
  color: #333;
  overflow-x: hidden;
}
nav{
  padding: 0.8rem 2.4rem;
  background: rgba(255, 255, 255, 0.97);
  width: 100%;
  z-index: 2;
  box-shadow: 0 2px 4px -3px rgba(51, 51, 51, 0.2);
}
.nav-container{
     display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1050px;
    margin: 0 auto;
    overflow: hidden;
}
ul{
    display: flex;
    justify-content: flex-end;
    font-size: 24px;
    width: 34%;
    
}
li{
   
    list-style-type: none;
    margin:auto  30px ;
}
.logo{
    width: 30%;
    height: 30%;
}
img{
    width: 15%;
}

</style>