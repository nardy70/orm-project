<template>
  <div class="px-10">
    <v-data-table :headers="headers" :items="users" class="elevation-5">
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon color="accent" class="mr-2" @click="editUser(item)"
          >mdi-pencil-circle</v-icon
        >
        <v-icon color="error" @click="deleteUser(item)"
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
        <v-card-title class="text-h5"> User Edit </v-card-title>
        <v-card-text>{{ this.$store.state.account.userItem }}</v-card-text>
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
      { text: "Name", value: "name" },
      { text: "Username", value: "username" },
      { text: "Email", value: "email" },
      { text: "Address", value: "address" },
      { text: "Phone", value: "phone" },
      { text: "Actions", value: "actions", sortable: false },
    ],

    users: [],
    errors: [],
    dialog: false,
  }),

  created() {
    axios
      .get(`http://jsonplaceholder.typicode.com/users`)
      .then((response) => {
        // JSON responses are automatically parsed.
        this.users = response.data;
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },

  methods: {
    editUser(user) {
      const userItem = { ...user };
      this.$store.commit("account/setUser", userItem);
      this.dialog = true;
    },

    deleteUser(user) {
      console.log("delete:", user);
    },
  },
};
</script>
