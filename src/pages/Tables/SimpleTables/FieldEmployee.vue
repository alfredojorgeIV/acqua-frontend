<template>
  <MenuApp />
  <CompanyTag />
  <div class="container">
    <div class="content">
      <section>
        <div class="intro-services-to-be-billed">
          <h1 class="title-page">Funcionário de campo</h1>
        </div>

        <div class="margin-top-30">
          <DataTable
            style="
              border-bottom-left-radius: 10px;
              border-bottom-right-radius: 10px !important;
            "
            :value="fieldEmployeeTable"
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
          <div class="flex justify-center gap-4 mt-40 w-48 mg-auto">
            <Button class="mg-auto tertiary-button flex align-center">
              Imprimir <i class="ml-10 pi pi-print"></i>
            </Button>
            <Button class="mg-auto quaternary-button flex align-center">
              Adicionar <i class="ml-10 pi pi-plus-circle"></i>
            </Button>
          </div>
        </div>
        <div class="box-tables-info">
          <div class="flex gap-4">
            <div class="w-48">
              <div class="flex gap-2 align-end">
                <div class="w-68">
                  <p class="p-labels">Pesquisar por:</p>
                  <select
                    class="inputs margin-bottom-30"
                    v-model="searchByFieldEmployee"
                  >
                    <option
                      v-for="option in searchByFieldEmployee"
                      :key="option.value"
                      :value="option.value"
                    >
                      {{ option.label }}
                    </option>
                  </select>
                </div>
                <div class="w-30">
                  <div class="flex align-end">
                    <input type="checkbox" id="survey" v-model="survey" />
                    <label for="survey" class="q-ml-sm"
                      >Apenas disponíveis</label
                    >
                  </div>
                </div>
              </div>
              <div class="flex gap-2 align-end">
                <div class="w-68">
                  <p class="p-labels">Código</p>
                  <input class="inputs margin-bottom-30" />
                </div>
                <div class="w-30">
                  <div class="flex align-end">
                    <input type="checkbox" id="survey" v-model="survey" />
                    <label for="survey" class="q-ml-sm">Indisponível</label>
                  </div>
                </div>
              </div>
              <p class="p-labels">Unidade de serviço</p>
              <select class="inputs margin-bottom-30" v-model="serviceUnit">
                <option
                  v-for="option in serviceUnit"
                  :key="option.value"
                  :value="option.value"
                >
                  {{ option.label }}
                </option>
              </select>
            </div>
            <div class="w-48">
              <div class="flex gap-2 align-end">
                <div class="w-77">
                  <p class="p-labels">Insira o valor da busca</p>
                  <input class="inputs margin-bottom-30" />
                </div>
                <div class="w-20">
                  <button class="quintenary-button flex align-end ml-10">
                    Buscar <i class="ml-10 q-ml-sm fa-solid fa-search"></i>
                  </button>
                </div>
              </div>
              <p class="p-labels">Nome</p>
              <input class="inputs margin-bottom-30" />
              <p class="p-labels">Senha</p>
              <input class="inputs margin-bottom-30" />
            </div>
          </div>
          <div class="flex justify-center gap-4 mt-40">
            <Button class="primary-button flex align-end">
              Alterar <i class="ml-10 pi pi-pencil"></i>
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
  name: "ContractorTable",
  components: {
    MenuApp,
    CompanyTag,
    DataTable,
    Column,
  },
  data() {
    return {
      selectedRowId: null,
      selected: [],
      selectActivity: null,
      searchByFieldEmployee: [
        { label: "Por codigo do funcionário", value: "1" },
        { label: "Por nome", value: "2" },
        { label: "Por código da Unidade", value: "3" },
      ],
      serviceUnit: [
        { label: "Assessoria, comunicação e ouvidoria", value: "182" },
        { label: "Acessoria de gestão da qualidade", value: "156" },
        {
          label: "Assessoria planejamento estrat. / controladoria",
          value: "117",
        },
        { label: "Assessoria prog. e controle de serviços", value: "116" },
        { label: "Auditoria interna", value: "201" },
        { label: "Deco - apoio", value: "250" },
        { label: "Deco - certidões", value: "252" },
        { label: "Deco - retorno", value: "251" },
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
        { label: "Departamento de fiscalização e obras", value: "204" },
        { label: "Departamento de operação do sistema", value: "154" },
        { label: "Departamento de projetos", value: "206" },
        { label: "Departamento de recursos humanos", value: "209" },
        { label: "Departamento de tratamento de água", value: "152" },
        { label: "Departamento de tratamento de esgoto", value: "252" },
        { label: "Departamento de equipamentos e veículos", value: "212" },
        { label: "Departamento de manutenção eletromecânica", value: "221" },
        { label: "Departamento de medição e cadastro técnico", value: "115" },
        { label: "Departamento regional leste", value: "222" },
        { label: "Departamento regional norte", value: "223" },
        { label: "Departamento regional sul", value: "224" },
        { label: "Diretoria de desenvolvimento e expansão", value: "207" },
        { label: "Diretoria financeira e administrativa", value: "140" },
        { label: "Diretoria técnico operacional", value: "233" },
        { label: "ETA Castelo Branco / João Penido", value: "225" },
        { label: "ETA CDI", value: "226" },
        { label: "ETA Compacta Terreões", value: "227" },
        { label: "ETA Compacta Valadares", value: "228" },
        { label: "ETA São Pedro", value: "229" },
        { label: "ETE Barbosa Lage", value: "230" },
        { label: "ETE Barreira do Triúnfo", value: "231" },
        { label: "Gerência administrativa e recursos humanos", value: "144" },
        { label: "Gerência comercial", value: "216" },
        { label: "Gerência de automação e telecomunicações", value: "150" },
        { label: "Gerência de desenvolvimento", value: "253" },
        {
          label: "Gerência  de inovação tecnologia e informática",
          value: "145",
        },
        { label: "Gerência de manutenção", value: "234" },
        { label: "Gerência de obras", value: "120" },
        { label: "Gerência de operações", value: "157" },
        { label: "Gerência financeira e contábil", value: "217" },
        { label: "Gerência técnica", value: "122" },
        { label: "Licitações e assessoria de contratos", value: "113" },
        { label: "Pessoal à disposição de outros órgãos", value: "218" },
        { label: "Presidência", value: "160" },
        { label: "Procuradoria jurídica", value: "130" },
        { label: "Secretaria de governança", value: "170" },
        { label: "Supervisão compras e cadastro de materiais", value: "143" },
        {
          label: "Supervisão controle de equipamentos e veículos",
          value: "149",
        },
        { label: "Supervisão estação de tratamento de esgoto", value: "232" },
        {
          label: "Supervisão manutenção de redes e equipamentos de informática",
          value: "202",
        },
        {
          label: "Supervisão manutenção de equipamentos de automação",
          value: "219",
        },
        {
          label: "Supervisão de treinamento e desenvolvimento de pessoas",
          value: "208",
        },
        {
          label: "Supervisão administrativa de pessoal e benefícios",
          value: "143",
        },
        { label: "Supervisão de atendimento", value: "112" },
        { label: "Supervisão de cadastrp comercial", value: "118" },
        { label: "Supervisão de cadastro técnico", value: "205" },
        { label: "Supervisão de fiscalização e corte", value: "214" },
        { label: "Supervisão de leitura", value: "215" },
        { label: "Supervisão de ligações", value: "203" },
        { label: "Supupervisão de manutenção civil", value: "155" },
        { label: "Supervisão de recuperação de receitas", value: "132" },
        { label: "Supervisão de recuperação de receitas", value: "213" },
        { label: "Supervisão de tesouraria", value: "114" },
        { label: "Supervisão de ligações - vistoria", value: "200" },
      ],

      columns: [
        {
          name: "code",
          required: true,
          label: "Código",
          align: "left",
          field: "code",
        },
        {
          name: "name",
          required: true,
          label: "Nome",
          align: "left",
          field: "name",
        },
        {
          name: "serviceUnit",
          required: true,
          label: "Unidade de Serviço",
          align: "left",
          field: "serviceUnit",
        },
        {
          name: "active",
          required: true,
          label: "Ativo",
          align: "left",
          field: "active",
        },
      ],
      fieldEmployeeTable: [
        {
          id: 1,
          code: "10000",
          name: "Atendente",
          serviceUnit: "Supervisão de fiscalização e corte - 214",
          active: "1",
        },
        {
          id: 2,
          code: "10001",
          name: "Infracon 01",
          serviceUnit: "Supervisão de fiscalização e corte - 214",
          active: "1",
        },
        {
          id: 3,
          code: "10002",
          name: "Infracon 02",
          serviceUnit: "Supervisão de fiscalização e corte - 214",
          active: "1",
        },
        {
          id: 4,
          code: "10003",
          name: "Infracon 03",
          serviceUnit: "Supervisão de fiscalização e corte - 214",
          active: "1",
        },
        {
          id: 5,
          code: "10004",
          name: "Infracon 04",
          serviceUnit: "Supervisão de fiscalização e corte - 214",
          active: "1",
        },
        {
          id: 6,
          code: "10005",
          name: "Infracon 05",
          serviceUnit: "Supervisão de fiscalização e corte - 214",
          active: "1",
        },
        {
          id: 7,
          code: "10006",
          name: "Infracon 06",
          serviceUnit: "Supervisão de fiscalização e corte - 214",
          active: "1",
        },
        {
          id: 8,
          code: "10007",
          name: "Infracon 07",
          serviceUnit: "Supervisão de fiscalização e corte - 214",
          active: "1",
        },
        {
          id: 9,
          code: "10008",
          name: "Infracon 08",
          serviceUnit: "Supervisão de fiscalização e corte - 214",
          active: "1",
        },
        {
          id: 10,
          code: "10009",
          name: "Infracon 09",
          serviceUnit: "Supervisão de fiscalização e corte - 214",
          active: "1",
        },
        {
          id: 11,
          code: "10010",
          name: "Infracon 10",
          serviceUnit: "Supervisão de fiscalização e corte - 214",
          active: "1",
        },
        {
          id: 12,
          code: "10011",
          name: "Infracon 11",
          serviceUnit: "Supervisão de fiscalização e corte - 214",
          active: "1",
        },
        {
          id: 13,
          code: "10012",
          name: "Infracon 12",
          serviceUnit: "Supervisão de fiscalização e corte - 214",
          active: "1",
        },
        {
          id: 14,
          code: "10013",
          name: "Infracon 13",
          serviceUnit: "Supervisão de fiscalização e corte - 214",
          active: "1",
        },
        {
          id: 15,
          code: "10014",
          name: "Infracon 14",
          serviceUnit: "Supervisão de fiscalização e corte - 214",
          active: "1",
        },
        {
          id: 16,
          code: "10015",
          name: "Infracon 15",
          serviceUnit: "Supervisão de fiscalização e corte - 214",
          active: "1",
        },
        {
          id: 17,
          code: "10016",
          name: "Infracon 16",
          serviceUnit: "Supervisão de fiscalização e corte - 214",
          active: "1",
        },
        {
          id: 18,
          code: "10017",
          name: "Infracon 17",
          serviceUnit: "Supervisão de fiscalização e corte - 214",
          active: "1",
        },
        {
          id: 19,
          code: "10018",
          name: "Infracon 18",
          serviceUnit: "Supervisão de fiscalização e corte - 214",
          active: "1",
        },
        {
          id: 20,
          code: "10019",
          name: "Infracon 19",
          serviceUnit: "Supervisão de fiscalização e corte - 214",
          active: "1",
        },
        {
          id: 21,
          code: "10020",
          name: "Infracon 20",
          serviceUnit: "Supervisão de fiscalização e corte - 214",
          active: "1",
        },
        {
          id: 22,
          code: "10021",
          name: "Infracon 21",
          serviceUnit: "Supervisão de fiscalização e corte - 214",
          active: "1",
        },
        {
          id: 23,
          code: "10022",
          name: "Infracon 22",
          serviceUnit: "Supervisão de fiscalização e corte - 214",
          active: "1",
        },
        {
          id: 24,
          code: "10023",
          name: "Infracon 23",
          serviceUnit: "Supervisão de fiscalização e corte - 214",
          active: "1",
        },
        {
          id: 25,
          code: "10024",
          name: "Infracon 24",
          serviceUnit: "Supervisão de fiscalização e corte - 214",
          active: "1",
        },
        {
          id: 26,
          code: "10025",
          name: "Infracon 25",
          serviceUnit: "Supervisão de fiscalização e corte - 214",
          active: "1",
        },
        {
          id: 27,
          code: "10026",
          name: "Infracon 26",
          serviceUnit: "Supervisão de fiscalização e corte - 214",
          active: "1",
        },
        {
          id: 28,
          code: "10027",
          name: "Infracon 27",
          serviceUnit: "Supervisão de fiscalização e corte - 214",
          active: "1",
        },
        {
          id: 29,
          code: "10028",
          name: "Infracon 28",
          serviceUnit: "Supervisão de fiscalização e corte - 214",
          active: "1",
        },
        {
          id: 30,
          code: "10029",
          name: "Infracon 29",
          serviceUnit: "Supervisão de fiscalização e corte - 214",
          active: "1",
        },
        {
          id: 31,
          code: "10030",
          name: "Infracon 30",
          serviceUnit: "Supervisão de fiscalização e corte - 214",
          active: "1",
        },
        {
          id: 32,
          code: "10999",
          name: "Admin",
          serviceUnit: "Supervisão de fiscalização e corte - 214",
          active: "1",
        },
        {
          id: 33,
          code: "20001",
          name: "Aguasys01",
          serviceUnit: "Departameento de medição e cadastro técnico - 115",
          active: "1",
        },
        {
          id: 34,
          code: "20002",
          name: "Aguasys02",
          serviceUnit: "Departameento de medição e cadastro técnico - 115",
          active: "1",
        },
        {
          id: 35,
          code: "20003",
          name: "Aguasys03",
          serviceUnit: "Departameento de medição e cadastro técnico - 115",
          active: "1",
        },
        {
          id: 36,
          code: "68676",
          name: "Ney Fernando Mesquita",
          serviceUnit: "Supervisão de cadastro comercial - 118",
          active: "1",
        },
        {
          id: 37,
          code: "100100",
          name: "Artha001",
          serviceUnit: "Supervisão de leitura - 215",
          active: "1",
        },
        {
          id: 38,
          code: "100101",
          name: "Artha002",
          serviceUnit: "Supervisão de leitura - 215",
          active: "1",
        },
        {
          id: 39,
          code: "183482",
          name: "Sérgio Ricardo Minochre Zatta",
          serviceUnit: "Supervisão de ligações - 203",
          active: "1",
        },
        {
          id: 40,
          code: "191182",
          name: "José Roberto Octaviano",
          serviceUnit: "Supervisão de ligações - vistoria - 200",
          active: "1",
        },
        {
          id: 41,
          code: "197284",
          name: "José Reis de Souza Filho",
          serviceUnit: "Supervisão de fiscalização e corte - 214",
          active: "1",
        },
        {
          id: 42,
          code: "216187",
          name: "Paulo Célio da Silva",
          serviceUnit: "Supervisão de fiscalização e corte - 214",
          active: "1",
        },
        {
          id: 43,
          code: "216787",
          name: "Klessius de Moraes Oliveira",
          serviceUnit: "Departamento de medição e cadastro técnico - 115",
          active: "1",
        },
        {
          id: 44,
          code: "265795",
          name: "José Antônio Aguiar de Souza",
          serviceUnit: "Supervisão de ligações - vistoria - 200",
          active: "1",
        },
        {
          id: 45,
          code: "267095",
          name: "Denerval Furtado da Silva",
          serviceUnit: "Supervisão de ligações - vistoria - 200",
          active: "1",
        },
        {
          id: 46,
          code: "272097",
          name: "Marco Aurélio Marques dos Santos",
          serviceUnit: "Supervisão de fiscalização e corte - 214",
        },
        {
          id: 47,
          code: "274897",
          name: "Rodrigo José Eleutério",
          serviceUnit: "Supervisão de ligações - 203",
          active: "1",
        },
        {
          id: 48,
          code: "275097",
          name: "Márcio Luis de Paula Santos",
          serviceUnit: "Departamento de medição e cadastro técnico - 115",
          active: "1",
        },
        {
          id: 49,
          code: "282698",
          name: "Cássio Jackson Galdino da Silva",
          serviceUnit: "Departamento de medição e cadastro técnico - 115",
          active: "1",
        },
        {
          id: 50,
          code: "283098",
          name: "José Carlos de Oliveira",
          serviceUnit: "Supervisão de fiscalização e corte - 214",
          active: "1",
        },
        {
          id: 51,
          code: "294000",
          name: "Giovanni Freguglia Bruno",
          serviceUnit: "Departamento de projetos - 206",
          active: "1",
        },
        {
          id: 52,
          code: "300702",
          name: "Antônio Carlos Ribeiro",
          serviceUnit: "Departamento de projetos - 206",
          active: "1",
        },
        {
          id: 53,
          code: "305103",
          name: "José dos Santos Lima",
          serviceUnit: "Supervisão de fiscalização e corte - 214",
          active: "1",
        },
        {
          id: 54,
          code: "306604",
          name: "Zagari Coutinho Vidal",
          serviceUnit: "Supervisão de fiscalização e corte - 214",
          active: "1",
        },
        {
          id: 55,
          code: "308204",
          name: "Clayton Eduardo Neves",
          serviceUnit: "Supervisão de fiscalização e corte - 214",
          active: "1",
        },
        {
          id: 56,
          code: "309504",
          name: "Antônio Marcos Lopes da Silva",
          serviceUnit: "Supervisão de fiscalização e corte - 214",
          active: "1",
        },
        {
          id: 57,
          code: "309512",
          name: "Tais Dolvale",
          serviceUnit: "Supervisão de ligações - 203",
          active: "1",
        },
        {
          id: 58,
          code: "314505",
          name: "Eliandro Joaquim Damasceno",
          serviceUnit: "Supervisão de ligações - vistoria - 200",
          active: "1",
        },
        {
          id: 59,
          code: "316305",
          name: "Fábio de Oliveira Almeida",
          serviceUnit: "Departamento de medição e cadastro técnico - 115",
          active: "1",
        },
        {
          id: 60,
          code: "325708",
          name: "Arliston Fernandes",
          serviceUnit: "Departamento de medição e cadastro técnico - 115",
          active: "1",
        },
        {
          id: 61,
          code: "332610",
          name: "Eliseu de Oliveira",
          serviceUnit: "Supervisão de ligações - vistoria - 200",
          active: "1",
        },
        {
          id: 62,
          code: "334810",
          name: "Yuri Tavares Meireles",
          serviceUnit: "Supervisão de cadastro comercial - 118",
          active: "1",
        },
        {
          id: 63,
          code: "342323",
          name: "Pauline Breguez Maragnon e Castro",
          serviceUnit: "Departamento de medição e cadastro técnico - 115",
          active: "1",
        },
        {
          id: 64,
          code: "342823",
          name: "Fernando Guedes Couto",
          serviceUnit: "Supervisão de ligações - vistoria - 2000",
          active: "1",
        },
        {
          id: 65,
          code: "2670950",
          name: "Denerval Furtado da Silva",
          serviceUnit: "Supervisão de ligações - 203",
          active: "1",
        },
        {
          id: 66,
          code: "2748970",
          name: "Rodrigo José Eleutério",
          serviceUnit: "Supervisão de ligações - vistoria - 200",
          active: "1",
        },
        {
          id: 67,
          code: "2922000",
          name: "Walter Domingos Gomes",
          serviceUnit: "Supervisão de ligações - 203",
          active: "1",
        },
        {
          id: 68,
          code: "3145050",
          name: "Eliandro Joaquim Damasceno",
          serviceUnit: "Supervisão de ligações - 203",
          active: "1",
        },
        {
          id: 69,
          code: "3326100",
          name: "Eliseu de Oliveira",
          serviceUnit: "Supervisão de ligações - 203",
          active: "1",
        },
      ],
      selectedOption: null,
    };
  },
  methods: {
    goBackToServices() {
      this.$router.push({
        name: "TablesOptions",
        params: { selectedOption: "Administration" },
      });
    },
    handleSelection(selected) {
      if (selected.length > 1) {
        this.selected = [selected[selected.length - 1]];
      } else {
        this.selected = selected;
      }
    },
  },
};
</script>
