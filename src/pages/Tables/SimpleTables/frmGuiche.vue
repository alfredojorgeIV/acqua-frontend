<template>
  <MenuApp />
  <CompanyTag />
  <div class="container">
    <div class="content">
      <section>
        <div class="intro-services-to-be-billed">
          <h1 class="title-page">Guichê de Atendimento</h1>
        </div>
        <div class="flex gap-4">
          <div class="w-61 margin-top-30">
            <p class="p-labels">Loja de atendimento</p>
            <div class="flex justify-space-between mb-30">
              <div class="w-77">
                <select
                  class="inputs margin-bottom-30"
                  v-model="selectLojaAtendimento"
                >
                  <option
                    v-for="option in options"
                    :key="option"
                    :value="option"
                  >
                    {{ option }}
                  </option>
                </select>
              </div>
              <div class="w-19">
                <input class="inputs margin-bottom-30" />
              </div>
            </div>
            <DataTable style="border-bottom-left-radius: 10px; border-bottom-right-radius: 10px !important;"
              :value="frmGuicheTable" tableStyle="min-width: 50rem" :paginator="true" :rows="10" dataKey="GU_GUICHE"
              @row-click="handleRowClick" :rowClass="rowClass">
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
              <input v-model="selectedRow.GU_GUICHE" @input="validateNumber" class="inputs margin-bottom-30" :disabled="!isEditing" />
              <p class="p-labels">Descrição</p>
              <input v-model="selectedRow.GU_DESCRICAO" maxlength="30" class="inputs margin-bottom-30" :disabled="!isEditing" />
              <p class="p-labels">Descrição reduzida</p>
              <input v-model="selectedRow.GU_LOJA_ATENDIMENTO" maxlength="3" class="inputs margin-bottom-30" :disabled="!isEditing" />
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
              <input class="inputs margin-bottom-30" @input="validateNumber" v-model="addGuGuiche" />
              <p class="p-labels">Descrição</p>
              <input class="inputs margin-bottom-30" maxlength="30" v-model="addGuDesc" />
              <p class="p-labels">Loja atendimento</p>
              <input class="inputs margin-bottom-30" @input="validateNumber" v-model="addGuLojaAtendimento" />
               
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
  name: "frmGuiche",
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
          name: "GU_GUICHE",
          required: true,
          label: "Código",
          align: "left",
          field: "GU_GUICHE",
        },
        {
          name: "GU_DESCRICAO",
          required: true,
          label: "Descrição",
          align: "left",
          field: "GU_DESCRICAO",
        },
        {
          name: "GU_LOJA_ATENDIMENTO",
          required: true,
          label: "Loja",
          align: "left",
          field: "GU_LOJA_ATENDIMENTO",
        },
      ],
      frmGuicheTable: []
    };
  },

  methods: {
    handleAddRowClick(event) {
      this.addRow = event.data;
      this.addGuGuiche = '';
      this.addGuDesc = '';
      this.addGuLojaAtendimento = '';

    },

    handleRowClick(event) {
      this.selectedRow = event.data;
      this.isEditing = false;
      this.showAddBox = false;
    },

    rowClass(data) {
      return {
        'pointer-cursor': true,
        'active-row': this.selectedRow && this.selectedRow.GU_GUICHE === data.GU_GUICHE
      };
    },

    confirmDelete() {
      this.showDeleteConfirmation = true;
    },

    async addToTable() {
      this.isLoading = true;
      try {
        const response = await axios.post('http://localhost:3000/GUICHE_ADD', {
          GU_GUICHE: Number(this.addGuGuiche),
          GU_DESCRICAO: this.addGuDesc,
          GU_LOJA_ATENDIMENTO: Number(this.addGuLojaAtendimento),
          NOME_ATUALIZ: "Luiza"
        });
        console.log(response.data);
        await this.fetchData();
        this.addGuGuiche = '';
        this.addGuDesc = '';
        this.addGuLojaAtendimento = '';
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
        const response = await axios.get('http://localhost:3000/GUICHE_ALL');
        this.data = response.data;
        this.frmGuicheTable = this.data;
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
        const response = await axios.delete(`http://localhost:3000/GUICHE_DELETE/${this.selectedRow.GU_GUICHE}`);
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
        const response = await axios.post(`http://localhost:3000/GUICHE_UPDATE`, {
          GU_GUICHE: this.selectedRow.GU_GUICHE,
          GU_DESCRICAO: this.selectedRow.GU_DESCRICAO,
          GU_LOJA_ATENDIMENTO:
            Number(this.selectedRow.GU_LOJA_ATENDIMENTO),
          NOME_ATUALIZ: "Luiza"
        });

        if (response.status === 200) {
          this.frmGuicheTable = this.frmGuicheTable.map(row => row.GU_GUICHE === this.selectedRow.GU_GUICHE ? this.selectedRow : row);
          this.isEditing = false;
        } else {
          console.error("Erro ao atualizar a guichê de atendimento");
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
