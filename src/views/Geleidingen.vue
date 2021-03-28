<template>
  <section>
    <h2>Geleidingen</h2>

    <div v-if="geleidingen.length">
      <geleiding-info
        link
        v-for="(geleiding, index) in geleidingen"
        :key="geleiding.id"
        :geleiding="geleiding"
        :inverted="index % 2 === 1"
      />
    </div>
    <spinner v-else />
  </section>
</template>

<script>
import GeleidingInfo from "@/components/GeleidingInfo.vue";
import api from "@/services/api.js";

export default {
  components: { GeleidingInfo },

  data() {
    return {
      geleidingen: [],
    };
  },

  async mounted() {
    this.geleidingen = await api.getGeleidingen();
  },
};
</script>