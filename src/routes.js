import Home from './pages/Home.vue';
import Product from './pages/Product.vue';

export default [
  {
    path: '/product',
    component: Product
  },
  {
    path: '/',
    component: Home,
  },
  {
    path: '*',
    redirect: '/',
  },
];