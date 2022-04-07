import { Model } from "@vuex-orm/core";

export default class Post extends Model {
  static get entity() {
    return "posts";
  }

  static fields() {
    return {
      id: this.attr(null),
      title: this.string(""),
      body: this.string(""),
    };
  }

  static get apiConfig() {
    return {
      actions: {
        fetchById(id) {
          return this.get(`/posts/${id}`);
        },
      },
    };
  }
}
