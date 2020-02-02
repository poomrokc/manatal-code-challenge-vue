<template>
  <div class="home">
      <v-toolbar dense :dark="true">
        <v-btn :to="{name: 'home'}">
          <v-icon left>mdi-keyboard-backspace</v-icon>
          Back
        </v-btn>
      </v-toolbar>
      <v-content>
        <v-container fill-height>
          <div class="full-width mt-4">
            <v-img
              class="white--text align-end"
              height="300px"
              :src="articleData.urlToImage"
            >
            </v-img>
          </div>
          <div class="headline mt-5 mb-2 font-weight-bold full-width">
            {{articleData.title}}
          </div>
          <div class="subtitle-1 mb-2 font-weight-medium full-width">
            Author: {{articleData.author}}
          </div>
          <div class="subtitle-1 mb-3 font-weight-light full-width">
            {{articleDate}}
          </div>
          <div class="line-divider"></div>
          <div class="body-1 mt-5 mb-3 font-weight-bold full-width">
            "{{articleData.description}}"
          </div>
          <div class="body-1 mt-5 mb-3 font-weight-medium full-width">
            {{articleData.content}}
          </div>
          <a
            :href="articleData.url"
            target="_blank"
            rel="noopener noreferrer"
            class="body-1 font-weight-bold"
          >
              Read more on {{articleData.source.name}}
          </a>
        </v-container>
      </v-content>
  </div>
</template>

<style scoped>
  .full-width {
    width:100%;
  }
  .line-divider {
    width:100%;
    height:0;
    border-top:1px solid black;
  }
</style>

<script>

export default {
  name: 'articleDetail',
  components: {
  },
  data: () => ({
    articles: [{
      title: 'The unofficial Apple Archive is on death’s door once more - The Verge',
      description: 'Top officials in Southeast Asia have played down the threat of the virus and shied away from travel bans. Some have even pushed supposed remedies not supported by science.',
      urlToImage: 'https://cdn.vox-cdn.com/thumbor/h023dQacKkFvo-PFPnLkXvZ5veU=/0x38:1920x1043/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/19605423/msedge_DvhDGmjrh7.png',
      source: { id: 'cnn', name: 'CNN' },
      publishedAt: '2020-02-02T10:25:00Z',
      author: 'Martin Pengelly',
      content: '(CNN)The team that hoists the Super Bowl LIV trophy Sunday night after the game between the Kansas City Chiefs and San Francisco 49ers will be decked out in championship gear that was made beforehand.\r\nWhat happens to the gear that was created for the losing … [+2069 chars]',
      url: 'https://www.cnn.com/2020/02/02/asia/wuhan-coronavirus-philippines-intl-hnk/index.html',
    }, {
      title: 'Japan falls 2% in early trade as many Asian markets remain closed for Lunar New Year - CNBCC',
      description: 'Top officials in Southeast Asia have played down the threat of the virus and shied away from travel bans. Some have even pushed supposed remedies not supported by science.',
      urlToImage: 'https://image.cnbcfm.com/api/v1/image/105502503-1539300010388gettyimages-1042142564.jpeg?v=1580083493',
      source: { id: 'cnn', name: 'CNN' },
      publishedAt: '2020-02-02T10:25:00Z',
      author: 'Martin Pengelly',
      content: '(CNN)The team that hoists the Super Bowl LIV trophy Sunday night after the game between the Kansas City Chiefs and San Francisco 49ers will be decked out in championship gear that was made beforehand.\r\nWhat happens to the gear that was created for the losing … [+2069 chars]',
      url: 'https://www.cnn.com/2020/02/02/asia/wuhan-coronavirus-philippines-intl-hnk/index.html',
    }, {
      title: 'Grammys 2020: Billie Eilish Wins Best Pop Vocal Album - Pitchfork',
      description: 'Top officials in Southeast Asia have played down the threat of the virus and shied away from travel bans. Some have even pushed supposed remedies not supported by science.',
      urlToImage: 'https://media.pitchfork.com/photos/5e2a771c6fa96c0008414a29/2:1/w_790/Billie-Eilish-2.jpg',
      source: { id: 'cnn', name: 'CNN' },
      publishedAt: '2020-02-02T10:25:00Z',
      author: 'Martin Pengelly',
      content: '(CNN)The team that hoists the Super Bowl LIV trophy Sunday night after the game between the Kansas City Chiefs and San Francisco 49ers will be decked out in championship gear that was made beforehand.\r\nWhat happens to the gear that was created for the losing … [+2069 chars]',
      url: 'https://www.cnn.com/2020/02/02/asia/wuhan-coronavirus-philippines-intl-hnk/index.html',
    }],
  }),
  methods: {
  },
  computed: {
    articleData() {
      return this.articles[this.$route.params.articleIndex];
    },
    articleDate() {
      const date = new Date(this.articles[this.$route.params.articleIndex].publishedAt);
      return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
    },
  },
};
</script>
