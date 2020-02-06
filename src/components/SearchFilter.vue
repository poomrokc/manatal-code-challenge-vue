<template>
  <v-layout justify-center align-center>
    <v-flex xs6>
      <v-text-field
          @keyup="search"
          label="Search Headlines"
          append-icon="mdi-magnify"
          :value="$store.state.searchQuery"
      ></v-text-field>
    </v-flex>
    <v-flex xs1>
      <v-menu
        v-model="menu"
        :close-on-content-click="false"
        nudge-width="300"
        max-width="300"
        max-height="600"
        left
        offset-y
      >
        <template v-slot:activator="{ on }">
          <v-btn
            v-on="on"
            slot="activator"
            :color="hasFilter"
            icon
          >
            <v-icon>mdi-filter-menu</v-icon>
          </v-btn>
        </template>
        <v-card>
          <v-card-title>
            Source Filter
            <v-spacer></v-spacer>
            <v-btn
              color="black darken-1"
              text
              @click="menu = false"
              icon
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <v-btn color="primary"
              class="mr-3 mb-2"
              v-for="(item) in filter"
              v-bind:key="item"
              @click="removeSource(item)"
              small
              rounded
            >
              {{item}}
              <v-icon right>mdi-close</v-icon>
            </v-btn>
            <v-text-field
              label="Search Sources"
              append-icon="mdi-magnify"
              v-model="sourceSearch"
            ></v-text-field>
            <v-skeleton-loader
              class="mx-auto width-48"
              type="avatar"
              v-if="fetchSources"
            ></v-skeleton-loader>
            <v-list>
              <v-list-item-group>
                <v-list-item
                  v-for="(source, index) in sources"
                  :key="index"
                >
                  <v-list-item-content
                    :value="source"
                    @click="addSource(source)"
                  >
                    <v-list-item-title v-text="source"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-card-text>
        </v-card>
      </v-menu>
    </v-flex>
  </v-layout>
</template>

<style scoped>
  .list-title {
    font-weight: bold;
  }
  .width-48 {
    width:50px;
  }
</style>

<script>

export default {
  name: 'searchFilter',
  components: {
  },
  data: () => ({
    menu: false,
    sourceSearch: '',
  }),
  methods: {
    search(event) {
      const input = event.currentTarget.value;
      this.$store.commit('addSearch', input);
      if (input.trim().length === 0) {
        this.$store.dispatch('loadArticles');
      } else {
        this.$store.dispatch('search', input);
      }
    },
    addSource(source) {
      if (!this.filter.includes(source)) {
        this.$store.commit('addFilter', source);
      }
    },
    removeSource(source) {
      this.$store.commit('removeFilter', source);
    },
  },
  computed: {
    filter() {
      return this.$store.state.filter;
    },
    fetchSources() {
      return this.$store.state.fetchSources;
    },
    sources() {
      const { sources } = this.$store.state;
      return sources.filter(source => source.toLowerCase()
        .includes(this.sourceSearch.toLowerCase()) && !this.filter.includes(source));
    },
    hasFilter() {
      return this.filter.length > 0 ? 'primary' : null;
    },
  },
};
</script>
