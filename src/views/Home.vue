<template>
  <div class="home">
      <v-toolbar dense :dark="true">
        <v-toolbar-title>News for you</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn @click="showHistoryModal">
          <v-icon left>mdi-history</v-icon>
          History
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
    <v-dialog
      v-model="editing"
      max-width="500"
    >
      <v-card>
        <v-card-title class="headline">Edit headline</v-card-title>
        <v-divider :inset="inset"></v-divider>
        <v-card-text>
        <v-textarea
          v-model="headline"
          rows="1"
          :hint="editHint"
          :class="textAreaClass"
          auto-grow
          persistent-hint
        ></v-textarea>
        </v-card-text>
        <v-divider :inset="inset"></v-divider>
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
    <v-dialog
      v-model="showHistory"
      max-width="500"
    >
      <v-card>
        <v-card-title class="history">View history</v-card-title>
        <v-divider :inset="inset"></v-divider>
        <v-card-text v-for="(item, index) in history" v-bind:key="index">
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title class="list-title">
                {{articles[item.index].title}}
              </v-list-item-title>
              <v-list-item-subtitle>{{item.time}}</v-list-item-subtitle>
             </v-list-item-content>
          </v-list-item>
          <v-divider :inset="inset"></v-divider>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="red darken-1"
            text
            @click="closeHistoryModal"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
  }
  .edit-headline {
    font-weight: bold;
  }
  .edit-headline.length-error {
    background-color:#ffcccb;
  }
  .list-title {
    font-weight: bold;
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
    history: [{ index: 0, time: '17.32' }, { index: 1, time: '17.33' }, { index: 2, time: '17.34' }, { index: 0, time: '17.35' }],
    editing: false,
    editingIndex: 0,
    headline: '',
    showHistory: false,
  }),
  methods: {
    editHeader(index) {
      this.headline = this.articles[index].title;
      this.editingIndex = index;
      this.editing = true;
    },
    closeEditModal() {
      this.editing = false;
    },
    confirmEditModal() {
      if (this.headline.length > 150) {
        return;
      }
      this.articles[this.editingIndex].title = this.headline;
      this.editing = false;
    },
    showHistoryModal() {
      this.showHistory = true;
    },
    closeHistoryModal() {
      this.showHistory = false;
    },
  },
  computed: {
    textAreaClass() {
      let outClass = 'edit-headline';
      if (this.headline.length > 150) {
        outClass += ' length-error';
      }
      return outClass;
    },
    editHint() {
      return `${this.headline.length}/150 characters`;
    },
  },
};
</script>
