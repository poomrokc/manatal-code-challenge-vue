<template>
  <v-col md="4" cols="12" sm="6">
    <v-card
      class="mx-auto"
      max-width="300"
    >
      <v-img
        class="white--text align-end"
        height="170px"
        :src="$props.item.urlToImage"
      >
      </v-img>
        <v-card-text>
          <div class="news-title">{{$props.item.title}}</div>
        </v-card-text>
        <Toolbar
          :articleIndex="$props.item.index"
          @edit="editHeader"
        >
        </Toolbar>
    </v-card>
  </v-col>
</template>

<style scoped>
  .news-title {
    color: #000000;
    font-size: 18px;
    font-weight: bold;
    height: 90px;
    overflow: hidden;
  }
  .edit-headline {
    font-weight: bold;
  }
  .edit-headline.length-error {
    background-color:#ffcccb;
  }
</style>

<script>

import Toolbar from '@/components/Toolbar.vue';

export default {
  name: 'articleCard',
  props: ['item', 'index'],
  components: {
    Toolbar,
  },
  data: () => ({
  }),
  methods: {
    editHeader(index) {
      this.$store.commit('startEdit', index);
    },
  },
  computed: {
  },
};
</script>
