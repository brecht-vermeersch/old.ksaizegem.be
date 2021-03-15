<template>
  <div v-if="homepagina">
    <div class="hero">
      <img class="hero__bg" src="/img/hero.webp" alt="todo" />

      <div class="hero__fg">
        <h2 class="hero__title" v-html="homepagina.slogan_tekst"></h2>
        <a class="button button" href="#">{{ homepagina.slogan_knop }}</a>
      </div>
    </div>

    <section class="algemeen">
      <img class="algemeen__img" src="/img/hero.webp" />

      <div class="algemeen__card">
        <h3>Algemeen</h3>
        <div v-html="homepagina.algemeen_tekst"></div>

        <a class="button button--blue" href="#">{{
          homepagina.algemeen_knop
        }}</a>
      </div>
    </section>

    <section class="geleidingen">
      <img class="geleidingen__img" src="/img/hero.webp" />

      <div class="geleidingen__card">
        <h3>Geleidingen</h3>

        <div v-html="homepagina.geleidingen_tekst"></div>

        <a class="button button--blue" href="#">Bezoekje brengen</a>
      </div>
    </section>
  </div>
</template>

<script>
import api from "@/services/api.js";

export default {
  data() {
    return {
      loading: true,
      homepagina: null,
    };
  },

  async mounted() {
    this.homepagina = await api.getHomePage();
  },

  methods: {
    getAssetUrl: api.getAssetUrl,
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
