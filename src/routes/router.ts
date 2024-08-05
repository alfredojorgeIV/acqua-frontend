import { createRouter, createWebHistory } from "vue-router";
import { authGuard } from '../authGuard';
import LoginApp from "../pages/LoginApp.vue";
import HomeApp from "../pages/HomeApp.vue";
import CustumerServiceOptions from "../pages/CustumerServiceOptions.vue";
import TablesOptions from "../pages/TablesOptions.vue";
import frmAbrevLograd from "../pages/Tables/SimpleTables/frmAbrevLograd.vue";
import frmMotivo_Falta from "../pages/Tables/SimpleTables/frmMotivo_Falta.vue";
import frmContabil from "../pages/Tables/SimpleTables/frmContabil.vue";
import frmFonte from "../pages/Tables/SimpleTables/frmFonte.vue";
import frmClienteInt from "../pages/Tables/SimpleTables/frmClienteInt.vue";
import frmDistrito from "../pages/Tables/SimpleTables/frmDistrito.vue";
import frmCancelamento from "../pages/Tables/SimpleTables/frmCancelamento.vue";
import frmCategoria from "../pages/Tables/SimpleTables/frmCategoria.vue";
import frmRevestimento from "../pages/Tables/SimpleTables/frmRevestimento.vue";
import frmFormaArrecadacao from "../pages/Tables/SimpleTables/frmFormaArrecadacao.vue";
import frmTipoLigacao from "../pages/Tables/SimpleTables/frmTipoLigacao.vue";
import frmConsumidor from "../pages/Tables/SimpleTables/frmConsumidor.vue";
import frmEmpreiteira from "../pages/Tables/SimpleTables/frmEmpreiteira.vue";
import frmCorte from "../pages/Tables/SimpleTables/frmCorte.vue";
import frmTipoDespejo from "../pages/Tables/SimpleTables/frmTipoDespejo.vue";
import frmCavalete from "../pages/Tables/SimpleTables/frmCavalete.vue";
import frmETA from "../pages/Tables/SimpleTables/frmETA.vue";
import frmPesquisaCampo from "../pages/Tables/SimpleTables/frmPesquisaCampo.vue";
import frmMarca from "../pages/Tables/SimpleTables/frmMarca.vue";
import frmCapacidade from "../pages/Tables/SimpleTables/frmCapacidade.vue";
import frmCaracteristicasHD from "../pages/Tables/SimpleTables/frmCaracteristicasHD.vue"
import frmOriLigacao from "../pages/Tables/SimpleTables/frmOriLigacao.vue";
// import frmEmailParametros from "../pages/Tables/SimpleTables/frmEmailParametros.vue"
import frmDiametro from "../pages/Tables/SimpleTables/frmDiametro.vue";
import frmLocalHD from "../pages/Tables/SimpleTables/frmLocalHD.vue";
import frmMarcacao from "../pages/Tables/SimpleTables/frmMarcacao.vue";
import frmTamanho from "../pages/Tables/SimpleTables/frmTamanho.vue";
import frmEstHD from "../pages/Tables/SimpleTables/frmEstHD.vue";
import frmTransmissao from "../pages/Tables/SimpleTables/frmTransmissao.vue";
import frmResultFiscaliz from "../pages/Tables/SimpleTables/frmResultFiscaliz.vue";
import frmLocal from "../pages/Tables/SimpleTables/frmLocal.vue";
import frmLocaliz from "../pages/Tables/SimpleTables/frmLocaliz.vue";
import frmEstadoCivil from "../pages/Tables/SimpleTables/frmEstadoCivil.vue";
import frmMaterial from "../pages/Tables/SimpleTables/frmMaterial.vue";
import frmSitImovel from "../pages/Tables/SimpleTables/frmSitImovel.vue";
import frmPadraoImovel from "../pages/Tables/SimpleTables/frmPadraoImovel.vue";
import frmTipoAtividPub from "../pages/Tables/SimpleTables/frmTipoAtividPub.vue";
import frmRespPublica from "../pages/Tables/SimpleTables/frmRespPublica.vue";
import frmTipoCotacao from "../pages/Tables/SimpleTables/frmTipoCotacao.vue";
import frmLeiturista from "../pages/Tables/SimpleTables/frmLeiturista.vue";
import frmCancOs from "../pages/Tables/SimpleTables/frmCancOs.vue";
import frmProrrogOs from "../pages/Tables/SimpleTables/frmProrrogOs.vue";
import frmTipoEsgotamento from "../pages/Tables/SimpleTables/frmTipoEsgotamento.vue";
import frmUF from "../pages/Tables/SimpleTables/frmUF.vue";
import frmLogradouro from "../pages/Tables/SimpleTables/frmLogradouro.vue";
import frmSetorAbastec from "../pages/Tables/SimpleTables/frmSetorAbastec.vue";
import frmCatTarifa from "../pages/Tables/SimpleTables/frmCatTarifa.vue";
import frmTestemunhas from "../pages/Tables/SimpleTables/frmTestemunha.vue";
import frmFuncionarioCampo from "../pages/Tables/SimpleTables/frmFuncionarioCampo.vue";
import frmGuiche from '../pages/Tables/SimpleTables/frmGuiche.vue';
import frmImobiliaria from '../pages/Tables/SimpleTables/frmImobiliaria.vue';
import frmFornecedor from '../pages/Tables/SimpleTables/frmFornecedor.vue';
import frmLacre from '../pages/Tables/SimpleTables/frmLacre.vue';
import frmUnidOrcam from '../pages/Tables/SimpleTables/frmUnidOrcam.vue';
import frmVeiculo from '../pages/Tables/SimpleTables/frmVeiculo.vue';
import frmCatPgto from '../pages/Tables/FixedTables/frmCatPgto.vue';
import frmEntrega from '../pages/Tables/FixedTables/frmEntrega.vue';
import frmFinalidade from '../pages/Tables/FixedTables/frmFinalidade.vue';
import frmFormaFaturamento from '../pages/Tables/FixedTables/frmFormaFaturamento.vue';
import frmFormaPagamento from '../pages/Tables/FixedTables/frmFormaPagamento.vue';
import frmTipoAutorizacao from '../pages/Tables/FixedTables/frmTipoAutorizacao.vue';
import frmFatura from '../pages/Tables/FixedTables/frmFatura.vue';
import frmTipoIndPagamento from '../pages/Tables/FixedTables/frmTipoIndPagamento.vue';
import frmTipoCobranca from "../pages/Tables/FixedTables/frmTipoCobranca.vue";
import frmPagamento from "../pages/Tables/FixedTables/frmPagamento.vue";
import frmSitLigacao from "../pages/Tables/FixedTables/frmSitLigacao.vue";
import frmIndConsumo from "../pages/Tables/FixedTables/frmIndConsumo.vue";
import frmTipoVias from "../pages/Tables/FixedTables/frmTipoVias.vue";
import frmServAtendimento from "../pages/Tables/FixedTables/frmServAtendimento.vue";
import frmRetornoDebito from "../pages/Tables/FixedTables/frmRetornoDebito.vue";
import frmTipoDocumento from "../pages/Tables/FixedTables/frmTipoDocumento.vue";
import frmRetirada from "../pages/Tables/FixedTables/frmRetirada.vue";
import frmTipoFaturamento from "../pages/Tables/FixedTables/frmTipoFaturamento.vue";
import frmTipoRetCorreios from "../pages/Tables/FixedTables/frmTipoRetCorreios.vue";
import frmTipoNegociacao from "../pages/Tables/FixedTables/frmTipoNegociacao.vue";
import frmMotivoNaoFat from "../pages/Tables/FixedTables/frmMotivoNaoFat.vue";
import frmGrpAnorm from "../pages/Tables/FixedTables/frmGrpAnorm.vue";
import frmTipoParcela from "../pages/Tables/FixedTables/frmTipoParcela.vue";
import frmTipoPgto from "../pages/Tables/FixedTables/frmTipoPgto.vue";
import frmGrupoServico from "../pages/Tables/FixedTables/frmGrupoServico.vue";
import frmHistoricoTab from "../pages/Tables/FixedTables/frmHistoricoTab.vue";
import frmBairro from "../pages/Tables/SpecialTables/frmBairro.vue";
import BankTable from "../pages/Tables/SpecialTables/BankTable.vue";
import frmIndLeitura from "../pages/Tables/FixedTables/frmIndLeitura.vue";
import frmConsumo from "../pages/Tables/FixedTables/frmConsumo.vue";
import frmSitNegociacao from "../pages/Tables/FixedTables/frmSitNegociacao.vue";
import frmTipoAtendimento from "../pages/Tables/FixedTables/frmTipoAtendimento.vue";
import frmTipoControle from "../pages/Tables/FixedTables/frmTipoControle.vue";
import frmTipoAtualiza from "../pages/Tables/FixedTables/frmTipoAtualiza.vue";
import frmTipoMoeda from "../pages/Tables/FixedTables/frmTipoMoeda.vue";
import frmFatEspecial from "../pages/Tables/FixedTables/frmFatEspecial.vue";
import frmVazamento from "../pages/Tables/FixedTables/frmVazamento.vue";
import frmTipoRateioConsumo from "../pages/Tables/FixedTables/frmTipoRateioConsumo.vue";
import frmEstadoAfericao from "../pages/Tables/FixedTables/frmEstadoAfericao.vue";
import frmIndicativoGrupoLeitura from "../pages/Tables/FixedTables/frmIndicativoGrupoLeitura.vue";
import frmIndicativoRetificada from "../pages/Tables/FixedTables/frmIndicativoRetificada.vue";
import frmLocalHidrometro from "../pages/Tables/FixedTables/frmLocalHidrometro.vue";
import frmLocalLacre from "../pages/Tables/FixedTables/frmLocalLacre.vue";
import frmMotivoFaturamentoEspecial from "../pages/Tables/FixedTables/frmMotivoFaturamentoEspecial.vue";
import frmMotivoSPCExclusao from "../pages/Tables/FixedTables/frmMotivoSPCExclusao.vue";
import frmRiles from "../pages/Tables/FixedTables/frmRiles.vue";
import frmPassagem from "../pages/Tables/FixedTables/frmPassagem.vue";
import frmResultadoAfericao from "../pages/Tables/FixedTables/frmResultadoAfericao.vue";
import frmSituacaoOrcamento from "../pages/Tables/FixedTables/frmSituacaoOrcamento.vue";
import frmSituacaoOS from "../pages/Tables/FixedTables/frmSituacaoOS.vue";
import frmTipoAferHD from "../pages/Tables/FixedTables/frmTipoAferHD.vue";
import frmTipoCobrancaMinima from "../pages/Tables/FixedTables/frmTipoCobrancaMinima.vue";
import frmTipoDataGrupoLeitura from "../pages/Tables/FixedTables/frmTipoDataGrupoLeitura.vue";
import frmTipoDocPessoa from "../pages/Tables/FixedTables/frmTipoDocPessoa.vue";
import frmTipoLancamento from "../pages/Tables/FixedTables/frmTipoLancamento.vue";
import frmTipoOcorrencia from "../pages/Tables/FixedTables/frmTipoOcorrencia.vue";
import frmTipoParcelamento from "../pages/Tables/FixedTables/frmTipoParcelamento.vue";
import frmTipoPgtoOcorrencia from "../pages/Tables/FixedTables/frmTipoPgtoOcorrencia.vue";
import frmTipoProblemaHD from "../pages/Tables/FixedTables/frmTipoProblemaHD.vue";
import frmTipoRelacaoGarantia from "../pages/Tables/FixedTables/frmTipoRelacaoGarantia.vue";
import frmTipoVazamento from "../pages/Tables/FixedTables/frmTipoVazamento.vue";
import frmLegendaSNIS from "../pages/Tables/FixedTables/frmLegendaSNIS.vue";
import frmMaterialRede from "../pages/Tables/FixedTables/frmMaterialRede.vue";
import frmRetornoDebitoCef from "../pages/Tables/FixedTables/frmRetornoDebitoCef.vue";
import frmTipoEntrega from "../pages/Tables/FixedTables/frmTipoEntrega.vue";
import frmTipoEvento from "../pages/Tables/FixedTables/frmTipoEvento.vue";
import frmTipoIsento from "../pages/Tables/FixedTables/frmTipoIsento.vue";
import frmTipoProcessamento from "../pages/Tables/FixedTables/frmTipoProcessamento.vue";
import frmTipoHistoricoProcesso from "../pages/Tables/FixedTables/frmTipoHistoricoProcesso.vue";
import frmTipoUnidadeEst from "../pages/Tables/FixedTables/frmTipoUnidadeEst.vue";
import frmSisIndicativo from "../pages/Tables/FixedTables/frmSisIndicativo.vue";
import frmSisParametro from "../pages/Tables/FixedTables/frmSisParametro.vue";
import frmTipoCalculo from "../pages/Tables/FixedTables/frmTipoCalculo.vue";
import frmIndiceJudiciario from "../pages/Tables/SimpleTables/frmIndiceJudiciario.vue";
import frmMaterialFamilia from "../pages/Tables/SimpleTables/frmMaterialFamilia.vue";
import frmMotivoEncerramento from "../pages/Tables/SimpleTables/frmMotivoEncerramento.vue";
import frmMotivoInativo from "../pages/Tables/SimpleTables/frmMotivoInativo.vue";
import frmMotivoProcesso from "../pages/Tables/SimpleTables/frmMotivoProcesso.vue";
import frmMovimento from "../pages/Tables/SimpleTables/frmMovimento.vue";
import frmTipoConsEsp from "../pages/Tables/SimpleTables/frmTipoConsEsp.vue";
import frmTipoGrandeCons from "../pages/Tables/SimpleTables/frmTipoGrandeCons.vue";
import frmTipoPavimento from "../pages/Tables/SimpleTables/frmTipoPavimento.vue";
import frmTipoPavimentoCalcada from "../pages/Tables/SimpleTables/frmTipoPavimentoCalcada.vue";
import frmTipoPavimentoRUA from "../pages/Tables/SimpleTables/frmTipoPavimentoRUA.vue";
import frmTipoRreservatorio from "../pages/Tables/SimpleTables/frmTipoRreservatorio.vue";
import frmZonaAtendimento from "../pages/Tables/SimpleTables/frmZonaAtendimento.vue";
import frmMensagemAPP from "../pages/Tables/SimpleTables/frmMensagemAPP.vue";
import frmAPPMenu from "../pages/Tables/SimpleTables/frmAPPMenu.vue";
import frmFuncCampoEmp from "../pages/Tables/SimpleTables/frmFuncCampoEmp.vue";
import frmSistema from "../pages/Tables/SimpleTables/frmSistema.vue";
import frmSistemaInteragem from "../pages/Tables/SimpleTables/frmSistemaInteragem.vue";
import frmTipoFila from "../pages/Tables/SimpleTables/frmTipoFila.vue";
import frmTipoUnidMaterial from "../pages/Tables/SimpleTables/frmTipoUnidMaterial.vue";
import frmBasesDados from "../pages/Tables/SimpleTables/frmBasesDados.vue";
const routes = [
  {
    path: "/",
    name: "LoginApp",
    component: LoginApp,
  },
  {
    path: "/home",
    name: "HomeApp",
    component: HomeApp,
    beforeEnter: authGuard,
  },
  {
    path: "/atendimento-ao-cliente",
    name: "CustumerServiceOptions",
    component: CustumerServiceOptions,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas",
    name: "TablesOptions",
    component: TablesOptions,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-simples/abreviacao-codigo-logradouro",
    name: "frmAbrevLograd",
    component: frmAbrevLograd,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-simples/motivo-da-falta",
    name: "frmMotivo_Falta",
    component: frmMotivo_Falta,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-simples/codigo-contabil",
    name: "frmContabil",
    component: frmContabil,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-simples/fonte-alternativa",
    name: "frmFonte",
    component: frmFonte,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-simples/diretoria",
    name: "frmClienteInt",
    component: frmClienteInt,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-simples/unidade-orcamentaria",
    name: "frmDistrito",
    component: frmDistrito,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-simples/motivo-de-cancelamento",
    name: "frmCancelamento",
    component: frmCancelamento,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-simples/categoria",
    name: "frmCategoria",
    component: frmCategoria,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-simples/revestimento",
    name: "frmRevestimento",
    component: frmRevestimento,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-simples/forma-de-arrecadacao",
    name: "frmFormaArrecadacao",
    component: frmFormaArrecadacao,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-simples/tipo-de-ligacao",
    name: "frmTipoLigacao",
    component: frmTipoLigacao,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-simples/tipo-de-consumidor",
    name: "frmConsumidor",
    component: frmConsumidor,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-simples/empreiteira",
    name: "frmEmpreiteira",
    component: frmEmpreiteira,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-simples/motivo-de-corte",
    name: "frmCorte",
    component: frmCorte,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-simples/tipo-de-despejo",
    name: "frmTipoDespejo",
    component: frmTipoDespejo,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-simples/material-do-cavalete",
    name: "frmCavalete",
    component: frmCavalete,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-simples/eta",
    name: "frmETA",
    component: frmETA,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-simples/pesquisa-de-campo",
    name: "frmPesquisaCampo",
    component: frmPesquisaCampo,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-simples/marca-hd",
    name: "frmMarca",
    component: frmMarca,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-simples/capacidade-hd",
    name: "frmCapacidade",
    component: frmCapacidade,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-simples/origem-de-ligacao-hd",
    name: "frmOriLigacao",
    component: frmOriLigacao,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-simples/diametro-hd",
    name: "frmDiametro",
    component: frmDiametro,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-simples/localizacao-hd",
    name: "frmLocalHD",
    component: frmLocalHD,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-simples/marcacao-hd",
    name: "frmMarcacao",
    component: frmMarcacao,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-simples/tamanho-hd",
    name: "frmTamanho",
    component: frmTamanho,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-simples/estado-hd",
    name: "frmEstHD",
    component: frmEstHD,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-simples/transmissao-hd",
    name: "frmTransmissao",
    component: frmTransmissao,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-simples/resultado-de-fiscalizacao",
    name: "frmResultFiscaliz",
    component: frmResultFiscaliz,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-simples/local",
    name: "frmLocal",
    component: frmLocal,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-simples/quadra-lote",
    name: "frmLocaliz",
    component: frmLocaliz,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-simples/estado-civil",
    name: "frmEstadoCivil",
    component: frmEstadoCivil,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-simples/material",
    name: "frmMaterial",
    component: frmMaterial,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-simples/situacao-imovel",
    name: "frmSitImovel",
    component: frmSitImovel,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-simples/padrao-imovel",
    name: "frmPadraoImovel",
    component: frmPadraoImovel,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-simples/atividade-publica",
    name: "frmTipoAtividPub",
    component: frmTipoAtividPub,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-simples/responsabilidade-publica",
    name: "frmRespPublica",
    component: frmRespPublica,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-simples/tipo-de-cotacao",
    name: "frmTipoCotacao",
    component: frmTipoCotacao,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-simples/leiturista",
    name: "frmLeiturista",
    component: frmLeiturista,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-simples/cancelamento-de-ordem-de-servico",
    name: "frmCancOs",
    component: frmCancOs,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-simples/prorrogacao-de-ordem-de-servico",
    name: "frmProrrogOs",
    component: frmProrrogOs,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-simples/tipo-de-esgotamento",
    name: "frmTipoEsgotamento",
    component: frmTipoEsgotamento,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-simples/estado",
    name: "frmUF",
    component: frmUF,
    beforeEnter: authGuard,
  },
  
  {
    path: "/tabelas/tabelas-simples/tipo-de-logradouro",
    name: "frmLogradouro",
    component: frmLogradouro,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-simples/setor-de-abastecimento",
    name: "frmSetorAbastec",
    component: frmSetorAbastec,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-simples/categoria-de-tarifa",
    name: "frmCatTarifa",
    component: frmCatTarifa,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-simples/caracteristicas-do-hd",
    name: "frmCaracteristicasHD",
    component: frmCaracteristicasHD,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-simples/testemunha",
    name: "frmTestemunhas",
    component: frmTestemunhas,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-simples/funcionario-de-campo",
    name: "frmFuncionarioCampo",
    component: frmFuncionarioCampo,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-simples/guiche-de-atendimento",
    name: "frmGuiche",
    component: frmGuiche,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-simples/imobiliaria",
    name: "frmImobiliaria",
    component: frmImobiliaria,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-simples/fornecedores",
    name: "frmFornecedor",
    component: frmFornecedor,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-simples/lacre-do-hd",
    name: "frmLacre",
    component: frmLacre,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-simples/unidade-de-servico",
    name: "frmUnidOrcam",
    component: frmUnidOrcam,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-simples/veiculo",
    name: "frmVeiculo",
    component: frmVeiculo,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-fixas/grupo-de-ocorrencia",
    name: "frmGrpAnorm",
    component: frmGrpAnorm,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-fixas/forma-de-faturamento",
    name: "frmFormaFaturamento",
    component: frmFormaFaturamento,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-fixas/tipo-de-rateio-de-consumo",
    name: "frmTipoRateioConsumo",
    component: frmTipoRateioConsumo,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-fixas/finalidade-unidade-de-servico",
    name: "frmFinalidade",
    component: frmFinalidade,
    beforeEnter: authGuard,
  },

  {
    path: "/tabelas/tabelas-fixas/tipo-de-vazamento",
    name: "frmVazamento",
    component: frmVazamento,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-fixas/situacao-de-fatura",
    name: "frmPagamento",
    component: frmPagamento,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-fixas/tipo-moeda",
    name: "frmTipoMoeda",
    component: frmTipoMoeda,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-fixas/tipo-de-cobranca",
    name: "frmTipoCobranca",
    component: frmTipoCobranca,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-fixas/tipo-de-entrega",
    name: "frmEntrega",
    component: frmEntrega,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-fixas/categoria-de-pagamento",
    name: "frmCatPgto",
    component: frmCatPgto,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-fixas/entrega-de-conta",
    name: "frmEntrega",
    component: frmEntrega,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-fixas/tipo-de-retorno-dos-correios",
    name: "frmTipoRetCorreios",
    component: frmTipoRetCorreios,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-fixas/tipo-de-vias",
    name: "frmTipoVias",
    component: frmTipoVias,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-fixas/tipo-de-parcela",
    name: "frmTipoParcela",
    component: frmTipoParcela,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-fixas/situacao-de-ligacao",
    name: "frmSitLigacao",
    component: frmSitLigacao,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-fixas/forma-de-pagamento",
    name: "frmFormaPagamento",
    component: frmFormaPagamento,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-fixas/grupo-de-servico",
    name: "frmGrupoServico",
    component: frmGrupoServico,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-fixas/historico-de-tabelas",
    name: "frmHistoricoTab",
    component: frmHistoricoTab,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-fixas/indicativo-de-consumo",
    name: "frmIndConsumo",
    component: frmIndConsumo,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-fixas/motivo-de-nao-faturamento",
    name: "frmMotivoNaoFat",
    component: frmMotivoNaoFat,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-fixas/motivo-de-retirada-hd",
    name: "frmRetirada",
    component: frmRetirada,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-fixas/retorno-de-debito",
    name: "frmRetornoDebito",
    component: frmRetornoDebito,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-fixas/servico-de-atendimento",
    name: "frmServAtendimento",
    component: frmServAtendimento,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-fixas/tipo-de-autorizacao",
    name: "frmTipoAutorizacao",
    component: frmTipoAutorizacao,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-fixas/tipo-de-fatura",
    name: "frmFatura",
    component: frmFatura,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-fixas/tipo-de-documento",
    name: "frmTipoDocumento",
    component: frmTipoDocumento,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-fixas/tipo-ind-de-pagamento",
    name: "frmTipoIndPagamento",
    component: frmTipoIndPagamento,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-fixas/tipo-de-faturamento",
    name: "frmTipoFaturamento",
    component: frmTipoFaturamento,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-fixas/tipo-de-negociacao",
    name: "frmTipoNegociacao",
    component: frmTipoNegociacao,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-fixas/tipo-de-pagamento",
    name: "frmTipoPgto",
    component: frmTipoPgto,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-especiais/bairro",
    name: "frmBairro",
    component: frmBairro,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-especiais/banco",
    name: "BankTable",
    component: BankTable,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-fixas/indicativo-de-leitura",
    name: "frmIndLeitura",
    component: frmIndLeitura,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-fixas/situacao-de-consumo",
    name: "frmConsumo",
    component: frmConsumo,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-fixas/situacao-de-negociacao",
    name: "frmSitNegociacao",
    component: frmSitNegociacao,
    beforeEnter: authGuard,
  },
  {
    path:"/tabelas/tabelas-fixas/tipo-de-atendimento",
    name:"frmTipoAtendimento",
    component: frmTipoAtendimento,
    beforeEnter: authGuard,
  },
  {
    path:"/tabelas/tabelas-fixas/tipo-de-controle",
    name:"frmTipoControle",
    component: frmTipoControle,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-fixas/tipo-de-atualizacao",
    name: "frmTipoAtualiza",
    component: frmTipoAtualiza,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-fixas/estado-de-afericao",
    name: "frmEstadoAfericao",
    component: frmEstadoAfericao,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-fixas/indicativo-de-grupo-de-leitura",
    name: "frmIndicativoGrupoLeitura",
    component: frmIndicativoGrupoLeitura,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-fixas/indicativo-de-retificada",
    name: "frmIndicativoRetificada",
    component: frmIndicativoRetificada,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-fixas/local-do-hidrometro",
    name: "frmLocalHidrometro",
    component: frmLocalHidrometro,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-fixas/local-do-lacre",
    name: "frmLocalLacre",
    component: frmLocalLacre,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-fixas/motivo-de-faturamento-especial",
    name: "frmMotivoFaturamentoEspecial",
    component: frmMotivoFaturamentoEspecial,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-fixas/motivo-de-exclusao-do-spc",
    name: "frmMotivoSPCExclusao",
    component: frmMotivoSPCExclusao,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-fixas/nivel-de-contaminacao",
    name: "frmRiles",
    component: frmRiles,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-fixas/passagem",
    name: "frmPassagem",
    component: frmPassagem,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-fixas/resultado-de-afericao",
    name: "frmResultadoAfericao",
    component: frmResultadoAfericao,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-fixas/situacao-de-orcamento",
    name: "frmSituacaoOrcamento",
    component: frmSituacaoOrcamento,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-fixas/situacao-de-ordem-de-servico",
    name: "frmSituacaoOS",
    component: frmSituacaoOS,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-fixas/tipo-de-afericao-hd",
    name: "frmTipoAferHD",
    component: frmTipoAferHD,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-fixas/tipo-de-cobranca-minima",
    name: "frmTipoCobrancaMinima",
    component: frmTipoCobrancaMinima,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-fixas/tipo-de-data-do-grupo-de-leitura",
    name: "frmTipoDataGrupoLeitura",
    component: frmTipoDataGrupoLeitura,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-fixas/tipo-de-documento-da-pessoal",
    name: "frmTipoDocPessoa",
    component: frmTipoDocPessoa,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-fixas/tipo-de-lancamento",
    name: "frmTipoLancamento",
    component: frmTipoLancamento,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-fixas/tipo-de-ocorrencia",
    name: "frmTipoOcorrencia",
    component: frmTipoOcorrencia,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas/fixas/tipo-de-parcelamento",
    name: "frmTipoParcelamento",
    component: frmTipoParcelamento,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-fixas/tipo-de-ocorrencia-de-pagamento",
    name: "frmTipoPgtoOcorrencia",
    component: frmTipoPgtoOcorrencia,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-fixas/tipo-de-problema-do-hd",
    name: "frmTipoProblemaHD",
    component: frmTipoProblemaHD,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-fixas/tipo-de-relacao-dos-servicos-de-garantia",
    name: "frmTipoRelacaoGarantia",
    component: frmTipoRelacaoGarantia,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-fixas/tipo-de-vazamento",
    name: "frmTipoVazamento",
    component: frmTipoVazamento,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-fixas/legenda-snis",
    name: "frmLegendaSNIS",
    component: frmLegendaSNIS,
    beforeEnter: authGuard,
  },
  {
    path:"/tabelas/tabelas-fixas/materia-de-rede",
    name:"frmMaterialRede",
    component: frmMaterialRede,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-fixas/retorno-de-debito-cef",
    name: "frmRetornoDebitoCef",
    component: frmRetornoDebitoCef,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-fixas/tipo-de-entrega-de-conta",
    name: "frmTipoEntrega",
    component: frmTipoEntrega,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-fixas/tipo-de-evento",
    name: "frmTipoEvento",
    component: frmTipoEvento,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-fixas/tipo-de-isento",
    name: "frmTipoIsento",
    component: frmTipoIsento,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-fixas/tipo-de-processamento",
    name: "frmTipoProcessamento",
    component: frmTipoProcessamento,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-fixas/tipo-de-faturamento-especial",
    name: "frmFatEspecial",
    component: frmFatEspecial,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-fixas/tipo-de-historico-do-processo",
    name: "frmTipoHistoricoProcesso",
    component: frmTipoHistoricoProcesso,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-fixas/tipo-de-unidade-estimada",
    name: "frmTipoUnidadeEst",
    component: frmTipoUnidadeEst,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-fixas/indicativos-de-tabelas",
    name: "frmSisIndicativo",
    component: frmSisIndicativo,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-fixas/indicativos-de-parametros",
    name: "frmSisParametro",
    component: frmSisParametro,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-fixas/tipo-de-calculo",
    name: "frmTipoCalculo",
    component: frmTipoCalculo,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-simples/indice-do-judiciario",
    name: "frmIndiceJudiciario",
    component: frmIndiceJudiciario,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-simples/tipo-de-familia-do-material",
    name: "frmMaterialFamilia",
    component: frmMaterialFamilia,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-simples/motivo-do-encerramento",
    name: "frmMotivoEncerramento",
    component: frmMotivoEncerramento,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-simples/motivo-inativo",
    name: "frmMotivoInativo",
    component: frmMotivoInativo,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-simples/motivo-do-processo",
    name: "frmMotivoProcesso",
    component: frmMotivoProcesso,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-simples/movimento",
    name: "frmMovimento",
    component: frmMovimento,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-simples/tipo-de-consumidor-especial",
    name: "frmTipoConsEsp",
    component: frmTipoConsEsp,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-simples/tipo-de-grande-consumidor",
    name: "frmTipoGrandeCons",
    component: frmTipoGrandeCons,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-simples/tipo-de-pavimento",
    name: "frmTipoPavimento",
    component: frmTipoPavimento,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-simples/tipo-de-pavimento-da-calcada",
    name: "frmTipoPavimentoCalcada",
    component: frmTipoPavimentoCalcada,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-simples/tipo-do-pavimento-da-rua",
    name: "frmTipoPavimentoRUA",
    component: frmTipoPavimentoRUA,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-simples/tipo-de-reservatorio",
    name: "frmTipoRreservatorio",
    component: frmTipoRreservatorio,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-simples/zona-de-atendimento",
    name: "frmZonaAtendimento",
    component: frmZonaAtendimento,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-simples/mensagem-do-app",
    name: "frmMensagemAPP",
    component: frmMensagemAPP,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-simples/app-menu",
    name: "frmAPPMenu",
    component: frmAPPMenu,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-simples/funcionario-de-campo-da-empreiteira",
    name: "frmFuncCampoEmp",
    component: frmFuncCampoEmp,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-simples/modulos",
    name: "frmSistema",
    component: frmSistema,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-simples/sistemas-interagentes",
    name: "frmSistemaInteragem",
    component: frmSistemaInteragem,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-simples/tipo-de-fila",
    name: "frmTipoFila",
    component: frmTipoFila,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-simples/tipo-unidade-material",
    name: "frmTipoUnidMaterial",
    component: frmTipoUnidMaterial,
    beforeEnter: authGuard,
  },
  {
    path: "/tabelas/tabelas-simples/bases-de-dados",
    name: "frmBasesDados",
    component: frmBasesDados,
    beforeEnter: authGuard,
  }

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
