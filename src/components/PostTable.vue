<template>
  <div class="px-10">
    <v-data-table :headers="headers" :items="posts" class="elevation-5">
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon color="accent" class="mr-2" @click="editPost(item)"
          >mdi-pencil-circle</v-icon
        >
        <v-icon color="error" @click="deletePost(item)"
          >mdi-delete-circle</v-icon
        >
      </template>
    </v-data-table>

    <ul v-if="errors && errors.length">
      <li v-for="(error, index) of errors" :key="index">
        {{ error.message }}
      </li>
    </ul>

    <v-dialog v-model="dialog" persistent max-width="490">
      <v-card>
        <v-card-title class="text-h5"> Post Edit </v-card-title>
        <v-card-text>{{ this.$store.state.post.postItem }}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="green darken-1" text @click="dialog = false">
            Ok
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    headers: [
      {
        text: "Id",
        align: "start",
        sortable: false,
        value: "id",
      },
      { text: "Title", value: "title" },
      { text: "Body", value: "body" },
      { text: "UserId", value: "userId" },

      { text: "Actions", value: "actions", sortable: false, width: "150px" },
    ],

    posts: [],
    errors: [],
    dialog: false,
  }),

  created() {
    axios
      .get(`http://jsonplaceholder.typicode.com/posts`)
      .then((response) => {
        // JSON responses are automatically parsed.
        this.posts = response.data;
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },

  methods: {
    editPost(post) {
      const postItem = { ...post };
      this.$store.commit("post/setPost", postItem);
      this.dialog = true;
    },

    deletePost(post) {
      console.log("delete:", post);
    },
  },
};
</script>
