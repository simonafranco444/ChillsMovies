<template>
  <v-container v-if="loading">
    <div class="text-xs-center">
      <v-progress-circular indeterminate :size="150" :width="8" color="#26C6DA">
      </v-progress-circular>
    </div>
  </v-container>

  <v-container v-else grid-list-xl>
    <v-layout wrap>
      <v-flex
        xs4
        xs12
        sm4
        lg3
        xl2
        pb-3
        pr-3
        v-for="(item, index) in movieResponse"
        :key="index"
        mb-2
      >
        <v-card>
          <v-img :src="item.Poster" aspect-ratio="1"></v-img>

          <v-card-title primary-title>
            <div>
              <h2>{{ item.Title }}</h2>
              <div>Year: {{ item.Year }}</div>
              <div>Type: {{ item.Type }}</div>
              <div>IMDB-id: {{ item.imdbID }}</div>
            </div>
          </v-card-title>

          <v-card-actions>
            <v-btn round color="#26C6DA" @click="singleMovie(item.imdbID)"
              >View</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  props: ["name"],
  data() {
    return {
      movieResponse: [],
      loading: true,
    };
  },
  mounted() {
    const url =
      "https://www.omdbapi.com/?apikey=75aab4d4&Content-Type=application/json" +
      "&s=" +
      this.name;
    axios
      .get(url)
      .then((response) => {
        this.movieResponse = response.data.Search;
        this.loading = false;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    singleMovie(id) {
      this.$router.push("/movie/" + id);
    },
  },
};
</script>

<style lang="stylus" scoped>
.v-progress-circular {
  margin: 1rem;
}
</style>