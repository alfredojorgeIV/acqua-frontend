<template>
    <MenuApp />
    <CompanyTag />
    <div class="container">
      <div class="content">
        <section>
          <div class="intro-services-to-be-billed">
            <h1 ref="title" class="title-page">Sistema Interagentes</h1>
          </div>
          <div>
            <div class="margin-top-30">
              <div v-if="isLoading" class="loading-overlay">
                <div class="spinner"></div>
              </div>
              <DataTable
                ref="dataTable"
                style="
                  border-bottom-left-radius: 10px;
                  border-bottom-right-radius: 10px !important;
                "
                :value="frmSistemaInteragemTable"
                tableStyle="min-width: 50rem"
                :paginator="true"
                :rows="10"
                dataKey="SI_CODIGO"
                @row-click="handleRowClick"
                :rowClass="rowClass"
              >
                <Column
                  v-for="col of columns"
                  :key="col.field"
                  :field="col.field"
                  :header="col.label"
                ></Column>
              </DataTable>
              <div class="flex justify-center gap-4 mt-40 mg-auto">
                <Button
                  class="mg-auto tertiary-button flex align-center"
                  @click="printPDF"
                >
                  Imprimir <i class="ml-10 pi pi-print"></i>
                </Button>
                <Button
                  class="mg-auto quaternary-button flex align-center"
                  @click="
                    showAddBox = true;
                    selectedRow = null;
                  "
                >
                  Adicionar <i class="ml-10 pi pi-plus-circle"></i>
                </Button>
              </div>
            </div>
            <div>
              <div class="box-tables-info" v-if="selectedRow && !showAddBox">
                <div class="flex justify-space-between">
                  <div class="w-30">
                    <p class="p-labels">Código</p>
                    <input
                      v-model="selectedRow.SI_CODIGO"
                      maxlength="5"
                      class="inputs margin-bottom-30"
                      :disabled="!isEditing"
                    />
                  </div>
                  <div class="w-30">
                    <p class="p-labels">Descrição</p>
                    <input
                      v-model="selectedRow.SI_DESCRICAO"
                      maxlength="15"
                      class="inputs margin-bottom-30"
                      :disabled="!isEditing"
                    />
                  </div>
                  <div class="w-30">
                    <p class="p-labels">Pasta</p>
                    <input
                      v-model="selectedRow.SI_PASTA"
                      maxlength="15"
                      class="inputs margin-bottom-30"
                      :disabled="!isEditing"
                    />
                  </div>
                </div>
                <div class="flex justify-space-between">
                  <div class="w-30">
                    <p class="p-labels">Executável</p>
                    <input
                      v-model="selectedRow.SI_EXECUTAVEL"
                      maxlength="15"
                      class="inputs margin-bottom-30"
                      :disabled="!isEditing"
                    />
                  </div>
                  <div class="w-30">
                    <p class="p-labels">Parâmetros</p>
                    <input
                      v-model="selectedRow.SI_PARAMETROS"
                      maxlength="15"
                      class="inputs margin-bottom-30"
                      :disabled="!isEditing"
                    />
                  </div>
                  <div class="w-30">
                    <p class="p-labels">Observação</p>
                    <input
                      v-model="selectedRow.SI_OBSERVACAO"
                      maxlength="15"
                      class="inputs margin-bottom-30"
                      :disabled="!isEditing"
                    />
                  </div>
                </div>
                <div class="flex justify-center gap-4 mt-40">
                  <Button
                    v-if="!isEditing"
                    class="primary-button flex align-center R-12-0-6"
                    @click="toggleEditing"
                  >
                    Alterar <i class="ml-10 pi pi-pencil"></i>
                  </Button>
                  <Button
                    v-if="isEditing"
                    class="save-button flex align-center"
                    @click="saveUpdate"
                  >
                    Salvar <i class="ml-10 pi pi-pencil"></i>
                  </Button>
                  <Button
                    class="cancel-button flex align-center gap-10px"
                    @click="cancelEditing"
                  >
                    Cancelar <i class="pi pi-times"></i>
                  </Button>
                  <Button
                    v-if="isEditing"
                    class="danger-button flex align-center gap-10px"
                    @click="confirmDelete"
                  >
                    Excluir <i class="pi pi-trash"></i>
                  </Button>
                </div>
              </div>
  
              <div class="box-tables-info" v-if="showAddBox && !selectedRow">
                <div class="flex justify-space-between gap-4">
                  <div class="w-30">
                    <p class="p-labels">Código</p>
                    <input
                      class="inputs margin-bottom-30"
                      maxlength="5"
                      v-model="addSiCodigo"
                    />
                  </div>
                  <div class="w-30">
                    <p class="p-labels">Descrição</p>
                    <input
                      class="inputs margin-bottom-30"
                      maxlength="15"
                      v-model="addSiDescricao"
                    />
                  </div>
                  <div class="w-30">
                    <p class="p-labels">Pasta</p>
                    <input
                      class="inputs margin-bottom-30"
                      maxlength="15"
                      v-model="addSiPasta"
                    />
                  </div>
                </div>
                <div class="flex justify-space-between gap-4">
                  <div class="w-30">
                    <p class="p-labels">Executável</p>
                    <input
                      class="inputs margin-bottom-30"
                      maxlength="15"
                      v-model="addSiPasta"
                    />
                  </div>
                  <div class="w-30">
                    <p class="p-labels">Parâmetros</p>
                    <input
                      class="inputs margin-bottom-30"
                      maxlength="15"
                      v-model="addSiParametros"
                    />
                  </div>
                  <div class="w-30">
                    <p class="p-labels">Observação</p>
                    <input
                      class="inputs margin-bottom-30"
                      maxlength="15"
                      v-model="addSiObservacao"
                    />
                  </div>
                </div>  
                <div class="flex justify-center gap-4 mt-40">
                  <Button
                    class="primary-button flex align-center"
                    @click="addToTable"
                  >
                    Inserir <i class="ml-10 pi pi-pencil"></i>
                  </Button>
                  <Button
                    class="danger-button flex align-center gap-10px"
                    @click="showAddBox = false"
                  >
                    Cancelar <i class="pi pi-cancel"></i>
                  </Button>
                </div>
              </div>
            </div>
            <Dialog
              header="Confirmar exclusão"
              :visible="showDeleteConfirmation"
              @hide="showDeleteConfirmation = false"
            >
              <p>Tem certeza que deseja excluir este item da tabela?</p>
              <div class="flex justify-center mt-30 gap-5">
                <Button
                  @click="showDeleteConfirmation = false"
                  class="primary-button"
                  >Não <i class="pi pi-cancel"></i
                ></Button>
                <Button class="danger-button" @click="deleteFromTable"
                  >Excluir</Button
                >
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
  import Dialog from "primevue/dialog";
  import "primevue/resources/themes/saga-blue/theme.css";
  import "primevue/resources/primevue.min.css";
  import "primeicons/primeicons.css";
  import axios from "axios";
  import jsPDF from "jspdf";
  import "jspdf-autotable";
  
  export default {
    name: "frmSistemaInteragem",
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
        selectedRow: null,
        addSiCodigo: "",
        addSiDescricao: "",
        addSiPasta: "",
        addSiParametros: "",
        addSiObservacao: "",
        columns: [
          {
            name: "SI_CODIGO",
            required: true,
            label: "Código",
            align: "left",
            field: "SI_CODIGO",
          },
          {
            name: "SI_DESCRICAO",
            required: true,
            label: "Descrição",
            align: "left",
            field: "SI_DESCRICAO",
          },
          {
            name: "SI_PASTA",
            required: true,
            label: "Pasta",
            align: "left",
            field: "SI_PASTA",
          },
          {
            name: "SI_EXECUTAVEL",
            required: true,
            label: "Executável",
            align: "left",
            field: "SI_EXECUTAVEL",
          },
          {
            name: "SI_PARAMETROS",
            required: true,
            label: "Parâmetros",
            align: "left",
            field: "SI_PARAMETROS",
          },
          {
            name: "SI_OBSERVACAO",
            required: true,
            label: "Observação",
            align: "left",
            field: "SI_OBSERVACAO",
          },
    ],
        frmSistemaInteragemTable: [],
      };
    },
  
    methods: {
      handleAddRowClick(event) {
        this.addRow = event.data;
        this.addSiCodigo = "";
        this.addSiDescricao = "";
        this.addSiPasta = "";
        this.addSiPasta = "";
        this.addSiParametros = "";
        this.addSiObservacao = "";
       },
  
      handleRowClick(event) {
        this.selectedRow = event.data;
        this.isEditing = false;
        this.showAddBox = false;
      },
  
      rowClass(data) {
        return {
          "pointer-cursor": true,
          "active-row":
            this.selectedRow && this.selectedRow.SI_CODIGO === data.SI_CODIGO,
        };
      },
  
      confirmDelete() {
        this.showDeleteConfirmation = true;
      },
  
      async addToTable() {
        this.isLoading = true;
        const user = JSON.parse(localStorage.getItem("user") || "{}");
        const baseUrl = user.databaseUrl || "http://localhost:3000";
        try {
          const response = await axios.post(`${baseUrl}/SISTEMA_INTERAGEM_ADD`, {
            SI_CODIGO: Number(this.addSiCodigo),
            SI_DESCRICAO: this.addSiDescricao,
            SI_PASTA: this.addSiPasta,
            SI_EXECUTAVEL: this.addSiPasta,
            SI_PARAMETROS: this.addSiParametros,
            SI_OBSERVACAO: this.addSiObservacao,
          });
          console.log(response.data);
          await this.fetchData();
          this.addSiCodigo = "";
          this.addSiDescricao = "";
          this.showAddBox = false;
        } catch (error) {
          console.error("Erro:", error);
          this.error = error.toString();
        } finally {
          this.isLoading = false;
        }
      },
  
      async fetchData() {
        this.isLoading = true;
        const user = JSON.parse(localStorage.getItem("user") || "{}");
        const baseUrl = user.databaseUrl || "http://localhost:3000";
        try {
          const response = await axios.get(`${baseUrl}/SISTEMA_INTERAGEM_ALL`);
          this.data = response.data;
          this.frmSistemaInteragemTable = this.data;
        } catch (error) {
          console.error("Erro:", error);
          this.error = error.toString();
        } finally {
          this.isLoading = false;
        }
      },
  
      async deleteFromTable() {
        this.isLoading = true;
        const user = JSON.parse(localStorage.getItem("user") || "{}");
        const baseUrl = user.databaseUrl || "http://localhost:3000";
        try {
          const response = await axios.delete(
            `${baseUrl}/SISTEMA_INTERAGEM_DELETE/${this.selectedRow.SI_CODIGO}/${user.username}`
          );
          console.log(response.data);
          await this.fetchData();
          this.showDeleteConfirmation = false;
          this.selectedRow = null;
        } catch (error) {
          console.error("Erro:", error);
          this.error = error.toString();
        } finally {
          this.isLoading = false;
        }
      },
  
      async toggleEditing() {
        this.isEditing = !this.isEditing;
      },
  
      async cancelEditing() {
        this.selectedRow = null;
        this.isEditing = false;
      },
  
      async saveUpdate() {
        this.isLoading = true;
        this.isEditing = false;
        const user = JSON.parse(localStorage.getItem("user") || "{}");
        const baseUrl = user.databaseUrl || "http://localhost:3000";
        try {
          const response = await axios.post(`${baseUrl}/SISTEMA_INTERAGEM_UPDATE`, {
            SI_CODIGO: Number(this.selectedRow.SI_CODIGO),
            SI_DESCRICAO: this.selectedRow.SI_DESCRICAO,
            SI_PASTA: this.selectedRow.SI_PASTA,
            SI_EXECUTAVEL: this.selectedRow.SI_EXECUTAVEL,
            SI_PARAMETROS: this.selectedRow.SI_PARAMETROS,
            SI_OBSERVACAO: this.selectedRow.SI_OBSERVACAO,
            NOME_ATUALIZ: user.username,
          });
  
          if (response.status === 200) {
            this.frmSistemaInteragemTable = this.frmSistemaInteragemTable.map((row) =>
              row.SI_CODIGO === this.selectedRow.SI_CODIGO
                ? this.selectedRow
                : row
            );
            this.isEditing = false;
          } else {
            console.error("Erro ao atualizar a Capacidade do HD");
          }
        } catch (error) {
          console.error("Erro:", error);
          this.error = error.toString();
        } finally {
          this.isLoading = false;
        }
      },
  
      printPDF() {
        const doc = new jsPDF();
        const title = this.$refs.title.innerText || "tabela";
        const user = JSON.parse(localStorage.getItem("user") || "{}");
        const databaseName = user.databaseName || "Desconhecida";
        const currentDate = new Date().toLocaleDateString();
  
        doc.text(`Data do Download: ${currentDate}`, 10, 10);
        doc.text(`Base de Dados: ${databaseName}`, 10, 20);
        doc.autoTable({
          startY: 30,
          head: [this.columns.map((col) => col.label)],
          body: this.frmSistemaInteragemTable.map((row) =>
            this.columns.map((col) => row[col.field])
          ),
          theme: "grid",
        });
        doc.save(`${title}_${currentDate}.pdf`);
      },
    },
  
    async mounted() {
      await this.fetchData();
    },
  };
  </script>
  