<template>
  <MenuApp />
  <CompanyTag />
  <div class="container">
    <div class="content">
      <section>
        <div class="intro-services-to-be-billed">
          <h1 class="title-page">Tipo de despejo</h1>
        </div>
        <div class="flex gap-4">
          <div class="w-61 margin-top-30">
            <div v-if="isLoading" class="loading-overlay">
              <div class="spinner"></div>
            </div>
            <DataTable style="border-bottom-left-radius: 10px; border-bottom-right-radius: 10px !important;"
              :value="dumpTypeTable" tableStyle="min-width: 50rem" :paginator="true" :rows="10" dataKey="id"
              @row-click="handleRowClick" :selectionMode="'single'" v-model:selection="selectedRow"
              :row-class="rowClass">
              <Column v-for="col of columns" :key="col.field" :field="col.field" :header="col.label"></Column>
            </DataTable>
            <div class="flex justify-center gap-4 mt-40 w-48 mg-auto">
              <Button class="mg-auto tertiary-button flex align-center">
                Imprimir <i class="ml-10 pi pi-print"></i>
              </Button>
              <Button class="mg-auto quaternary-button flex align-center"
                @click="showAddBox = true; selectedRow = null">
                Adicionar <i class="ml-10 pi pi-plus-circle"></i>
              </Button>
            </div>
          </div>
          <div class="w-35">
            <div class="box-tables-info" v-if="selectedRow && !showAddBox">
              <p class="p-labels">Código</p>
              <input v-model="selectedRow.TIPO_DESPEJO" class="inputs margin-bottom-30" :disabled="!isEditing" />
              <p class="p-labels">Descrição</p>
              <input v-model="selectedRow.DESC_DESPEJO" class="inputs margin-bottom-30" :disabled="!isEditing" />
              <div class="flex justify-center gap-4 mt-40">
                <Button class="primary-button flex align-center" @click="toggleEditing">
                  Atualizar <i class="ml-10 pi pi-pencil"></i>
                </Button>
                <Button class="primary-button flex align-center" @click="saveUpdate">
                  Salvar <i class="ml-10 pi pi-pencil"></i>
                </Button>
                <Button class="danger-button flex align-center gap-10px" @click="confirmDelete">
                  Excluir <i class="pi pi-trash"></i>
                </Button>
              </div>
            </div>

            <div class="box-tables-info" v-if="showAddBox && !selectedRow">
              <p class="p-labels">Código</p>
              <input class="inputs margin-bottom-30" v-model="addTIPO_DESPEJO" />
              <p class="p-labels">Descrição</p>
              <input class="inputs margin-bottom-30" v-model="addDescricao" />

              <div class="flex justify-center gap-4 mt-40">
                <Button class="primary-button flex align-center" @click="addTIPO_DESPEJOTarifa">
                  Inserir <i class="ml-10 pi pi-pencil"></i>
                </Button>
                <Button class="danger-button flex align-center gap-10px" @click="cancelAdd">
                  Cancelar <i class="pi pi-cancel"></i>
                </Button>
              </div>
            </div>
          </div>
          <Dialog header="Confirmar exclusão" :visible="showDeleteConfirmation" @hide="showDeleteConfirmation = false">
            <p>Tem certeza que deseja excluir este item da tabela?</p>
            <div class="flex justify-center mt-30 gap-5">
              <Button @click="showDeleteConfirmation = false" class="primary-button">Não <i class="pi pi-cancel"></i></Button>
              <Button class="danger-button" @click="deleteTaxCategory">Excluir</Button>
            </div>
          </Dialog>
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
import Dialog from 'primevue/dialog';
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import axios from "axios";

