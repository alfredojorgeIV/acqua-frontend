<template>
  <MenuApp />
  <CompanyTag />
  <div class="container">
    <div class="content">
      <section>
        <div class="intro-services-to-be-billed">
          <h1 ref="title" class="title-page">APP - Menu</h1>
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
              :value="frmAPPMenuTable"
              tableStyle="min-width: 50rem"
              :paginator="true"
              :rows="10"
              dataKey="ITEM"
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
                  <p class="p-labels">Item</p>
                  <input
                    v-model="selectedRow.ITEM"
                    maxlength="5"
                    class="inputs margin-bottom-30"
                    :disabled="!isEditing"
                  />
                </div>
                <div class="w-30">
                  <p class="p-labels">Componente</p>
                  <input
                    v-model="selectedRow.COMPONENTE"
                    maxlength="15"
                    class="inputs margin-bottom-30"
                    :disabled="!isEditing"
                  />
                </div>
                <div class="w-30">
                  <p class="p-labels">Valor</p>
                  <input
                    v-model="selectedRow.VALOR"
                    maxlength="15"
                    class="inputs margin-bottom-30"
                    :disabled="!isEditing"
                  />
                </div>
              </div>
              <div class="flex justify-space-between">
                <div class="w-30">
                  <p class="p-labels">Descrição</p>
                  <input
                    v-model="selectedRow.DESCRICAO"
                    maxlength="15"
                    class="inputs margin-bottom-30"
                    :disabled="!isEditing"
                  />
                </div>
                <div class="w-30">
                  <p class="p-labels">Page</p>
                  <input
                    v-model="selectedRow.PAGE"
                    maxlength="15"
                    class="inputs margin-bottom-30"
                    :disabled="!isEditing"
                  />
                </div>
                <div class="w-30">
                  <p class="p-labels">Nível</p>
                  <input
                    v-model="selectedRow.NIVEL"
                    maxlength="15"
                    class="inputs margin-bottom-30"
                    :disabled="!isEditing"
                  />
                </div>
              </div>
              <div class="flex justify-space-between">
                <div class="w-30">
                  <p class="p-labels">Item pai</p>
                  <input
                    v-model="selectedRow.ITEM_PAI"
                    maxlength="15"
                    class="inputs margin-bottom-30"
                    :disabled="!isEditing"
                  />
                </div>
                <div class="w-30">
                  <p class="p-labels">Nível pai</p>
                  <input
                    v-model="selectedRow.NIVEL_PAI"
                    maxlength="15"
                    class="inputs margin-bottom-30"
                    :disabled="!isEditing"
                  />
                </div>
                <div class="w-30">
                  <p class="p-labels">Ordem</p>
                  <input
                    v-model="selectedRow.ORDEM"
                    maxlength="15"
                    class="inputs margin-bottom-30"
                    :disabled="!isEditing"
                  />
                </div>
              </div>
              <div class="flex justify-space-between">
                <div class="w-30">
                  <p class="p-labels">Valida matrícula</p>
                  <input
                    v-model="selectedRow.VALIDA_MATRICULA"
                    maxlength="15"
                    class="inputs margin-bottom-30"
                    :disabled="!isEditing"
                  />
                </div>

                <div class="w-30">
                  <p class="p-labels">Sistema</p>
                  <input
                    v-model="selectedRow.SISTEMA"
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
                  <p class="p-labels">Item</p>
                  <input
                    class="inputs margin-bottom-30"
                    maxlength="5"
                    v-model="addItem"
                  />
                </div>
                <div class="w-30">
                  <p class="p-labels">Componente</p>
                  <input
                    class="inputs margin-bottom-30"
                    maxlength="15"
                    v-model="addComponente"
                  />
                </div>
                <div class="w-30">
                  <p class="p-labels">Valor</p>
                  <input
                    class="inputs margin-bottom-30"
                    maxlength="15"
                    v-model="addValor"
                  />
                </div>
              </div>
              <div class="flex justify-space-between gap-4">
                <div class="w-30">
                  <p class="p-labels">Descrição</p>
                  <input
                    class="inputs margin-bottom-30"
                    maxlength="15"
                    v-model="addDescricao"
                  />
                </div>
                <div class="w-30">
                  <p class="p-labels">Page</p>
                  <input
                    class="inputs margin-bottom-30"
                    maxlength="15"
                    v-model="addPage"
                  />
                </div>
                <div class="w-30">
                  <p class="p-labels">Nível</p>
                  <input
                    class="inputs margin-bottom-30"
                    maxlength="15"
                    v-model="addNivel"
                  />
                </div>
              </div>
              <div class="flex justify-space-between gap-4">
                <div class="w-30">
                  <p class="p-labels">Item pai</p>
                  <input
                    class="inputs margin-bottom-30"
                    maxlength="15"
                    v-model="addItemPai"
                  />
                </div>
                <div class="w-30">
                  <p class="p-labels">Nível pai</p>
                  <input
                    class="inputs margin-bottom-30"
                    maxlength="15"
                    v-model="addNivelPai"
                  />
                </div>
                <div class="w-30">
                  <p class="p-labels">Ordem</p>
                  <input
                    class="inputs margin-bottom-30"
                    maxlength="15"
                    v-model="addOrdem"
                  />
                </div>
              </div>
              <div class="flex justify-space-between gap-4">
                <div class="w-30">
                  <p class="p-labels">Valida matrícula</p>
                  <input
                    class="inputs margin-bottom-30"
                    maxlength="15"
                    v-model="addValidaMatricula"
                  />
                </div>
                <div class="w-30">
                  <p class="p-labels">Sistema</p>
                  <input
                    class="inputs margin-bottom-30"
                    maxlength="15"
                    v-model="addSistema"
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
  name: "frmAPPMenu",
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
      addItem: "",
      addComponente: "",
      addValor: "",
      addDescricao: "",
      addPage: "",
      addNivel: "",
      addItemPai: "",
      addNivelPai: "",
      addOrdem: "",
      addValidaMatricula: "",
      addSistema: "",
      columns: [
        {
          name: "ITEM",
          required: true,
          label: "Item",
          align: "left",
          field: "ITEM",
        },
        {
          name: "COMPONENTE",
          required: true,
          label: "Componente",
          align: "left",
          field: "COMPONENTE",
        },
        {
          name: "VALOR",
          required: true,
          label: "Valor",
          align: "left",
          field: "VALOR",
        },
        {
          name: "DESCRICAO",
          required: true,
          label: "Descrição",
          align: "left",
          field: "DESCRICAO",
        },
        {
          name: "PAGE",
          required: true,
          label: "Page",
          align: "left",
          field: "PAGE",
        },
        {
          name: "NIVEL",
          required: true,
          label: "Nível",
          align: "left",
          field: "NIVEL",
        },
        {
          name: "ITEM_PAI",
          required: true,
          label: "Item pai",
          align: "left",
          field: "ITEM_PAI",
        },
        {
          name: "NIVEL_PAI",
          required: true,
          label: "Nível pai",
          align: "left",
          field: "NIVEL_PAI",
        },
        {
          name: "ORDEM",
          required: true,
          label: "Ordem",
          align: "left",
          field: "ORDEM",
        },
        {
          name: "VALIDA_MATRICULA",
          required: true,
          label: "Valida matrícula",
          align: "left",
          field: "VALIDA_MATRICULA",
        },
        {
          name: "SISTEMA",
          required: true,
          label: "Sistema",
          align: "left",
          field: "SISTEMA",
        },
      ],
      frmAPPMenuTable: [],
    };
  },

  methods: {
    handleAddRowClick(event) {
      this.addRow = event.data;
      this.addItem = "";
      this.addComponente = "";
      this.addValor = "";
      this.addDescricao = "";
      this.addPage = "";
      this.addNivel = "";
      this.addItemPai = "";
      this.addNivelPai = "";
      this.addOrdem = "";
      this.addValidaMatricula = "";
      this.addSistema = "";
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
          this.selectedRow && this.selectedRow.ITEM === data.ITEM,
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
        const response = await axios.post(`${baseUrl}/APP_MENU_ADD`, {
          ITEM: Number(this.addItem),
          COMPONENTE: this.addComponente,
          VALOR: Number(this.addValor),
          DESCRICAO: this.addDescricao,
          PAGE: Number(this.addPage),
          NIVEL: Number(this.addNivel),
          ITEM_PAI: Number(this.addItemPai),
          NIVEL_PAI: Number(this.addNivelPai),
          ORDEM: Number(this.addOrdem),
          VALIDA_MATRICULA: Number(this.addValidaMatricula),
          SISTEMA: this.addSistema,
          NOME_ATUALIZ: user.username,
        });
        console.log(response.data);
        await this.fetchData();
        this.addItem = "";
        this.addComponente = "";
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
        const response = await axios.get(`${baseUrl}/APP_MENU_ALL`);
        this.data = response.data;
        this.frmAPPMenuTable = this.data;
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
          `${baseUrl}/APP_MENU_DELETE/${this.selectedRow.ITEM}/${user.username}`
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
        const response = await axios.post(`${baseUrl}/APP_MENU_UPDATE`, {
          ITEM: Number(this.selectedRow.ITEM),
          COMPONENTE: this.selectedRow.COMPONENTE,
          VALOR: Number(this.selectedRow.VALOR),
          DESCRICAO: this.selectedRow.DESCRICAO,
          PAGE: this.selectedRow.PAGE,
          NIVEL: Number(this.selectedRow.NIVEL),
          ITEM_PAI: Number(this.selectedRow.ITEM_PAI),
          NIVEL_PAI: Number(this.selectedRow.NIVEL_PAI),
          ORDEM: Number(this.selectedRow.ORDEM),
          VALIDA_MATRICULA: Number(this.selectedRow.VALIDA_MATRICULA),
          SISTEMA: this.selectedRow.SISTEMA,
         NOME_ATUALIZ: user.username,
        });

        if (response.status === 200) {
          this.frmAPPMenuTable = this.frmAPPMenuTable.map((row) =>
            row.ITEM === this.selectedRow.ITEM
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
        body: this.frmAPPMenuTable.map((row) =>
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
