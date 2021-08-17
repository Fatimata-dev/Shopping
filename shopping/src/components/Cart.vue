<template>
    <div>
        <h1>Panier</h1>
        <div class="container">
            <div class="main" v-if="cart.length >=1">
                <div class="panier" v-for="item in cart" :key="item.id">
                    <div class="img-container">
                        <img :src="item.img" alt="">
                        <p>{{item.description}}</p>
                        <p>{{item.price}}€</p>
                        <p>{{item.quantity}}</p>
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
                <p>Articles total {{ItemTotal}}</p>
                <p>Prix total {{totalPrice}}€</p>
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

<style lang="scss" scoped>

</style>