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
  }),
  methods: {
  },
  computed: {
    articleData() {
      return this.articles[this.$route.params.articleIndex];
    },
    articleDate() {
      const date = new Date(this.articles[this.$route.params.articleIndex].publishedAt);
      let minute = date.getMinutes();
      if (minute < 10) {
        minute = `0${minute}`;
      }
      return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${minute}`;
    },
    articles() {
      return this.$store.state.articles;
    },
  },
  mounted() {
    this.$store.commit('addHistory', this.articleData.title);
  },
};
</script>
