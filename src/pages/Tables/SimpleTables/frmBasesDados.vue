<template>
    <MenuApp />
    <CompanyTag />
    <div class="container">
      <div class="content">
        <section>
          <div class="intro-services-to-be-billed">
            <h1 ref="title" class="title-page">Bases de Dados</h1>
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
                :value="frmBasesDadosTable"
                tableStyle="min-width: 50rem"
                :paginator="true"
                :rows="10"
                dataKey="BA_NOME"
                @row-click="handleRowClick"
                :rowClass="rowClass"
              >
                <Column
                  v-for="col of columns"
                  :key="col.field"
                  :field="col.field"
                  :header="col.label"
                  :body="formatBody"
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
                    <p class="p-labels">Nome</p>
                    <input
                      v-model="selectedRow.BA_NOME"
                      maxlength="20"
                      class="inputs margin-bottom-30"
                      :disabled="!isEditing"
                    />
                  </div>
                  <div class="w-30">
                    <p class="p-labels">Descrição</p>
                    <input
                      v-model="selectedRow.BA_DESCRICAO"
                      maxlength="30"
                      class="inputs margin-bottom-30"
                      :disabled="!isEditing"
                    />
                  </div>
                  <div class="w-30">
                    <p class="p-labels">Banco</p>
                    <input
                      v-model="selectedRow.BA_BANCO"
                      maxlength="15"
                      class="inputs margin-bottom-30"
                      :disabled="!isEditing"
                    />
                  </div>
                </div>
                <div class="flex justify-space-between">
                  <div class="w-30">
                    <p class="p-labels">Imagem</p>
                    <input
                      v-model="selectedRow.BA_IMAGEM"
                      maxlength="30"
                      class="inputs margin-bottom-30"
                      :disabled="!isEditing"
                    />
                  </div>
                  <div class="w-30">
                    <p class="p-labels">URL Conexão</p>
                    <input
                      v-model="selectedRow.BA_URL_CONEXAO"
                      maxlength="250"
                      class="inputs margin-bottom-30"
                      :disabled="!isEditing"
                    />
                  </div>
                  <div class="w-30">
                    <p class="p-labels">Principal</p>
                    <input
                      type="checkbox"
                      v-model="selectedRow.BA_PRINCIPAL"
                      class="inputs margin-bottom-30"
                      :disabled="!isEditing"
                      :checked="selectedRow.BA_PRINCIPAL === 1"
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
                    <p class="p-labels">Nome</p>
                    <input
                      class="inputs margin-bottom-30"
                      maxlength="20"
                      v-model="addBaNome"
                    />
                  </div>
                  <div class="w-30">
                    <p class="p-labels">Descrição</p>
                    <input
                      class="inputs margin-bottom-30"
                      maxlength="30"
                      v-model="addBaDescricao"
                    />
                  </div>
                  <div class="w-30">
                    <p class="p-labels">Banco</p>
                    <input
                      class="inputs margin-bottom-30"
                      maxlength="15"
                      v-model="addBaBanco"
                    />
                  </div>
                </div>
                <div class="flex justify-space-between gap-4">
                  <div class="w-30">
                    <p class="p-labels">Imagem</p>
                    <input
                      class="inputs margin-bottom-30"
                      maxlength="30"
                      v-model="addBaImagem"
                    />
                  </div>
                  <div class="w-30">
                    <p class="p-labels">URL de conexão</p>
                    <input
                      class="inputs margin-bottom-30"
                      maxlength="250"
                      v-model="addBaUrlConexao"
                    />
                  </div>
                  <div class="w-30">
                    <p class="p-labels">Principal</p>
                    <input
                      type="checkbox"
                      class="inputs margin-bottom-30"
                      v-model="addBaPrincipal"
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
    name: "frmBasesDados",
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
        addBaNome: "",
        addBaDescricao: "",
        addBaBanco: "",
        addBaImagem: "",
        addBaUrlConexao: "",
        addBaPrincipal: false,
        columns: [
          {
            name: "BA_NOME",
            required: true,
            label: "Nome",
            align: "left",
            field: "BA_NOME",
          },
          {
            name: "BA_DESCRICAO",
            required: true,
            label: "Descrição",
            align: "left",
            field: "BA_DESCRICAO",
          },
          {
            name: "BA_BANCO",
            required: true,
            label: "Banco",
            align: "left",
            field: "BA_BANCO",
          },
          {
            name: "BA_IMAGEM",
            required: true,
            label: "Imagem",
            align: "left",
            field: "BA_IMAGEM",
          },
          {
            name: "BA_URL_CONEXAO",
            required: true,
            label: "URL de conexão",
            align: "left",
            field: "BA_URL_CONEXAO",
          },
          {
            name: "BA_PRINCIPAL",
            required: true,
            label: "Principal",
            align: "left",
            field: "BA_PRINCIPAL",
          },
        ],
        frmBasesDadosTable: [],
      };
    },
  
    methods: {
      handleAddRowClick(event) {
        this.addRow = event.data;
        this.addBaNome = "";
        this.addBaDescricao = "";
        this.addBaBanco = "";
        this.addBaImagem = "";
        this.addBaUrlConexao = "";
        this.addBaPrincipal = false;
      },
  
      handleRowClick(event) {
        this.selectedRow = { ...event.data };
        this.isEditing = false;
        this.showAddBox = false;
      },
  
      rowClass(data) {
        return {
          "pointer-cursor": true,
          "active-row":
            this.selectedRow && this.selectedRow.BA_NOME === data.BA_NOME,
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
          const response = await axios.post(`${baseUrl}/BASES_ADD`, {
            BA_NOME: this.addBaNome,
            BA_DESCRICAO: this.addBaDescricao,
            BA_BANCO: this.addBaBanco,
            BA_IMAGEM: this.addBaImagem,
            BA_URL_CONEXAO: this.addBaUrlConexao,
            BA_PRINCIPAL: this.addBaPrincipal ? 1 : 0,
            NOME_ATUALIZ: user.username,
          });
          console.log(response.data);
          await this.fetchData();
          this.resetAddForm();
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
          const response = await axios.get(`${baseUrl}/BASES_ALL`);
          this.data = response.data;
          this.frmBasesDadosTable = this.data.map(row => ({
            ...row,
            BA_PRINCIPAL: row.BA_PRINCIPAL === 1 ? 1 : 0,
          }));
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
            `${baseUrl}/BASES_DELETE/${this.selectedRow.BA_NOME}/${user.username}`
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
          const response = await axios.post(`${baseUrl}/BASES_UPDATE`, {
            BA_NOME: this.selectedRow.BA_NOME,
            BA_DESCRICAO: this.selectedRow.BA_DESCRICAO,
            BA_BANCO: this.selectedRow.BA_BANCO,
            BA_IMAGEM: this.selectedRow.BA_IMAGEM,
            BA_URL_CONEXAO: this.selectedRow.BA_URL_CONEXAO,
            BA_PRINCIPAL: this.selectedRow.BA_PRINCIPAL ? 1 : 0,
            NOME_ATUALIZ: user.username,
          });
  
          if (response.status === 200) {
            this.frmBasesDadosTable = this.frmBasesDadosTable.map((row) =>
              row.BA_NOME === this.selectedRow.BA_NOME
                ? { ...this.selectedRow, BA_PRINCIPAL: this.selectedRow.BA_PRINCIPAL ? 1 : 0 }
                : row
            );
            this.isEditing = false;
          } else {
            console.error("Erro ao atualizar a Base de Dados");
          }
        } catch (error) {
          console.error("Erro:", error);
          this.error = error.toString();
        } finally {
          this.isLoading = false;
        }
      },
  
      resetAddForm() {
        this.addBaNome = "";
        this.addBaDescricao = "";
        this.addBaBanco = "";
        this.addBaImagem = "";
        this.addBaUrlConexao = "";
        this.addBaPrincipal = false;
      },
  
      formatBody(rowData, column) {
        if (column.field === "BA_PRINCIPAL") {
          return rowData[column.field] === 1 ? "Sim" : "Não";
        }
        return rowData[column.field];
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
          body: this.frmBasesDadosTable.map((row) =>
            this.columns.map((col) => {
              if (col.field === "BA_PRINCIPAL") {
                return row[col.field] === 1 ? "Sim" : "Não";
              }
              return row[col.field];
            })
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
  
  