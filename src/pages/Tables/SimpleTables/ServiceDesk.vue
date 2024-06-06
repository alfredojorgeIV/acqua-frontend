<template>
  <MenuApp />
  <CompanyTag />
  <div class="container">
    <div class="content">
      <section>
        <div class="intro-services-to-be-billed">
          <h1 class="title-page">Guichê de Atendimento</h1>
        </div>
        <div class="flex gap-4">
          <div class="w-61 margin-top-30">
            <p class="p-labels">Loja de atendimento</p>
            <div class="flex justify-space-between mb-30">
              <div class="w-77">
                <select
                  class="inputs margin-bottom-30"
                  v-model="selectLojaAtendimento"
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
              <div class="w-19">
                <input class="inputs margin-bottom-30" />
              </div>
            </div>
            <DataTable
              style="
                border-bottom-left-radius: 10px;
                border-bottom-right-radius: 10px !important;
              "
              :value="serviceDeskTable"
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
              <p class="p-labels">Painel</p>
              <input
                v-model="selectedRow.panel"
                class="inputs margin-bottom-30"
              />
              <p class="p-labels">Descrição</p>
              <input
                v-model="selectedRow.description"
                class="inputs margin-bottom-30"
              />
              <p class="p-labels">Classificar por:</p>
              <select
                class="inputs margin-bottom-30"
                v-model="selectClassify"
              >
                <option v-for="option in options2" :key="option" :value="option">
                  {{ option }}
                </option>
              </select>
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
  name: "ServiceDesk",
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
      selected: [],
      selectLojaAtendimento: null,
      selectClassify: null,
      options: ["Centro - 1"],
      options2: ["Código - 1", "Descrição - 2"],
      columns: [
        {
          name: "panel",
          required: true,
          label: "Painel",
          align: "left",
          field: "panel",
        },
        {
          name: "description",
          required: true,
          label: "Descrição",
          align: "left",
          field: "description",
        },
      ],
      serviceDeskTable: [
        {
          id: 1,
          panel: "1",
          description: "Guichê 1",
        },
        {
          id: 2,
          panel: "2",
          description: "Guichê 2",
        },
        {
          id: 3,
          panel: "3",
          description: "Guichê 3",
        },
        {
          id: 4,
          panel: "4",
          description: "Guichê 4",
        },
        {
          id: 5,
          panel: "5",
          description: "Guichê 5",
        },
        {
          id: 6,
          panel: "6",
          description: "Guichê 6",
        },
        {
          id: 7,
          panel: "7",
          description: "Guichê 7",
        },
        {
          id: 8,
          panel: "8",
          description: "Guichê 8",
        },
        {
          id: 9,
          panel: "9",
          description: "Guichê 9",
        },
        {
          id: 10,
          panel: "10",
          description: "Guichê 10",
        },
      ],
      selectedOption: null,
    };
  },
  methods: {
    handleRowClick(event) {
      this.selectedRow = event.data;
    },
  },
};
</script>
