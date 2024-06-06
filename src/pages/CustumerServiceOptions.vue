<template>
  <div class="container">
    <MenuApp />
    <router-view />
    <div class="content">
      <CompanyTag />
      <h1>Atendimento ao cliente</h1>
      <div class="flex mt-30">
        <div
          :class="{
            'bg-clients': true,
            'bg-2-options': true,
            expanded: selected === 'clients',
          }"
          @click="select('clients')"
        >
          <p class="R-25-0-6">Clientes</p>
        </div>
        <div
          :class="{
            'bg-services': true,
            'bg-2-options': true,
            expanded: selected === 'services',
          }"
          @click="select('services')"
        >
          <p class="R-25-0-6">Serviços</p>
        </div>
      </div>
      <CustumerServiceClientsOptions v-if="selected === 'clients'"/>
    </div>
  </div>
</template>

<script>
import MenuApp from "../components/AllPages/MenuApp.vue";
import CompanyTag from "../components/AllPages/CompanyTag.vue";
import CustumerServiceClientsOptions from "../components/CustomerServiceOptionsSelects/CustumerServiceClientsOptions.vue";
export default {
  name: "CustumerServiceOptions",

  components: {
    MenuApp,
    CompanyTag,
    CustumerServiceClientsOptions
  },

  data() {
    return {
      selected: null,
      normalMessageVisible: true,
      nonImportantMessageVisible: true,
    };
  },

  methods: {
    select(item) {
      this.selected = this.selected === item ? null : item;
    },
    toggleNormalMessage() {
      this.normalMessageVisible = !this.normalMessageVisible;
    },
    toggleNonImportantMessage() {
      this.nonImportantMessageVisible = !this.nonImportantMessageVisible;
    },
  },
};
</script>

