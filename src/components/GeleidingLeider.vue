<template>
  <div class="leider">
    <img class="leider__portrait" :src="src" :alt="alt" />

    <div>
      <div class="leider__naam"><strong>Naam: </strong>{{ leider.voornaam }} {{ leider.achternaam }}</div>
      <div class="leider__nickname"><strong>Bijnaam: </strong>{{ leider.bijnaam }}</div>
      <div class="leider__function"><strong>Functie: </strong>{{ leider.functie }}</div>
    </div>
  </div>
</template>

<script>
import api from "@/services/api.js"

export default {
  props: {
    leider: {
      type: Object,
    },
  },

  data() {
    return {
      src: api.getAssetUrl(this.leider.foto),
      alt: `Portret van ${this.leider.voornaam}`
    };
  },
};
</script>

<style scoped lang="scss">
.leider {
  display: flex;
  align-items: center;

  &__portrait {
    object-fit: cover;
    border-radius: 50%;
    width: 7rem;
    height: 7rem;
    margin-right: 1rem;
  }
}
</style>