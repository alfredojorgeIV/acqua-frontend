<template>
  <MenuApp />
  <CompanyTag />
  <div class="container">
    <div class="content">
      <section>
        <div class="intro-services-to-be-billed">
          <h1 ref="title" class="title-page">Imobiliária</h1>
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
              :value="frmImobiliariaTable"
              tableStyle="min-width: 50rem"
              :paginator="true"
              :rows="10"
              dataKey="IMOBILIARIA"
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
                    v-model="selectedRow.IMOBILIARIA"
                    maxlength="5"
                    class="inputs margin-bottom-30"
                    :disabled="!isEditing"
                  />
                </div>
                <div class="w-30">
                  <p class="p-labels">Nome</p>
                  <input
                    v-model="selectedRow.NOME_IMOBILIARIA"
                    maxlength="15"
                    class="inputs margin-bottom-30"
                    :disabled="!isEditing"
                  />
                </div>
                <div class="w-30">
                  <p class="p-labels">Endereço</p>
                  <input
                    v-model="selectedRow.END_IMOBILIARIA"
                    maxlength="15"
                    class="inputs margin-bottom-30"
                    :disabled="!isEditing"
                  />
                </div>
              </div>
              <div class="flex justify-space-between">
                <div class="w-30">
                  <p class="p-labels">Número do imóvel</p>
                  <input
                    v-model="selectedRow.NUM_IMOVEL_IMOB"
                    maxlength="15"
                    class="inputs margin-bottom-30"
                    :disabled="!isEditing"
                  />
                </div>
                <div class="w-30">
                  <p class="p-labels">Telefone</p>
                  <input
                    v-model="selectedRow.FONE_IMOBILIARIA"
                    maxlength="15"
                    class="inputs margin-bottom-30"
                    :disabled="!isEditing"
                  />
                </div>
                <div class="w-30">
                  <p class="p-labels">Contato</p>
                  <input
                    v-model="selectedRow.CONTACTO_IMOB"
                    maxlength="15"
                    class="inputs margin-bottom-30"
                    :disabled="!isEditing"
                  />
                </div>
              </div>
              <div class="flex justify-space-between">
                <div class="w-30">
                  <p class="p-labels">Ramal</p>
                  <input
                    v-model="selectedRow.RAMAL_CONTACTO"
                    maxlength="15"
                    class="inputs margin-bottom-30"
                    :disabled="!isEditing"
                  />
                </div>
                <div class="w-30">
                  <p class="p-labels">CEP</p>
                  <input
                    v-model="selectedRow.CEP_IMOBILIARIA"
                    maxlength="15"
                    class="inputs margin-bottom-30"
                    :disabled="!isEditing"
                  />
                </div>
                <div class="w-30">
                  <p class="p-labels">CGC</p>
                  <input
                    v-model="selectedRow.CGC_IMOBILIARIA"
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
                    v-model="addImobiliaria"
                  />
                </div>
                <div class="w-30">
                  <p class="p-labels">Nome</p>
                  <input
                    class="inputs margin-bottom-30"
                    maxlength="15"
                    v-model="addNomeImobiliaria"
                  />
                </div>
                <div class="w-30">
                  <p class="p-labels">Endereço</p>
                  <input
                    class="inputs margin-bottom-30"
                    maxlength="15"
                    v-model="addEndImobiliaria"
                  />
                </div>
              </div>
              <div class="flex justify-space-between gap-4">
                <div class="w-30">
                  <p class="p-labels">Número do imóvel</p>
                  <input
                    class="inputs margin-bottom-30"
                    maxlength="15"
                    v-model="addNumImovelImob"
                  />
                </div>
                <div class="w-30">
                  <p class="p-labels">Telefone</p>
                  <input
                    class="inputs margin-bottom-30"
                    maxlength="15"
                    v-model="addFoneImobiliaria"
                  />
                </div>
                <div class="w-30">
                  <p class="p-labels">Contato</p>
                  <input
                    class="inputs margin-bottom-30"
                    maxlength="15"
                    v-model="addContactoImob"
                  />
                </div>
              </div>
              <div class="flex justify-space-between gap-4">
                <div class="w-30">
                  <p class="p-labels">Ramal</p>
                  <input
                    class="inputs margin-bottom-30"
                    maxlength="15"
                    v-model="addRamalContacto"
                  />
                </div>
                <div class="w-30">
                  <p class="p-labels">CEP</p>
                  <input
                    class="inputs margin-bottom-30"
                    maxlength="15"
                    v-model="addCepImobiliaria"
                  />
                </div>
                <div class="w-30">
                  <p class="p-labels">CGC</p>
                  <input
                    class="inputs margin-bottom-30"
                    maxlength="15"
                    v-model="addCgcImobiliaria"
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
  name: "frmImobiliaria",
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
      addImobiliaria: "",
      addNomeImobiliaria: "",
      columns: [
        {
          name: "IMOBILIARIA",
          required: true,
          label: "Código",
          align: "left",
          field: "IMOBILIARIA",
        },
        {
          name: "NOME_IMOBILIARIA",
          required: true,
          label: "Nome",
          align: "left",
          field: "NOME_IMOBILIARIA",
        },
        {
          name: "END_IMOBILIARIA",
          required: true,
          label: "Endereço",
          align: "left",
          field: "END_IMOBILIARIA",
        },
        {
          name: "NUM_IMOVEL_IMOB",
          required: true,
          label: "Número do imóvel",
          align: "left",
          field: "NUM_IMOVEL_IMOB",
        },
        {
          name: "FONE_IMOBILIARIA",
          required: true,
          label: "Telefone",
          align: "left",
          field: "FONE_IMOBILIARIA",
        },
        {
          name: "CONTACTO_IMOB",
          required: true,
          label: "Contato",
          align: "left",
          field: "CONTACTO_IMOB",
        },
        {
          name: "RAMAL_CONTACTO",
          required: true,
          label: "Ramal",
          align: "left",
          field: "RAMAL_CONTACTO",
        },
        {
          name: "CEP_IMOBILIARIA",
          required: true,
          label: "CEP",
          align: "left",
          field: "CEP_IMOBILIARIA",
        },
        {
          name: "CGC_IMOBILIARIA",
          required: true,
          label: "CGC",
          align: "left",
          field: "CGC_IMOBILIARIA",
        },
      ],
      frmImobiliariaTable: [],
    };
  },

  methods: {
    handleAddRowClick(event) {
      this.addRow = event.data;
      this.addImobiliaria = "";
      this.addNomeImobiliaria = "";
      this.addEndImobiliaria = "";
      this.addNumImovelImob = "";
      this.addFoneImobiliaria = "";
      this.addContactoImob = "";
      this.addRamalContacto = "";
      this.addCepImobiliaria = "";
      this.addCgcImobiliaria = "";
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
          this.selectedRow && this.selectedRow.IMOBILIARIA === data.IMOBILIARIA,
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
        const response = await axios.post(`${baseUrl}/IMOBILIARIA_ADD`, {
          IMOBILIARIA: Number(this.addImobiliaria),
          NOME_IMOBILIARIA: this.addNomeImobiliaria,
          END_IMOBILIARIA: this.addEndImobiliaria,
          NUM_IMOVEL_IMOB: this.addNumImovelImob,
          FONE_IMOBILIARIA: this.addFoneImobiliaria,
          CONTACTO_IMOB: this.addContactoImob,
          RAMAL_CONTACTO: this.addRamalContacto,
          CEP_IMOBILIARIA: this.addCepImobiliaria,
          CGC_IMOBILIARIA: this.addCgcImobiliaria,
          NOME_ATUALIZ: user.username,
        });
        console.log(response.data);
        await this.fetchData();
        this.addImobiliaria = "";
        this.addNomeImobiliaria = "";
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
        const response = await axios.get(`${baseUrl}/IMOBILIARIA_ALL`);
        this.data = response.data;
        this.frmImobiliariaTable = this.data;
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
          `${baseUrl}/IMOBILIARIA_DELETE/${this.selectedRow.IMOBILIARIA}/${user.username}`
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
        const response = await axios.post(`${baseUrl}/IMOBILIARIA_UPDATE`, {
          IMOBILIARIA: Number(this.selectedRow.IMOBILIARIA),
          NOME_IMOBILIARIA: this.selectedRow.NOME_IMOBILIARIA,
          END_IMOBILIARIA: this.selectedRow.END_IMOBILIARIA,
          NUM_IMOVEL_IMOB: this.selectedRow.NUM_IMOVEL_IMOB,
          FONE_IMOBILIARIA: this.selectedRow.FONE_IMOBILIARIA,
          CONTACTO_IMOB: this.selectedRow.CONTACTO_IMOB,
          RAMAL_CONTACTO: this.selectedRow.RAMAL_CONTACTO,
          CEP_IMOBILIARIA: this.selectedRow.CEP_IMOBILIARIA,
          CGC_IMOBILIARIA: this.selectedRow.CGC_IMOBILIARIA,
          NOME_ATUALIZ: user.username,
        });

        if (response.status === 200) {
          this.frmImobiliariaTable = this.frmImobiliariaTable.map((row) =>
            row.IMOBILIARIA === this.selectedRow.IMOBILIARIA
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
        body: this.frmImobiliariaTable.map((row) =>
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
