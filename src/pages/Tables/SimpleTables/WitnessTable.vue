<template>
  <MenuApp />
  <CompanyTag />
  <div class="container">
    <div class="content">
      <section>
        <div class="intro-services-to-be-billed">
          <h1 class="title-page">Testemunha</h1>
        </div>
        <div class="flex gap-4">
          <div class="w-61 margin-top-30">
            <DataTable
              style="
                border-bottom-left-radius: 10px;
                border-bottom-right-radius: 10px !important;
              "
              :value="witnessTable"
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
          <div class="w-35">
            <div class="box-tables-info" v-if="selectedRow">
              <p class="p-labels">Chave</p>
              <input
                v-model="selectedRow.key"
                class="inputs margin-bottom-30"
              />
              <p class="p-labels">Descrição</p>
              <input
                v-model="selectedRow.description"
                class="inputs margin-bottom-30"
              />
              <p class="p-labels">Documento</p>
              <input
                v-model="selectedRow.document"
                class="inputs margin-bottom-30"
              />
              <div class="flex justify-center gap-4 mt-40">
                <Button class="primary-button flex align-center">
                  Alterar <i class="ml-10 pi pi-pencil"></i>
                </Button>
                <Button class="danger-button flex align-center gap-10px">
                  Excluir <i class="pi pi-trash"></i>
                </Button>
              </div>
            </div>
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
import Button from "primevue/button";
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

