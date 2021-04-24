<template>
  <a :href="url" download>
    <slot></slot>
  </a>
</template>

<script>
import api from "@/services/api.js";

export default {
  props: ["asset"],

  data() {
    return {
      url: api.getAssetUrl(this.asset, true),
    };
  },
};
</script>