export default {
  name: "DumpType",
  components: {
    MenuApp,
    CompanyTag,
    DataTable,
    Column,
    Button,
    Dialog,
  },

  data() {
    return {
      isEditing: false,
      showDeleteConfirmation: false,
      showAddBox: false,
      data: null,
      error: null,
      isLoading: false,
      selected: [],
      selectedRow: null,
      columns: [
        {
          name: "TIPO_DESPEJO",
          required: true,
          label: "Código",
          align: "left",
          field: "TIPO_DESPEJO",
        },
        {
          name: "DESC_DESPEJO",
          required: true,
          label: "Descrição",
          align: "left",
          field: "DESC_DESPEJO",
        },
      ],
      dumpTypeTable: [],
      addTIPO_DESPEJO: '',
      addDescricao: '',
    };
  },

  methods: {
    handleAddRowClick(event) {
      this.addRow = event.data;
      this.addTIPO_DESPEJO = ''; // Corrected
      this.addDescricao = ''; // Corrected
    },

    handleRowClick(rowData) {
      if (this.selectedRow === rowData) {
        this.selectedRow = null;
      } else {
        this.selectedRow = rowData;
        this.isEditing = false;
        this.showAddBox = false;
      }
    },
    rowClass(rowData) {
      return this.selectedRow === rowData ? 'active-row' : '';
    },

    confirmDelete() {
      this.showDeleteConfirmation = true;
    },

    async addTIPO_DESPEJOTarifa() {
      this.isLoading = true;
      try {
        const response = await axios.post('http://localhost:3000/TIPO_DESPEJO_ADD', {
          TIPO_DESPEJO: Number(this.addTIPO_DESPEJO), // Corrected
          DESC_DESPEJO: this.addDescricao,
          NOME_ATUALIZ: "Luiza"
        });
        console.log(response.data);
        await this.fetchData();
        this.addTIPO_DESPEJO = ''; // Corrected
        this.addDescricao = ''; // Corrected
        this.showAddBox = false;
      } catch (error) {
        console.error('Erro:', error);
        this.error = error.toString();
      } finally {
        this.isLoading = false;
      }
    },
    async fetchData() {
      this.isLoading = true;
      try {
        const response = await axios.get('http://localhost:3000/TIPO_DESPEJO_ALL');
        this.data = response.data;
        this.dumpTypeTable = this.data;
      } catch (error) {
        console.error('Erro:', error);
        this.error = error.toString();
      } finally {
        this.isLoading = false;
      }
    },
    async deleteTaxCategory() {
      this.isLoading = true;
      try {
        const response = await axios.delete(`http://localhost:3000/TIPO_DESPEJO_DELETE/${this.selectedRow.TIPO_DESPEJO}`);
        console.log(response.data);
        await this.fetchData();
        this.showDeleteConfirmation = false;
        this.selectedRow = null;
      } catch (error) {
        console.error('Erro:', error);
        this.error = error.toString();
      } finally {
        this.isLoading = false;
      }
    },
    toggleEditing() {
      this.isEditing = !this.isEditing;
    },

    async saveUpdate() {
      this.isLoading = true;
      try {
        const response = await axios.post(`http://localhost:3000/TIPO_DESPEJO_UPDATE`, {
          TIPO_DESPEJO: this.selectedRow.TIPO_DESPEJO,
          DESC_DESPEJO: this.selectedRow.DESC_DESPEJO,
          NOME_ATUALIZ: "Luiza"
        });

        if (response.status === 200) {
          this.dumpTypeTable = this.dumpTypeTable.map(row => row.TIPO_DESPEJO === this.selectedRow.TIPO_DESPEJO ? this.selectedRow : row);
          this.isEditing = false;
        } else {
          console.error("Erro ao atualizar a TIPO_DESPEJO de tarifa");
        }
      } catch (error) {
        console.error('Erro:', error);
        this.error = error.toString();
      } finally {
        this.isLoading = false;
      }
    },
    cancelAdd() {
      this.showAddBox = false;
      this.addTIPO_DESPEJO = ''; // Clear input
      this.addDescricao = ''; // Clear input
    }
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
