<template>
  <footer class="footer">
    <div class="footer__copyright">KSA Izegem © 2021</div>

    <div class="footer__socials">
      <a href="#">
        <img src="/img/facebook.png" alt="Facebook icoontje" />
      </a>

      <a href="#">
        <img src="/img/instagram.png" alt="Instagram icoontje" />
      </a>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  @include width-container;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;

  &__socials {
    img {
      height: 2rem;
      width: auto;
    }
  }
}
</style>