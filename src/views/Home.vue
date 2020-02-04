<template>
  <div class="home">
    <v-toolbar dense dark>
      <v-toolbar-title>News for you</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn color="warning" @click="fetchError">
        Error call
      </v-btn>
      <v-btn @click="showHistory">
        <v-icon left>mdi-history</v-icon>
        History
      </v-btn>
    </v-toolbar>
    <v-content>
      <v-container>
        <SearchFilter></SearchFilter>
        <v-row justify="center">
          <v-col md="4" cols="12" sm="6" v-if="fetchArticles">
            <v-skeleton-loader
              class="mx-auto"
              max-width="300"
              type="card"
            ></v-skeleton-loader>
          </v-col>
          <div class="title" v-if="articles.length === 0 && !fetchArticles">No result</div>
          <ArticleCard
            v-for="(item, index) in articles"
            :item="item"
            :index="index"
            v-bind:key="index"
          >
          </ArticleCard>
        </v-row>
        <EditDialog></EditDialog>
        <HistoryDialog></HistoryDialog>
        <v-snackbar
          v-model="errAlert"
          top
          color="error"
          :timeout="2000"
        >
          {{ errMsg }}
        </v-snackbar>
      </v-container>
    </v-content>
  </div>
</template>

<style scoped>
</style>

<script>

import ArticleCard from '@/components/ArticleCard.vue';
import EditDialog from '@/components/EditDialog.vue';
import HistoryDialog from '@/components/HistoryDialog.vue';
import SearchFilter from '@/components/SearchFilter.vue';

export default {
  name: 'home',
  components: {
    ArticleCard,
    EditDialog,
    HistoryDialog,
    SearchFilter,
  },
  data: () => ({
  }),
  methods: {
    showHistory() {
      this.$store.commit('setShowHistory', true);
    },
    fetchError() {
      this.$store.dispatch('loadError');
    },
  },
  computed: {
    filter() {
      return this.$store.state.filter;
    },
    articles() {
      const { articles } = this.$store.state;
      return articles.map((article, index) => Object.assign({ index }, article))
        .filter(article => this.filter.includes(article.source.name) || this.filter.length === 0);
    },
    fetchArticles() {
      return this.$store.state.fetchArticles;
    },
    errAlert: {
      get() {
        return this.$store.state.errAlert;
      },
      set(value) {
        this.$store.commit('updateErrAlert', value);
      },
    },
    errMsg() {
      return this.$store.state.errMsg;
    },
  },
};
</script>
