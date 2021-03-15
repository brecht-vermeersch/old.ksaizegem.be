<template>
  <section>
    <h2>Geleidingen</h2>

    <geleiding-info link v-for="(geleiding, index) in visibleGeleidingen" :key="geleiding.id" :geleiding="geleiding" :inverted="index % 2 === 1"/>
  </section>
</template>

<script>
import GeleidingInfo from "@/components/GeleidingInfo.vue";
import api from "@/services/api.js"

export default {
  components: { GeleidingInfo },

  data() {
    return {
      loading: true,
      geleidingen: [],
    };
  },

  computed: {
    visibleGeleidingen() {
      return this.geleidingen.filter(g => g.naam !== "Bond" && g.naam !== "VZW");
    }
  },

  async mounted() {  
    this.geleidingen = await api.getGeleidingen();
  },
};
</script>