<template>
  <div class="select-client-options">
    <div class="selects-box">
      <p class="R-25-1-6">Selecione a tabela</p>
      <div class="flex align-center justify-space-between mt-30">
        <div class="mb-30">
          <button
            class="primary-button R-15-0-6 align-center flex justify-center transition"
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
            class="secondary-button R-15-0-6 align-center flex justify-center transition"
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
            class="tertiary-button R-15-0-6 align-center flex justify-center transition"
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
            class="quaternary-button R-15-0-6 align-center flex justify-center transition"
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
        "Abreviação de Código de Logradouro",
        "App - Menu",
        "Atividade Pública",
        "Base de Dados",
        "Cancelamento de Ordem de Serviço",
        "Capacidade do HD",
        "Categoria de Tarifa",
        "Característica do HD",
        "Categoria",
        "Código Contábil",
        "Diâmetro do HD",
        "Diretoria",
        "E-mail Parâmetros",
        "Empreiteira",
        "Estado Civil",
        "Estado do HD",
        "ETA",
        "Fonte Alternativa",
        "Forma de Arrecadação",
        "Fornecedores",
        "Funcionário de Campo",
        "Funcionário de Campo da Empreiteira",
        "Guichê de Atendimento",
        "Imobiliária",
        "Índice do Judiciário",
        "Lacre do HD",
        "Leiturista",
        "Local",
        "Localização do HD",
        "Localizar Lote Quadra",
        "Marcação do HD",
        "Marca do HD",
        "Material",
        "Material do Cavalete",
        "Mensagem do APP",
        "Módulos",
        "Motivo da Falta",
        "Motivo do Cancelamento",
        "Motivo do Corte",
        "Motivo do Encerramento",
        "Motivo do Processo",
        "Motivo Inativo",
        "Movimento",
        "Origem da Ligação do HD",
        "Padrão do Imóvel",
        "Pesquisa de Campo",
        "Prorrogação de Ordem de Serviço",
        "Responsabilidade Pública",
        "Resultado de Fiscalização",
        "Revestimento",
        "Setor de Abastecimento",
        "Sistemas Interagentes",
        "Situação do Imóvel",
        "Tamanho do HD",
        "Testemunha",
        "Tipo de Consumidor",
        "Tipo de Consumidor Especial",
        "Tipo de Cotação",
        "Tipo de Despejo",
        "Tipo de Esgotamento",
        "Tipo de Família do Material",
        "Tipo de Fila",
        "Tipo de Grande Consumidor",
        "Tipo de Ligação",
        "Tipo de Logradouro",
        "Tipo de Pavimento",
        "Tipo de Pavimento da Calçada",
        "Tipo do Pavimento da Rua",
        "Tipo de Reservatório",
        "Tipo Unidade Material",
        "Transmissão do HD",
        "UF",
        "Unidade de Serviços",
        "Unidade Orçamentária",
        "Veículo",
        "Zona de Atendimento",
      ],
      fixedTablesOptions: [
        "Categoria de Pagamento",
        "Entrega de Conta",
        "Estado de Aferição",
        "Finalidade da Unidade de Serviço",
        "Forma de Faturamento",
        "Forma de Pagamento",
        "Grupo de Ocorrências",
        "Grupo de Serviço",
        "Histórico de Tabelas",
        "Indicativo de Consumo",
        "Indicativo de Grupo de Leitura",
        "Indicativo de Leitura",
        "Indicativo Retificada",
        "Indicativos de Tabelas",
        "Indicativos de Parâmetros",
        "Legenda SNIS",
        "Local do Hd",
        "Local Lacre",
        "Material de Rede",
        "Motivo de Exclusão do SPC",
        "Motivo de Faturamento Especial",
        "Motivo de Não Faturamento",
        "Motivo de Retirada do HD",
        "Nível de Contaminação",
        "Passagem",
        "Resultado de Aferição HD",
        "Retorno do Débito",
        "Retorno de Débito CEF",
        "Serviço de Atendimento",
        "Situação da Fatura",
        "Situação da Ligação",
        "Situação da Negociação",
        "Situação da OS",
        "Situação do Consumo",
        "Situação do Orçamento",
        "Tipo de Atendimento",
        "Tipo de Aferição de HD",
        "Tipo de Autorização",
        "Tipo de Atualização",
        "Tipo de Cálculo",
        "Tipo de Cobrança",
        "Tipo de Cobrança Mínima",
        "Tipo de Controle",
        "Tipo de Data de Grupo de Leiutra",
        "Tipo de Documento",
        "Tipo de Documento Pessoal",
        "Tipo de Entrega de Conta",
        "Tipo de Evento",
        "Tipo de Fatura",
        "Tipo de Faturamento",
        "Tipo de Faturamento Especial",
        "Tipo de Histórico de Processamento",
        "Tipo Ind Pagamento",
        "Tipo Isento",
        "Tipo de Lançamento",
        "Tipo de Moeda",
        "Tipo de Negociação",
        "Tipo de Ocorrência",
        "Tipo de Ocorrência de Pagamento",
        "Tipo de Pagamento",
        "Tipo de Parcela",
        "Tipo de Parcelamento",
        "Tipo de Problema HD",
        "Tipo de Processamento",
        "Tipo de Rateio de Consumo",
        "Tipo de Relação dos Serviços de Garantia",
        "Tipo de Retorno dos Correios",
        "Tipo de Unidade Estimada",
        "Tipo de Vazamento",
        "Tipo de Vias",
      ],
      dataBaseMaintenance: ["Manutenção do banco de dados"],
      routeMap: {
        "Bairro": "frmBairro",
        "Banco": "BankTable",
        "Calendário": "CalendarTable",
        "Consumo estimado": "EstimatedConsumption",
        "Cotação": "QuotationTable",
        "Distrito Pitomérico": "PitomericDistrict",
        "Grupo de leitura": "ReadingGroupTable",
        "Jornada de trabalho": "WorkdayTable",
        "Logradouro": "StreetTable",
        "Material de serviço": "ServiceMaterialTable",
        "Mensagem": "MessageTable",
        "Ocorrência": "OccurrenceTable",
        "Parâmetro": "ParameterTable",
        "Preço do serviço": "ServicePriceTable",
        "Reservatórios": "ReservoirsTable",
        "Serviço da empreiteira": "ContractorServiceTable",
        "Serviço": "ServiceTable",
        "Serviço fixo": "FixedServiceTable",
        "Serviços relacionados - garantia": "WarrantyRelatedServicesTable",
        "Serviços de infração": "InfractionServicesTable",
        "Tarifa": "RateTable",
        "Tarifa mega": "MegaRateTable",
        "Tipo de corte": "CutTypeTable",
        "Serviços G.I.A": "GIAServiceTable",
        "Grupo contábil": "AccountingGroupTable",

        "Abreviação de Código de Logradouro": "frmAbrevLograd",
        "App - Menu" : "frmAPPMenu",
        "Atividade Pública": "frmTipoAtividPub",
        "Base de Dados" : "frmBasesDados",
        "Cancelamento de Ordem de Serviço": "frmCancOs",
        "Capacidade do HD": "frmCapacidade",
        "Categoria de Tarifa": "frmCatTarifa",
        "Característica do HD": "frmCaracteristicasHD",
        "Categoria": "frmCategoria",
        "Código Contábil": "frmContabil",
        "Diâmetro do HD": "frmDiametro",
        "Diretoria": "frmClienteInt",
        "E-mail Parâmetros": "frmEmailParametros",
        "Empreiteira": "frmEmpreiteira",
        "Estado Civil": "frmEstadoCivil",
        "Estado do HD": "frmEstHD",
        "ETA": "frmETA",
        "Fonte Alternativa": "frmFonte",
        "Forma de Arrecadação": "frmFormaArrecadacao",
        "Fornecedores": "frmFornecedor",
        "Funcionário de Campo": "frmFuncionarioCampo",
        "Funcionário de Campo da Empreiteira" : "frmFuncCampoEmp",
        "Guichê de Atendimento": "frmGuiche",
        "Imobiliária": "frmImobiliaria",
        "Índice do Judiciário" : "frmIndiceJudiciario",
        "Lacre do HD": "frmLacre",
        "Leiturista": "frmLeiturista",
        "Local": "frmLocal",
        "Localização do HD": "frmLocalHD",
        "Localizar Lote Quadra": "frmLocaliz",
        "Marcação do HD": "frmMarcacao",
        "Marca do HD": "frmMarca",
        "Material": "frmMaterial",
        "Material do Cavalete": "frmCavalete",
        "Mensagem do APP" : "frmMensagemAPP",
        "Módulos" : "frmSistema",
        "Motivo da Falta": "frmMotivo_Falta",
        "Motivo do Cancelamento": "frmCancelamento",
        "Motivo do Corte": "frmCorte",
        "Motivo do Encerramento" : "frmMotivoEncerramento",
        "Motivo do Processo" : "frmMotivoProcesso",
        "Motivo Inativo" : "frmMotivoInativo",
        "Movimento" : "frmMovimento",
        "Origem da Ligação do HD": "frmOriLigacao",
        "Padrão do Imóvel": "frmPadraoImovel",
        "Pesquisa de Campo": "frmPesquisaCampo",
        "Prorrogação de Ordem de Serviço": "frmProrrogOs",
        "Responsabilidade Pública": "frmRespPublica",
        "Resultado de Fiscalização": "frmResultFiscaliz",
        "Revestimento": "frmRevestimento",
        "Setor de Abastecimento": "frmSetorAbastec",
        "Sistemas Interagentes" : "frmSistemaInteragem",
        "Situação do Imóvel" : "frmSitImovel",
        "Tamanho do HD": "frmTamanho",
        "Testemunha": "frmTestemunha",
        "Tipo de Consumidor": "frmConsumidor",
        "Tipo de Consumidor Especial" : "frmTipoConsEsp",
        "Tipo de Cotação": "frmTipoCotacao",
        "Tipo de Despejo": "frmTipoDespejo",
        "Tipo de Esgotamento": "frmTipoEsgotamento",
        "Tipo de Família do Material": "frmMaterialFamilia",
        "Tipo de Fila" : "frmTipoFila",
        "Tipo de Grande Consumidor" : "frmTipoGrandeCons",
        "Tipo de Ligação": "frmTipoLigacao",
        "Tipo de Logradouro": "frmLogradouro",
        "Tipo de Pavimento" : "frmTipoPavimento",
        "Tipo de Pavimento da Calçada" : "frmTipoPavimentoCalcada",
        "Tipo do Pavimento da Rua" : "frmTipoPavimentoRUA",
        "Tipo de Reservatório" : "frmTipoRreservatorio",
        "Tipo Unidade Material" : "frmTipoUnidMaterial",
        "Transmissão do HD": "frmTransmissao",
        "UF": "frmUF",
        "Unidade de Serviços": "frmDistrito",
        "Unidade Orçamentária": "frmUnidOrcam",
        "Veículo": "frmVeiculo",
        "Zona de Atendimento" : "frmZonaAtendimento",
        
        "Categoria de Pagamento": "frmCatPgto",
        "Entrega de Conta": "frmEntrega",
        "Estado de Aferição": "frmEstadoAfericao",
        "Finalidade da Unidade de Serviço": "frmFinalidade",
        "Forma de Faturamento": "frmFormaFaturamento",
        "Forma de Pagamento": "frmFormaPagamento",
        "Grupo de Ocorrências": "frmGrpAnorm",
        "Grupo de Serviço": "frmGrupoServico",
        "Histórico de Tabelas": "frmHistoricoTab",
        "Indicativo de Consumo": "frmIndConsumo",
        "Indicativo de Grupo de Leitura": "frmIndicativoGrupoLeitura",
        "Indicativo de Leitura": "frmIndLeitura",
        "Indicativo Retificada": "frmIndicativoRetificada",
        "Indicativos de Tabelas": "frmSisIndicativo",
        "Indicativos de Parâmetros" : "frmSisParametro",
        "Legenda SNIS": "frmLegendaSNIS",
        "Local do Hd": "frmLocalHidrometro",
        "Local Lacre": "frmLocalLacre",
        "Material de Rede" :"frmMaterialRede",
        "Motivo de Exclusão do SPC": "frmMotivoSPCExclusao",
        "Motivo de Faturamento Especial": "frmMotivoFaturamentoEspecial",
        "Motivo de Não Faturamento": "frmMotivoNaoFat",
        "Motivo de Retirada do HD": "frmRetirada",
        "Nível de Contaminação": "frmRiles",
        "Passagem": "frmPassagem",
        "Resultado de Aferição HD": "frmResultadoAfericao",
        "Retorno do Débito": "frmRetornoDebito",
        "Retorno de Débito CEF": "frmRetornoDebitoCef",
        "Serviço de Atendimento": "frmServAtendimento",
        "Situação da Fatura": "frmPagamento",
        "Situação da Ligação": "frmSitLigacao",
        "Situação da Negociação": "frmSitNegociacao",
        "Situação da OS": "frmSituacaoOS",
        "Situação do Consumo": "frmConsumo",
        "Situação do Orçamento": "frmSituacaoOrcamento",
        "Tipo de Atendimento": "frmTipoAtendimento",
        "Tipo de Aferição de HD": "frmTipoAferHD",
        "Tipo de Autorização": "frmTipoAutorizacao",
        "Tipo de Atualização": "frmTipoAtualiza",
        "Tipo de Cálculo" : "frmTipoCalculo",
        "Tipo de Cobrança": "frmTipoCobranca",
        "Tipo de Cobrança Mínima": "frmTipoCobrancaMinima",
        "Tipo de Controle": "frmTipoControle",
        "Tipo de Data de Grupo de Leiutra": "frmTipoDataGrupoLeitura",
        "Tipo de Documento": "frmTipoDocumento",
        "Tipo de Documento Pessoal": "frmTipoDocPessoa",
        "Tipo de Entrega de Conta": "frmTipoEntrega",
        "Tipo de Evento" : "frmTipoEvento",
        "Tipo de Fatura": "frmFatura",
        "Tipo de Faturamento": "frmTipoFaturamento",
        "Tipo de Faturamento Especial" : "frmFatEspecial",
        "Tipo de Histórico de Processamento" : "frmTipoHistoricoProcesso",
        "Tipo Ind Pagamento": "frmTipoIndPagamento",
        "Tipo Isento" : "frmTipoIsento",
        "Tipo de Lançamento": "frmTipoLancamento",
        "Tipo de Moeda": "frmTipoMoeda",
        "Tipo de Negociação": "frmTipoNegociacao",
        "Tipo de Ocorrência": "frmTipoOcorrencia",
        "Tipo de Ocorrência de Pagamento": "frmTipoPgtoOcorrencia",
        "Tipo de Pagamento": "frmTipoPgto",
        "Tipo de Parcela": "frmTipoParcela",
        "Tipo de Parcelamento": "frmTipoParcelamento",
        "Tipo de Problema HD": "frmTipoProblemaHD",
        "Tipo de Processamento" : "frmTipoProcessamento",
        "Tipo de Rateio de Consumo" : "frmTipoRateioConsumo",
        "Tipo de Relação dos Serviços de Garantia": "frmTipoRelacaoGarantia",
        "Tipo de Retorno dos Correios": "frmTipoRetCorreios",
        "Tipo de Unidade Estimada": "frmTipoUnidadeEst",
        "Tipo de Vazamento": "frmTipoVazamento",
        "Tipo de Vias": "frmTipoVias",

        "Manutenção do Banco de Dados": "DataBaseMaintenanceTable",
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
