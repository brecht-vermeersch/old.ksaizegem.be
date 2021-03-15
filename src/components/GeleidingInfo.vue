<template>
  <article class="geleiding" :class="{ 'geleiding--inverted': inverted }">
    <div class="geleiding__body">
      <div class="geleiding__title-container">
        <h3 class="geleiding__title">{{ geleiding.naam }}</h3>
        <abbr class="geleiding__abbr" title="Kabouters">{{ geleiding.afkorting }}</abbr>
      </div>

      <a v-if="link" class="geleiding__link" :href="'geleidingen/' + geleiding.id">{{ geleiding.naam }} ></a>

      <p>{{ geleiding.beschrijving }}</p>
    </div>

    <img class="geleiding__img" :src="src" :alt="'Monstertje en logo van de ' + geleiding.naam"/>
  </article>
</template>

<script>
import api from "@/services/api.js"

export default {
  props: {
    link: {
      type: Boolean,
    },

    inverted: {
      type: Boolean,
    },

    geleiding: {
      type: Object
    }
  },

  data() {
    return {
      src: api.getAssetUrl(this.geleiding.foto)
    }
  }
};
</script>

<style scoped lang="scss">
.geleiding {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;

  &__img,
  &__body {
    width: 45%;
  }

  &__img {
    object-fit: contain;
  }

  @media (max-width: $screen-m) {
    flex-direction: column;

    &__body {
      width: 100%;
    }

    &__img {
      width: 70%;
      margin: 0 auto;
    }
  }

  &__title-container {
    color: $orange;
    position: relative;
  }

  &__abbr {
    position: absolute;
    bottom: 0;
    font-family: CCSignLanguage;
    font-size: 4rem;
    border: none !important;
    text-decoration: none !important;
    opacity: 0.3;
  }

  &__link {
    color: $blue;
    font-weight: bold;
    margin: 0 !important;
    padding: 0 !important;
  }

  &--inverted {
    flex-direction: row-reverse;
  }
}
</style>