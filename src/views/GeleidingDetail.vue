<template>
  <div v-if="geleiding">
    <section>
      <geleiding-info :geleiding="geleiding" />
    </section>

    <div class="geleiding__grid">
      
      <div v-if="sortedActiviteiten.length" class="banprogramma">
        <h3 class="section__title">Banprogramma</h3>

        <ul >
          <li v-for="activiteit in sortedActiviteiten" :key="activiteit.id">
            <geleiding-activiteit :activiteit="activiteit" />
          </li>
        </ul>
      </div>
      
      <div v-if="geleiding.bestanden.length" class="downloads">
        <h3 class="section__title">Downloads</h3>

        <div class="downloads__section" v-for="(bestanden, type) in bestandenByType" :key="type">
          <h4 class="downloads__section__title">{{ type }}</h4>

          <ul>
            <li class="downloads__section__download" v-for="bestand in bestanden" :key="bestand.id">
              <geleiding-bestand :bestand="bestand" />
            </li>
          </ul>
        </div>
      </div>  

      <div v-if="geleiding.leiders.length" class="leiders">
        <h3 class="section__title">Leiders</h3>

        <ul v-if="geleiding.leiders.length">
          <li v-for="leider in sortedLeiders" :key="leider.id">
            <geleiding-leider :leider="leider" />
          </li>
        </ul>

        <p v-else>Geen leiders te zien.</p>
      </div>
    </div>
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

.geleiding__grid {
  display: grid;
  grid-gap: 64px;
  max-width: 960px;
  margin: auto;
}

@media (min-width: 960px) {
  .geleiding__grid {
    grid-auto-columns: 506px 390px;
  }

  .leiders {
    grid-column-start: 2;
  }
}

.leiders {
  max-width: 390px;
  margin: auto;
  li {
    margin-bottom: 1rem;
  }
}

.banprogramma {
  margin: auto;
  li {
    margin-bottom: 1rem;
  }
}

.downloads {
  max-width: 390px;
  margin: auto;
  li {
    margin-bottom: 1rem;
  }
}

.section__title {
  text-align: left;
  border-bottom: 1px solid black;
  padding-left: 10px;
}

.downloads__section__title {
  text-align: start;
}

.downloads__section__download {
  width: 250px;
  margin-left: 10px;
}

section {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>