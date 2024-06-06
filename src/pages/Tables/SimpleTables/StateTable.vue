<template>
  <MenuApp />
  <CompanyTag />
  <div class="container">
    <div class="content">
      <section>
        <div class="intro-services-to-be-billed">
          <h1 class="title-page">UF</h1>
        </div>
        <div class="flex gap-4">
          <div class="w-61 margin-top-30">
            <DataTable
              style="
                border-bottom-left-radius: 10px;
                border-bottom-right-radius: 10px !important;
              "
              :value="stateTableTable"
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
              <p class="p-labels">Data</p>
              <input
                v-model="selectedRow.date"
                class="inputs margin-bottom-30"
              />
              <p class="p-labels">Valor</p>
              <input
                v-model="selectedRow.value"
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
  name: "StateTable",
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
          name: "date",
          required: true,
          label: "Data",
          align: "left",
          field: "date",
        },
        {
          name: "value",
          required: true,
          label: "Valor",
          align: "left",
          field: "value",
        },
 
      ],

      stateTableTable: [
        {
          id: 1,
          date: '01/01/2023',
          value: 'R$ 141,01',
          checkbox: null,
        },
        {
          id: 2,
          date: '01/01/2022',
          value: 'R$ 135,96',
          checkbox: null,
        },
        {
          id: 3,
          date: '01/01/2021',
          value: 'R$ 122,79',
          checkbox: null,
        },
        {
          id: 4,
          date: '01/01/2020',
          value: 'R$ 113,99',
          checkbox: null,
        },
        {
          id: 5,
          date: '01/01/2019',
          value: 'R$ 113,99',
          checkbox: null,
        },
        {
          id: 6,
          date: '01/01/2018',
          value: 'R$ 113,99',
          checkbox: null,
        },
        {
          id: 7,
          date: '01/01/2017',
          value: 'R$ 106,57',
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
