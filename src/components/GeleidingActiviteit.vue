<template>
  <div class="activiteit">
    <div class="activiteit__datetime">
      <div class="activiteit__date">{{ date }}</div>
      <div class="activiteit__time">{{ time }}</div>
    </div>

    <div class="activiteit__info">
      <div class="activiteit__title">{{ activiteit.naam }}</div>
      <div class="activiteit__description" v-if="activiteit.beschrijving">{{ activiteit.beschrijving }}</div>
    </div>
  </div>
</template>

<script>

import {getActiviteitDate, getActiviteitTime} from "@/services/datums.js"

export default {
  props: {
    activiteit: {
      type: Object,
    },
  },

  data() {
    return {
      date: getActiviteitDate(this.activiteit.begin, this.activiteit.einde),
      time: getActiviteitTime(this.activiteit.begin, this.activiteit.einde)
    };
  },
};
</script>

<style scoped lang="scss">
.activiteit {
  display: grid;
  grid-template-columns: 40% 60%;


  &__datetime {
    border-right: 1px solid #333;
    text-align: right;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-right: 1rem;
    // width: 40%;
  }

  &__date {
    font-weight: 700;
  }

  &__info {
    // width: 60%;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 1rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  &__title {
    font-weight: 700;
  }
}
</style>