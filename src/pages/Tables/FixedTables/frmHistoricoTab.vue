<template>
  <MenuApp />
  <CompanyTag />
  <div class="container">
    <div class="content">
      <section>
        <div class="intro-services-to-be-billed">
          <h1 class="title-page">Histórico de tabelas</h1>
        </div>

        <div class="filters">
          <div class="filter-item">
            <label for="user">Usuário:</label>
            <select v-model="selectedUser" @change="fetchUserHistory">
              <option v-for="user in users" :key="user.id" :value="user.id">{{ user.name }}</option>
            </select>
          </div>
          <div class="filter-item">
            <label for="table">Tabela:</label>
            <select v-model="selectedTable" @change="fetchTableHistory">
              <option v-for="table in tables" :key="table.id" :value="table.id">{{ table.name }}</option>
            </select>
          </div>
          <Button @click="fetchFilteredData" class="primary-button">Buscar</Button>
        </div>

        <div class="margin-top-30">
          <div v-if="isLoading" class="loading-overlay">
            <div class="spinner"></div>
          </div>
          <DataTable
            style="border-bottom-left-radius: 10px; border-bottom-right-radius: 10px !important;"
            :value="frmHistoricoTabTable"
            tableStyle="min-width: 50rem"
            :paginator="true"
            :rows="10"
            dataKey="TABELA"
            @row-click="handleRowClick"
            :rowClass="rowClass"
            @page="onPageChange"
          >
            <Column v-for="col in columns" :key="col.field" :field="col.field" :header="col.label"></Column>
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
  name: "frmHistoricoTab",
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
      columns: [
        {
          name: "TABELA",
          required: true,
          label: "Código",
          align: "left",
          field: "TABELA",
        },
        {
          name: "OPERACAO",
          required: true,
          label: "Descrição",
          align: "left",
          field: "OPERACAO",
        },
      ],
      frmHistoricoTabTable: [],
      isLoading: false,
      error: null,
      currentPage: 1,
      rowsPerPage: 10,
      selectedUser: null,
      selectedTable: null,
      users: [],
      tables: [],
    };
  },
  methods: {
    handleRowClick(event) {
      this.selectedRow = event.data;
    },
    rowClass(data) {
      return {
        'pointer-cursor': true,
        'active-row': this.selectedRow && this.selectedRow.TABELA === data.TABELA,
      };
    },
    async fetchData(page = 1, rowsPerPage = 10) {
      this.isLoading = true;
      try {
        const response = await axios.get(`http://localhost:3000/HISTORICO_TABELAS_ALL?page=${page}&limit=${rowsPerPage}`);
        this.frmHistoricoTabTable = response.data;
      } catch (error) {
        console.error('Erro:', error);
        this.error = error.toString();
      } finally {
        this.isLoading = false;
      }
    },
    async fetchFilteredData() {
      this.isLoading = true;
      try {
        const response = await axios.get('http://localhost:3000/FILTERED_HISTORICO_TABELAS', {
          params: {
            userId: this.selectedUser,
            tableId: this.selectedTable,
          },
        });
        this.frmHistoricoTabTable = response.data;
      } catch (error) {
        console.error('Erro:', error);
        this.error = error.toString();
      } finally {
        this.isLoading = false;
      }
    },
    async fetchUsers() {
      try {
        const response = await axios.get('http://localhost:3000/USUARIOS_HISTORICO_TABELAS_ALL');
        this.users = response.data;
      } catch (error) {
        console.error('Erro:', error);
      }
    },
    async fetchTables() {
      try {
        const response = await axios.get('http://localhost:3000/TABELAS_HISTORICO_ALL');
        this.tables = response.data;
      } catch (error) {
        console.error('Erro:', error);
      }
    },
    onPageChange(event) {
      this.currentPage = event.page + 1;
      this.fetchFilteredData(this.currentPage, this.rowsPerPage);
    },
  },
  async mounted() {
    await this.fetchUsers();
    await this.fetchTables();
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
