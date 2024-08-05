<template>
  <MenuApp />
  <CompanyTag />
  <div class="container">
    <div class="content">
      <section>
        <div class="intro-services-to-be-billed">
          <h1 class="title-page">Empreiteira</h1>
        </div>

        <div class="margin-top-30">
          <DataTable style="border-bottom-left-radius: 10px; border-bottom-right-radius: 10px !important;"
            :value="frmEmpreiteiraTable" tableStyle="min-width: 50rem" :paginator="true" :rows="10"
            dataKey="EMPREITEIRA" @row-click="handleRowClick" :rowClass="rowClass">
            <Column v-for="col of columns" :key="col.field" :field="col.field" :header="col.label"></Column>
          </DataTable>
          <div class="flex justify-center gap-4 mt-40 w-48 mg-auto">
            <Button class="mg-auto tertiary-button flex align-center">
              Imprimir <i class="ml-10 pi pi-print"></i>
            </Button>
            <Button class="mg-auto quaternary-button flex align-center" @click="showAddBox = true; selectedRow = null">
              Adicionar <i class="ml-10 pi pi-plus-circle"></i>
            </Button>
          </div>
        </div>
        <div class="box-tables-info" v-if="selectedRow">
          <div class="flex gap-4">
            <div class="w-48">
              <p class="p-labels">Empreiteira</p>
              <input v-model="selectedRow.EMPREITEIRA" @input="validateNumber" class="inputs margin-bottom-30" :disabled="!isEditing" />
            </div>
            <div class="w-48">
              <p class="p-labels">Nome da empreiteira</p>
              <input v-model="selectedRow.NOME_EMPREITEIRA" maxlength="60" class="inputs margin-bottom-30" :disabled="!isEditing" />
            </div>
          </div>
          <div class="flex gap-5">
            <div class="w-30">
              <p class="p-labels">Endereço</p>
              <input v-model="selectedRow.END_EMPREITEIRA" maxlength="60" class="inputs margin-bottom-30" :disabled="!isEditing" />
            </div>
            <div class="w-30">
              <p class="p-labels">Número</p>
              <input v-model="selectedRow.NUM_IMOVEL_EMPREIT" maxlength="5" class="inputs margin-bottom-30" :disabled="!isEditing" />
            </div>
            <div class="w-30">
              <p class="p-labels">Fone</p>
              <input v-model="selectedRow.FONE_EMPREITEIRA" maxlength="30" class="inputs margin-bottom-30" :disabled="!isEditing" />
            </div>
          </div>
          <div class="flex gap-4">
            <div class="w-48">
              <p class="p-labels">Nome do contato</p>
              <input v-model="selectedRow.CONTACTO_EMPREIT" maxlength="40" class="inputs margin-bottom-30" :disabled="!isEditing" />
            </div>
            <div class="w-48">
              <p class="p-labels">Ramal</p>
              <input v-model="selectedRow.RAMAL_CONTACTO" maxlength="4" class="inputs margin-bottom-30" :disabled="!isEditing" />
            </div>
          </div>
          <div class="flex gap-4">
            <div class="w-48">
              <p class="p-labels">C.E.P</p>
              <input v-model="selectedRow.CEP_EMPREITEIRA" maxlength="9" class="inputs margin-bottom-30" :disabled="!isEditing" />
            </div>
            <div class="w-48">
              <p class="p-labels">CNPJ</p>
              <input v-model="selectedRow.CGC_EMPREITEIRA" maxlength="14" class="inputs margin-bottom-30" :disabled="!isEditing" />
            </div>
          </div>
          <div class="flex gap-5 margin-bottom-30 justify-space-between">
            <div class="flex align-end">
              <div>
                <p class="p-labels">Empresa</p>
                <RadioButton v-model="selectedOption" val="Cesama" class="mr-10" /><label
                  class="R-15-2-4 mr-10">Cesama</label>
              </div>
              <div class="flex align-center">
                <RadioButton v-model="selectedOption" val="Externa" class="mr-10" /><label
                  class="R-15-2-4">Externa</label>
              </div>
            </div>
            <div class="flex align-center">
              <input type="checkbox" id="survey" v-model="survey" />
              <label for="survey" class="q-ml-sm">Vistoria</label>
            </div>
          </div>
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
          <div class="flex gap-4">
            <div class="w-22">
              <p class="p-labels">Empreiteira</p>
              <input class="inputs margin-bottom-30" @input="validateNumber" v-model="addEmpreiteira" />
            </div>
            <div class="w-22">
              <p class="p-labels">Nome da empreiteira</p>
              <input class="inputs margin-bottom-30" maxlength="60" v-model="addNomeEmpreiteira" />
            </div>
            <div class="w-22">
              <p class="p-labels">Endereço</p>
              <input class="inputs margin-bottom-30" maxlength="60" v-model="addEndEmpreiteira" />

            </div>
            <div class="w-22">
              <p class="p-labels">Número</p>
              <input class="inputs margin-bottom-30" maxlength="5" v-model="addNumEmpreiteira" />

            </div>
          </div>
          <div class="flex gap-4">
            <div>
              <p class="p-labels">Fone</p>
              <input class="inputs margin-bottom-30" maxlength="30" v-model="addFoneEmpreiteira" />

            </div>
            <div>
              <p class="p-labels">Nome do contato</p>
              <input class="inputs margin-bottom-30" maxlength="40" v-model="addContactEmpreit" />

            </div>
            <div>
              <p class="p-labels">Ramal</p>
              <input class="inputs margin-bottom-30" v-model="addRamalContacto" maxlength="4" />

            </div>
            <div>

              <p class="p-labels">CEP</p>
              <input class="inputs margin-bottom-30" maxlength="9" v-model="addCepEmpreiteira" />
            </div>
            <div>
              <p class="p-labels">CNPJ</p>
              <input class="inputs margin-bottom-30" maxlength="14" v-model="addCgcEmpreiteira" />

            </div>
          </div>

          <div class="flex justify-center gap-4 mt-40">
            <Button class="primary-button flex align-center" @click="addToTable">
              Inserir <i class="ml-10 pi pi-pencil"></i>
            </Button>
            <Button class="danger-button flex align-center gap-10px" @click="showAddBox = false">
              Cancelar <i class="pi pi-cancel"></i>
            </Button>

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
import RadioButton from "primevue/radiobutton";
import axios from "axios";

