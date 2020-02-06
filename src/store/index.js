import Vue from 'vue';
import Vuex from 'vuex';
import config from '@/config';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    articles: [],
    history: [],
    sources: [],
    searchQuery: '',
    lastRequest: 0,
    filter: [],
    fetchArticles: true,
    fetchSources: true,
    errAlert: false,
    errMsg: '',
    editHeader: '',
    editIndex: 0,
    editing: false,
    showHistory: false,
  },
  mutations: {
    setArticle(state, data) {
      state.articles = data;
    },
    setSource(state, data) {
      state.sources = data;
    },
    addHistory(state, headline) {
      const date = new Date();
      let minute = date.getMinutes();
      if (minute < 10) {
        minute = `0${minute}`;
      }
      const time = `${date.getHours()}:${minute}`;
      state.history.unshift({ headline, time });
    },
    startEdit(state, index) {
      state.editHeader = state.articles[index].title;
      state.editIndex = index;
      state.editing = true;
    },
    editHeader(state, value) {
      state.editHeader = value;
    },
    stopEdit(state, value) {
      state.editing = value;
    },
    setArticleHeadline(state) {
      state.articles[state.editIndex].title = state.editHeader;
      state.editHeader = '';
      state.editing = false;
    },
    setShowHistory(state, value) {
      state.showHistory = value;
    },
    addSearch(state, input) {
      state.searchQuery = input;
    },
    setLastRequest(state, time) {
      state.lastRequest = time;
    },
    addFilter(state, source) {
      state.filter.push(source);
    },
    removeFilter(state, source) {
      state.filter.splice(state.filter.indexOf(source), 1);
    },
    setFetchArticles(state, value) {
      state.fetchArticles = value;
    },
    setFetchSources(state, value) {
      state.fetchSources = value;
    },
    updateErrAlert(state, value) {
      state.errAlert = value;
    },
    updateErrMsg(state, value) {
      state.errMsg = value;
    },
  },
  getters: {
  },
  actions: {
    loadArticles({ commit, state }) {
      const nowTime = (new Date()).getTime();
      commit('setArticle', []);
      commit('setLastRequest', nowTime);
      commit('setFetchArticles', true);
      Vue.axios.get(`${config.NEWS_API_URL}?country=us&apiKey=${config.API_KEY}`).then((response) => {
        if (nowTime !== state.lastRequest) {
          return;
        }
        const { data } = response;
        commit('setFetchArticles', false);
        commit('setArticle', data.articles);
      });
    },
    search({ commit, state }, input) {
      const nowTime = (new Date()).getTime();
      commit('setArticle', []);
      commit('setLastRequest', nowTime);
      commit('setFetchArticles', true);
      Vue.axios.get(`${config.NEWS_API_URL}?q=${input}&apiKey=${config.API_KEY}`).then((response) => {
        if (nowTime !== state.lastRequest) {
          return;
        }
        const { data } = response;
        commit('setFetchArticles', false);
        commit('setArticle', data.articles);
      });
    },
    loadSources({ commit }) {
      commit('setFetchSources', true);
      Vue.axios.get(`${config.SOURCES_URL}?apiKey=${config.API_KEY}`).then((response) => {
        const { data } = response;
        const storeData = data.sources.map(source => source.name);
        commit('setFetchSources', false);
        commit('setSource', storeData);
      });
    },
    loadError({ commit }) {
      Vue.axios.get(`${config.ERROR_URL}`).catch((err) => {
        commit('updateErrMsg', err.response.data.message);
        commit('updateErrAlert', true);
      });
    },
  },
  modules: {
  },
});
