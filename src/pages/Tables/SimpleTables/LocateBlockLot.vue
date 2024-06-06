<template>
  <MenuApp />
  <CompanyTag />
  <div class="container">
    <div class="content">
      <section>
        <div class="intro-services-to-be-billed">
          <h1 class="title-page">Localizar Lote Quadra</h1>
        </div>
        <div class="flex gap-4">
          <div class="w-61 margin-top-30">
            <DataTable
              style="
                border-bottom-left-radius: 10px;
                border-bottom-right-radius: 10px !important;
              "
              :value="locateBlockLotTable"
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
              <p class="p-labels">Descrição</p>
              <input
                v-model="selectedRow.description"
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
  name: "LocateBlockLot",
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
          name: "code",
          required: true,
          label: "Código",
          align: "left",
          field: "code",
        },
        {
          name: "description",
          required: true,
          label: "Descrição",
          align: "left",
          field: "description",
        },
      ],

      locateBlockLotTable: [
        {
          id: 1,
          code: "1",
          description: "Meio",
          checkbox: null,
        },
        {
          id: 2,
          code: "2",
          description: "Esquina",
          checkbox: null,
        },
        {
          id: 3,
          code: "3",
          description: "Fundos",
          checkbox: null,
        },
        {
          id: 4,
          code: "4",
          description: "Em L",
          checkbox: null,
        },
        {
          id: 5,
          code: "5",
          description: "Em T",
          checkbox: null,
        },
        {
          id: 6,
          code: "6",
          description: "Em cruz",
          checkbox: null,
        },
        {
          id: 7,
          code: "7",
          description: "Quadra inteira",
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