export default {
  name: "frmEmpreiteira",
  components: {
    MenuApp,
    CompanyTag,
    DataTable,
    Column,
    Button,
    Dialog,
    RadioButton
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
      selectedOption: null,
      survey: false,
      columns: [
        {
          name: "EMPREITEIRA",
          required: true,
          label: "Empreiteira",
          align: "left",
          field: "EMPREITEIRA",
        },
        {
          name: "NOME_EMPREITEIRA",
          required: true,
          label: "Nome",
          align: "left",
          field: "NOME_EMPREITEIRA",
        },
        {
          name: "END_EMPREITEIRA",
          required: true,
          label: "Endereço",
          align: "left",
          field: "END_EMPREITEIRA",
        },
        {
          name: "NUM_IMOVEL_EMPREIT",
          required: true,
          label: "NR",
          align: "left",
          field: "NUM_IMOVEL_EMPREIT",
        },
        {
          name: "FONE_EMPREITEIRA",
          required: true,
          label: "Fone",
          align: "left",
          field: "FONE_EMPREITEIRA",
        },
        {
          name: "RAMAL_CONTACTO",
          required: true,
          label: "Ramal",
          align: "left",
          field: "RAMAL_CONTACTO",
        },
        {
          name: "CONTACTO_EMPREIT",
          required: true,
          label: "Contato",
          align: "left",
          field: "CONTACTO_EMPREIT",
        },
        {
          name: "CEP_EMPREITEIRA",
          required: true,
          label: "CEP",
          align: "left",
          field: "CEP_EMPREITEIRA",
        },
        {
          name: "CGC_EMPREITEIRA",
          required: true,
          label: "CNPJ",
          align: "left",
          field: "CGC_EMPREITEIRA",
        },
      ],
      frmEmpreiteiraTable: [],
      addEmpreiteira: "",
      addNomeEmpreiteira: "",
      addEndEmpreiteira: "",
      addNumEmpreiteira: "",
      addFoneEmpreiteira: "",
      addRamalContacto: "",
      addContactEmpreit: "",
      addCepEmpreiteira: "",
      addCgcEmpreiteira: "",
    };
  },

  methods: {
    handleRowClick(event) {
      this.selectedRow = event.data;
      this.isEditing = false;
      this.showAddBox = false;
    },

    rowClass(data) {
      return {
        'pointer-cursor': true,
        'active-row': this.selectedRow && this.selectedRow.EMPREITEIRA === data.EMPREITEIRA
      };
    },

    confirmDelete() {
      this.showDeleteConfirmation = true;
    },

    async addToTable() {
      this.isLoading = true;
      try {
        const response = await axios.post('http://localhost:3000/EMPREITEIRA_ADD', {
          EMPREITEIRA: Number(this.addEmpreiteira),
          NOME_EMPREITEIRA: this.addNomeEmpreiteira,
          END_EMPREITEIRA: this.addEndEmpreiteira,
          NUM_IMOVEL_EMPREIT: this.addNumEmpreiteira,
          FONE_EMPREITEIRA: this.addFoneEmpreiteira,
          RAMAL_CONTACTO: this.addRamalContacto,
          CONTACTO_EMPREIT: this.addContactEmpreit,
          CEP_EMPREITEIRA: this.addCepEmpreiteira,
          CGC_EMPREITEIRA: this.addCgcEmpreiteira,
          NOME_ATUALIZ: "Luiza"
        });
        console.log(response.data);
        await this.fetchData();
        this.addEmpreiteira = "";
        this.addNomeEmpreiteira = "";
        this.addEndEmpreiteira = "";
        this.addNumEmpreiteira = "";
        this.addFoneEmpreiteira = "";
        this.addRamalContacto = "";
        this.addContactEmpreit = "";
        this.addCepEmpreiteira = "";
        this.addCgcEmpreiteira = "";
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
        const response = await axios.get('http://localhost:3000/EMPREITEIRA_ALL');
        this.data = response.data;
        this.frmEmpreiteiraTable = this.data;
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
        const response = await axios.delete(`http://localhost:3000/EMPREITEIRA_DELETE/${this.selectedRow.EMPREITEIRA}`);
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
        const response = await axios.post(`http://localhost:3000/EMPREITEIRA_UPDATE`, {
          EMPREITEIRA: Number(this.selectedRow.EMPREITEIRA),
          NOME_EMPREITEIRA: this.selectedRow.NOME_EMPREITEIRA,
          END_EMPREITEIRA: this.selectedRow.END_EMPREITEIRA,
          NUM_IMOVEL_EMPREIT: this.selectedRow.NUM_IMOVEL_EMPREIT,
          FONE_EMPREITEIRA: this.selectedRow.FONE_EMPREITEIRA,
          RAMAL_CONTACTO: this.selectedRow.RAMAL_CONTACTO,
          CONTACTO_EMPREIT: this.selectedRow.CONTACTO_EMPREIT,
          CEP_EMPREITEIRA: this.selectedRow.CEP_EMPREITEIRA,
          CGC_EMPREITEIRA: this.selectedRow.CGC_EMPREITEIRA,
          NOME_ATUALIZ: "Luiza"
        });

        if (response.status === 200) {
          this.frmEmpreiteiraTable = this.frmEmpreiteiraTable.map(row => row.EMPREITEIRA === this.selectedRow.EMPREITEIRA ? this.selectedRow : row);
        } else {
          console.error("Erro ao atualizar a Empreiteira");
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


