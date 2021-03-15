<template>
  <div id="app" :class="{'hamburger--open' : hamburgerOpen}">
    <app-header @hamburgerUpdate="toggleHamburger"/>

    <main>
      <router-view />
    </main>

    <app-footer />
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";

export default {
  components: { AppFooter, AppHeader },

  data() {
    return {
      hamburgerOpen: false,
    }
  },

  methods: {
    toggleHamburger(value) {
      this.hamburgerOpen = value;
    }
  }
};
</script>

<style scoped>
.hamburger--open {
  height: 100vh;
  overflow-y: hidden;
}
</style>
