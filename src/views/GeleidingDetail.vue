<template>
  <div v-if="geleiding">
    <section>
      <geleiding-info :geleiding="geleiding" />
    </section>

    <section>
      <div v-if="geleiding.leiders.length" class="leiders">
        <h3>Leiders</h3>

        <ul v-if="geleiding.leiders.length">
          <li v-for="leider in sortedLeiders" :key="leider.id">
            <geleiding-leider :leider="leider" />
          </li>
        </ul>

        <p v-else>Geen leiders te zien.</p>
      </div>

      <div v-if="sortedActiviteiten.length" class="banprogramma">
        <h3>Banprogramma</h3>

        <ul >
          <li v-for="activiteit in sortedActiviteiten" :key="activiteit.id">
            <geleiding-activiteit :activiteit="activiteit" />
          </li>
        </ul>
      </div>

      <div v-if="geleiding.bestanden.length" class="downloads">
        <h3>Downloads</h3>

        <div v-for="(bestanden, type) in bestandenByType" :key="type">
          <h4>{{ type }}</h4>

          <ul>
            <li v-for="bestand in bestanden" :key="bestand.id">
              <geleiding-bestand :bestand="bestand" />
            </li>
          </ul>
        </div>
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
import groupBy from "lodash.groupby";

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
    };
  },

  async mounted() {
    this.geleiding = await api.getGeleiding(this.$route.params.naam);
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

    bestandenByType() {  
      return groupBy(this.geleiding.bestanden, "type.naam");
    }
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

  h3 {
    text-align: center;
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