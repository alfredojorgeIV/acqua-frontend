<template>
  <div class="container">
    <MenuApp />
    <router-view />
    <div class="content">
      <CompanyTag />
      <h1>Tabelas</h1>
      <div class="flex mt-30">
        <div
          :class="{
            'bg-administration': true,
            'bg-2-options': true,
            expanded: selected === 'administration',
          }"
          @click="select('administration')"
        >
          <p class="R-25-0-6">Administração</p>
        </div>
        <div
          :class="{
            'bg-system': true,
            'bg-2-options': true,
            expanded: selected === 'services',
          }"
          @click="select('services')"
        >
          <p class="R-25-0-6">Sistema</p>
        </div>
        <div
          :class="{
            'bg-users': true,
            'bg-2-options': true,
            expanded: selected === 'users',
          }"
          @click="select('users')"
        >
          <p class="R-25-0-6">Usuário</p>
        </div>
      </div>
      <TablesAdministrationOptions v-if="selected === 'administration'"/>
    </div>
  </div>
</template>

<script>
import MenuApp from "../components/AllPages/MenuApp.vue";
import CompanyTag from "../components/AllPages/CompanyTag.vue";
import TablesAdministrationOptions from "../components/TablesOptionsSelects/TablesAdministrationOptions.vue";
export default {
  name: "TablesOptions",

  components: {
    MenuApp,
    CompanyTag,
    TablesAdministrationOptions
  },

  data() {
    return {
      selected: null,
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

