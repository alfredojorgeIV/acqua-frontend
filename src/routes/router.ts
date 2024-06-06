import { createRouter, createWebHistory } from "vue-router";
import LoginApp from "../pages/LoginApp.vue";
import HomeApp from "../pages/HomeApp.vue";
import CustumerServiceOptions from "../pages/CustumerServiceOptions.vue";
import TablesOptions from "../pages/TablesOptions.vue";
import StreetAbbreviation from "../pages/Tables/SimpleTables/StreetAbbreviation.vue";
import AbsenceReason from "../pages/Tables/SimpleTables/AbsenceReason.vue";
import AccountingCode from "../pages/Tables/SimpleTables/AccountingCode.vue";
import AlternativeSource from "../pages/Tables/SimpleTables/AlternativeSource.vue";
import BoardTable from "../pages/Tables/SimpleTables/BoardTable.vue";
import BudgetUnit from "../pages/Tables/SimpleTables/BudgetUnit.vue";
import CancellationReason from "../pages/Tables/SimpleTables/CancellationReason.vue";
import CategoryTable from "../pages/Tables/SimpleTables/CategoryTable.vue";
import CoatingTable from "../pages/Tables/SimpleTables/CoatingTable.vue";
import CollectionMethod from "../pages/Tables/SimpleTables/CollectionMethod.vue";
import ConnectionType from "../pages/Tables/SimpleTables/ConnectionType.vue";
import ConsumerType from "../pages/Tables/SimpleTables/ConsumerType.vue";
import ContractorTable from "../pages/Tables/SimpleTables/ContractorTable.vue";
import CutReason from "../pages/Tables/SimpleTables/CutReason.vue";
import DumpType from "../pages/Tables/SimpleTables/DumpType.vue";
import EselMaterial from "../pages/Tables/SimpleTables/EselMaterial.vue";
import EtaTable from "../pages/Tables/SimpleTables/EtaTable.vue";
import FieldResearch from "../pages/Tables/SimpleTables/FieldResearch.vue";
import HdBrand from "../pages/Tables/SimpleTables/HdBrand.vue";
import HdCapacity from "../pages/Tables/SimpleTables/HdCapacity.vue";
import HdConnectionOrigin from "../pages/Tables/SimpleTables/HdConnectionOrigin.vue";
import HdDiameter from "../pages/Tables/SimpleTables/HdDiameter.vue";
import HdLocation from "../pages/Tables/SimpleTables/HdLocation.vue";
import HdMarking from "../pages/Tables/SimpleTables/HdMarking.vue";
import HdSize from "../pages/Tables/SimpleTables/HdSize.vue";
import HdStatus from "../pages/Tables/SimpleTables/HdStatus.vue";
import HdTransmission from "../pages/Tables/SimpleTables/HdTransmission.vue";
import InspectionResult from "../pages/Tables/SimpleTables/InspectionResult.vue";
import LocalTable from "../pages/Tables/SimpleTables/LocalTable.vue";
import LocateBlockLot from "../pages/Tables/SimpleTables/LocateBlockLot.vue";
import MaritalStatus from "../pages/Tables/SimpleTables/MaritalStatus.vue";
import MaterialTable from "../pages/Tables/SimpleTables/MaterialTable.vue";
import PropertySituation from "../pages/Tables/SimpleTables/PropertySituation.vue";
import PropertyStandard from "../pages/Tables/SimpleTables/PropertyStandard.vue";
import PublicActivity from "../pages/Tables/SimpleTables/PublicActivity.vue";
import PublicResponsability from "../pages/Tables/SimpleTables/PublicResponsability.vue";
import QuotationType from "../pages/Tables/SimpleTables/QuotationType.vue";
import ReaderTable from "../pages/Tables/SimpleTables/ReaderTable.vue";
import ServiceOrderCancellation from "../pages/Tables/SimpleTables/ServiceOrderCancellation.vue";
import ServiceOrderExtention from "../pages/Tables/SimpleTables/ServiceOrderExtention.vue";
import SewageType from "../pages/Tables/SimpleTables/SewageType.vue";
import StateTable from "../pages/Tables/SimpleTables/StateTable.vue";
import StreetType from "../pages/Tables/SimpleTables/StreetType.vue";
import SupplySector from "../pages/Tables/SimpleTables/SupplySector.vue";
import TaxCategory from "../pages/Tables/SimpleTables/TaxCategory.vue";
import WitnessTable from "../pages/Tables/SimpleTables/WitnessTable.vue";
import FieldEmployee from "../pages/Tables/SimpleTables/FieldEmployee.vue";
import ServiceDesk from '../pages/Tables/SimpleTables/ServiceDesk.vue';
import RealEstate from '../pages/Tables/SimpleTables/RealEstate.vue';
import SuppliersTable from '../pages/Tables/SimpleTables/SuppliersTable.vue';
import HdSecuritySeal from '../pages/Tables/SimpleTables/HdSecuritySeal.vue';
import ServiceUnit from '../pages/Tables/SimpleTables/ServiceUnit.vue';
import VehicleTable from '../pages/Tables/SimpleTables/VehicleTable.vue';
import PaymentCategory from '../pages/Tables/FixedTables/PaymentCategory.vue';
import BillDeliveryType from '../pages/Tables/FixedTables/BillDeliveryType.vue';
import ServiceUnitPurpose from '../pages/Tables/FixedTables/ServiceUnitPurpose.vue';
import BillingForm from '../pages/Tables/FixedTables/BillingForm.vue';
import BillDelivery from '../pages/Tables/FixedTables/BillDelivery.vue';
import PaymentMethod from '../pages/Tables/FixedTables/PaymentMethod.vue';
import AuthorizationType from '../pages/Tables/FixedTables/AuthorizationType.vue';
import BillType from '../pages/Tables/FixedTables/BillType.vue';
import PaymentIndType from '../pages/Tables/FixedTables/PaymentIndType.vue';
import BillingType from "../pages/Tables/FixedTables/BillingType.vue";
import BillingSituation from "../pages/Tables/FixedTables/BillingSituation.vue";
import ConnectionSituation from "../pages/Tables/FixedTables/ConnectionSituation.vue";
import ConsumptionIndicator from "../pages/Tables/FixedTables/ConsumptionIndicator.vue";
import CopysType from "../pages/Tables/FixedTables/CopysType.vue";
import CustomerService from "../pages/Tables/FixedTables/CustomerService.vue";
import DebitReturn from "../pages/Tables/FixedTables/DebitReturn.vue";
import DocumentType from "../pages/Tables/FixedTables/DocumentType.vue";
import HdRemovalReason from "../pages/Tables/FixedTables/HdRemovalReason.vue";
import InvoiceType from "../pages/Tables/FixedTables/InvoiceType.vue";
import MailReturnType from "../pages/Tables/FixedTables/MailReturnType.vue";
import NegotiationType from "../pages/Tables/FixedTables/NegotiationType.vue";
import NonBillingReason from "../pages/Tables/FixedTables/NonBillingReason.vue";
import OccurrenceGroup from "../pages/Tables/FixedTables/OccurrenceGroup.vue";
import ParcelType from "../pages/Tables/FixedTables/ParcelType.vue";
import PaymentType from "../pages/Tables/FixedTables/PaymentType.vue";
import ServiceGroup from "../pages/Tables/FixedTables/ServiceGroup.vue";
import TableHistory from "../pages/Tables/FixedTables/TableHistory.vue";
import NeighborhoodTable from "../pages/Tables/SpecialTables/NeighborhoodTable.vue";
import BankTable from "../pages/Tables/SpecialTables/BankTable.vue";
import ReadingIndicator from "../pages/Tables/FixedTables/ReadingIndicator.vue";
import ConsumptionSituation from "../pages/Tables/FixedTables/ConsumptionSituation.vue";
import NegotiationSituation from "../pages/Tables/FixedTables/NegotiationSituation.vue";
import CustomerServiceType from "../pages/Tables/FixedTables/CustomerServiceType.vue";
import ControlType from "../pages/Tables/FixedTables/ControlType.vue";
import UpdateType from "../pages/Tables/FixedTables/UpdateType.vue";
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
  },
  {
    path: "/atendimento-ao-cliente",
    name: "CustumerServiceOptions",
    component: CustumerServiceOptions,
  },
  {
    path: "/tabelas",
    name: "TablesOptions",
    component: TablesOptions,
  },
  {
    path: "/tabelas/tabelas-simples/abreviacao-de-codigo-de-logradouro",
    name: "StreetAbbreviation",
    component: StreetAbbreviation,
  },
  {
    path: "/tabelas/tabelas-simples/motivo-da-falta",
    name: "AbsenceReason",
    component: AbsenceReason,
  },
  {
    path: "/tabelas/tabelas-simples/codigo-contabil",
    name: "AccountingCode",
    component: AccountingCode,
  },
  {
    path: "/tabelas/tabelas-simples/fonte-alternativa",
    name: "AlternativeSource",
    component: AlternativeSource,
  },
  {
    path: "/tabelas/tabelas-simples/diretoria",
    name: "BoardTable",
    component: BoardTable,
  },
  {
    path: "/tabelas/tabelas-simples/unidade-orcamentaria",
    name: "BudgetUnit",
    component: BudgetUnit,
  },
  {
    path: "/tabelas/tabelas-simples/motivo-de-cancelamento",
    name: "CancellationReason",
    component: CancellationReason,
  },
  {
    path: "/tabelas/tabelas-simples/categoria",
    name: "CategoryTable",
    component: CategoryTable,
  },
  {
    path: "/tabelas/tabelas-simples/revestimento",
    name: "CoatingTable",
    component: CoatingTable,
  },
  {
    path: "/tabelas/tabelas-simples/forma-de-arrecadacao",
    name: "CollectionMethod",
    component: CollectionMethod,
  },
  {
    path: "/tabelas/tabelas-simples/tipo-de-ligacao",
    name: "ConnectionType",
    component: ConnectionType,
  },
  {
    path: "/tabelas/tabelas-simples/tipo-de-consumidor",
    name: "ConsumerType",
    component: ConsumerType,
  },
  {
    path: "/tabelas/tabelas-simples/empreiteira",
    name: "ContractorTable",
    component: ContractorTable,
  },
  {
    path: "/tabelas/tabelas-simples/motivo-de-corte",
    name: "CutReason",
    component: CutReason,
  },
  {
    path: "/tabelas/tabelas-simples/tipo-de-despejo",
    name: "DumpType",
    component: DumpType,
  },
  {
    path: "/tabelas/tabelas-simples/material-do-cavalete",
    name: "EselMaterial",
    component: EselMaterial,
  },
  {
    path: "/tabelas/tabelas-simples/eta",
    name: "EtaTable",
    component: EtaTable,
  },
  {
    path: "/tabelas/tabelas-simples/pesquisa-de-campo",
    name: "FieldResearch",
    component: FieldResearch,
  },
  {
    path: "/tabelas/tabelas-simples/marca-hd",
    name: "HdBrand",
    component: HdBrand,
  },
  {
    path: "/tabelas/tabelas-simples/capacidade-hd",
    name: "HdCapacity",
    component: HdCapacity,
  },
  {
    path: "/tabelas/tabelas-simples/origem-de-ligacao-hd",
    name: "HdConnectionOrigin",
    component: HdConnectionOrigin,
  },
  {
    path: "/tabelas/tabelas-simples/diametro-hd",
    name: "HdDiameter",
    component: HdDiameter,
  },
  {
    path: "/tabelas/tabelas-simples/localizacao-hd",
    name: "HdLocation",
    component: HdLocation,
  },
  {
    path: "/tabelas/tabelas-simples/marcacao-hd",
    name: "HdMarking",
    component: HdMarking,
  },
  {
    path: "/tabelas/tabelas-simples/tamanho-hd",
    name: "HdSize",
    component: HdSize,
  },
  {
    path: "/tabelas/tabelas-simples/estado-hd",
    name: "HdStatus",
    component: HdStatus,
  },
  {
    path: "/tabelas/tabelas-simples/transmissao-hd",
    name: "HdTransmission",
    component: HdTransmission,
  },
  {
    path: "/tabelas/tabelas-simples/resultado-de-fiscalizacao",
    name: "InspectionResult",
    component: InspectionResult,
  },
  {
    path: "/tabelas/tabelas-simples/local",
    name: "LocalTable",
    component: LocalTable,
  },
  {
    path: "/tabelas/tabelas-simples/quadra-lote",
    name: "LocateBlockLot",
    component: LocateBlockLot,
  },
  {
    path: "/tabelas/tabelas-simples/estado-civil",
    name: "MaritalStatus",
    component: MaritalStatus,
  },
  {
    path: "/tabelas/tabelas-simples/material",
    name: "MaterialTable",
    component: MaterialTable,
  },
  {
    path: "/tabelas/tabelas-simples/situacao-imovel",
    name: "PropertySituation",
    component: PropertySituation,
  },
  {
    path: "/tabelas/tabelas-simples/padrao-imovel",
    name: "PropertyStandard",
    component: PropertyStandard,
  },
  {
    path: "/tabelas/tabelas-simples/atividade-publica",
    name: "PublicActivity",
    component: PublicActivity,
  },
  {
    path: "/tabelas/tabelas-simples/responsabilidade-publica",
    name: "PublicResponsability",
    component: PublicResponsability,
  },
  {
    path: "/tabelas/tabelas-simples/tipo-de-cotacao",
    name: "QuotationType",
    component: QuotationType,
  },
  {
    path: "/tabelas/tabelas-simples/leiturista",
    name: "ReaderTable",
    component: ReaderTable,
  },
  {
    path: "/tabelas/tabelas-simples/cancelamento-de-ordem-de-servico",
    name: "ServiceOrderCancellation",
    component: ServiceOrderCancellation,
  },
  {
    path: "/tabelas/tabelas-simples/prorrogacao-de-ordem-de-servico",
    name: "ServiceOrderExtention",
    component: ServiceOrderExtention,
  },
  {
    path: "/tabelas/tabelas-simples/tipo-de-esgotamento",
    name: "SewageType",
    component: SewageType,
  },
  {
    path: "/tabelas/tabelas-simples/estado",
    name: "StateTable",
    component: StateTable,
  },
  {
    path: "/tabelas/tabelas-simples/tipo-de-logradouro",
    name: "StreetType",
    component: StreetType,
  },
  {
    path: "/tabelas/tabelas-simples/setor-de-abastecimento",
    name: "SupplySector",
    component: SupplySector,
  },
  {
    path: "/tabelas/tabelas-simples/categoria-de-tarifa",
    name: "TaxCategory",
    component: TaxCategory,
  },
  {
    path: "/tabelas/tabelas-simples/testemunha",
    name: "WitnessTable",
    component: WitnessTable,
  },
  {
    path: "/tabelas/tabelas-simples/funcionario-de-campo",
    name: "FieldEmployee",
    component: FieldEmployee,
  },
  {
    path: "/tabelas/tabelas-simples/guiche-de-atendimento",
    name: "ServiceDesk",
    component: ServiceDesk,
  },
  {
    path: "/tabelas/tabelas-simples/imobiliaria",
    name: "RealEstate",
    component: RealEstate,
  },
  {
    path: "/tabelas/tabelas-simples/fornecedores",
    name: "SuppliersTable",
    component: SuppliersTable,
  },
  {
    path: "/tabelas/tabelas-simples/lacre-do-hd",
    name: "HdSecuritySeal",
    component: HdSecuritySeal,
  },
  {
    path: "/tabelas/tabelas-simples/unidade-de-servico",
    name: "ServiceUnit",
    component: ServiceUnit,
  },
  {
    path: "/tabelas/tabelas-simples/veiculo",
    name: "VehicleTable",
    component: VehicleTable,
  },
  {
    path: "/tabelas/tabelas-fixas/grupo-de-ocorrencia",
    name: "OccurrenceGroup",
    component: OccurrenceGroup,
  },
  {
    path: "/tabelas/tabelas-fixas/forma-de-faturamento",
    name: "BillingForm",
    component: BillingForm,
  },
  {
    path: "/tabelas/tabelas-fixas/finalidade-unidade-de-servico",
    name: "ServiceUnitPurpose",
    component: ServiceUnitPurpose,
  },
  {
    path: "/tabelas/tabelas-fixas/situacao-de-fatura",
    name: "BillingSituation",
    component: BillingSituation,
  },
  {
    path: "/tabelas/tabelas-fixas/tipo-de-cobrança",
    name: "BillingType",
    component: BillingType,
  },
  {
    path: "/tabelas/tabelas-fixas/tipo-de-entrega-de-conta",
    name: "BillDeliveryType",
    component: BillDeliveryType,
  },
  {
    path: "/tabelas/tabelas-fixas/categoria-de-pagamento",
    name: "PaymentCategory",
    component: PaymentCategory,
  },
  {
    path: "/tabelas/tabelas-fixas/tipo-de-entrega-de-conta",
    name: "BillDelivery",
    component: BillDelivery,
  },
  {
    path: "/tabelas/tabelas-fixas/tipo-de-retorno-dos-correios",
    name: "MailReturnType",
    component: MailReturnType,
  },
  {
    path: "/tabelas/tabelas-fixas/tipo-de-vias",
    name: "CopysType",
    component: CopysType,
  },
  {
    path: "/tabelas/tabelas-fixas/tipo-de-parcela",
    name: "ParcelType",
    component: ParcelType,
  },
  {
    path: "/tabelas/tabelas-fixas/situacao-de-ligacao",
    name: "ConnectionSituation",
    component: ConnectionSituation,
  },
  {
    path: "/tabelas/tabelas-fixas/forma-de-pagamento",
    name: "PaymentMethod",
    component: PaymentMethod,
  },
  {
    path: "/tabelas/tabelas-fixas/grupo-de-servico",
    name: "ServiceGroup",
    component: ServiceGroup,
  },
  {
    path: "/tabelas/tabelas-fixas/historico-de-tabelas",
    name: "TableHistory",
    component: TableHistory,
  },
  {
    path: "/tabelas/tabelas-fixas/indicativo-de-consumo",
    name: "ConsumptionIndicator",
    component: ConsumptionIndicator,
  },
  {
    path: "/tabelas/tabelas-fixas/motivo-de-nao-faturamento",
    name: "NonBillingReason",
    component: NonBillingReason,
  },
  {
    path: "/tabelas/tabelas-fixas/motivo-de-retirada-hd",
    name: "HdRemovalReason",
    component: HdRemovalReason,
  },
  {
    path: "/tabelas/tabelas-fixas/retorno-de-debito",
    name: "DebitReturn",
    component: DebitReturn,
  },
  {
    path: "/tabelas/tabelas-fixas/servico-de-atendimento",
    name: "CustomerService",
    component: CustomerService,
  },
  {
    path: "/tabelas/tabelas-fixas/tipo-de-autorizacao",
    name: "AuthorizationType",
    component: AuthorizationType,
  },
  {
    path: "/tabelas/tabelas-fixas/tipo-de-fatura",
    name: "BillType",
    component: BillType,
  },
  {
    path: "/tabelas/tabelas-fixas/tipo-de-documento",
    name: "DocumentType",
    component: DocumentType,
  },
  {
    path: "/tabelas/tabelas-fixas/tipo-de-cobranca",
    name: "BillingType",
    component: BillingType,
  },
  {
    path: "/tabelas/tabelas-fixas/tipo-ind-de-pagamento",
    name: "PaymentIndType",
    component: PaymentIndType,
  },
  {
    path: "/tabelas/tabelas-fixas/tipo-de-faturamento",
    name: "InvoiceType",
    component: InvoiceType,
  },
  {
    path: "/tabelas/tabelas-fixas/tipo-de-negociacao",
    name: "NegotiationType",
    component: NegotiationType,
  },
  {
    path: "/tabelas/tabelas-fixas/tipo-de-pagamento",
    name: "PaymentType",
    component: PaymentType,
  },
  {
    path: "/tabelas/tabelas-especiais/bairro",
    name: "NeighborhoodTable",
    component: NeighborhoodTable,
  },
  {
    path: "/tabelas/tabelas-especiais/banco",
    name: "BankTable",
    component: BankTable,
  },
  {
    path: "/tabelas/tabelas-fixas/indicativo-de-leitura",
    name: "ReadingIndicator",
    component: ReadingIndicator,
  },
  {
    path: "/tabelas/tabelas-fixas/situacao-de-consumo",
    name: "ConsumptionSituation",
    component: ConsumptionSituation,
  },
  {
    path: "/tabelas/tabelas-fixas/situacao-de-negociacao",
    name: "NegotiationSituation",
    component: NegotiationSituation,
  },
  {
    path:"/tabelas/tabelas-fixas/tipo-de-atendimento",
    name:"CustomerServiceType",
    component: CustomerServiceType,
  },
  {
    path:"/tabelas/tabelas-fixas/tipo-de-controle",
    name:"ControlType",
    component: ControlType,
  },
  {
    path: "/tabelas/tabelas-fixas/tipo-de-atualizacao",
    name: "UpdateType",
    component: UpdateType,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
