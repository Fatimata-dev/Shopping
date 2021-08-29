import { createWebHistory, createRouter } from "vue-router";
import Home from '../components/Acceuil'
import Favoris from '../components/Favories';
import Cart from '../components/Cart'
const routes = [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/favories",
      name: "Favories",
      component: Favoris,
    },
    {
      path: "/cart",
      name: "Cart",
      component: Cart,
    },
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;
