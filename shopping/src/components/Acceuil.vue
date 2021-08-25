<template>
  <div>
        <div class="searchkey">
              <input type="search" v-model="searchKey" placeholder="Chercher..." autocomplete="off" id="search">
              <span v-if="searchKey && filteredList.length >= 1" > {{filteredList.length}} Resultat<span v-if="filteredList.length >=2">s</span></span>
            </div>
        <h1>Articles</h1>
            <div class="prodcuts"  >
                <div class="product-container" v-for=" (product, index) in filteredList" :key="index">
                    <div class="img-container">
                      <img :src="product.img" alt="">
                    </div>
                    <div class="card">
                      <h3>{{product.description}}</h3>
                      <span>{{product.price}}€</span>
                    </div>
                      <div class="action">
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
        const res = this.$store.getters.products
           return res
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
.prodcuts{
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
.product-container{
  width: 300px;
  height: 300px;
  border: 3px solid #3333;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 0px 6px rgba(51, 51, 51, 0.15);
  transition: 0.2s ease;
  
}

.product-container:hover {
  transform: scale(1.04);
  
}
.img-container{
  overflow: hidden;
}
.card:hover{
 opacity: 1;
 bottom: 2.3rem;

}
.card{
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0.3rem 0.8rem;
  position: absolute;
  bottom: 1rem;
  opacity: 0;
  transition: 0.6s;
  width: 100%;
  height: 75px;
  background: linear-gradient(0deg, white 40%, transparent 100%);

}
.action{
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 40px;
  position: relative;
  margin-top: 30px;
  bottom: 0;
}
i {
  padding: 3px 5px;
  transition: 0.2s;
  cursor: pointer;
}
i:hover{
  animation: scaler 0.8s infinite linear;
}
.fa-heart {
  color: rgba(251, 38, 38, 0.5);
}
.fa-shopping-cart {
  font-size: 16px;
  color: #2eb7eb;
}
.fa-shopping-cart:hover{
  filter: brightness(125%);
}
img{
   height: 210px;
   transition: 0.4s ease;
}
/* img:hover{
  transform: scale(1.08);
} */

</style>