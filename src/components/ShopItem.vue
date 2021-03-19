<template>
  <div class="shop-item">
    <h4>{{ item.titel }}</h4>

    <d-img
      class="shop-item__img"
      :asset="item.foto"
      :alt="`Foto van ${item.titel}`"
    ></d-img>

    <div class="shop-item__text" v-html="item.beschrijving"></div>
  </div>
</template>

<script>
export default {
  props: ["item"],
};
</script>

<style scoped lang="scss">
.shop-item {
  border-radius: 25px;
  border: 1px solid $orange;
  width: 20rem;
  height: 20rem;
  padding: 1rem;

  overflow: hidden;
  display: flex;
  flex-direction: column;

  text-align: center;
  //   align-items: center;

  &__img {
    width: 100%;
    height: 50%;
    // height: 100%;
    object-fit: contain;
    // width: 7rem;
    // height: 7rem;
  }

  h4 {
    margin: 0;
  }

  h4, &__text {
    padding: 1rem;
  }
}
</style>