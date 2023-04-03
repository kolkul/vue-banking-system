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
import { computed } from "vue";
import { useRoute } from "vue-router";

export default {
  setup() {
    const route = useRoute();

    const layout = computed(() => {
      return (route.meta.layout || "Empty") + "Layout";
    });

    return {
      layout,
    };
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
