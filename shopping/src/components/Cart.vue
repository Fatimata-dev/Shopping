<template>
    <div>
        <h1>Panier</h1>
        <div class="container">
            <div class="main" v-if="cart.length >=1">
                <div class="panier">
                    <div class="product-container"  v-for="item in cart" :key="item.id">
                        <div class="img-container">
                          <img :src="item.img" alt="">
                        </div>
                        <div class="item-description">
                            <h4>{{item.description}}</h4>
                            <p>{{item.price}}€</p>
                        </div>
                        <div class="item-quantity">
                            <h6>{{item.quantity}}</h6>
                        </div>
                        <div class="action">
                            <button @click="addOne(item)">
                                <i class="fa fa-plus"></i>
                            </button>
                            <button @click="removeOne(item, id)">
                                <i class="fa fa-minus"></i>
                            </button>
                            <button @click="removeItem(item, id)">
                                <i class="fa fa-trash"></i>
                            </button>
                        </div>
                    </div>
                </div>
               <div class="total">
                   <h2>Prix total </h2>
                    <h2>{{totalPrice}}€</h2>
               </div>
                <div class="item quantity">
                    <h3>Articles total {{ItemTotal}}</h3>
                </div>
            <div class="order-button">
            <button>Commander</button>
          </div>
            </div>
            <div class="retour" v-else>
                <p>Votre Panier est vide</p>
                <router-link to="/">Retour à l'acceuil</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        computed: {
           cart(){
            return this.$store.state.cart
         },
           ItemTotal(){
            return this.$store.getters.ItemTotal
         },
        totalPrice(){
           return this.$store.getters.totalPrice
        },
        },
        methods: {
            addOne(item){
                this.$store.dispatch('addOne', item)
            },
            removeOne(item, id){
                 this.$store.dispatch('removeOne', item,id)
            },
            removeItem( item){
                this.$store.dispatch('removeProduct', item)
            }
        },
    }
</script>

<style  scoped>
.panier{
    transition: 0.4s ease;
    background: #2eb7eb;
    color: white;
    padding: 1.4rem;
    border-radius: 4px;
    min-width: 290px;
    box-shadow: 0 1px 6px rgba(51, 51, 51, 0.25);
    height: 100%;
    margin: auto;
    width: 500px;
}
.img-container{
    display: flex;
    align-items: center;
}
img{
    height: 100px;
    width: 100px;
    border-radius: 50%;
    transform: scale(0);
    animation: img-scale 1s forwards
    
}
 @keyframes img-scale {
    to {
    transform: scale(1)
    }
}
.item-description {
display: flex;
justify-content: space-between;
align-items: flex-start;
margin-left: 10px;
}
  h4 {
    margin: 0 0.9rem 0.9rem 0;
    background: rgba(51, 51, 51, 0.1);
    padding: 3px 5px;
    border-radius: 4px;
    box-shadow: 0 1px 1px rgba(51, 51, 51, 0.15);
    transform: scaleX(0);
    transform-origin: left;
    animation: img-scale 1s forwards;
  }
  @keyframes img-scale {
    to {
    transform: scaleX(1)
    }
}
.item-quantity {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-left: 10px;
}

.action{
    display: flex;
    justify-content: space-between;
    width: 30%;
    margin-left: 10px;
}
h6 {
color: #333;
}
.total{
display: flex;
justify-content: space-around;
margin: 1.4rem 0 0.4rem;
width: 200px;
margin: auto;
}
.order-button{
    margin: 1rem auto 0;
      width: 100%;
      text-align: center;
}
button {
    background: white;
    padding: 0.8rem;
    border-radius: 4px;
    box-shadow: 0 1px 6px rgba(51, 51, 51, 0.2);
    transition: all 0.2s ease;
    letter-spacing: 1px;
      }
</style>