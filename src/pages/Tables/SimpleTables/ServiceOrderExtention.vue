<template>
  <MenuApp />
  <CompanyTag />
  <div class="container">
    <div class="content">
      <section>
        <div class="intro-services-to-be-billed">
          <h1 class="title-page">Prorrogação de ordem de serviço</h1>
        </div>
        <div class="flex gap-4">
          <div class="w-61 margin-top-30">
            <DataTable
              style="
                border-bottom-left-radius: 10px;
                border-bottom-right-radius: 10px !important;
              "
              :value="serviceOrderExtentionTable"
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
  name: "ServiceOrderCancellation",
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

      serviceOrderExtentionTable: [
        {
          id: 1,
          code: "1",
          description: "Atraso de áreas executantes",
          checkbox: null,
        },
        {
          id: 2,
          code: "2",
          description: "Aguardando liberação de alvará",
          checkbox: null,
        },
        {
          id: 3,
          code: "3",
          description: "Área em manobra",
          checkbox: null,
        },
        {
          id: 4,
          code: "4",
          description: "Falta de material",
          checkbox: null,
        },
        {
          id: 5,
          code: "5",
          description: "Falta de veículo",
          checkbox: null,
        },
        {
          id: 6,
          code: "6",
          description: "Endereço não localizado",
          checkbox: null,
        },
        {
          id: 7,
          code: "7",
          description: "Endereço ainda não localizado",
          checkbox: null,
        },
        {
          id: 8,
          code: "8",
          description: "Equipe inadequada para o serviço",
          checkbox: null,
        },
        {
          id: 9,
          code: "9",
          description: "Carga horária excessiva para a equipe",
          checkbox: null,
        },
        {
          id: 10,
          code: "10",
          description: "Excesso de serviços unidade operacional",
          checkbox: null,
        },
        {
          id: 11,
          code: "11",
          description: "Impossibilidade de acesso ao imóvel",
          checkbox: null,
        },
        {
          id: 12,
          code: "12",
          description: "Informação incompleta",
          checkbox: null,
        },
        {
          id: 13,
          code: "13",
          description: "Informação incorreta",
          checkbox: null,
        },
        {
          id: 14,
          code: "14",
          description: "Impossibilidade de contato com o cliente",
          checkbox: null,
        },
        {
          id: 15,
          code: "15",
          description: "Orçamento de rede em andamento",
          checkbox: null,
        },
        {
          id: 16,
          code: "16",
          description: "Número não localizado",
          checkbox: null,
        },
        {
          id: 17,
          code: "17",
          description: "Adequar local",
          checkbox: null,
        },
        {
          id: 18,
          code: "18",
          description: "Outros motivos (especificar)",
          checkbox: null,
        },
        {
          id: 19,
          code: "19",
          description: "Liberado pelo usuário",
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
