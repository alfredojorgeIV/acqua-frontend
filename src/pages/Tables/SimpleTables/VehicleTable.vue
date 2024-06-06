<template>
  <MenuApp />
  <CompanyTag />
  <div class="container">
    <div class="content">
      <section>
        <div>
          <h1>Veículo</h1>
        </div>

        <div class="margin-top-30">
          <DataTable
            style="
              border-bottom-left-radius: 10px;
              border-bottom-right-radius: 10px !important;
            "
            :value="vehicleTableTable"
            tableStyle="min-width: 50rem"
            :paginator="true"
            :rows="10"
            dataKey="id"
            @row-click="handleRowClick"
            :selectionMode="'single'"
            v-model:selection="selectedRow"
          >
            <Column
              v-for="col of columns"
              :key="col.field"
              :field="col.field"
              :header="col.label"
            ></Column>
          </DataTable>
          <div class="flex align-center justify-space-between w-61 mg-auto">
              <Button class="secondary-button flex align-center gap-10px">
                Imprimir <i class="pi pi-print"></i>
              </Button>
              <Button class="tertiary-button flex align-center gap-10px">
                Adicionar <i class="pi pi-plus-circle"></i>
              </Button>
            </div>
        </div>
        <div class="box-tables-info" v-if="selectedRow">
          <div class="flex gap-4">
            <div class="w-48">
              <p class="p-labels">Veículo</p>
              <input class="inputs margin-bottom-30" />
              <p class="p-labels">Placa</p>
              <input class="inputs margin-bottom-30" />
              <p class="p-labels">Ano</p>
              <input class="inputs margin-bottom-30" />
              <p class="p-labels">Marca</p>
              <input class="inputs margin-bottom-30" />
            </div>
            <div class="w-48">
              <p class="p-labels">Combustível</p>
              <select class="inputs margin-bottom-30" v-model="selectFuel">
                <option
                  v-for="option in selectFuel"
                  :key="option.value"
                  :value="option.value"
                >
                  {{ option.label }}
                </option>
              </select>
              <p class="p-labels">Distrito</p>
              <select class="inputs margin-bottom-30" v-model="selectFunction">
                <option
                  v-for="option in selectFunctionOptions"
                  :key="option.value"
                  :value="option.value"
                >
                  {{ option.label }}
                </option>
              </select>
              <p class="p-labels">Modelo</p>
              <input class="inputs margin-bottom-30" />
              <p class="p-labels">Tipo</p>
              <input class="inputs margin-bottom-30" />
            </div>
          </div>
          <div class="flex justify-center margin-bottom-30">
            <input type="checkbox" class="q-mr-sm" />Ativo
          </div>
          <div class="flex justify-center gap-4 mt-40">
            <Button class="primary-button flex align-center gap-10px">
              Alterar <i class="pi pi-pencil"></i>
            </Button>
            <Button class="danger-button flex align-center gap-10px">
              Excluir <i class="pi pi-trash"></i>
            </Button>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import MenuApp from "../../../components/AllPages/MenuApp.vue";
import CompanyTag from "../../../components/AllPages/CompanyTag.vue";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

