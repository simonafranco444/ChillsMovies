<template>
  <v-app>
    <v-navigation-drawer v-model="sidebar" app>
      <v-list>
        <v-list-tile
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path"
          @click="sidebar = !sidebar"
        >
          <v-list-tile-action> </v-list-tile-action>
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar app>
      <v-toolbar-side-icon @click="sidebar = !sidebar"> </v-toolbar-side-icon>

      <v-toolbar-title>
        <router-link to="/home" tag="span" style="cursor: pointer">
          {{ appTitle }}
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-flex xs24 sm12 md6>
        <v-text-field label="Movie Name" v-model="searchString"> </v-text-field>
      </v-flex>
      <v-flex xs6 sm3 md2 xl1>
        <v-btn icon flat :disabled="!dataAvailable" @click="searchMovie">
          <span class="mr-2">Search</span>
        </v-btn>
      </v-flex>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-content>
      <router-view>
        <Benvenuto></Benvenuto>
      </router-view>
    </v-content>
  </v-app>
</template>

<script>
import firebase from "firebase";
import Benvenuto from "@/components/Benvenuto.vue";

export default {
  name: "App",
  components: { Benvenuto },
  data() {
    return {
      searchString: "",
      appTitle: "Home",
      sidebar: false,
      menuItems: [
        { title: "Benvenuto", path: "/benvenuto" },
        { title: "Login", path: "/prova" },
        { title: "Register", path: "/register" },
      ],
    };
  },

  methods: {
    searchMovie() {
      this.$router.push("/search/" + this.searchString);
      this.searchString = "";
    },

    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          alert("Successfully logged out");
          this.$router.push("/");
        })
        .catch((error) => {
          alert(error.message);
          this.$router.push("/");
        });
    },
  },
  computed: {
    dataAvailable() {
      return this.searchString !== null && this.searchString !== "";
    },
  },
};
</script>

<style scoped>
</style>