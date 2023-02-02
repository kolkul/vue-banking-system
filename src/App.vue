<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import EmptyLayout from "@/layout/EmptyLayout";
import MainLayout from "@/layout/MainLayout";

export default {
  computed: {
    layout() {
      console.log(this.$route.meta);
      return (this.$route.meta.layout || "Empty") + "Layout";
    },
  },
  components: {
    EmptyLayout,
    MainLayout,
  },
};
</script>

<style>
@import "~materialize-css/dist/css/materialize.min.css";
@import "@/assets/index.css";
</style>
