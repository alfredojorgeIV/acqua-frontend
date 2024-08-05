<template>
  <MenuApp />
  <CompanyTag />
  <div class="container">
    <div class="content">
      <section>
        <div class="intro-services-to-be-billed">
          <h1 class="title-page">Banco</h1>
        </div>
        <div>
          <p class="p-labels">Pesquisar banco</p>
          <div class="flex gap-4 align-baseline">
            <div class="w-88">
              <input class="inputs" />
            </div>
            <div>
              <Button class="tertiary-button flex align-center gap-10px">
                <i class="pi pi-search"></i>
              </Button>
            </div>
          </div>
          <div class="box-tables-info">
            <p class="R-15-2-6">Informações do banco</p>
            <div class="flex align-center justify-space-between mb-15">
              <div class="w-30 flex align-end gap-4">
                <div>
                  <p class="p-labels">Banco</p>
                  <input class="inputs">
                </div>
                <div>
                  <input type="checkbox" id="survey" v-model="survey" />
                  <label for="survey" class="q-ml-sm">Ativo</label>
                </div>
              </div>
              <div class="w-30">
                <p class="p-labels">Nome abreviado</p>
                <input class="inputs">
              </div>
              <div class="w-30">
                <p class="p-labels">Nome do banco</p>
                <input class="inputs">
              </div>
            </div>
            <div class="flex align-center justify-space-between mb-15">
              <div class="w-30">
                <p class="p-labels">Banco crédito</p>
                <input class="inputs">
              </div>
              <div class="w-30">
                <p class="p-labels">Conta contábil</p>
                <input class="inputs">
              </div>
              <div class="w-30">
                <p class="p-labels">CNPJ</p>
                <input class="inputs">
              </div>
            </div>
            <div class="flex align-center justify-space-between mb-15">
              <div class="w-22">
                <p class="p-labels">Preço do serviço</p>
                <input class="inputs">
              </div>
              <div class="w-22">
                <p class="p-labels">Tipo do convênio</p>
                <input class="inputs">
              </div>
              <div class="w-22">
                <p class="p-labels">Número do convênio</p>
                <input class="inputs">
              </div>
              <div class="w-22">
                <p class="p-labels">Diretório</p>
                <input class="inputs">
              </div>
            </div>
            <div class="flex">

              <Button class="secondary-button flex mg-auto align-center gap-10px" @click="showDialog = true">
                Tabela de tarifas <i class="pi pi-dollar"></i>
              </Button>
              <Button class="primary-button flex mg-auto align-center gap-10px" >
                Adicionar banco <i class="fa fa-building-columns"></i>
              </Button>
            </div>
          </div>
          <Dialog v-model:visible="showDialog" :modal="true" :style="{ width: '50vw' }" :closable="true">
            <Button icon="pi pi-times" class="p-button-rounded p-button-danger p-button-outlined"
              @click="showDialog = false" style="position: absolute; right: 0; top: 0; color: red !important;"></Button>
            <DataTable :value="streetConsultTable" tableStyle="min-width: 50rem" :paginator="true" :rows="10"
              dataKey="id" @row-click="handleRowClick" :selectionMode="'single'" v-model:selection="selectedRow">
              <Column v-for="col of columns2" :key="col.field" :field="col.field" :header="col.label">
              </Column>
            </DataTable>
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
//import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import Dialog from 'primevue/dialog';
export default {
  name: "BankTable",
  components: {
    MenuApp,
    CompanyTag,
    Dialog,
    DataTable,
    Column,
  },
  data() {
    return {
      selected: [],
      showDialog: false,
      selectedRow: null,
      columns: [
        {
          name: "bank",
          required: true,
          label: "Banco",
          align: "left",
          field: "bank",
        },
        {
          name: "agency",
          required: true,
          label: "Agência",
          align: "left",
          field: "agency",
        },
        {
          name: "agencyName",
          required: true,
          label: "Nome da agência",
          align: "left",
          field: "agencyName",
        },
        {
          name: "address",
          required: true,
          label: "Endereço",
          align: "left",
          field: "address",
        },
        {
          name: "number",
          required: true,
          label: "Número",
          align: "left",
          field: "number",
        },
        {
          name: "local",
          required: true,
          label: "Local",
          align: "left",
          field: "local",
        },

      ],

      contractorTableTable: [
        {
          id: 1,
          bank: "1",
          agency: "0",
          agencyName: "Banco do Brasil",
          address: "Banco do Brasil",
          number: null,
          local: "1",
          checkbox: null,
        },
        {
          id: 1,
          bank: "1",
          agency: "14",
          agencyName: "AG. Corumba - MT",
          address: null,
          number: null,
          local: "1",
          checkbox: null,
        },
      ],
      selectedOption: null,
    };
  },
  methods: {
    handleRowClick(event) {
      this.selectedRow = event.data;
    },
  },
};
</script>