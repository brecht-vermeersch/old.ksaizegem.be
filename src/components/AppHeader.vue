<template>
  <header class="header" :class="{ 'header--hamburger-open': hamburgerOpen }">
    <div class="header__container">
      <router-link to="/"
        ><img class="header__logo" src="/img/logo.webp" alt="KSA logo" />
      </router-link>

      <label class="header__hamburger"
        >&#9776;<input
          type="checkbox"
          @click="toggleHamburgerMenu"
          hidden
        />
      </label>

      <nav class="header__nav">
        <router-link
          to="/"
          class="header__link"
          active-class="header__link--active"
          exact
          @click.native="closeHamburgerMenu"
          >Home</router-link
        >

        <router-link
          to="/geleidingen"
          class="header__link"
          active-class="header__link--active"
          @click.native="closeHamburgerMenu"
          >Geleidingen</router-link
        >
        <router-link
          to="/contact"
          class="header__link"
          active-class="header__link--active"
          @click.native="closeHamburgerMenu"
          >Contact</router-link
        >
        <router-link
          to="/inschrijven"
          class="header__link button button--transparant"
          active-class="header__link--active"
          @click.native="closeHamburgerMenu"
          >Inschrijven</router-link
        >
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  emits: ["hamburgerUpdate"],
  data() {
    return {
      hamburgerOpen: false,
    };
  },

  methods: {
    toggleHamburgerMenu() {
      this.hamburgerOpen = !this.hamburgerOpen;
      this.$emit("hamburgerUpdate", this.hamburgerOpen);
    },

    closeHamburgerMenu() {
      this.hamburgerOpen = false;
      this.$emit("hamburgerUpdate", this.hamburgerOpen);
    },
  },
};
</script>


<style lang="scss" scoped>
.header {
  &__container {
    padding: 1rem;
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

  &__hamburger {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
  }

  &__logo {
    height: 2rem;
    width: auto;
  }

  &__link--active {
    font-weight: bold;
  }
}

@media (max-width: $screen-s) {
  .header {
    font-size: 1.5rem;

    &__container {
      position: relative;
    }

    &__nav {
      display: none;
    }

    &__hamburger {
      visibility: visible;
    }

    &__link + &__link {
      margin-top: 1rem;
    }
  }

  .header--hamburger-open {
    color: white;
    background-color: $blue;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    width: 100%;

    .header__hamburger {
      color: white;
    }

    .header__container {
      height: 100vh;
    }

    .header__nav {
      display: block;
      background-color: $blue;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .header__logo {
      filter: brightness(0) invert(1);
    }
  }
}

@media (min-width: $screen-s) {
  .header {
    &__hamburger {
      visibility: hidden;
    }

    &__container {
      @include width-container;
    }

    &__link + &__link {
      margin-left: 1rem;
    }
  }
}
</style>