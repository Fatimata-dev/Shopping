<template>
  <div>
     <div class="searchkey">
          <input type="search" v-model="searchKey" placeholder="Chercher..." autocomplete="off" id="search">
          <span v-if="searchKey && filteredList.length >= 1" > {{filteredList.length}} Resultat<span v-if="filteredList.length >=2">s</span></span>
        </div>
    <h1>Articles</h1>
    <div class="container">
      <div class="main">
       
        <div class="prodcuts" v-for=" product in filteredList" :key="product.id">
            <div class="img-container">
                <img :src="product.img" alt="">
                <p>{{product.description}}</p>
                <p>{{product.price}}€</p>
                <div class="actions">
                  <button>
                   <i class="far fa-heart"></i>
                  </button>
                   <button @click="addToCart(product)">
                    <i class="fas fa-shopping-cart"></i>
                  </button>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        searchKey:'',
      }
    },
   
    computed: {
      products(){
           return this.$store.getters.products
        },
          filteredList() {
        return this.products.filter((product) => {
        return product.description.toLowerCase().includes(this.searchKey.toLowerCase());
      });
    },
     
    
     
    },
    methods: {
      addToCart(product){
        this.$store.dispatch('addToCart', {
          id: product.id,
          img: product.img,
          description: product.description,
          price: product.price,
          quantity: 1
        })
      }
    }, 
   
    
     
  }
</script>

<style  scoped>
.main{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.img-container{
  width: 300px;
  /* height: 300px; */
}
img{
  width: 50%;
  height: 50%;
}

</style>