<template functional>
  <v-toolbar color="elevation-0" dense dark>
    <v-btn @click="listeners['edit'](props.articleIndex)" icon>
      <v-icon>mdi-square-edit-outline</v-icon>
    </v-btn>
    <v-spacer></v-spacer>
    <v-btn :to="{name: 'article', params: {articleIndex: props.articleIndex}}" icon>
      <v-icon>mdi-arrow-right-bold</v-icon>
    </v-btn>
  </v-toolbar>
</template>
<style scope></style>