export default {
  name: "VehicleTable",
  components: {
    MenuApp,
    CompanyTag,
    DataTable,
    Column,
  },
  data() {
    return {
      selectedRow: null,
      selected: [],
      contractor: null,
      selectLocal: null,
      selectFunction: null,
      selectFunctionOptions: [
        { label: "Assessoria de comunicação e ouvidoria", value: "182" },
        { label: "Assessoria de gestão da qualidade", value: "156" },
        { label: "Assessoria de tecnologia da informação", value: "145" },
        {
          label: "Assessoria planejamento estrat / controladoria",
          value: "117",
        },
        { label: "Assessoria prog. e controle de serviços", value: "116" },
        { label: "Auditoria interna", value: "201" },
        { label: "DECO - APOIO", value: "250" },
        { label: "DECO - RETORNO", value: "251" },
        {
          label: "Departamento de saúde e segurança do trabalho",
          value: "210",
        },
        {
          label: "Departamento de serviços gerais e documentação",
          value: "211",
        },
        { label: "Departamento comercial", value: "110" },
        { label: "Departamento de automação", value: "220" },
        { label: "Departamento de compras e estoque", value: "141" },
        { label: "Departamento de contabilidade e custos", value: "183" },
        { label: "Departamento de faturamento e corte", value: "111" },
        { label: "Departamento de fiscalização de obras", value: "204" },
        { label: "Departamento de operação do sistema", value: "154" },
        { label: "Departamento de projetos", value: "206" },
        { label: "Departamento de recursos humanos", value: "209" },
        { label: "Departamento de tratamento de água", value: "152" },
        { label: "Departamento de tratamento de esgoto", value: "153" },
        { label: "Departamento de equipamentos e veículos", value: "212" },
        { label: "Departamento de manutenção eletromecânica", value: "221" },
        { label: "Departamento operacional", value: "222" },
        { label: "Diretoria de desenvolvimento e expansão", value: "207" },
        { label: "Diretoria financeira e administrativa", value: "25" },
        { label: "Diretoria técnico operacional", value: "233" },
        { label: "ETA Castelo Branco / João Penido", value: "225" },
        { label: "ETA CDI", value: "226" },
        { label: "ETA Compacta terrões", value: "227" },
        { label: "ETA Compacta valadares", value: "228" },
        { label: "ETA São pedro", value: "229" },
        { label: "ETE Barbosa Lage", value: "230" },
        { label: "ETE Barreira do Triúnfo", value: "231" },
        { label: "GEDE - Gerência de desenvolvimento", value: "253" },
        { label: "Gerência administrativa e recursos humanos", value: "144" },
        { label: "Gerência comercial", value: "216" },
        { label: "Gerência de automação e telecomunicações", value: "150" },
        { label: "Gerência de manutenção", value: "234" },
        { label: "Gerência de obras", value: "120" },
        { label: "Gerência de operações", value: "157" },
        { label: "Gerência financeira e contábil", value: "217" },
        { label: "Gerência técnica", value: "122" },
        { label: "Licitações e assessoria de contratos", value: "113" },
        { label: "Medição de cadastro técnico", value: "115" },
        { label: "Pessoal à disposição de outros órgãos", value: "218" },
        { label: "Presidência", value: "160" },
        { label: "Procuradoria jurídica", value: "130" },
        { label: "Secretaria de governança", value: "170" },
        {
          label: "Supervisão de compras e cadastro de materiais",
          value: "143",
        },
        { label: "Supervisão de equipamentos e veículos", value: "149" },
        {
          label: "Supervisão de estação de tratamento de esgoto",
          value: "232",
        },
        {
          label:
            "Supervisão de manutenção de redes e equipamentos de informática",
          value: "202",
        },
        {
          label: "Supervisão de manutenção de equipamentos de automação",
          value: "219",
        },
        {
          label: "Supervisão de treinamento e desenvolvimento de pessoas",
          value: "208",
        },
        {
          label: "Supervisão administrativa de pessoal e benefícios",
          value: "142",
        },
        { label: "Supervisão de atendimento", value: "112" },
        { label: "Supervisão de cadastro comercial", value: "118" },
        { label: "Supervisão de cadastro técnico", value: "205" },
        { label: "Supervisão de fiscalização e corte", value: "214" },
        { label: "Supervisão de leitura", value: "215" },
        { label: "Supervisão de ligações", value: "203" },
        { label: "Supervisão de manutenção civil", value: "155" },
        { label: "Supervisão de recuperação de receitas", value: "132" },
        { label: "Supervisão de recuperação de receitas", value: "213" },
        { label: "Supervisão de terouraria", value: "114" },
        { label: "Vistoria de ligações", value: "200" },
      ],
      selectFuel: [
        { label: "Gasolina", value: "1" },
        { label: "Etanol", value: "2" },
        { label: "Flex", value: "3" },
        { label: "Diesel", value: "4" },
      ],
      selectSector: null,

      columns: [
        {
          name: "vehiche",
          required: true,
          label: "Veículo",
          align: "left",
          field: "vehiche",
        },
        {
          name: "plate",
          required: true,
          label: "Placa",
          align: "left",
          field: "plate",
        },
        {
          name: "year",
          required: true,
          label: "Ano",
          align: "left",
          field: "year",
        },
        {
          name: "brand",
          required: true,
          label: "Marca",
          align: "left",
          field: "brand",
        },
        {
          name: "model",
          required: true,
          label: "Modelo",
          align: "left",
          field: "model",
        },
        {
          name: "type",
          required: true,
          label: "Tipo",
          align: "left",
          field: "type",
        },
        {
          name: "fuel",
          required: true,
          label: "Combustível",
          align: "left",
          field: "fuel",
        },
        {
          name: "district",
          required: true,
          label: "Distrito",
          align: "left",
          field: "district",
        },
      ],
      vehicleTableTable: [
        {
          id: 1,
          vehicle: "0000000001",
          plate: "0000000001",
          year: "2022",
          brand: "Teste cadastro",
          model: "Teste cadastro",
          type: "Teste cadastro",
          fuel: "Gasolina",
          district: "Supervisão de cadastro comercial - 118",
        },
        {
          id: 2,
          vehicle: "0000000002",
          plate: "0000000002",
          year: "2002",
          brand: "Teste ligações",
          model: "Teste ligações",
          type: "Teste ligações",
          fuel: "Gasolina",
          district: "Supervisão de ligações - 203",
        },
        {
          id: 3,
          vehicle: "0000000003",
          plate: "0000000003",
          year: "2022",
          brand: "Teste Hidrômetro",
          model: "Teste HD",
          type: "Teste hd",
          fuel: "Gasolina",
          district: "Supervisão de ligações - vistoria - 200",
        },
        {
          id: 4,
          vehicle: "0000000004",
          plate: "0000000004",
          year: "2022",
          brand: "Teste",
          model: "Teste",
          type: "Teste",
          fuel: "Etanol",
          district: "Departamento de medição e cadastro técnico - 115",
        },
      ],
      selectedOption: null,
    };
  },
  methods: {
    handleRowClick(event) {
      console.log(event.data);
      this.selectedRow = event.data;
    },
  },
};
</script>
