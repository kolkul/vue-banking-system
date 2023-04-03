<template>
  <nav class="navbar orange lighten-1">
    <div class="nav-wrapper">
      <div class="navbar-left">
        <a href="#" @click.prevent="$emit('menu-click')">
          <i class="material-icons black-text">dehaze</i>
        </a>
        <time class="black-text">{{ date }}</time>
      </div>

      <ul class="right hide-on-small-and-down">
        <li>
          <a
            class="dropdown-trigger black-text"
            href="#"
            data-target="dropdown"
            ref="dropdown"
          >
            USER NAME
            <i class="material-icons right">arrow_drop_down</i>
          </a>

          <ul id="dropdown" class="dropdown-content">
            <li>
              <RouterLink to="/profile" class="black-text">
                <i class="material-icons">account_circle</i>
                Profile
              </RouterLink>
            </li>
            <li class="divider" tabindex="-1"></li>
            <li>
              <a href="#" class="black-text" @click.prevent="logout">
                <i class="material-icons">assignment_return</i>
                Quit
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import {
  computed,
  onBeforeUnmount,
  onMounted,
  onUnmounted,
  ref,
  watch,
} from "vue";
import { useRouter } from "vue-router";
import { useDate } from "@/use/useDate";

export default {
  setup() {
    const date = ref(useDate(new Date(), "datetime"));

    const router = useRouter();
    const dropdown = ref(null);

    const logout = () => {
      console.log("logout");
      router.push("/login?message=logout");
    };

    const dateInterval = setInterval(() => {
      date.value = useDate(new Date(), "datetime");
    }, 1000);

    onMounted(() => {
      M.Dropdown.init(dropdown.value, {});
    });

    onBeforeUnmount(() => {
      clearInterval(dateInterval);
    });

    return {
      date,
      dropdown,
      logout,
    };
  },
};
</script>

<style scoped></style>
