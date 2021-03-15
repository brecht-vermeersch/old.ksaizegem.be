<template>
  <div>
    <section>
      <h2>Contact</h2>

      <div v-if="contactpagina" class="contact">
        <img
          class="contact__map"
          :src="getAssetUrl(contactpagina.kaart)"
          alt="Kaart van de locatie van de KSA"
        />

        <div class="contact__address">
          <img
            class="contact__icon"
            src="/img/location-pointer.webp"
            alt="Contact icoon"
          />

          <div>
            <div class="contact__city">
              {{ contactpagina.stad }} {{ contactpagina.postcode }}
            </div>
            <div class="contact__street">
              {{ contactpagina.straat }} {{ contactpagina.huisnummer }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="contactinfo">
      <h2>Bellen</h2>

      <ul v-if="geleidingen">
        <li v-for="geleiding in geleidingen" :key="geleiding.id">
          <geleiding-contact :geleiding="geleiding" />
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import api from "@/services/api.js";
import GeleidingContact from "../components/GeleidingContact.vue";

export default {
  components: { GeleidingContact },

  data() {
    return {
      contactpagina: null,
      geleidingen: null,
    };
  },

  async mounted() {
    this.contactpagina = await api.getContactPage();
    this.geleidingen = await api.getGeleidingen();
  },

  methods: {
    getAssetUrl: api.getAssetUrl,
  },
};
</script>

<style lang="scss" scoped>
ul {
  list-style-type: none;
  margin-left: 0;
  padding-left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  li {
    margin: 1rem;
  }
  
}

.contact {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  &__map {
    width: 60%;
    margin-right: 1rem;
  }

  &__address {
    margin-left: 1rem;
    display: flex;
    align-items: center;
    font-weight: bold;
  }

  &__city {
    margin-bottom: 0.5rem;
  }

  &__icon {
    margin-right: 0.5rem;
    height: 3rem;
  }
}

@media (max-width: $screen-s) {
  .contact {
    &__map {
      width: 100%;
      margin-bottom: 1rem;
    }

     &__address {
    margin-left: 0;
     }
  }
}
</style>