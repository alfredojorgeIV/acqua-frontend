<template>
  <div class="login">
    <CompanyTag />
    <img class="logo-login" src="../assets/logo-login.png" alt="">
    <div class="login-box">
      <p class="p-labels">Usuário</p>
      <input class="inputs mb-20" />
      <p class="p-labels">Senha</p>
      <input class="inputs mb-20" />
      <p class="p-labels">Base de dados</p>
      <select class="selects mb-30"/>
      <button class="primary-button centered-buttons" @click="goToHome">Entrar <i class="icon-mg fa-solid fa-right-to-bracket"></i></button>
      <button class="R-12-2-6 reset-password">Esqueci a senha</button>
    </div>
    <LogoStrategos/>
  </div>
</template>

<script>
import CompanyTag from "../components/AllPages/CompanyTag.vue";
import LogoStrategos from "../components/AllPages/LogoStrategos.vue";

export default {
  name: "App",
  components: {
    CompanyTag,
    LogoStrategos
  },
  methods: {
    goToHome() {
      this.$router.push({ name: 'HomeApp' });
    }
  }
};
</script>