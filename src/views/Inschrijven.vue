<template>
  <section>
    <spinner class="spinner" v-if="loading" />
    <iframe
      title="inschrijvenForm"
      frameborder="0"
      height="1000"
      src="https://docs.google.com/forms/d/e/1FAIpQLSdpWRW0Ev_UxxInwcSaZXkDPdsKNLxt8tay8SSwTPKQCHpRMg/viewform?embedded=true"
      @load="loading = false"
    ></iframe>
  </section>
</template>
<script>
export default {
  data() {
    return {
      loading: true
    }
  }
}
</script>

<style lang="scss" scoped>
iframe {
  width: 100%;
}
</style>