export default {
  name: "WitnessTable",
  components: {
    MenuApp,
    CompanyTag,
    DataTable,
    Column,
    Button,
  },
  data() {
    return {
      selected: [],
      selectedRow: null,
      columns: [
        {
          name: "key",
          required: true,
          label: "Chave",
          align: "left",
          field: "key",
        },
        {
          name: "description",
          required: true,
          label: "Descrição",
          align: "left",
          field: "description",
        },
        {
          name: "document",
          required: true,
          label: "Documento",
          align: "left",
          field: "document",
        },
      ],

      witnessTable: [
        {
          id: 1,
          key: '110001',
          description: 'Camila Botelho Beloti',
          document: '1022110690',
          checkbox: null,
        },
        {
          id: 2,
          key: '110002',
          description: 'Cristiane Moreira Silva Martins',
          document: '03238248605',
          checkbox: null,
        },
        {
          id: 3,
          key: '110003',
          description: 'Elaine Macedo Fonseca Neto',
          document: '03899211650',
          checkbox: null,
        },
        {
          id: 4,
          key: '110004',
          description: 'Evelise Balardin',
          document: '08146203612',
          checkbox: null,
        },
        {
          id: 5,
          key: '110005',
          description: 'Flaviane Vieia Silva',
          document: '05250715630',
          checkbox: null,
        },
        {
          id: 6,
          key: '110006',
          description: 'Gleyciara de Fátima Peres da Silva Cerqueira',
          document: '09006177644',
          checkbox: null,
        },
        {
          id: 7,
          key: '110007',
          description: 'Isadora Oliveira Pedretti',
          document: '09609625657',
          checkbox: null,
        },
        {
          id: 8,
          key: '110008',
          description: 'Kelly Nascimeto de Souza',
          document: '08850001614',
          checkbox: null,
        },
        {
          id: 9,
          key: '110011',
          description: 'Lívia Mara O Pereira',
          document: '11139727699',
          checkbox: null,
        },
        {
          id: 10,
          key: '110012',
          description: 'Raquel Pacienza Alves Scaldini',
          document: '07865980698',
          checkbox: null,
        },
        {
          id: 11,
          key: '110013',
          description: 'Rodrigo Felipe da Silva',
          document: '07977652633',
          checkbox: null,
        },
        {
          id: 12,
          key: '110014',
          description: 'Rosemeire do Nascimento',
          document: '02617661636',
          checkbox: null,
        },
        {
          id: 13,
          key: '110015',
          description: 'Ziralda Soares de Souza',
          document: '80572669615',
          checkbox: null,
        },
        {
          id: 14,
          key: '110018',
          description: 'Camila da Silva Gomes',
          document: '06159746647',
          checkbox: null,
        },
        {
          id: 15,
          key: '110019',
          description: 'Helen Claudia de Oliveira',
          document: '01622731697',
          checkbox: null,
        },
        {
          id: 16,
          key: '110021',
          description: 'Josiane Dilly Ferreira Rezende',
          document: '05792788677',
          checkbox: null,
        },
        {
          id: 17,
          key: '110024',
          description: 'Debora Gama da Silva Pinheiro',
          document: '11933628650',
          checkbox: null,
        },
        {
          id: 18,
          key: '110027',
          description: 'Wallace de Oliveira Alves',
          document: ' 11547083654',
          checkbox: null,
        },
        {
          id: 19,
          key: '110028',
          description: 'Amanda Macedo da Silva',
          document: '09617194600',
          checkbox: null,
        },
        {
          id: 20,
          key: '110029',
          description: 'Priscila de Oliveira Ferreira',
          document: '15752686636',
          checkbox: null,
        },
        {
          id: 21,
          key: '110030',
          description: 'Luiz Paullo Anotnetti Ibanez',
          document: '13933267620',
          checkbox: null,
        },
        {
          id: 22,
          key: '263294',
          description: 'Leila de Oliveira',
          document: '47193450697',
          checkbox: null,
        },
        {
          id: 23,
          key: '264994',
          description: 'Ana Maria de Paula Silva',
          document: '49697439672',
          checkbox: null,
        },
        {
          id: 24,
          key: '281097',
          description: 'Fernanda Vieira Assad',
          document: '181273632',
          checkbox: null,
        },
        {
          id: 25,
          key: '287098',
          description: 'Claudia Santiago da Silveira',
          document: '88612872634',
          checkbox: null,
        },
        {
          id: 26,
          key: '290500',
          description: 'Julio Cezar Fernandes Pinto',
          document: '28196660600',
          checkbox: null,
        },
        {
          id: 27,
          key: '301603',
          description: 'Edison Rhem Junior',
          document: '3183101637',
          checkbox: null,
        },
        {
          id: 28,
          key: '302803',
          description: 'Vanderson Gomes Freguglia',
          document: '87391856649',
          checkbox: null,
        },
        {
          id: 29,
          key: '303103',
          description: 'Maria Cristina Figueiras',
          document: '89917480668',
          checkbox: null,
        },
        {
          id: 30,
          key: '303903',
          description: 'Juliana da Silva Ribeiro',
          document: '4616088632',
          checkbox: null,
        },
        {
          id: 31,
          key: '304203',
          description: 'Antônio Frederico Henriques Nazareth',
          document: '360980605',
          checkbox: null,
        },
        {
          id: 32,
          key: '305203',
          description: 'Angela dos Santos Jacobina',
          document: '7548644728',
          checkbox: null,
        },
        {
          id: 34,
          key: '309804',
          description: 'Iara Peres de Oliveira',
          document: '49691449668',
          checkbox: null,
        },
        {
          id: 35,
          key: '310004',
          description: 'Flávia de Carvalho Oliveira',
          document: '87420791600',
          checkbox: null,
        },
        {
          id: 36,
          key: '310104',
          description: 'Juliana Pereira Carlos',
          document: ' 5210903699',
          checkbox: null,
        },
        {
          id: 37,
          key: '312905',
          description: 'Maria Claudiana de Oliveira Affonso',
          document: '96319100672',
          checkbox: null,
        },
        {
          id: 38,
          key: '313305',
          description: 'Amanda Lavinas Evangelista Eleoterio',
          document: '4895795667',
          checkbox: null,
        },
        {
          id: 39,
          key: '315105',
          description: 'Jorge Luiz Bonfante Delduca',
          document: '546328626449',
          checkbox: null,
        },
        {
          id: 40,
          key: '319507',
          description: 'Vinícius Pereira Abranches',
          document: '10834325756',
          checkbox: null,
        },
        {
          id: 41,
          key: '319907',
          description: 'Jansen Vieira da Silva',
          document: '04179255731',
          checkbox: null,
        },
        {
          id: 42,
          key: '325408',
          description: 'Renata Lipi Bizarro',
          document: '46244660',
          checkbox: null,
        },
        {
          id: 43,
          key: '327609',
          description: 'Renata teixeira de Oliveira Araújo',
          document: '5050206618',
          checkbox: null,
        },
        {
          id: 44,
          key: '329409',
          description: 'Daniele Nocelli Martins',
          document: '6168530681',
          checkbox: null,
        },
        {
          id: 45,
          key: '333210',
          description: 'Glauco Macedo Fonseca Neto',
          document: '74572486',
          checkbox: null,
        },
      ],
    };
  },
  methods: {
    handleRowClick(event) {
      this.selectedRow = event.data;
    },
  },
};
</script>
