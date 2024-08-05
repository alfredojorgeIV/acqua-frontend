<!--  -->

export if varial == true {

} else {
  window.location.
}
<template>
  <div class="container">
    <MenuApp />
    <router-view />
    <div class="content">
      <CompanyTag />
      <h1>Bem-vindo Fulano de Tal!</h1>
      <div class="flex gap-4">
        <div class="w-35">
          <div class="header-favorites mt-20">
            <p class="R-20-0-6">Favoritos</p>
          </div>
          <div class="box-favorites">
            <div class="flex align-center gap-5px mb-15">
              <div>
                <i style="color: #03658c" class="fas fa-heart"></i>
              </div>
              <div><p class="P-20-3-6">Cadastro</p></div>
            </div>
            <div class="flex align-center gap-5px mb-15">
              <div><i style="color: #03658c" class="fas fa-heart"></i></div>
              <div><p class="P-20-3-6">Serviços a serem faturados</p></div>
            </div>
            <div class="flex align-center gap-5px mb-15">
              <div><i style="color: #03658c" class="fas fa-heart"></i></div>
              <div><p class="P-20-3-6">Faturamento</p></div>
            </div>
            <div class="flex align-center gap-5px mb-15">
              <div><i style="color: #03658c" class="fas fa-heart"></i></div>
              <div><p class="P-20-3-6">Renegociação de débito</p></div>
            </div>
            <div class="flex align-center gap-5px mb-15">
              <div><i style="color: #03658c" class="fas fa-heart"></i></div>
              <div><p class="P-20-3-6">Segunda via de conta</p></div>
            </div>
            <div class="flex align-center gap-5px mb-15">
              <div><i style="color: #03658c" class="fas fa-heart"></i></div>
              <div><p class="P-20-3-6">Cadastrar hidrômetro</p></div>
            </div>
            <div class="flex align-center gap-5px mb-15">
              <div><i style="color: #03658c" class="fas fa-heart"></i></div>
              <div><p class="P-20-3-6">Monitoramento de leituristas</p></div>
            </div>
            <div class="flex align-center gap-5px mb-15">
              <div><i style="color: #03658c" class="fas fa-heart"></i></div>
              <div><p class="P-20-3-6">Tarifas</p></div>
            </div>
            <div class="flex align-center gap-5px mb-15">
              <div><i style="color: #03658c" class="fas fa-heart"></i></div>
              <div><p class="P-20-3-6">Manobra</p></div>
            </div>
            <div class="flex align-center gap-5px mb-15">
              <div><i style="color: #03658c" class="fas fa-heart"></i></div>
              <div><p class="P-20-3-6">Resumo contábil</p></div>
            </div>
          </div>
        </div>
        <div class="w-61">
          <div class="header-urgent-message mt-20">
            <p class="R-20-0-6">Mensagens urgentes</p>
          </div>
          <div class="box-urgent-message">
            <p class="R-15-1-4">
              Aqui devem estar os avisos mais importantes a serem mostrados, sem
              ser minimizado em momento algum, garantindo que o usuário terá a
              informação à sua disposição na tela.
            </p>
          </div>
          <div class="header-normal-message mt-20">
            <p class="R-20-0-6">Mensagens normais</p>
            <i
              class="fas fa-chevron-down icons-size white-icon"
              
              @click="toggleNormalMessage"
              :class="{
                'fa-chevron-up': normalMessageVisible,
                'fa-chevron-down': !normalMessageVisible,
              }"
            ></i>
          </div>
          <div class="box-normal-message" v-show="normalMessageVisible">
            <p class="R-15-1-4">
              Aqui devem ser informadas as atualizações previstas para o
              sistema, quando vão ocorrer, o que precisa ser feito. Essa aba é
              minimizada por padrão, e ao clicar na seta, as informações
              aparecem.
            </p>
          </div>
          <div class="header-non-important-message mt-20">
            <p class="R-20-0-6">Mensagens menos importantes</p>
            <i
              class="fas fa-chevron-down icons-size white-icon"
              
              @click="toggleNonImportantMessage"
              :class="{
                'fa-chevron-up': nonImportantMessageVisible,
                'fa-chevron-down': !nonImportantMessageVisible,
              }"
            ></i>
          </div>
          <div
            class="box-non-important-message"
            v-show="nonImportantMessageVisible"
          >
            <p class="R-15-1-4">
              Aqui devem ser informadas as atualizações previstas para o
              sistema, quando vão ocorrer, o que precisa ser feito. Essa aba é
              minimizada por padrão, e ao clicar na seta, as informações
              aparecem.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MenuApp from "../components/AllPages/MenuApp.vue";
import CompanyTag from "../components/AllPages/CompanyTag.vue";
export default {
  name: "HomeApp",

  components: {
    MenuApp,
    CompanyTag,
  },

  data() {
    return {
      normalMessageVisible: true,
      nonImportantMessageVisible: true,
    };
  },

  methods: {
    toggleNormalMessage() {
      this.normalMessageVisible = !this.normalMessageVisible;
    },
    toggleNonImportantMessage() {
      this.nonImportantMessageVisible = !this.nonImportantMessageVisible;
    },
  },
};
</script>
