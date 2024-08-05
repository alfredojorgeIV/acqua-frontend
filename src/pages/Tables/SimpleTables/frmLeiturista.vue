<template>
  <MenuApp />
  <CompanyTag />
  <div class="container">
    <div class="content">
      <section>
        <div class="intro-services-to-be-billed">
          <h1 class="title-page">Leiturista</h1>
        </div>
        <div class="flex gap-4">
          <div class="w-61 margin-top-30">
            <div v-if="isLoading" class="loading-overlay">
              <div class="spinner"></div>
            </div>
            <DataTable style="border-bottom-left-radius: 10px; border-bottom-right-radius: 10px !important;"
              :value="frmLeituristaTable" tableStyle="min-width: 50rem" :paginator="true" :rows="10"
              dataKey="LEITURISTA" @row-click="handleRowClick" :rowClass="rowClass">
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
              <input v-model="selectedRow.LEITURISTA" @input="validateNumber" class="inputs margin-bottom-30"
                :disabled="!isEditing" />
              <p class="p-labels">Leiturista</p>
              <input v-model="selectedRow.NOME_LEITUR" maxlength="30" class="inputs margin-bottom-30"
                :disabled="!isEditing" />
              <p class="p-labels">Local de leitura</p>
              <input v-model="selectedRow.LOCAL_LEITUR" maxlength="30" class="inputs margin-bottom-30"
                :disabled="!isEditing" />
              <p class="p-labels">Nome local</p>
              <input v-model="selectedRow.NOME_LOCAL" maxlength="5" class="inputs margin-bottom-30"
                :disabled="!isEditing" />
              <p class="p-labels">Senha</p>
              <input v-model="selectedRow.SENHA" maxlength="11" class="inputs margin-bottom-30"
                :disabled="!isEditing" />

              <div class="flex justify-center gap-4 mt-40">
                <Button v-if="!isEditing" class="primary-button flex align-center" @click="toggleEditing">
                  Alterar <i class="ml-10 pi pi-pencil"></i>
                </Button>
                <Button v-if="isEditing" class="save-button flex align-center" @click="saveUpdate">
                  Salvar <i class="ml-10 pi pi-pencil"></i>
                </Button>
                <Button class="danger-button flex align-center gap-10px" @click="confirmDelete">
                  Excluir <i class="pi pi-trash"></i>
                </Button>
              </div>
            </div>

            <div class="box-tables-info" v-if="showAddBox && !selectedRow">
              <p class="p-labels">Código</p>
              <input class="inputs margin-bottom-30" @input="validateNumber" v-model="addLeiturista" />
              <p class="p-labels">Leiturista</p>
              <input class="inputs margin-bottom-30" maxlength="30" v-model="addNomeLeiturista" />
              <p class="p-labels">Local de leitura</p>
              <input class="inputs margin-bottom-30" maxlength="30" v-model="addLocalDeLeitura" />
              <p class="p-labels">Nome local</p>
              <input class="inputs margin-bottom-30" maxlength="5" v-model="addNomeLocal" />
              <p class="p-labels">Senha</p>
              <input class="inputs margin-bottom-30" maxlength="11" v-model="addSenha" />

              <div class="flex justify-center gap-4 mt-40">
                <Button class="primary-button flex align-center" @click="addToTable">
                  Inserir <i class="ml-10 pi pi-pencil"></i>
                </Button>
                <Button class="danger-button flex align-center gap-10px" @click="showAddBox = false">
                  Cancelar <i class="pi pi-cancel"></i>
                </Button>

              </div>
            </div>
          </div>
          <Dialog header="Confirmar exclusão" :visible="showDeleteConfirmation" @hide="showDeleteConfirmation = false">
            <p>Tem certeza que deseja excluir este item da tabela?</p>
            <div class="flex justify-center mt-30 gap-5">

              <Button @click="showDeleteConfirmation = false" class="primary-button">Não <i
                  class="pi pi-cancel"></i></Button>
              <Button class="danger-button" @click="deleteFromTable">Excluir</Button>
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
  name: "frmLeiturista",
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
      columns: [
        {
          name: "LEITURISTA",
          required: true,
          label: "Código",
          align: "left",
          field: "LEITURISTA",
        },
        {
          name: "NOME_LEITUR",
          required: true,
          label: "Nome",
          align: "left",
          field: "NOME_LEITUR",
        },
        {
          name: "EMPREITEIRA",
          required: true,
          label: "Empreiteira",
          align: "left",
          field: "EMPREITEIRA",
        },
      ],
      frmLeituristaTable: []
    };
  },

  methods: {
    handleAddRowClick(event) {
      this.addRow = event.data;
      this.addLeiturista = '';
        this.addNomeLeiturista = '';
        this.addEmpreiteira = '';
        this.addLocalDeLeitura = '';
        this.addMicroLeitura = '';
        this.addNomeLocal = '';
        this.addSenha = '';

    },

    handleRowClick(event) {
      this.selectedRow = event.data;
      this.isEditing = false;
      this.showAddBox = false;
    },

    rowClass(data) {
      return {
        'pointer-cursor': true,
        'active-row': this.selectedRow && this.selectedRow.LEITURISTA === data.LEITURISTA
      };
    },

    confirmDelete() {
      this.showDeleteConfirmation = true;
    },

    async addToTable() {
      this.isLoading = true;
      try {
        const response = await axios.post('http://localhost:3000/LEITURISTA_ADD', {
          LEITURISTA: Number(this.addLeiturista),
          NOME_LEITUR: this.addNomeLeiturista,
          EMPREITEIRA: Number(this.addEmpreiteira),
          LOCAL_LEITUR: Number(this.addLocalDeLeitura),
          MICRO_LEITUR: Number(this.addMicroLeitura),
          NOME_LOCAL: this.addNomeLocal,
          SENHA: this.addSenha,


          NOME_ATUALIZ: "Luiza"
        });
        console.log(response.data);
        await this.fetchData();
        this.addLeiturista,
          this.addNomeLeiturista,
          this.addEmpreiteira,
          this.addLocalDeLeitura,
          this.addMicroLeitura,
          this.addNomeLocal,
          this.addSenha,


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
        const response = await axios.get('http://localhost:3000/LEITURISTA_ALL');
        this.data = response.data;
        this.frmLeituristaTable = this.data;
      } catch (error) {
        console.error('Erro:', error);
        this.error = error.toString();
      } finally {
        this.isLoading = false;
      }
    },
    async deleteFromTable() {
      this.isLoading = true;
      try {
        const response = await axios.delete(`http://localhost:3000/LEITURISTA_DELETE/${this.selectedRow.LEITURISTA}`);
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
    async toggleEditing() {
      this.isEditing = !this.isEditing;

    },

    async saveUpdate() {
      this.isLoading = true;
      this.isEditing = false;
      try {
        const response = await axios.post(`http://localhost:3000/LEITURISTA_UPDATE`, {
          LEITURISTA: Number(this.addLeiturista),
          NOME_LEITUR: this.addNomeLeiturista,
          EMPREITEIRA: Number(this.addEmpreiteira),
          LOCAL_LEITUR: Number(this.addLocalDeLeitura),
          MICRO_LEITUR: Number(this.addMicroLeitura),
          NOME_LOCAL: this.addNomeLocal,
          SENHA: this.addSenha,
          NOME_ATUALIZ: "Luiza"
        });

        if (response.status === 200) {
          this.frmLeituristaTable = this.frmLeituristaTable.map(row => row.LEITURISTA === this.selectedRow.LEITURISTA ? this.selectedRow : row);
          this.isEditing = false;
        } else {
          console.error("Erro ao atualizar a imobiliaria");
        }
      } catch (error) {
        console.error('Erro:', error);
        this.error = error.toString();
      } finally {
        this.isLoading = false;
      }
    },
    validateNumber(event) {
      event.target.value = event.target.value.replace(/[^0-9]/g, '');
    }
  },

  async mounted() {
    await this.fetchData();
  },

};
</script>