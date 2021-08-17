import { createStore } from 'vuex'

const store = createStore({
  state: {
    cart:[],
    products : [
      { id: 1, description: "Quarz Luxe", price: 12, img: require("../assets/img/sac1.jpg")},
      { id: 2, description: 'Curren Business', price: 20, img: require("../assets/img/sac2.jpg")},
      { id: 3, description: 'Curren Sport', price: 5, img: require("../assets/img/sac3.jpg") },
      { id: 4, description: 'Jaragar Racing', price: 8, img: require("../assets/img/sac4.jpg") },
      { id: 5, description: 'Liges Hommes', price: 3, img: require("../assets/img/sac5.jpg")},
      { id: 6, description: 'Maserati Mechanical', price: 65, img: require("../assets/img/sac6.jpg")},
      { id: 7, description: 'Montre Mecanique', price: 25, img: require("../assets/img/sac7.jpg") },
      { id: 8, description: 'Brand Designer', price: 28, img: require("../assets/img/sac8.jpg")},
      { id: 9, description: 'Relogio Masculino', price: 4, img: require("../assets/img/sac9.jpg")},
      { id: 10, description: 'Tissot Multifunction', price: 29, img: require("../assets/img/sac10.jpg")},
      { id: 11, description: 'Hip Hop Gold', price: 87, img: require("../assets/img/sac11.jpg")},
      { id: 12, description: 'Mesh Genova', price: 6, img: require("../assets/img/sac12.jpg") },
    ]
  },
 getters: {
   products(state) {
     return state.products 
   },
   ItemTotal(state){
     return state.cart.length
   },
   totalPrice(state){
     let total =0
     state.cart.forEach(item => {
       total += item.quantity * item.price
     });
     return total
   }
 },
  mutations: {
    addProductToCart(state, {id,img, description, price,quantity}){
      let productInCart = state.cart.find(item =>{
        return item.id === id
      })
      if (productInCart) {
        productInCart.quantity += quantity
        return
      }
      state.cart.push({id,img, description, price,quantity})
    },
    removeItem(state, item){
      state.cart = state.cart.filter(product =>{
        return product.id !== item.id
      })
    },
    addOne(state, item){
      state.cart.forEach(product => {
        if (product.id === item.id) {
          product.quantity = item.quantity + 1
          
        }
      });
    },
    removeOne(state, item){
      if (item.quantity === 1) {
        state.cart = state.cart.filter(product =>{
          return product.id !== item.id
        })
      }else{
        state.cart.forEach(product => {
          if (product.id === item.id) {
            product.quantity = item.quantity - 1
            
          }
        });
      }
      
    }
  },
  actions: {
    addToCart({commit}, {id,img, description, price,quantity}) {
      commit('addProductToCart', {id,img, description, price,quantity});
    },
    removeProduct({commit},item){
      commit('removeItem',item)
    },
    addOne({commit}, item){
      commit('addOne', item)
    },
    removeOne({commit}, item){
      commit('removeOne', item)
    }
  }
})
export default store;