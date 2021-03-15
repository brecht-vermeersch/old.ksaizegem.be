<template>
  <div class="leider">
    <d-img class="leider__portrait" :asset="leider.foto" :alt="'Portret van ' + leider.voornaam" />

    <div>
      <div class="leider__naam"><strong>Naam: </strong>{{ leider.voornaam }} {{ leider.achternaam }}</div>
      <div class="leider__nickname"><strong>Bijnaam: </strong>{{ leider.bijnaam }}</div>
      <div class="leider__function"><strong>Functie: </strong>{{ leider.functie }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    leider: {
      type: Object,
    },
  }
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