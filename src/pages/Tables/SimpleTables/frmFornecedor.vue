<template>
  <MenuApp />
  <CompanyTag />
  <div class="container">
    <div class="content">
      <section>
        <div class="intro-services-to-be-billed">
          <h1 ref="title" class="title-page">Fornecedores</h1>
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
              :value="frmFornecedorTable"
              tableStyle="min-width: 50rem"
              :paginator="true"
              :rows="10"
              dataKey="FO_CODIGO"
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
                    v-model="selectedRow.FO_CODIGO"
                    maxlength="5"
                    class="inputs margin-bottom-30"
                    :disabled="!isEditing"
                  />
                </div>
                <div class="w-30">
                  <p class="p-labels">Nome</p>
                  <input
                    v-model="selectedRow.FO_NOME"
                    maxlength="15"
                    class="inputs margin-bottom-30"
                    :disabled="!isEditing"
                  />
                </div>
                <div class="w-30">
                  <p class="p-labels">Endereço</p>
                  <input
                    v-model="selectedRow.FO_ENDERECO"
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
                    v-model="selectedRow.FO_NUM_IMOVEL"
                    maxlength="15"
                    class="inputs margin-bottom-30"
                    :disabled="!isEditing"
                  />
                </div>
                <div class="w-30">
                  <p class="p-labels">Complemento</p>
                  <input
                    v-model="selectedRow.FO_COMPLEMENTO"
                    maxlength="15"
                    class="inputs margin-bottom-30"
                    :disabled="!isEditing"
                  />
                </div>
                <div class="w-30">
                  <p class="p-labels">Bairro</p>
                  <input
                    v-model="selectedRow.FO_BAIRRO"
                    maxlength="15"
                    class="inputs margin-bottom-30"
                    :disabled="!isEditing"
                  />
                </div>
              </div>
              <div class="flex justify-space-between">
                <div class="w-30">
                  <p class="p-labels">Cidade</p>
                  <input
                    v-model="selectedRow.FO_CIDADE"
                    maxlength="15"
                    class="inputs margin-bottom-30"
                    :disabled="!isEditing"
                  />
                </div>
                <div class="w-30">
                  <p class="p-labels">CEP</p>
                  <input
                    v-model="selectedRow.FO_CEP"
                    maxlength="15"
                    class="inputs margin-bottom-30"
                    :disabled="!isEditing"
                  />
                </div>
                <div class="w-30">
                  <p class="p-labels">Telefone</p>
                  <input
                    v-model="selectedRow.FO_TELEFONE"
                    maxlength="15"
                    class="inputs margin-bottom-30"
                    :disabled="!isEditing"
                  />
                </div>
              </div>
              <div class="flex justify-space-between">
                <div class="w-30">
                  <p class="p-labels">Contato</p>
                  <input
                    v-model="selectedRow.FO_CONTATO"
                    maxlength="15"
                    class="inputs margin-bottom-30"
                    :disabled="!isEditing"
                  />
                </div>

                <div class="w-30">
                  <p class="p-labels">CGC</p>
                  <input
                    v-model="selectedRow.FO_CGC"
                    maxlength="15"
                    class="inputs margin-bottom-30"
                    :disabled="!isEditing"
                  />
                </div>
                <div class="w-30">
                  <p class="p-labels">Tipo</p>
                  <input
                    v-model="selectedRow.FO_TIPO"
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
                    v-model="addFoCodigo"
                  />
                </div>
                <div class="w-30">
                  <p class="p-labels">Nome</p>
                  <input
                    class="inputs margin-bottom-30"
                    maxlength="15"
                    v-model="addFoNome"
                  />
                </div>
                <div class="w-30">
                  <p class="p-labels">Endereço</p>
                  <input
                    class="inputs margin-bottom-30"
                    maxlength="15"
                    v-model="addFoEndereco"
                  />
                </div>
              </div>
              <div class="flex justify-space-between gap-4">
                <div class="w-30">
                  <p class="p-labels">Número do imóvel</p>
                  <input
                    class="inputs margin-bottom-30"
                    maxlength="15"
                    v-model="addFoNumImovel"
                  />
                </div>
                <div class="w-30">
                  <p class="p-labels">Complemento</p>
                  <input
                    class="inputs margin-bottom-30"
                    maxlength="15"
                    v-model="addFoComplemento"
                  />
                </div>
                <div class="w-30">
                  <p class="p-labels">Bairro</p>
                  <input
                    class="inputs margin-bottom-30"
                    maxlength="15"
                    v-model="addFoBairro"
                  />
                </div>
              </div>
              <div class="flex justify-space-between gap-4">
                <div class="w-30">
                  <p class="p-labels">Cidade</p>
                  <input
                    class="inputs margin-bottom-30"
                    maxlength="15"
                    v-model="addFoCidade"
                  />
                </div>
                <div class="w-30">
                  <p class="p-labels">CEP</p>
                  <input
                    class="inputs margin-bottom-30"
                    maxlength="15"
                    v-model="addFoCEP"
                  />
                </div>
                <div class="w-30">
                  <p class="p-labels">Telefone</p>
                  <input
                    class="inputs margin-bottom-30"
                    maxlength="15"
                    v-model="addFoTelefone"
                  />
                </div>
              </div>
              <div class="flex justify-space-between gap-4">
                <div class="w-30">
                  <p class="p-labels">Contato</p>
                  <input
                    class="inputs margin-bottom-30"
                    maxlength="15"
                    v-model="addFoContato"
                  />
                </div>
                <div class="w-30">
                  <p class="p-labels">CGC</p>
                  <input
                    class="inputs margin-bottom-30"
                    maxlength="15"
                    v-model="addFoCGC"
                  />
                </div>
                <div class="w-30">
                  <p class="p-labels">Tipo</p>
                  <input
                    class="inputs margin-bottom-30"
                    maxlength="15"
                    v-model="addFoTipo"
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
  name: "frmFornecedor",
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
      addFoCodigo: "",
      addFoNome: "",
      columns: [
        {
          name: "FO_CODIGO",
          required: true,
          label: "Código",
          align: "left",
          field: "FO_CODIGO",
        },
        {
          name: "FO_NOME",
          required: true,
          label: "Nome",
          align: "left",
          field: "FO_NOME",
        },
        {
          name: "FO_ENDERECO",
          required: true,
          label: "Endereço",
          align: "left",
          field: "FO_ENDERECO",
        },
        {
          name: "FO_NUM_IMOVEL",
          required: true,
          label: "Número do imóvel",
          align: "left",
          field: "FO_NUM_IMOVEL",
        },
        {
          name: "FO_COMPLEMENTO",
          required: true,
          label: "Complemento",
          align: "left",
          field: "FO_COMPLEMENTO",
        },
        {
          name: "FO_BAIRRO",
          required: true,
          label: "Bairro",
          align: "left",
          field: "FO_BAIRRO",
        },
        {
          name: "FO_CIDADE",
          required: true,
          label: "Cidade",
          align: "left",
          field: "FO_CIDADE",
        },
        {
          name: "FO_CEP",
          required: true,
          label: "CEP",
          align: "left",
          field: "FO_CEP",
        },
        {
          name: "FO_TELEFONE",
          required: true,
          label: "Telefone",
          align: "left",
          field: "FO_TELEFONE",
        },
        {
          name: "FO_CONTATO",
          required: true,
          label: "Contato",
          align: "left",
          field: "FO_CONTATO",
        },
        {
          name: "FO_CGC",
          required: true,
          label: "CGC",
          align: "left",
          field: "FO_CGC",
        },
        {
          name: "FO_TIPO",
          required: true,
          label: "Tipo",
          align: "left",
          field: "FO_TIPO",
        },
      ],
      frmFornecedorTable: [],
    };
  },

  methods: {
    handleAddRowClick(event) {
      this.addRow = event.data;
      this.addFoCodigo = "";
      this.addFoNome = "";
      this.addFoEndereco = "";
      this.addFoNumImovel = "";
      this.addFoComplemento = "";
      this.addFoBairro = "";
      this.addFoCidade = "";
      this.addFoCEP = "";
      this.addFoTelefone = "";
      this.addFoContato = "";
      this.addFoCGC = "";
      this.addFoTipo = "";
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
          this.selectedRow && this.selectedRow.FO_CODIGO === data.FO_CODIGO,
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
        const response = await axios.post(`${baseUrl}/FORNECEDOR_ADD`, {
          FO_CODIGO: Number(this.addFoCodigo),
          FO_NOME: this.addFoNome,
          FO_ENDERECO: this.addFoEndereco,
          FO_NUM_IMOVEL: this.addFoNumImovel,
          FO_COMPLEMENTO: this.addFoComplemento,
          FO_BAIRRO: this.addFoBairro,
          FO_CIDADE: this.addFoCidade,
          FO_CEP: this.addFoCEP,
          FO_TELEFONE: this.addFoTelefone,
          FO_CONTATO: this.addFoContato,
          FO_CGC: this.addFoCGC,
          FO_TIPO: Number(this.addFoTipo),
          NOME_ATUALIZ: user.username,
        });
        console.log(response.data);
        await this.fetchData();
        this.addFoCodigo = "";
        this.addFoNome = "";
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
        const response = await axios.get(`${baseUrl}/FORNECEDOR_ALL`);
        this.data = response.data;
        this.frmFornecedorTable = this.data;
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
          `${baseUrl}/FORNECEDOR_DELETE/${this.selectedRow.FO_CODIGO}/${user.username}`
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
        const response = await axios.post(`${baseUrl}/FORNECEDOR_UPDATE`, {
          FO_CODIGO: Number(this.selectedRow.FO_CODIGO),
          FO_NOME: this.selectedRow.FO_NOME,
          FO_ENDERECO: this.selectedRow.FO_ENDERECO,
          FO_NUM_IMOVEL: this.selectedRow.FO_NUM_IMOVEL,
          FO_COMPLEMENTO: this.selectedRow.FO_COMPLEMENTO,
          FO_BAIRRO: this.selectedRow.FO_BAIRRO,
          FO_CIDADE: this.selectedRow.FO_CIDADE,
          FO_CEP: this.selectedRow.FO_CEP,
          FO_TELEFONE: this.selectedRow.FO_TELEFONE,
          FO_CONTATO: this.selectedRow.FO_CONTATO,
          FO_CGC: this.selectedRow.FO_CGC,
          FO_TIPO: Number(this.selectedRow.FO_TIPO),

          NOME_ATUALIZ: user.username,
        });

        if (response.status === 200) {
          this.frmFornecedorTable = this.frmFornecedorTable.map((row) =>
            row.FO_CODIGO === this.selectedRow.FO_CODIGO
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
        body: this.frmFornecedorTable.map((row) =>
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
