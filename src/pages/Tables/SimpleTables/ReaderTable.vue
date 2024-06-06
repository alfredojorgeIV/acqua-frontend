<template>
  <MenuApp />
  <CompanyTag />
  <div class="container">
    <div class="content">
      <section>
        <div class="intro-services-to-be-billed">
          <h1 class="title-page">Leiturista</h1>
        </div>
        <div class="flex gap-4">
          <div class="w-61 margin-top-30">
            <DataTable
              style="
                border-bottom-left-radius: 10px;
                border-bottom-right-radius: 10px !important;
              "
              :value="readerTableTable"
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
              <p class="p-labels">Código</p>
              <input
                v-model="selectedRow.code"
                class="inputs margin-bottom-30"
              />
              <div class="R-15-2-4"> <input type="checkbox" class="mr-15" />Ativo</div>
              <p class="p-labels">Nome</p>
              <input
                v-model="selectedRow.name"
                class="inputs margin-bottom-30"
              />
               <div class="flex justify-space-between">
              <div class="w-48">
                <p class="p-labels">Local</p>
                <select
                  class="inputs margin-bottom-30"
                  v-model="selectLocalReader"
                >
                  <option
                    v-for="option in options"
                    :key="option"
                    :value="option"
                  >
                    {{ option }}
                  </option>
                </select>
              </div>
              <div class="w-48">
                <p class="p-labels">Empreiteira</p>
                <select
                  class="inputs margin-bottom-30"
                  v-model="selectContractor"
                >
                  <option
                    v-for="option2 in options2"
                    :key="option2"
                    :value="option2"
                  >
                    {{ option2 }}
                  </option>
                </select>
              </div>
            </div>
            <div class="flex justify-space-between">
              <div class="w-48">
                <p class="p-labels">Micro</p>
                <input
                v-model="selectedRow.micro"
                class="inputs margin-bottom-30"
              />
              </div>
              <div class="w-48">
                <p class="p-labels">Senha</p>
               <input
                v-model="selectedRow.password"
                class="inputs margin-bottom-30"
              />
              </div>
            </div>
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
  name: "ReaderTable",
  components: {
    MenuApp,
    CompanyTag,
    DataTable,
    Column,
    Button,
  },
  data() {
    return {
      
      selectedRow: null,
      selectedRowId: null,
      selected: [],
      selectLocalReader: null,
      selectContractor: null,
      options: ['Juiz de fora - 1'],
      options2: [
        'Agua System Servico LTDA - 16',
        'Artha Tecnologia Soluções Impo - 14',
        'Cesama (externo) - 99',
        'Cesama (interno) - 1',
        'Engedrain L - 17',
        'Engedrain NS - 15',
        'Infracon Engenharia e Comércio LTDA - 10',
      ],
      columns: [
        {
          name: 'code',
          required: true,
          label: 'Código',
          align: 'left',
          field: 'code',
        },
        {
          name: 'name',
          required: true,
          label: 'Nome',
          align: 'left',
          field: 'name',
        },
        {
          name: 'contractor',
          required: true,
          label: 'Empreiteira',
          align: 'left',
          field: 'contractor',
        },
        {
          name: 'local',
          required: true,
          label: 'Local',
          align: 'left',
          field: 'local',
        },
        {
          name: 'micro',
          required: true,
          label: 'Micro',
          align: 'left',
          field: 'micro',
        },
 
      ],

      readerTableTable: [
         {
          id: 1,
          code: '69',
          name: 'URSLCA029 - Leiturista terceirizado',
          contractor: 'Cesama (interno) - 1',
          local: 'Juiz de Fora - 1',
          micro: null,
          checkbox: null,
        },
        {
          id: 2,
          code: '70',
          name: 'URSLCA001 - Leiturista terceirizado',
          contractor: 'Cesama (interno) - 1',
          local: 'Juiz de Fora - 1',
          micro: null,
          checkbox: null,
        },
        {
          id: 3,
          code: '71',
          name: 'URSLCA002 - Leiturista terceirizado',
          contractor: 'Cesama (interno) - 1',
          local: 'Juiz de Fora - 1',
          micro: null,
          checkbox: null,
        },
        {
          id: 4,
          code: '72',
          name: 'URSLCA003 - Leiturista terceirizado',
          contractor: 'Cesama (interno) - 1',
          local: 'Juiz de Fora - 1',
          micro: null,
          checkbox: null,
        },
        {
          id: 5,
          code: '73',
          name: 'URSLCA004 - Leiturista terceirizado',
          contractor: 'Cesama (interno) - 1',
          local: 'Juiz de Fora - 1',
          micro: null,
          checkbox: null,
        },
        {
          id: 6,
          code: '74',
          name: 'URSLCA005 - Leiturista terceirizado',
          contractor: 'Cesama (interno) - 1',
          local: 'Juiz de Fora - 1',
          micro: null,
          checkbox: null,
        },
        {
          id: 7,
          code: '75',
          name: 'URSLCA006 - Leiturista terceirizado',
          contractor: 'Cesama (interno) - 1',
          local: 'Juiz de Fora - 1',
          micro: null,
          checkbox: null,
        },
        {
          id: 8,
          code: '76',
          name: 'URSLCA007 - Leiturista terceirizado',
          contractor: 'Cesama (interno) - 1',
          local: 'Juiz de Fora - 1',
          micro: null,
          checkbox: null,
        },
        {
          id: 9,
          code: '77',
          name: 'URSLCA008 - Leiturista terceirizado',
          contractor: 'Cesama (interno) - 1',
          local: 'Juiz de Fora - 1',
          micro: null,
          checkbox: null,
        },
        {
          id: 10,
          code: '78',
          name: 'URSLCA009 - Leiturista terceirizado',
          contractor: 'Cesama (interno) - 1',
          local: 'Juiz de Fora - 1',
          micro: null,
          checkbox: null,
        },
        {
          id: 11,
          code: '79',
          name: 'URSLCA010 - Leiturista terceirizado',
          contractor: 'Cesama (interno) - 1',
          local: 'Juiz de Fora - 1',
          micro: null,
          checkbox: null,
        },
        {
          id: 12,
          code: '80',
          name: 'URSLCA011 - Leiturista terceirizado',
          contractor: 'Cesama (interno) - 1',
          local: 'Juiz de Fora - 1',
          micro: null,
          checkbox: null,
        },
        {
          id: 13,
          code: '81',
          name: 'URSLCA012 - Leiturista terceirizado',
          contractor: 'Cesama (interno) - 1',
          local: 'Juiz de Fora - 1',
          micro: null,
          checkbox: null,
        },
        {
          id: 14,
          code: '82',
          name: 'URSLCA013 - Leiturista terceirizado',
          contractor: 'Cesama (interno) - 1',
          local: 'Juiz de Fora - 1',
          micro: null,
          checkbox: null,
        },
        {
          id: 15,
          code: '83',
          name: 'URSLCA014 - Leiturista terceirizado',
          contractor: 'Cesama (interno) - 1',
          local: 'Juiz de Fora - 1',
          micro: null,
          checkbox: null,
        },
        {
          id: 16,
          code: '84',
          name: 'URSLCA015 - Leiturista terceirizado',
          contractor: 'Cesama (interno) - 1',
          local: 'Juiz de Fora - 1',
          micro: null,
          checkbox: null,
        },
        {
          id: 17,
          code: '85',
          name: 'URSLCA016 - Leiturista terceirizado',
          contractor: 'Cesama (interno) - 1',
          local: 'Juiz de Fora - 1',
          micro: null,
          checkbox: null,
        },
        {
          id: 18,
          code: '86',
          name: 'URSLCA017 - Leiturista terceirizado',
          contractor: 'Cesama (interno) - 1',
          local: 'Juiz de Fora - 1',
          micro: null,
          checkbox: null,
        },
        {
          id: 19,
          code: '87',
          name: 'URSLCA018 - Leiturista terceirizado',
          contractor: 'Cesama (interno) - 1',
          local: 'Juiz de Fora - 1',
          micro: null,
          checkbox: null,
        },
        {
          id: 20,
          code: '88',
          name: 'URSLCA019 - Leiturista terceirizado',
          contractor: 'Cesama (interno) - 1',
          local: 'Juiz de Fora - 1',
          micro: null,
          checkbox: null,
        },
        {
          id: 21,
          code: '89',
          name: 'URSLCA020 - Leiturista terceirizado',
          contractor: 'Cesama (interno) - 1',
          local: 'Juiz de Fora - 1',
          micro: null,
          checkbox: null,
        },
        {
          id: 22,
          code: '90',
          name: 'SPVLCA01 - Supervisor externo',
          contractor: 'Cesama (interno) - 1',
          local: 'Juiz de Fora - 1',
          micro: null,
          checkbox: null,
        },
        {
          id: 23,
          code: '91',
          name: 'URSLCA021 - Leiturista terceirizado',
          contractor: 'Cesama (interno) - 1',
          local: 'Juiz de Fora - 1',
          micro: null,
          checkbox: null,
        },
        {
          id: 24,
          code: '92',
          name: 'URSLCA022 - Leiturista terceirizado',
          contractor: 'Cesama (interno) - 1',
          local: 'Juiz de Fora - 1',
          micro: null,
          checkbox: null,
        },
        {
          id: 25,
          code: '93',
          name: 'URSLCA023 - Leiturista terceirizado',
          contractor: 'Cesama (interno) - 1',
          local: 'Juiz de Fora - 1',
          micro: null,
          checkbox: null,
        },
        {
          id: 26,
          code: '94',
          name: 'URSLCA024 - Leiturista terceirizado',
          contractor: 'Cesama (interno) - 1',
          local: 'Juiz de Fora - 1',
          micro: null,
          checkbox: null,
        },
        {
          id: 27,
          code: '95',
          name: 'URSLCA025 - Leiturista terceirizado',
          contractor: 'Cesama (interno) - 1',
          local: 'Juiz de Fora - 1',
          micro: null,
          checkbox: null,
        },
        {
          id: 28,
          code: '96',
          name: 'URSLCA026 - Leiturista terceirizado',
          contractor: 'Cesama (interno) - 1',
          local: 'Juiz de Fora - 1',
          micro: null,
          checkbox: null,
        },
        {
          id: 29,
          code: '97',
          name: 'URSLCA027 - Leiturista terceirizado',
          contractor: 'Cesama (interno) - 1',
          local: 'Juiz de Fora - 1',
          micro: null,
          checkbox: null,
        },
        {
          id: 30,
          code: '98',
          name: 'URSLCA028 - Leiturista terceirizado',
          contractor: 'Cesama (interno) - 1',
          local: 'Juiz de Fora - 1',
          micro: null,
          checkbox: null,
        },
        {
          id: 31,
          code: '99',
          name: 'Agente comercial virtual',
          contractor: 'Cesama (interno) - 1',
          local: 'Juiz de Fora - 1',
          micro: null,
          checkbox: null,
        },
        {
          id: 32,
          code: '101',
          name: 'Anderson Rocha de Oliveira',
          contractor: 'Cesama (interno) - 1',
          local: 'Juiz de Fora - 1',
          micro: null,
          checkbox: null,
        },
        {
          id: 33,
          code: '102',
          name: 'Rodrigo de Souza de Oliveira',
          contractor: 'Cesama (interno) - 1',
          local: 'Juiz de Fora - 1',
          micro: null,
          checkbox: null,
        },
        {
          id: 34,
          code: '103',
          name: 'Willians Ambires Bertoldo',
          contractor: 'Cesama (interno) - 1',
          local: 'Juiz de Fora - 1',
          micro: null,
          checkbox: null,
        },
        {
          id: 35,
          code: '104',
          name: 'Chrisander Santana Domingos',
          contractor: 'Cesama (interno) - 1',
          local: 'Juiz de Fora - 1',
          micro: null,
          checkbox: null,
        },
        {
          id: 36,
          code: '105',
          name: 'Matheus Luiz Ambrozio Arruda',
          contractor: 'Cesama (interno) - 1',
          local: 'Juiz de Fora - 1',
          micro: null,
          checkbox: null,
        },
        {
          id: 37,
          code: '106',
          name: 'Anderson Luiz Monfim',
          contractor: 'Cesama (interno) - 1',
          local: 'Juiz de Fora - 1',
          micro: null,
          checkbox: null,
        },
        {
          id: 38,
          code: '107',
          name: 'André Eduardo da Silva Aquino',
          contractor: 'Cesama (interno) - 1',
          local: 'Juiz de Fora - 1',
          micro: null,
          checkbox: null,
        },
        {
          id: 39,
          code: '108',
          name: 'Luiz Augusto dos Santos Ramos',
          contractor: 'Cesama (interno) - 1',
          local: 'Juiz de Fora - 1',
          micro: null,
          checkbox: null,
        },
        {
          id: 40,
          code: '109',
          name: 'Rogério Ferreira Leite',
          contractor: 'Cesama (interno) - 1',
          local: 'Juiz de Fora - 1',
          micro: null,
          checkbox: null,
        },
        {
          id: 41,
          code: '110',
          name: 'Thiago Júlio Sales',
          contractor: 'Cesama (interno) - 1',
          local: 'Juiz de Fora - 1',
          micro: null,
          checkbox: null,
        },
        {
          id: 42,
          code: '111',
          name: 'André Luiz',
          contractor: 'Cesama (interno) - 1',
          local: 'Juiz de Fora - 1',
          micro: null,
          checkbox: null,
        },
        {
          id: 43,
          code: '112',
          name: 'Geraldo de Matos Moreira',
          contractor: 'Cesama (interno) - 1',
          local: 'Juiz de Fora - 1',
          micro: null,
          checkbox: null,
        },
        {
          id: 44,
          code: '113',
          name: 'Jônatas Cândido da Silva',
          contractor: 'Cesama (interno) - 1',
          local: 'Juiz de Fora - 1',
          micro: null,
          checkbox: null,
        },
        {
          id: 45,
          code: '114',
          name: 'Roberto Carlos dos Reis',
          contractor: 'Cesama (interno) - 1',
          local: 'Juiz de Fora - 1',
          micro: null,
          checkbox: null,
        },
        {
          id: 46,
          code: '115',
          name: 'Matheys Oliveira de Castro',
          contractor: 'Cesama (interno) - 1',
          local: 'Juiz de Fora - 1',
          micro: null,
          checkbox: null,
        },
        {
          id: 47,
          code: '116',
          name: 'Ismael Cândido da Silva',
          contractor: 'Cesama (interno) - 1',
          local: 'Juiz de Fora - 1',
          micro: null,
          checkbox: null,
        },
        {
          id: 48,
          code: '117',
          name: 'Juan Marques da Silva',
          contractor: 'Cesama (interno) - 1',
          local: 'Juiz de Fora - 1',
          micro: null,
          checkbox: null,
        },
        {
          id: 49,
          code: '118',
          name: 'Alex Firmino da Silva Ventura',
          contractor: 'Cesama (interno) - 1',
          local: 'Juiz de Fora - 1',
          micro: null,
          checkbox: null,
        },
        {
          id: 50,
          code: '119',
          name: 'Jonathan da Silva Ferreira',
          contractor: 'Cesama (interno) - 1',
          local: 'Juiz de Fora - 1',
          micro: null,
          checkbox: null,
        },
        {
          id: 51,
          code: '120',
          name: 'Cleverson Dias Sabino',
          contractor: 'Cesama (interno) - 1',
          local: 'Juiz de Fora - 1',
          micro: null,
          checkbox: null,
        },
        {
          id: 52,
          code: '121',
          name: 'Vitor Aquino de Souza',
          contractor: 'Cesama (interno) - 1',
          local: 'Juiz de Fora - 1',
          micro: null,
          checkbox: null,
        },
        {
          id: 53,
          code: '1077',
          name: 'André Eduardo da Silva Aquino',
          contractor: 'Cesama (interno) - 1',
          local: 'Juiz de Fora - 1',
          micro: null,
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
