<template>
  <div class="menu">
    <ul>
      <li>
        <img class="logo-menu" src="../../assets/logo-acqua-small.svg" alt="">
      </li>
      <li>
        <button class="menu-li flex aling-center" @click="$router.push({ name: 'CustumerServiceOptions' })">
          <i class="fas fa-headset"></i>
          <p class="R-18-0-6">Atendimento ao cliente</p>
        </button>
      </li>
      <li>
        <button class="menu-li flex aling-center" @click="$router.push({ name: 'FinancialCollectionOptions' })">
          <i class="fas fa-sack-dollar"></i>
          <p class="R-18-0-6">Arrecadação</p>
        </button>
      </li>
      <li>
        <button class="menu-li flex aling-center" @click="$router.push({ name: 'ChargingOptions' })">
          <i class="fas fa-cash-register"></i>
          <p class="R-18-0-6">Faturamento</p>
        </button>
      </li>
      <li>
        <button class="menu-li flex aling-center" @click="$router.push({ name: 'ManagementInformation' })">
          <i class="fas fa-chart-line"></i>
          <p class="R-18-0-6">Informações gerenciais</p>
        </button>
      </li>
      <li>
        <button class="menu-li flex aling-center" @click="$router.push({ name: 'MicromeasurementOptions' })">
          <i class="fas fa-gauge"></i>
          <p class="R-18-0-6">Micromedição</p>
        </button>
      </li>
      <li>
        <button class="menu-li flex aling-center" @click="$router.push({ name: 'TablesOptions' })">
          <i class="fas fa-table"></i>
          <p class="R-18-0-6">Tabelas</p>
        </button>
      </li>
      <li>
        <button class="menu-li  flex aling-center" @click="$router.push({ name: 'ControlOptions' })">
          <i class="far fa-clipboard"></i>
          <p class="R-18-0-6">Controle</p>
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "AppMenu",
};
</script>
