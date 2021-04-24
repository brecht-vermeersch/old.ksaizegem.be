<template>
  <div class="contact-info">
    <d-img
      class="contact-info__img"
      :asset="geleiding.icoon"
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
export default {
  props: ["geleiding"],
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