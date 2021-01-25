<template>
  <v-container fluid>
    <v-layout>
      <v-flex xs12 class="text-xs-center">
        <h1>Welcome!</h1>
        <v-carousel>
          <v-carousel-item
            v-for="(item, i) in items"
            :key="i"
            :src="item.src"
            reverse-transition="fade-transition"
            transition="fade-transition"
          ></v-carousel-item>
        </v-carousel>
        <v-flex xs12 sm6 offset-sm3 class="text-xs-center"> </v-flex>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src:
            "http://i2.wp.com/www.anonimacinefili.it/wp-content/uploads/2020/09/la-verita-su-la-dolce-vita.jpg?resize=1200%2C600",
        },
        {
          src:
            "https://cdn.ilpost.it/wp-content/uploads/2017/10/danny-lloyd.jpg?x72029",
        },
        {
          src:
            "https://www.lindiceonline.com/wp-content/uploads/2015/12/Pasolini-Comizi-damore-1078x516.jpg",
        },
        {
          src:
            "https://video-images.vice.com/test-uploads/articles/5ef0d2f85def3d009ea2463f/lede/1592904342768-fe5dvwfmqbf50qyam6p8.jpeg?crop=1xw%3A0.7857xh%3B0xw%2C0.1161xh&resize=2000%3A*",
        },
      ],
    };
  },
};
</script>


