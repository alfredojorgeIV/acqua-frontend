<template>
    <MenuApp />
    <CompanyTag />
    <div class="container">
      <div class="content">
        <section>
          <div class="intro-services-to-be-billed">
            <h1 class="title-page">Banco</h1>
          </div>
          
          <div class="margin-top-30">
            
            <DataTable
              style="
                border-bottom-left-radius: 10px;
                border-bottom-right-radius: 10px !important;
              "
              :value="contractorTableTable"
              tableStyle="min-width: 50rem"
              :paginator="true"
              :rows="10"
              dataKey="id"
              @row-click="handleRowClick"
              :selectionMode="'single'"
              v-model:selection="selectedRow"
            >
              <Column
                v-for="col of columns"
                :key="col.field"
                :field="col.field"
                :header="col.label"
              ></Column>
            </DataTable>
            <div class="flex justify-center gap-4 mt-40 w-48 mg-auto">
              <Button class="mg-auto tertiary-button flex align-center">
                Imprimir <i class="ml-10 pi pi-print"></i>
              </Button>
              <Button class="mg-auto quaternary-button flex align-center">
                Adicionar <i class="ml-10 pi pi-plus-circle"></i>
              </Button>
            </div>
          </div>
          <div class="box-tables-info" v-if="selectedRow">
            <div class="flex gap-4">
              <div class="w-48">
                <p class="p-labels">Empreiteira</p>
                <input
                  v-model="selectedRow.contractor"
                  class="inputs margin-bottom-30"
                />
              </div>
              <div class="w-48">
                <p class="p-labels">Nome da empreiteira</p>
                <input
                  v-model="selectedRow.name"
                  class="inputs margin-bottom-30"
                />
              </div>
            </div>
            <div class="flex gap-5">
              <div class="w-30">
                <p class="p-labels">Endereço</p>
                <input
                  v-model="selectedRow.address"
                  class="inputs margin-bottom-30"
                />
              </div>
              <div class="w-30">
                <p class="p-labels">Número</p>
                <input v-model="selectedRow.nr" class="inputs margin-bottom-30" />
              </div>
              <div class="w-30">
                <p class="p-labels">Fone</p>
                <input
                  v-model="selectedRow.phone"
                  class="inputs margin-bottom-30"
                />
              </div>
            </div>
            <div class="flex gap-4">
              <div class="w-48">
                <p class="p-labels">Nome do contato</p>
                <input
                  v-model="selectedRow.contact"
                  class="inputs margin-bottom-30"
                />
              </div>
              <div class="w-48">
                <p class="p-labels">Ramal</p>
                <input
                  v-model="selectedRow.ramal"
                  class="inputs margin-bottom-30"
                />
              </div>
            </div>
            <div class="flex gap-4">
              <div class="w-48">
                <p class="p-labels">C.E.P</p>
                <input
                  v-model="selectedRow.cep"
                  class="inputs margin-bottom-30"
                />
              </div>
              <div class="w-48">
                <p class="p-labels">CNPJ</p>
                <input
                  v-model="selectedRow.cnpj"
                  class="inputs margin-bottom-30"
                />
              </div>
            </div>
            <div class="flex gap-5 margin-bottom-30 justify-space-between">
              <div class="flex align-end">
                <div>
                  <p class="p-labels">Empresa</p>
                  <RadioButton
                    v-model="selectedOption"
                    val="Cesama"
                    class="mr-10"
                  /><label class="R-15-2-4 mr-10">Cesama</label>
                </div>
                <div class="flex align-center">
                  <RadioButton
                    v-model="selectedOption"
                    val="Externa"
                    class="mr-10"
                  /><label class="R-15-2-4">Externa</label>
                </div>
              </div>
              <div class="flex align-center">
                <input type="checkbox" id="survey" v-model="survey" />
                <label for="survey" class="q-ml-sm">Vistoria</label>
              </div>
            </div>
            <div class="flex justify-center gap-4 mt-40">
              <Button class="primary-button flex align-center">
                Alterar <i class="ml-10 pi pi-pencil"></i>
              </Button>
              <Button class="danger-button flex align-center gap-10px">
                Excluir <i class="pi pi-trash"></i>
              </Button>
            </div>
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
  import "primevue/resources/themes/saga-blue/theme.css";
  import "primevue/resources/primevue.min.css";
  import "primeicons/primeicons.css";
  import RadioButton from "primevue/radiobutton";
  
  export default {
    name: "BankTable",
    components: {
      MenuApp,
      CompanyTag,
      DataTable,
      Column,
      RadioButton,
    },
    data() {
      return {
        selected: [],
        selectedRow: null,
        columns: [
          {
            name: "contractor",
            required: true,
            label: "Empreitira",
            align: "left",
            field: "contractor",
          },
          {
            name: "name",
            required: true,
            label: "Nome",
            align: "left",
            field: "name",
          },
          {
            name: "address",
            required: true,
            label: "Endereço",
            align: "left",
            field: "address",
          },
          {
            name: "nr",
            required: true,
            label: "NR",
            align: "left",
            field: "nr",
          },
          {
            name: "phone",
            required: true,
            label: "Fone",
            align: "left",
            field: "phone",
          },
          {
            name: "ramal",
            required: true,
            label: "Ramal",
            align: "left",
            field: "ramal",
          },
          {
            name: "contact",
            required: true,
            label: "Contato",
            align: "left",
            field: "contact",
          },
          {
            name: "cep",
            required: true,
            label: "CEP",
            align: "left",
            field: "cep",
          },
          {
            name: "cgc",
            required: true,
            label: "CGC",
            align: "left",
            field: "cgc",
          },
          {
            name: "company",
            required: true,
            label: "Empresa",
            align: "left",
            field: "company",
          },
          {
            name: "survey",
            required: true,
            label: "Vistoria",
            align: "left",
            field: "survey",
          },
        ],
  
        contractorTableTable: [
          {
            id: 1,
            contractor: "1",
            name: "Cesama (interno)",
            address: "Av. Getúlio Vargas",
            nr: "1001",
            phone: "99198-1136",
            ramal: null,
            contact: "Cesama",
            cep: null,
            cgc: null,
            company: "Cesama",
            survey: "0",
            checkbox: null,
          },
          {
            id: 2,
            contractor: "10",
            name: "Infracon Engenharia e Comércio Ltda",
            address: "Av. Raja Gabaglia",
            nr: "4977",
            phone: null,
            ramal: null,
            contact: "Wesley Bambirra Rodrigues",
            cep: "30360670",
            cgc: "57444283000188",
            company: "Externa",
            survey: "0",
            checkbox: null,
          },
          {
            id: 3,
            contractor: "14",
            name: "Artha Tecnologia Soluções IMPO",
            address: "Av. dos Andradas",
            nr: "547",
            phone: "30267375",
            ramal: null,
            contact: "Guilherme",
            cep: null,
            cgc: "19500028000116",
            company: "Externa",
            survey: "0",
            checkbox: null,
          },
          {
            id: 4,
            contractor: "15",
            name: "Engerdrain NS",
            address: "Rua Uruguaiana",
            nr: "168",
            phone: "98412-7934",
            ramal: null,
            contact: "Carlos A. Mendes do Nascimento",
            cep: null,
            cgc: "05193435000113",
            company: "Externa",
            survey: "0",
            checkbox: null,
          },
          {
            id: 5,
            contractor: "16",
            name: "Água System Serviço LTDA",
            address: "Rua João Bueno Junior",
            nr: "38",
            phone: "(19) 9704-6919",
            ramal: null,
            contact: "Luiz Roberto de Rossi",
            cep: "13840321",
            cgc: "01562143000150",
            company: "Externa",
            survey: "0",
            checkbox: null,
          },
          {
            id: 6,
            contractor: "17",
            name: "Engerdrain L",
            address: "Rua Uruguaiana",
            nr: "168",
            phone: "984127934",
            ramal: null,
            contact: "Carlos A. Mendes do Nascimento",
            cep: null,
            cgc: "05193435000113",
            company: "Externa",
            survey: "0",
            checkbox: null,
          },
          {
            id: 7,
            contractor: "99",
            name: "Cesama (externo)",
            address: "Av. Getúlio Vargas",
            nr: "1001",
            phone: "99198-1136",
            ramal: null,
            contact: "Cesama",
            cep: null,
            cgc: null,
            company: "Externa",
            survey: "0",
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
  