<template>
  <MenuApp />
  <CompanyTag />
  <div class="container">
    <div class="content">
      <section>
        <div class="intro-services-to-be-billed">
          <h1 class="title-page">Imobiliária</h1>
        </div>

        <div class="margin-top-30">
          <DataTable
            style="
              border-bottom-left-radius: 10px;
              border-bottom-right-radius: 10px !important;
            "
            :value="realEstateTable"
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
        <div class="box-tables-info" v-if="selectedRow">
          <div class="flex gap-4">
            <div class="w-48">
              <p class="p-labels">Código</p>
              <input
                v-model="selectedRow.code"
                class="inputs margin-bottom-30"
              />
            </div>
            <div class="w-48">
              <p class="p-labels">Nome</p>
              <input
                v-model="selectedRow.name"
                class="inputs margin-bottom-30"
              />
            </div>
          </div>
          <div class="flex gap-5">
            <div class="w-30">
              <p class="p-labels">Endereço</p>
              <input
                v-model="selectedRow.address"
                class="inputs margin-bottom-30"
              />
            </div>
            <div class="w-30">
              <p class="p-labels">Número</p>
              <input v-model="selectedRow.nr" class="inputs margin-bottom-30" />
            </div>
            <div class="w-30">
              <p class="p-labels">Fone</p>
              <input
                v-model="selectedRow.phone"
                class="inputs margin-bottom-30"
              />
            </div>
          </div>
          <div class="flex gap-4">
            <div class="w-48">
              <p class="p-labels">Contato</p>
              <input
                v-model="selectedRow.contact"
                class="inputs margin-bottom-30"
              />
            </div>
            <div class="w-48">
              <p class="p-labels">Ramal</p>
              <input
                v-model="selectedRow.ramal"
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
  name: "RealEstate",
  components: {
    MenuApp,
    CompanyTag,
    DataTable,
    Column,
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
          name: "name",
          required: true,
          label: "Nome",
          align: "left",
          field: "name",
        },
      ],

      realEstateTable: [
        {
          id: 1,
          code: "1",
          name: "Nome 1",
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
