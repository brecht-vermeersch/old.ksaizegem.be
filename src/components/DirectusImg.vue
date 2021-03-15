<template>
  <img :src="url" :srcset="thumbnails" />
</template>

<script>
import api from "@/services/api.js";

export default {
  props: ["asset"],

  data() {
    return { url: api.getAssetUrl(this.asset) };
  },

  computed: {
    thumbnails() {
      return `${this.url}?width=2000 2000w,
              ${this.url}?width=1750 1750w,
              ${this.url}?width=1500 1500w,
              ${this.url}?width=1250 1250w,
              ${this.url}?width=1000 1000w,
              ${this.url}?width=750 750w,
              ${this.url}?width=500 500w,
              ${this.url}?width=250 250w`;
    },
  },
};
</script>