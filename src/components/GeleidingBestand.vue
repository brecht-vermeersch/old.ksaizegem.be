<template>
  <directus-download :asset="bestand.bestand" class="download">
    <div class="download__name">{{ bestand.naam }}</div>
    <img
      class="download__icon"
      src="/img/download.webp"
      alt="Bestand download icoontje"
    />
  </directus-download>
</template>

<script>
import DirectusDownload from "@/components/DirectusDownload.vue";

export default {
  components: {
    DirectusDownload
  },

  props: {
    bestand: {
      type: Object
    }
  },
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