import Home from "./views/Home.vue";
import Landing from "./views/Landing.vue";
// import Reservations from './views/Reservations.vue'
// import About from './views/About.vue'
import NotFound from "./views/NotFound.vue";

/** @type {import('vue-router').RouterOptions['routes']} */
export let routes = [
  { path: "/", component: Landing, meta: { title: "Home" } },
  {
    path: "/about",
    meta: { title: "About" },
    // example of route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("./views/About.vue"),
    // component: About
  },
  {
    path: "/reservations",
    meta: { title: "Reservations" },
    // example of route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("./views/ReservationsWrapper.vue"),
    // component: About
  },
  {
    path: "/pricing",
    meta: { title: "Pricing" },
    component: () => import("./views/Pricing.vue"),
  },
  { path: "/:path(.*)", component: NotFound },
];
