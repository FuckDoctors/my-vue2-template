const Home = () => import(/* webpackChunkName: "home" */ '@/pages/home/Home');

export default [
  {
    path: '/',
    redirect: '/home',
  }, {
    path: '/home',
    name: 'home',
    component: Home,
  },
];
