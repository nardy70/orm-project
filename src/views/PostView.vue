<template>
  <div>
    <h1 class="warning--text ma-10">
      {{ title }}
    </h1>

    <PostTable></PostTable>

    <!-- <hr class="my-5" />

    <PostTableOrm></PostTableOrm> -->
  </div>
</template>

<script>
import PostTable from "@/components/PostTable";
// import PostTableOrm from "@/components/PostTableOrm";

export default {
  name: "PostView",

  components: {
    PostTable,
    // PostTableOrm,
  },

  computed: {
    title() {
      return this.$store.state.post.title;
    },
  },
};
</script>
