<template>
  <section>
    <h2>Shop</h2>

    <p>Mail de artikelen die u wilt naar bond@ksaizegem.be.</p>

    <div v-for="type in itemsByType" :key="type.id">
        <h3>{{ type.naam }}</h3>

        <ul>
            <li v-for="artikel in type.artikelen" :key="artikel.id">
                 <shop-item :item="artikel" />
            </li>
        </ul>
    </div>
  </section>
</template>

<script>
import ShopItem from "../components/ShopItem.vue";
import api from "@/services/api.js";

export default {
  components: { ShopItem },

  data() {
    return {
      itemsByType: [],
    };
  },

  async mounted() {
    this.itemsByType = await api.getShopItemsByType();
  },
};
</script>

<style lang="scss" scoped>
p {
  text-align: center;
}

h3 {
    text-transform: capitalize;
}

ul {
  list-style-type: none;
  margin-left: 0;
  padding-left: 0;
  display: flex;
  flex-wrap: wrap;
  // justify-content: center;

  li {
    margin: 1rem;
  }
}
</style>