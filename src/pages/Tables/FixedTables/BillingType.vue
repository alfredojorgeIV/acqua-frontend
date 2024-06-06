<template>
  <MenuApp />
  <CompanyTag />
  <div class="container">
    <div class="content">
      <section>
        <div class="intro-services-to-be-billed">
          <h1 class="title-page">Tipo de cobrança</h1>
        </div>

        <div class="margin-top-30">
          <div v-if="isLoading" class="loading-overlay">
            <div class="spinner"></div>
          </div>
          <DataTable style="border-bottom-left-radius: 10px; border-bottom-right-radius: 10px !important;"
            :value="billingTypeTable" tableStyle="min-width: 50rem" :paginator="true" :rows="10" dataKey="id"
            @row-click="handleRowClick" :selectionMode="'single'" v-model:selection="selectedRow" :row-class="rowClass">
            <Column v-for="col of columns" :key="col.field" :field="col.field" :header="col.label"></Column>
          </DataTable>
          <div class="flex justify-center mg-auto">
            <Button class="secondary-button flex align-center gap-10px">
              Imprimir <i class="pi pi-print"></i>
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
import Button from "primevue/button";
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import axios from "axios";

export default {
  name: "BillingType",
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
      columns: [
        {
          name: "TIPO_COBRANCA",
          required: true,
          label: "Código",
          align: "left",
          field: "TIPO_COBRANCA",
        },
        {
          name: "DESC_COBRANCA",
          required: true,
          label: "Descrição",
          align: "left",
          field: "DESC_COBRANCA",
        },

      ],
      billingTypeTable: [],
      selectedOption: null,
      isLoading: false,
      error: null,
      data: null,
    };
  },
  methods: {
    async fetchData() {
      this.isLoading = true;
      try {
        const response = await axios.get('http://localhost:3000/TIPO_COBRANCA_ALL');
        this.billingTypeTable = response.data;
      } catch (error) {
        console.error('Erro:', error);
        this.error = error.toString();
      } finally {
        this.isLoading = false;
      }
    },
  },
  async mounted() {
    await this.fetchData();
  },
};
</script>

<style scoped>
.loading-overlay {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 9999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}

.spinner {
  border: 16px solid #f3f3f3;
  border-top: 16px solid #3498db;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
}

.active-row {
  background-color: #f1f1f1 !important;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
