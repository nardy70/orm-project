<template>
  <div>
    <h1 class="warning--text ma-10">
      {{ title }}
    </h1>

    <AccountTable></AccountTable>
  </div>
</template>

<script>
import AccountTable from "@/components/AccountTable";

export default {
  name: "AccountView",

  components: {
    AccountTable,
  },

  computed: {
    title() {
      return this.$store.state.account.title;
    },
  },
};
</script>
