<template>
  <ul class="sidenav app-sidenav" :class="{ open: modelValue }">
    <RouterLink
      v-for="link of links"
      :key="link.url"
      :to="link.url"
      custom
      v-slot="{ isActive, href, navigate }"
    >
      <li :class="isActive && 'active'">
        <a
          :href="href"
          @click="navigate"
          class="waves-effect waves-orange pointer"
        >
          {{ link.title }}
        </a>
      </li>
    </RouterLink>
  </ul>
</template>

<script>
export default {
  props: ["modelValue"],

  data() {
    return {
      links: [
        {
          title: "Account",
          url: "/",
        },
        {
          title: "History",
          url: "/history",
        },
        {
          title: "Planning",
          url: "/planning",
        },
        {
          title: "New record",
          url: "/record",
        },
        {
          title: "Categories",
          url: "/categories",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
