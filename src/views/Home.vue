<template>
  <div v-if="homepagina">
    <div class="hero">
      <d-img class="hero__bg" :asset="homepagina.slogan_foto" alt="Grote banner foto" />

      <div class="hero__fg">
        <h2 class="hero__title" v-html="homepagina.slogan_tekst"></h2>
        <router-link class="button button" to="/inschrijven">{{ homepagina.slogan_knop }}</router-link>
      </div>
    </div>

    <section class="algemeen">
      <d-img class="algemeen__img" :asset="homepagina.algemeen_foto" alt="Algemene foto KSA" />

      <div class="algemeen__card">
        <h3>Algemeen</h3>
        <div v-html="homepagina.algemeen_tekst"></div>

        <router-link class="button button--blue" to="/contact">{{
          homepagina.algemeen_knop
        }}</router-link>
      </div>
    </section>

    <section class="geleidingen">
      <d-img class="geleidingen__img" :asset="homepagina.geleidingen_foto" alt="Foto geleidingen" />

      <div class="geleidingen__card">
        <h3>Geleidingen</h3>

        <div v-html="homepagina.geleidingen_tekst"></div>

        <router-link class="button button--blue" to="/geleidingen">Bezoekje brengen</router-link>
      </div>
    </section>
  </div>
  <spinner v-else />
</template>

<script>
import api from "@/services/api.js";

export default {
  data() {
    return {
      homepagina: null,
    };
  },

  async mounted() {
    this.homepagina = await api.getHomePage();
  },
};
</script>

<style lang="scss" scoped>
.hero {
  position: relative;

  &__title {
    font-family: Avenir;
    text-align: left;
  }

  &__fg {
    @include width-container;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    right: 0;
    color: white;
  }

  &__bg {
    width: 100%;
    height: 80vh;
    mask-image: url("/img/hero-mask.svg");
    object-fit: cover;
    mask-size: 100% 100%;
  }
}

.algemeen {
  @include width-container;

  &__img {
    display: block;
    margin-left: auto;
    width: 70%;
    mask-image: url("/img/algemeen-mask.svg");
    object-fit: cover;
    mask-size: 100% 100%;
    margin-bottom: 1rem;
  }

  &__card {
    width: 60%;
  }
}

.geleidingen {
  @include width-container;

  &__img {
    display: block;
    width: 100%;
    mask-image: url("/img/geleidingen-mask.svg");
    object-fit: cover;
    mask-size: 100% 100%;
    margin-bottom: 1rem;
  }

  &__card {
    margin-left: auto;
    margin-right: auto;
    width: 60%;
  }
}

@media (max-width: $screen-s) {
  .hero {
    &__title {
      font-size: 2rem;
      text-transform: none;;
    }
  }
  .algemeen {
    &__img {
      width: 100%;
    }

    &__card {
      width: 100%;
    }
  }

  .geleidingen {
    &__img {
      width: 100%;
    }

    &__card {
      width: 100%;
    }
  }
}
</style>
