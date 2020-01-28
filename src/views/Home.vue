<template>
  <div class='home'>
      <v-toolbar dense :dark="true">
        <v-spacer></v-spacer>
        <v-toolbar-title>News for you</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>
      </v-toolbar>
      <v-content>
        <v-container fill-height>
            <v-row justify="center">
                <v-col md="4" v-for="(item, index) in articles" v-bind:key="index">
                  <v-card
                    class="mx-auto"
                    max-width="300"
                  >
                    <v-img
                      class="white--text align-end"
                      height="170px"
                      :src="item.urlToImage"
                    >
                      <v-card-title></v-card-title>
                    </v-img>

                    <v-card-text class="text--primay">
                      <div class="news-title">{{item.title}}</div>
                    </v-card-text>
                    <Toolbar :articleIndex="index" @edit="editHeader"
                    ></Toolbar>
                  </v-card>
                </v-col>
            </v-row>
        </v-container>
      </v-content>
  </div>
</template>

<style scoped>
  .news-title {
    color: #000000;
    font-size: 18px;
    font-weight: bold;
    height: 90px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>

<script>
// @ is an alias to /src
import Toolbar from '@/components/Toolbar.vue';

export default {
  name: 'home',
  components: {
    Toolbar,
  },
  data: () => ({
    articles: [{
      title: 'The unofficial Apple Archive is on death’s door once more - The Verge',
      urlToImage: 'https://cdn.vox-cdn.com/thumbor/h023dQacKkFvo-PFPnLkXvZ5veU=/0x38:1920x1043/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/19605423/msedge_DvhDGmjrh7.png',
    }, {
      title: 'Japan falls 2% in early trade as many Asian markets remain closed for Lunar New Year - CNBCC',
      urlToImage: 'https://image.cnbcfm.com/api/v1/image/105502503-1539300010388gettyimages-1042142564.jpeg?v=1580083493',
    }, {
      title: 'Grammys 2020: Billie Eilish Wins Best Pop Vocal Album - Pitchfork',
      urlToImage: 'https://media.pitchfork.com/photos/5e2a771c6fa96c0008414a29/2:1/w_790/Billie-Eilish-2.jpg',
    }],
  }),
  methods: {
    editHeader: (index) => {
      alert(index);
    },
  },
};
</script>
