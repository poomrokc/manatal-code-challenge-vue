<template>
  <v-dialog
    v-model="editing"
    max-width="500"
  >
    <v-card>
      <v-card-title class="headline">Edit headline</v-card-title>
      <v-divider inset></v-divider>
      <v-card-text>
        <v-textarea
          :value="this.editHeader"
          @input="fillHeader"
          rows="1"
          :hint="editHint"
          :class="textAreaClass"
          auto-grow
          persistent-hint
        ></v-textarea>
      </v-card-text>
      <v-divider inset></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="red darken-1"
          text
          @click="closeEditModal"
        >
          Cancel
        </v-btn>
        <v-btn
          color="green darken-1"
          text
          @click="confirmEditModal"
        >
          Confirm
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style scoped>
  .edit-headline {
    font-weight: bold;
  }
  .edit-headline.length-error {
    background-color:#ffcccb;
  }
</style>

<script>

export default {
  name: 'editDialog',
  components: {
  },
  data: () => ({
  }),
  methods: {
    closeEditModal() {
      this.$store.commit('stopEdit', false);
    },
    confirmEditModal() {
      if (this.editHeader.length > 150) {
        return;
      }
      this.$store.commit('setArticleHeadline');
      this.editing = false;
    },
    fillHeader(value) {
      this.editHeader = value;
    },
  },
  computed: {
    textAreaClass() {
      let outClass = 'edit-headline';
      if (this.editHeader.length > 150) {
        outClass += ' length-error';
      }
      return outClass;
    },
    editHint() {
      return `${this.editHeader.length}/150 characters`;
    },
    editHeader: {
      get() {
        return this.$store.state.editHeader;
      },
      set(value) {
        this.$store.commit('editHeader', value);
      },
    },
    editing: {
      get() {
        return this.$store.state.editing;
      },
      set(value) {
        this.$store.commit('stopEdit', value);
      },
    },
  },
};
</script>
