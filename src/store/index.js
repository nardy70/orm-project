import Vue from "vue";
import Vuex from "vuex";

// import axios from "axios";
// import VuexORM from "@vuex-orm/core";
// import VuexORMAxios from "@vuex-orm/plugin-axios";

// import database from "@/database";

import account from "./modules/account";
import post from "./modules/post";

Vue.use(Vuex);

// VuexORM.use(VuexORMAxios, {
//   axios,
//   headers: { Prefer: "params=single-object" },
//   baseURL: "http://jsonplaceholder.typicode.com",
// });

export default new Vuex.Store({
  strict: true,
  modules: {
    account,
    post,
  },

  // plugins: [VuexORM.install(database)],
});
