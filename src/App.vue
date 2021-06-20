<template>
  <div>
    <router-view />
  </div>
</template>

<script>
export default {
  async created() {
    // On page refresh, try to retrieve the authenticated user from the server
      await this.$store.dispatch("users/resolveToken");
  },
};
</script>
