<template>
  <div :class="['menu', menuClass]">
    <ul>
      <li>
        <img class="logo-menu" src="../../assets/logo-acqua-small.svg" alt="" />
      </li>
      <li>
        <button
          class="menu-li flex aling-center"
          @click="$router.push({ name: 'CustumerServiceOptions' })"
        >
          <i class="fas fa-headset"></i>
          <p class="R-18-0-6">Atendimento ao cliente</p>
        </button>
      </li>
      <li>
        <button
          class="menu-li flex aling-center"
          @click="$router.push({ name: 'FinancialCollectionOptions' })"
        >
          <i class="fas fa-sack-dollar"></i>
          <p class="R-18-0-6">Arrecadação</p>
        </button>
      </li>
      <li>
        <button
          class="menu-li flex aling-center"
          @click="$router.push({ name: 'ChargingOptions' })"
        >
          <i class="fas fa-cash-register"></i>
          <p class="R-18-0-6">Faturamento</p>
        </button>
      </li>
      <li>
        <button
          class="menu-li flex aling-center"
          @click="$router.push({ name: 'ManagementInformation' })"
        >
          <i class="fas fa-chart-line"></i>
          <p class="R-18-0-6">Informações gerenciais</p>
        </button>
      </li>
      <li>
        <button
          class="menu-li flex aling-center"
          @click="$router.push({ name: 'MicromeasurementOptions' })"
        >
          <i class="fas fa-gauge"></i>
          <p class="R-18-0-6">Micromedição</p>
        </button>
      </li>
      <li>
        <button
          class="menu-li flex aling-center"
          @click="$router.push({ name: 'TablesOptions' })"
        >
          <i class="fas fa-table"></i>
          <p class="R-18-0-6">Tabelas</p>
        </button>
      </li>
      <li>
        <button
          class="menu-li flex aling-center"
          @click="$router.push({ name: 'ControlOptions' })"
        >
          <i class="far fa-clipboard"></i>
          <p class="R-18-0-6">Controle</p>
        </button>
      </li>
      <li>
        <button class="menu-li flex aling-center" @click="logout">
          <i class="far fa-sign-out-alt"></i>
          <p class="R-18-0-6">Sair</p>
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "AppMenu",
  data() {
    return {
      menuClass: 'menu-default' // classe padrão
    };
  },
  mounted() {
    const user = JSON.parse(localStorage.getItem('user') || 'null');
    console.log('User from localStorage:', user);
    if (user) {
      if (user.databaseName.toLowerCase().includes('homologacao')) {
        this.menuClass = 'menu-red';
        console.log('Setting menu class to menu-red');
      } else {
        this.menuClass = 'menu-blue';
        console.log('Setting menu class to menu-blue');
      }
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('user');
      this.$router.push('/');
    }
  }
};
</script>

<style scoped>
.menu {
  width: 270px;
  height: 100vh;
  position: fixed;
  display: flex;
  justify-content: flex-start;
  left: 0;
  padding-left: 15px;
}
.menu-red {
  background-color: #d90d1e;
}
.menu-blue {
  background-color: #03658c;
}
.menu-default {
  background-color: #03658c;
}
.menu-li {
  font-size: 20px !important;
  gap: 10px;
  align-items: center;
}
.menu li {
  margin-bottom: 20px;
}
.logo-menu {
  margin: 15px auto 40px auto !important;
  display: flex;
}
</style>
