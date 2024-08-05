<template>
  <MenuApp />
  <CompanyTag />
  <div class="container">
    <div class="content">
      <section>
        <div class="intro-services-to-be-billed">
          <h1 class="title-page">Funcionário de campo</h1>
        </div>

        <div class="margin-top-30">
          <DataTable style="border-bottom-left-radius: 10px; border-bottom-right-radius: 10px !important;"
            :value="frmFuncionarioCampoTable" tableStyle="min-width: 50rem" :paginator="true" :rows="10"
            dataKey="CODIGO_FUNC" @row-click="handleRowClick" :rowClass="rowClass">
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
              <div class="flex gap-2 align-end">
                <div class="w-77">
                  <p class="p-labels">Insira o valor da busca</p>
                  <input class="inputs margin-bottom-30" />
                </div>
                <div class="w-20">
                  <button class="quintenary-button flex align-end ml-10">
                    Buscar <i class="ml-10 q-ml-sm fa-solid fa-search"></i>
                  </button>
                </div>
              </div>
              <p class="p-labels">Código</p>
              <input v-model="selectedRow.CODIGO_FUNC" @input="validateNumber" class="inputs margin-bottom-30"
                :disabled="!isEditing" />
              <div class="w-48">

              </div>

            </div>
            <div class="w-48">
              <p class="p-labels">Pesquisar por:</p>
              <select class="inputs margin-bottom-30" v-model="searchByFieldEmployee">
                <option v-for="option in searchByFieldEmployee" :key="option.value" :value="option.value">
                  {{ option.label }}
                </option>
              </select>
              <div class="">
                <p class="p-labels">Unidade de serviço</p>
                <input v-model="selectedRow.NOME_DISTRITO" maxlength="40" class="inputs margin-bottom-30"
                  :disabled="!isEditing" />
              </div>

            </div>

          </div>

          <div class="flex gap-5">
            <div>
              <p class="p-labels">Distrito</p>
              <input v-model="selectedRow.DISTRITO_FUNC" @input="validateNumber" class="inputs margin-bottom-30"
                :disabled="!isEditing" />
            </div>
            <div class="w-30">
              <p class="p-labels">Nome</p>
              <input v-model="selectedRow.NOME_FUNC" maxlength="40" class="inputs margin-bottom-30"
                :disabled="!isEditing" />
            </div>
            <div class="w-30">
              <p class="p-labels">Ativo</p>
              <input v-model="selectedRow.ATIVO" @input="validateNumber" class="inputs margin-bottom-30"
                :disabled="!isEditing" />
            </div>
            <div class="w-48">
              <p class="p-labels">Senha</p>
              <input v-model="selectedRow.SENHA" maxlength="32" type="password" class="inputs margin-bottom-30"
                :disabled="!isEditing" />
            </div>
          </div>

          <div class="flex gap-4">

          </div>

          <div class="flex gap-5 margin-bottom-30 justify-space-between">
            <div class="flex align-end">
              <div>
                <p class="p-labels">Empresa</p>
                <RadioButton v-model="selectedOption" val="Cesama" class="mr-10" />
                <label class="R-15-2-4 mr-10">Cesama</label>
              </div>
              <div class="flex align-center">
                <RadioButton v-model="selectedOption" val="Externa" class="mr-10" />
                <label class="R-15-2-4">Externa</label>
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
              <p class="p-labels">Código</p>
              <input class="inputs margin-bottom-30" @input="validateNumber" v-model="addCodigoFunc" />
            </div>
            <div class="w-22">
              <p class="p-labels">Unidade de serviço</p>
              <input class="inputs margin-bottom-30" maxlength="60" v-model="addNomeDistrito" />
            </div>
            <div class="w-22">
              <p class="p-labels">Distrito</p>
              <input class="inputs margin-bottom-30" maxlength="60" v-model="addDistritoFUnc" />
            </div>
            <div class="w-22">
              <p class="p-labels">Nome</p>
              <input class="inputs margin-bottom-30" maxlength="5" v-model="addNomeFunc" />
            </div>
          </div>

          <div class="flex gap-4">
            <div>
              <p class="p-labels">Ativo</p>
              <input class="inputs margin-bottom-30" maxlength="30" v-model="addAtivo" />
            </div>
            <div>
              <p class="p-labels">Senha</p>
              <input class="inputs margin-bottom-30" maxlength="40" v-model="addSenha" />
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
  name: "frmFuncionarioCampo",
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
          name: "CODIGO_FUNC",
          required: true,
          label: "Código",
          align: "left",
          field: "CODIGO_FUNC",
        },
        {
          name: "DISTRITO_FUNC",
          required: true,
          label: "Distrito",
          align: "left",
          field: "DISTRITO_FUNC",
        },
        {
          name: "NOME_DISTRITO",
          required: true,
          label: "Unidade de serviço",
          align: "left",
          field: "NOME_DISTRITO",
        },
        {
          name: "NOME_FUNC",
          required: true,
          label: "Nome",
          align: "left",
          field: "NOME_FUNC",
        },
        {
          name: "ATIVO",
          required: true,
          label: "Ativo",
          align: "left",
          field: "ATIVO",
        },
        {
          name: "SENHA",
          required: true,
          label: "Senha",
          align: "left",
          field: "SENHA",
        },

      ],
      frmFuncionarioCampoTable: [],
      addCodigoFunc: "",
      addNomeFunc: "",
      addNomeDistrito: "",
      addAtivo: "",
      addSenha: "",
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
        'active-row': this.selectedRow && this.selectedRow.CODIGO_FUNC === data.CODIGO_FUNC
      };
    },

    confirmDelete() {
      this.showDeleteConfirmation = true;
    },

    async addToTable() {
      this.isLoading = true;
      try {
        const response = await axios.post('http://localhost:3000/FUNCIONARIO_CAMPO_ADD', {
          CODIGO_FUNC: Number(this.addCodigoFunc),
          DISTRITO_FUNC: Number(this.addDistritoFunc),
          NOME_DISTRITO: this.addNomeDistrito,
          NOME_FUNC: this.addNomeFunc,
          ATIVO: Number(this.addAtivo),
          SENHA: this.addSenha,
          TOKEN_ACESSO: undefined,
          TOKEN_DATA_GERACAO: undefined,
          TOKEN_IP: undefined,
          ULTIMO_ACESSO: undefined,
          NOME_ATUALIZ: "Luiza"
        });
        console.log(response.data);
        await this.fetchData();
        this.addCodigoFunc = "";
        this.addDistritoFunc = "";
        this.addNomeDistrito = "";
        this.addNomeFunc = "";
        this.addAtivo = "";
        this.addSenha = "";
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
        const response = await axios.get('http://localhost:3000/FUNCIONARIO_CAMPO_ALL');
        this.data = response.data;
        this.frmFuncionarioCampoTable = this.data;
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
        const response = await axios.delete(`http://localhost:3000/FUNCIONARIO_CAMPO_DELETE/${this.selectedRow.CODIGO_FUNC}`);
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
        const response = await axios.post(`http://localhost:3000/FUNCIONARIO_CAMPO_UPDATE`, {
          CODIGO_FUNC: Number(this.selectedRow.CODIGO_FUNC),
          DISTRITO_FUNC: Number(this.selectedRow.DISTRITO_FUNC),
          NOME_DISTRITO: this.selectedRow.NOME_DISTRITO,
          NOME_FUNC: this.selectedRow.NOME_FUNC,
          ATIVO: Number(this.selectedRow.ATIVO),
          SENHA: this.selectedRow.SENHA,
          TOKEN_ACESSO: undefined,
          TOKEN_DATA_GERACAO: undefined,
          TOKEN_IP: undefined,
          ULTIMO_ACESSO: undefined,
          NOME_ATUALIZ: "Luiza"
        });

        if (response.status === 200) {
          this.frmFuncionarioCampoTable = this.frmFuncionarioCampoTable.map(row => row.CODIGO_FUNC === this.selectedRow.CODIGO_FUNC ? this.selectedRow : row);
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
