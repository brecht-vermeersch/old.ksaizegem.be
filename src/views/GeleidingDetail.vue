<template>
  <div v-if="geleiding">
    <section>
      <geleiding-info :geleiding="geleiding" />
    </section>

    <section>
      <div class="leiders">
        <h3>Leiders</h3>

        <ul v-if="geleiding.leiders.length">
          <li v-for="leider in sortedLeiders" :key="leider.id">
            <geleiding-leider :leider="leider" />
          </li>
        </ul>

        <p v-else>Geen leiders te zien.</p>
      </div>

      <div class="banprogramma">
        <h3>Banprogramma</h3>

        <ul v-if="geleiding.activiteiten">
          <li v-for="activiteit in sortedActiviteiten" :key="activiteit.id">
            <geleiding-activiteit :activiteit="activiteit" />
          </li>
        </ul>
        <p v-else>Geen activiteiten te zien.</p>
      </div>

      <div class="downloads">
        <h3>Downloads</h3>

        <div v-for="type in bestandenByType" :key="type.id">
          <h4>{{ type.naam }}</h4>

          <ul v-if="type.bestanden.length > 0">
            <li v-for="bestand in type.bestanden" :key="bestand.id">
              <geleiding-bestand :bestand="bestand" />
            </li>
          </ul>
          <p v-else>Geen bestanden te zien.</p>
        </div>
        <!-- <div>
          <h4>Algemeen</h4>
          <ul v-if="algemeneBestanden.length">
            <li
              v-for="bestand in algemeneBestanden"
              :key="bestand.id"
            >
              <geleiding-bestand :bestand="bestand" />
            </li>
          </ul>
          <p v-else>Geen bestanden te zien.</p>

          <h4>Boekjes</h4>
          <ul v-if="boekjesBestanden.length">
            <li
              v-for="bestand in boekjesBestanden"
              :key="bestand.id"
            >
              <geleiding-bestand :bestand="bestand" />
            </li>
          </ul>
          <p v-else>Geen bestanden te zien.</p>

          <h4>Andere</h4>
          <ul v-if="andereBestanden.length">
            <li
              v-for="bestand in andereBestanden"
              :key="bestand.id"
            >
              <geleiding-bestand :bestand="bestand" />
            </li>
          </ul>
          <p v-else>Geen bestanden te zien.</p>
        </div> -->
      </div>
    </section>
  </div>
  <spinner v-else />
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
      geleiding: null,
      bestandenByType: [],
    };
  },

  async mounted() {
    this.geleiding = await api.getGeleiding(this.$route.params.naam);
    this.bestandenByType = await api.getBestandenByType(
      this.$route.params.naam
    );
  },

  methods: {
    isHoofdleider(leider) {
      return leider?.functie?.toLowerCase() === "hoofdleider";
    },
  },

  computed: {
    sortedLeiders() {
      // plaats hoofdleider vanvoor
      return [...this.geleiding.leiders].sort((a, b) => {
        return this.isHoofdleider(b) ? 1 : -1;
      });
    },

    sortedActiviteiten() {
      return [...this.geleiding.activiteiten]
        .filter((a) => new Date(a.einde) > new Date())
        .sort((a, b) => new Date(a.begin) - new Date(b.begin));
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