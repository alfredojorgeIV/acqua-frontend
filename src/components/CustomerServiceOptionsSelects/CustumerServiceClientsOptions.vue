<template>
  <div class="select-client-options">
    <div class="selects-box">
      <p class="R-25-1-6">Selecione a modalidade</p>
      <div class="flex align-center justify-space-between mt-30">
      <div>
      
        <button class="primary-button align-center flex justify-center transition"
          @click="selectedOption = 'Consultas'" :class="{ 'hover-primary-active': selectedOption === 'Consultas' }">
          Consultas
          <i size="default" class="fa-solid fa-eye icon-mg"></i>
        </button>
      </div>
      <div>
      
        <button class="secondary-button align-center flex justify-center transition"
          @click="selectedOption = 'Atualizações'"
          :class="{ 'hover-secondary-active': selectedOption === 'Atualizações' }">
          Atualizações
          <i class="q-ml-sm fa-solid fa-retweet icon-mg"></i>
        </button>
      </div>
      </div>
      <p v-if="selectedOption === 'Consultas'" class="p-labels select-options">
        Selecione a opção de consultas
      </p>
      <select v-if="selectedOption === 'Consultas'" v-model="selectedService" class="inputs">
        <option v-for="option in consultasOptions" :key="option">
          {{ option }}
        </option>
      </select>
      <p v-if="selectedOption === 'Atualizações'" class="p-labels select-options">
        Selecione a opção de atualizações
      </p>
      <select v-if="selectedOption === 'Atualizações'" v-model="selectedService" class="inputs">
        <option v-for="option in atualizacoesOptions" :key="option">
          {{ option }}
        </option>
      </select>
    </div>
    <div class="btn-go justify-center flex">
      <button class="tertiary-button flex align-center justify-center" @click="goToSelectedService"
        v-if="selectedOption && selectedService">
        Ir para o serviço selecionado
        <i class="fas fa-arrow-right icon-mg"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustumerServiceClientsOptions',
  data() {
    return {
      selectedOption: '',
      selectedService: '',
      consultasOptions: [
        'Dados do cliente',
        'Ligações agrupadas',
        'Manobra',
        'Simulador',
        'Consulta OS Redegeo',
        'Serviço',
        'Tarifa',
        'Grupo de leitura',
        'Cadastro',
        'Emissão',
        'Análise',
        'Consultar protocolo',
        'Triagem de atendimento',
        'Consultar TOI',
      ],
      atualizacoesOptions: [
        'Cadastro',
        'Cadastro de atendimento',
        'Criar nova conta',
        'Serviços a serem faturados',
        'Refaturamento',
        'Refaturamento - inclusão de encargos',
        'Segunda via de conta',
        'Faturas - incluir / Cons. final',
        'Faturas - alterar',
        'Negociação de débito',
        'Acompanhamento da negociação',
        'Gravar histórico',
        'Restituição de numerário',
        'Parametrização da negociação',
        'Certidão negativa',
        'Fatura de serviços fixos',
        'Cancelar fatura em débito automático',
        'Recuperar fatura original',
        'Fatura - acerto de leitura',
        'Infração',
        'Dados da agência virtual',
        'Mensagem de aviso',
        'Transferência de dados',
        'Atividade Pública'
      ],
      routeMap: {
        'Cadastro': 'RegisterUpdates',
        'Cadastro de atendimento': 'ServiceRegistration',
        'Criar nova conta': 'CreateNewAccount',
        'Serviços a serem faturados': 'ServicesToBeBilled',
        'Refaturamento': 'RebillingUpdates',
        'Refaturamento - inclusão de encargos': 'RebillingIncludingCharges',
        'Segunda via de conta': 'SecondCopyBill',
        'Faturas - incluir / Cons. final': 'BillsIncludeFinalConsumption',
        'Faturas - alterar': 'BillsUpdates',
        'Negociação de débito': 'DebtNegotiation',
        'Acompanhamento da negociação': 'NegotiationMonitoring',
        'Gravar histórico': 'SaveHistory',
        'Restituição de numerário': 'CashRefund',
        'Parametrização da negociação': 'NegotiationParameterization',
        'Certidão negativa': 'Negative',
        'Fatura de serviços fixos': 'FixedServicesBill',
        'Cancelar fatura em débito automático': 'CancelAutomaticDebtBill',
        'Recuperar fatura original': 'RecoverOriginalBill',
        'Fatura - acerto de leitura': 'BillReadingAccuracy',
        'Infração': 'InfractionUpdates',
        'Dados da agência virtual': 'VirtualAgencyData',
        'Mensagem de aviso': 'WarningMessage',
        'Transferência de dados': 'DataTransference',

        'Dados do cliente' : 'ClientData',
        'Atividade Pública':'TableExample',
      },
    };
  },
  methods: {
    goToSelectedService() {
      const routeName = this.routeMap[this.selectedService];
      console.log('selectedService:', this.selectedService);
      console.log('routeName:', routeName);
      if (routeName) {
        this.$router.push({ name: routeName });
      }
    },
  },
};
</script>

<style scoped>
.select-client-options {
  width: 50%;
  left: 30.5%;
  margin: 50px auto 30px auto !important;
  max-height: 100vh;
}

.select-options {
  margin-top: 30px !important;
}

.selects-box {
  margin-bottom: 30px !important;
}
</style>