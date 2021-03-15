<template>
  <a download target="_blank" :href="href" class="download">
    <div class="download__name">{{ bestand.naam }}</div>
    <img
      class="download__icon"
      src="/img/download.png"
      alt="todo"
    />
  </a>
</template>

<script>
import api from "@/services/api.js"

export default {
  props: {
    bestand: {
      type: Object
    }
  },

  data() {
    return {
      href: api.getAssetUrl(this.bestand.bestand)
    }
  }
}
</script>

<style scoped lang="scss">
.download {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  &__icon {
    height: 1.5rem;
    width: auto;
  }
}
</style>