<template>
  <div class="select-client-options">
    <div class="selects-box">
      <p class="R-25-1-6">Selecione a tabela</p>
      <div class="flex align-center justify-space-between mt-30">
        <div class="mb-30">
          <button
            class="primary-button align-center flex justify-center transition"
            @click="selectedOption = 'Tabelas especiais'"
            :class="{
              'hover-primary-active': selectedOption === 'Tabelas especiais',
            }"
          >
            Tabelas especiais
            <i size="default" class="fa-solid fa-star icon-mg"></i>
          </button>
        </div>
        <div class="mb-30">
          <button
            class="secondary-button align-center flex justify-center transition"
            @click="selectedOption = 'Tabelas simples'"
            :class="{
              'hover-secondary-active': selectedOption === 'Tabelas simples',
            }"
          >
            Tabelas simples
            <i class="q-ml-sm fa-solid fa-table icon-mg"></i>
          </button>
        </div>
        <div class="mb-30">
          <button
            class="tertiary-button align-center flex justify-center transition"
            @click="selectedOption = 'Tabelas fixas'"
            :class="{
              'hover-tertiary-active': selectedOption === 'Tabelas fixas',
            }"
          >
            Tabelas fixas
            <i class="q-ml-sm fa-solid fa-thumbtack icon-mg"></i>
          </button>
        </div>
        <div class="mb-30">
          <button
            class="quaternary-button align-center flex justify-center transition"
            @click="selectedOption = 'Tabelas fixas'"
            :class="{
              'hover-quaternary-active': selectedOption === 'Tabelas fixas',
            }"
          >
            Tabelas fixas
            <i class="q-ml-sm fa-solid fa-thumbtack icon-mg"></i>
          </button>
        </div>
      </div>
      <p
        v-if="selectedOption === 'Tabelas especiais'"
        class="p-labels select-options"
      >
        Selecione a opção de Tabelas espeiciais
      </p>
      <select
        v-if="selectedOption === 'Tabelas especiais'"
        v-model="selectedService"
        class="inputs"
      >
        <option v-for="option in specialTablesOptions" :key="option">
          {{ option }}
        </option>
      </select>
      <p
        v-if="selectedOption === 'Tabelas simples'"
        class="p-labels select-options"
      >
        Selecione a opção de Tabelas simples
      </p>
      <select
        v-if="selectedOption === 'Tabelas simples'"
        v-model="selectedService"
        class="inputs"
      >
        <option v-for="option in simpleTablesOptions" :key="option">
          {{ option }}
        </option>
      </select>
      <p
        v-if="selectedOption === 'Tabelas fixas'"
        class="p-labels select-options"
      >
        Selecione a opção de Tabelas fixas
      </p>
      <select
        v-if="selectedOption === 'Tabelas fixas'"
        v-model="selectedService"
        class="inputs"
      >
        <option v-for="option in fixedTablesOptions" :key="option">
          {{ option }}
        </option>
      </select>
    </div>
    <div class="btn-go justify-center flex w-48 mt-30">
      <button
        class="tertiary-button flex align-center justify-center"
        @click="goToSelectedService"
        v-if="selectedOption && selectedService"
      >
        Ir para o serviço selecionado
        <i class="fas fa-arrow-right icon-mg"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedOption: "",
      selectedService: "",
      specialTablesOptions: [
        "Bairro",
        "Banco",
        "Calendário",
        "Consumo estimado",
        "Cotação",
        "Distrito Pitomérico",
        "Grupo de leitura",
        "Jornada de trabalho",
        "Logradouro",
        "Material de serviço",
        "Mensagem",
        "Mensagem do aplicativo",
        "Ocorrência",
        "Parâmetro",
        "Preço do serviço",
        "Reservatórios",
        "Serviço da empreiteira",
        "Serviço",
        "Serviço fixo",
        "Serviços relacionados - garantia",
        "Serviços de infração",
        "Tarifa",
        "Tarifa mega",
        "Tipo de corte",
        "Serviços G.I.A",
        "Grupo contábil",
      ],
      simpleTablesOptions: [
        "Abreviação de código de logradouro",
        "Atividade pública",
        "Cancelamento de ordem de serviço",
        "Capacidade do HD",
        "Categoria de tarifa",
        "Categoria",
        "Código contábil",
        "Diâmetro do HD",
        "Diretoria",
        "E-mail parâmetros",
        "Empreiteira",
        "Estado civil",
        "Estado do HD",
        "ETA",
        "Fonte alternativa",
        "Forma de arrecadação",
        "Fornecedores",
        "Funcionário de campo",
        "Guichê de atendimento",
        "Imobiliária",
        "Lacre do HD",
        "Leiturista",
        "Local",
        "Localização do HD",
        "Localizar lote quadra",
        "Marcação do HD",
        "Marca do HD",
        "Material",
        "Material do cavalete",
        "Motivo da falta",
        "Motivo do cancelamento",
        "Motivo do corte",
        "Origem da ligação do HD",
        "Padrão do imóvel",
        "Pesquisa de campo",
        "Prorrogação de ordem de serviço",
        "Responsabilidade pública",
        "Resultado de fiscalização",
        "Revestimento",
        "Setor de abastecimento",
        "Situação do imóvel",
        "Tamanho do HD",
        "Testemunha",
        "Tipo de consumidor",
        "Tipo de cotação",
        "Tipo de despejo",
        "Tipo de esgotamento",
        "Tipo de ligação",
        "Tipo de logradouro",
        "Transmissão do HD",
        "UF",
        "Unidade de serviços",
        "Unidade orçamentária",
        "Veículo"
      ],
      fixedTablesOptions: [
        "Categoria de pagamento",
        "Entrega de conta",
        "Finalidade da unidade de serviço",
        "Forma de faturamento",
        "Forma de pagamento",
        "Grupo de ocorrências",
        "Grupo de serviço",
        "Histórico de tabelas",
        "Indicativo de consumo",
        "Indicativo de leitura",
        "Motivo de não faturamento",
        "Motivo de retirada do HD",
        "Retorno do débito",
        "Serviço de atendimento",
        "Situação do consumo",
        "Situação da fatura",
        "Situação da ligação",
        "Situação da negociação",
        "Tipo de atendimento",
        "Tipo de autorização",
        "Tipo de atualização",
        "Tipo de cobrança",
        "Tipo de controle",
        "Tipo de documento",
        "Tipo de entrega de conta",
        "Tipo de fatura",
        "Tipo de faturamento",
        "Tipo de negociação",
        "Tipo de pagamento",
        "Tipo de parcela",
        "Tipo de retorno dos correios",
        "Tipo de vias",
        "Tipo ind pagamento"
      ],
      dataBaseMaintenance:[
        "Manutenção do banco de dados"
      ],
      routeMap: {
        "Bairro" : "NeighborhoodTable",
        "Banco" : "BankTable",
        "Calendário" : "CalendarTable",
        "Consumo estimado" : "EstimatedConsumption",
        "Cotação" : "QuotationTable",
        "Distrito Pitomérico" : "PitomericDistrict",
        "Grupo de leitura" : "ReadingGroupTable",
        "Jornada de trabalho" : "WorkdayTable",
        "Logradouro" : "StreetTable",
        "Material de serviço" : "ServiceMaterialTable",
        "Mensagem" : "MessageTable",
        "Mensagem do aplicativo" : "AppMessageTable",
        "Ocorrência" : "OccurrenceTable",
        "Parâmetro" : "ParameterTable",
        "Preço do serviço" : "ServicePriceTable",
        "Reservatórios" : "ReservoirsTable",
        "Serviço da empreiteira" : "ContractorServiceTable",
        "Serviço" : "ServiceTable",
        "Serviço fixo" : "FixedServiceTable",
        "Serviços relacionados - garantia" : "WarrantyRelatedServicesTable",
        "Serviços de infração" : "InfractionServicesTable",
        "Tarifa" : "RateTable",
        "Tarifa mega" : "MegaRateTable",
        "Tipo de corte" : "CutTypeTable",
        "Serviços G.I.A" : "GIAServiceTable",
        "Grupo contábil" : "AccountingGroupTable",
         "Abreviação de código de logradouro" : "StreetAbbreviation",
        "Atividade pública" : "PublicActivity",
        "Cancelamento de ordem de serviço" : "ServiceOrderCancellation",
        "Capacidade do HD" : "HdCapacity",
        "Categoria de tarifa" : "TaxCategory",
        "Categoria" : "CategoryTable",
        "Código contábil" : "AccountingCode",
        "Diâmetro do HD" : "HdDiameter",
        "Diretoria" : "BoardTable",
        "E-mail parâmetros" : "EmailParametersTable",
        "Empreiteira" : "ContractorTable",
        "Estado civil" : "MaritalStatus",
        "Estado do HD" : "HdStatus",
        "ETA" : "EtaTable",
        "Fonte alternativa" : "AlternativeSource",
        "Forma de arrecadação" : "CollectionMethod",
        "Funcionário de campo" : "FieldEmployee",
        "Guichê de atendimento" : "ServiceDesk",
        "Imobiliária" : "RealEstate",
        "Fornecedores" : "SuppliersTable",
        "Lacre do HD" : "HdSecuritySeal",
        "Leiturista" : "ReaderTable",
        "Local" : "LocalTable",
        "Localizar lote quadra" : "LocateBlockLot",
        "Localização do HD" : "HdLocation",
        "Marca do HD" : "HdBrand",
        "Marcação do HD" : "HdMarking",
        "Material do cavalete" : "EselMaterial",
        "Material" : "MaterialTable",
        "Motivo do cancelamento" : "CancellationReason",
        "Motivo do corte" : "CutReason",
        "Motivo da falta" : "AbsenceReason",
        "Origem da ligação do HD" : "HdConnectionOrigin",
        "Padrão do imóvel" : "PropertyStandard",
        "Pesquisa de campo" : "FieldResearch",
        "Prorrogação de ordem de serviço" : "ServiceOrderExtention",
        "Responsabilidade pública" : "PublicResponsability",
        "Resultado de fiscalização"   : "InspectionResult",
        "Revestimento"  : "CoatingTable",
        "Setor de abastecimento" : "SupplySector",
        "Situação do imóvel" : "PropertySituation",
        "Tamanho do HD" : "HdSize",
        "Testemunha"  : "WitnessTable",
        "Tipo de cotação" : "QuotationType",
        "Tipo de consumidor" : "ConsumerType",
        "Tipo de despejo" : "DumpType",
        "Tipo de esgotamento" : "SewageType",
        "Tipo de ligação" : "ConnectionType",
        "Tipo de logradouro" : "StreetType",
        "Transmissão do HD" : "HdTransmission",
        "UF" : "StateTable",
        "Unidade de serviços" : "ServiceUnit",
        "Unidade orçamentária" : "BudgetUnit",
        "Veículo" : "VehicleTable",
         "Categoria de pagamento" : "PaymentCategory",
        "Entrega de conta" : "BillDelivery",
        "Finalidade da unidade de serviço" : "ServiceUnitPurpose",
        "Forma de faturamento" : "BillingForm",
        "Forma de pagamento" : "PaymentMethod",
        "Grupo de ocorrências" : "OccurrenceGroup",
        "Grupo de serviço" : "ServiceGroup",
        "Histórico de tabelas" : "TableHistory",
        "Indicativo de consumo" : "ConsumptionIndicator",
        "Indicativo de leitura" : "ReadingIndicator",
        "Motivo de não faturamento" : "NonBillingReason",
        "Motivo de retirada do HD" : "HdRemovalReason",
        "Retorno do débito" : "DebitReturn",
        "Serviço de atendimento" : "CustomerService",
        "Situação da fatura" : "BillingSituation",
        "Situação da ligação" : "ConnectionSituation",
        "Situação do consumo" : "ConsumptionSituation",
        "Situação da negociação" : "NegotiationSituation",
        "Tipo de atendimento" : "CustomerServiceType",
        "Tipo de autorização" : "AuthorizationType",
        "Tipo de atualização" : "UpdateType",
        "Tipo de cobrança" : "BillingType",
        "Tipo de controle" : "ControlType",
        "Tipo de documento" : "DocumentType",
        "Tipo de entrega de conta" : "BillDeliveryType",
        "Tipo de fatura" : "BillType",
        "Tipo de faturamento" : "InvoiceType",
        "Tipo ind pagamento" : "PaymentIndType",
        "Tipo de negociação"  : "NegotiationType",
        "Tipo de pagamento" : "PaymentType",
        "Tipo de parcela" : "ParcelType",
        "Tipo de vias"  : "CopysType",
        "Tipo de retorno dos correios" : "MailReturnType",
        "Manutenção do banco de dados" : "DataBaseMaintenanceTable"
      },
    };
  },
  methods: {
    goToSelectedService() {
      const routeName = this.routeMap[this.selectedService];
      console.log("selectedService:", this.selectedService);
      console.log("routeName:", routeName);
      if (routeName) {
        this.$router.push({ name: routeName });
      }
    },
  },
};
</script>

