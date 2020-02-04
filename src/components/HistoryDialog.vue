<template>
  <v-dialog
          v-model="showHistory"
          max-width="500"
        >
          <v-card>
            <v-card-title class="history">View history</v-card-title>
            <v-divider inset></v-divider>
            <div class="subtitle-2 text-center mt-5" v-if="history.length === 0">No history</div>
            <v-card-text v-for="(item, index) in history" v-bind:key="index">
              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-title class="list-title">
                    {{item.headline}}
                  </v-list-item-title>
                  <v-list-item-subtitle>{{item.time}}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-divider inset></v-divider>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="red darken-1"
                text
                @click="closeHistory"
              >
                Close
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
</template>

<style scoped>
</style>

<script>

export default {
  name: 'historyDialog',
  components: {
  },
  data: () => ({
  }),
  methods: {
    closeHistory() {
      this.$store.commit('setShowHistory', false);
    },
  },
  computed: {
    history() {
      return this.$store.state.history;
    },
    showHistory: {
      get() {
        return this.$store.state.showHistory;
      },
      set(value) {
        this.$store.commit('setShowHistory', value);
      },
    },
  },
};
</script>
