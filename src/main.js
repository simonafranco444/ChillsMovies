import Vue from "vue";
import App from "./App.vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import router from "./router";
import axios from "axios";
import firebase from "firebase";
import "firebase/database";

import "@firebase/firestore";
import "firebase/database";

Vue.use(Vuetify);

Vue.config.productionTip = false;
axios.defaults.baseURL =
  "https://www.omdbapi.com/?apikey=75aab4d4&page=1&type=movie&Content-Type=application/json";
new Vue({
  render: (h) => h(App),
  router
}).$mount("#app");

var firebaseConfig = {
  apiKey: "AIzaSyB9WhpCit1Hp85JZspKZNx-pECsOddxJcg",
  authDomain: "chills-c06b9.firebaseapp.com",
  databaseURL:
    "https://chills-c06b9-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "chills-c06b9",
  storageBucket: "chills-c06b9.appspot.com",
  messagingSenderId: "746288190489",
  appId: "1:746288190489:web:7a4f4daf4942d89247c688"
};

firebase.initializeApp(firebaseConfig);
