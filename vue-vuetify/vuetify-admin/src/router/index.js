import Vue from "vue";
import VueRouter from "vue-router";
// import Home from '../views/Home.vue'

Vue.use(VueRouter);

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/",
    name: "DashBoard",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/DashBoard.vue"),
  },
  {
    path: "/gridsystem",
    name: "GridSystem",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/GridSystem.vue"),
  },
  ,
  {
    path: "/gridlistpage",
    name: "GridListPage",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/GridListPage.vue"),
  },
  {
    path: "/breakpoint",
    name: "BreakPoint",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/BreakPoint.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
