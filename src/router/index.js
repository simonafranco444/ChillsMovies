import Vue from "vue";
import VueRouter from "vue-router";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

//importiamo le pagine

import Home from "@/components/Home";
import Movie from "@/components/Movie";
import SearchMovie from "@/components/SearchMovie";
import Login from "@/components/Login";
import Register from "@/components/Register";
import Benvenuto from "@/components/Benvenuto";

Vue.use(Vuetify);
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/benvenuto"
    },
    {
      path: "/home",
      name: "Home",
      component: Home,
      meta: {
        authRequired: true
      }
    },

    { path: "/movie/:id", name: "Movie", props: true, component: Movie },
    {
      path: "/search/:name",
      name: "SearchMovie",
      props: true,
      component: SearchMovie
    },
    { path: "/prova", name: "Login", component: Login },
    { path: "/register", name: "Register", component: Register },
    { path: "/benvenuto", name: "Benvenuto", component: Benvenuto }
  ]
});

export default router;
