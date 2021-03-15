<template>
  <div v-if="geleiding">
    <section>
      <geleiding-info :geleiding="geleiding" />
    </section>

    <section>
      <div class="leiders">
        <h3>Leiders</h3>

        <ul v-if="geleiding.leiders">
          <li v-for="leider in geleiding.leiders" :key="leider.id">
            <geleiding-leider :leider="leider" />
          </li>
        </ul>

        <p v-else>Geen leiders te zien.</p>
      </div>

      <div class="banprogramma">
        <h3>Banprogramma</h3>

        <ul v-if="geleiding.activiteit">
          <li v-for="activiteit in geleiding.activiteiten" :key="activiteit.id">
            <geleiding-activiteit :activiteit="activiteit" />
          </li>
        </ul>
        <p v-else>Geen activiteiten te zien.</p>
      </div>

      <div class="downloads">
        <h3>Downloads</h3>

        <div>
          <h4>Algemeen</h4>
          <ul>
            <li v-for="bestand in algemeen" :key="bestand.bestanden_id.id">
              <geleiding-bestand :bestand="bestand.bestanden_id" />
            </li>
          </ul>

          <h4>Boekjes</h4>
          <ul>
            <li v-for="bestand in boekjes" :key="bestand.bestanden_id.id">
              <geleiding-bestand :bestand="bestand.bestanden_id" />
            </li>
          </ul>

          <h4>Andere</h4>
          <ul>
            <li v-for="bestand in andere" :key="bestand.bestanden_id.id">
              <geleiding-bestand :bestand="bestand.bestanden_id" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import GeleidingInfo from "@/components/GeleidingInfo.vue";
import GeleidingLeider from "@/components/GeleidingLeider.vue";
import GeleidingActiviteit from "@/components/GeleidingActiviteit.vue";
import GeleidingBestand from "@/components/GeleidingBestand.vue";
import api from "@/services/api.js";

export default {
  components: {
    GeleidingInfo,
    GeleidingLeider,
    GeleidingActiviteit,
    GeleidingBestand,
  },

  data() {
    return {
      loading: true,
      geleiding: null,
      algemeen: [],
      boekjes: [],
      andere: [],
    };
  },

  async mounted() {
    this.geleiding = await api.getGeleiding(this.$route.params.id);
    this.algemeen = this.getBestanden("algemeen");
    this.boekjes = this.getBestanden("boekjes");
    this.andere = this.getBestanden("andere");
  },

  methods: {
    getBestanden(type) {
      return this.geleiding?.bestanden.filter((b) => {
        return b.bestanden_id && b.bestanden_id.type.naam === type;
      });
    },
  },
};
</script>

<style scoped lang="scss">
ul {
  list-style-type: none;
  margin-left: 0;
  padding-left: 0;
}

.leiders {
  li {
    margin-bottom: 1rem;
  }
}

.banprogramma {
  li {
    margin-bottom: 1rem;
  }
}

.downloads {
  li {
    margin-bottom: 1rem;
  }
}

section {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>