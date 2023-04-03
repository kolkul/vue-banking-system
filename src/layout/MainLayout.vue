<template>
  <div class="app-main-layout">
    <Navbar @menu-click="isOpen = !isOpen" />

    <Sidebar v-model="isOpen" />

    <main class="app-content" :class="{ full: !isOpen }">
      <div class="app-page">
        <RouterView />
      </div>
    </main>

    <div class="fixed-action-btn">
      <RouterLink to="/record" class="btn-floating btn-large blue">
        <i class="large material-icons">add</i>
      </RouterLink>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/app/Navbar";
import Sidebar from "@/components/app/Sidebar";

export default {
  name: "mainLayout",
  data() {
    return {
      isOpen: true,
    };
  },
  components: {
    Navbar,
    Sidebar,
  },
};
</script>

<style scoped></style>
