<template>
  <div class="contact-info">
    <img
      class="contact-info__img"
      :src="getAssetUrl(geleiding.icoon)"
      alt="Logo van de geleiding"
    />

    <div>
      <h3>{{ geleiding.afkorting }}</h3>
      <div class="contact-info__row">
        <img
          class="contact-info__icon"
          src="/img/group.webp"
          alt="Groep icoontje"
        />
        {{ geleiding.leeftijden }}
      </div>
      <div class="contact-info__row">
        <img
          class="contact-info__icon"
          src="/img/call.webp"
          alt="Telefoon icoontje"
        />
        {{ geleiding.gsm }}
      </div>
      <div class="contact-info__row">
        <img
          class="contact-info__icon"
          src="/img/mail.webp"
          alt="Mail icoontje"
        />
        {{ geleiding.email }}
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/services/api.js";

export default {
  props: ["geleiding"],

  methods: {
    getAssetUrl: api.getAssetUrl,
  },
};
</script>

<style lang="scss" scoped>
.contact-info {
  margin: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__img {
    object-fit: cover;
    border-radius: 50%;
    width: 10rem;
    height: 10rem;
    margin-bottom: 1rem;
  }

  &__icon {
    height: 2rem;
    margin-right: 0.5rem;
  }

  &__row {
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
  }

  h3 {
    text-align: center;
    margin-top: 0;
    margin-bottom: 1rem;
  }
}
</style>