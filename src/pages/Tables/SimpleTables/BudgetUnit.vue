<template>
  <MenuApp />
  <CompanyTag />
  <div class="container">
    <div class="content">
      <section>
        <div>
          <h1>Unidade orçamentária</h1>
        </div>

        <div class="margin-top-30">
          <DataTable
            style="
              border-bottom-left-radius: 10px;
              border-bottom-right-radius: 10px !important;
            "
            :value="budgetUnitTable"
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
        </div>
        <div class="box-tables-info" v-if="selectedRow">
          <div class="flex gap-4">
            <div class="w-48">
              <p class="p-labels">Orçamentário</p>
              <input
                v-model="selectedRow.budget"
                class="inputs margin-bottom-30"
              />
              <p class="p-labels">Nome do orçamentário</p>
              <input
                v-model="selectedRow.budgetName"
                class="inputs margin-bottom-30"
              />
              <p class="p-labels">Endereço</p>
              <div class="flex gap-4">
                <div class="w-77">
                  <input
                    v-model="selectedRow.address"
                    class="inputs margin-bottom-30"
                  />
                </div>
                <div class="w-19">
                  <input
                    v-model="selectedRow.number"
                    class="inputs margin-bottom-30"
                  />
                </div>
              </div>
              <div class="flex gap-4">
                <div class="w-48">
                  <p class="p-labels">CEP</p>
                  <input
                    v-model="selectedRow.cep"
                    class="inputs margin-bottom-30"
                  />
                </div>
                <div class="w-48">
                  <p class="p-labels">CGC / CNPJ</p>
                  <input
                    v-model="selectedRow.cgccnpj"
                    class="inputs margin-bottom-30"
                  />
                </div>
              </div>
              <div class="flex gap-4">
                <div class="w-30">
                  <p class="p-labels">Fone</p>
                  <input
                    v-model="selectedRow.phone"
                    class="inputs margin-bottom-30"
                  />
                </div>
                <div class="w-30">
                  <p class="p-labels">Ramal</p>
                  <input
                    v-model="selectedRow.extention"
                    class="inputs margin-bottom-30"
                  />
                </div>
                <div class="w-30">
                  <p class="p-labels">Data de vencimento</p>
                  <input
                    v-model="selectedRow.dueDate"
                    class="inputs margin-bottom-30"
                  />
                </div>
              </div>
            </div>
            <div class="w-48">
              <p class="p-labels">Contato</p>
              <input
                v-model="selectedRow.contact"
                class="inputs margin-bottom-30"
              />
              <p class="p-labels">Atividade</p>
              <select class="inputs margin-bottom-30" v-model="selectActivity">
                <option
                  v-for="option in selectActivityOptions"
                  :key="option.value"
                  :value="option.value"
                >
                  {{ option.label }}
                </option>
              </select>
              <p class="p-labels">Responsabilidade</p>
              <select
                class="inputs margin-bottom-30"
                v-model="selectResponsability"
              >
                <option
                  v-for="option in selectResponsabilityOptions"
                  :key="option.value"
                  :value="option.value"
                >
                  {{ option.label }}
                </option>
              </select>
              <div class="box-dados-de-retenção">
                <p class="P-20-3-6 mt-40">Dados de retenção</p>
                <div class="flex gap-4">
                  <div class="w-64">
                    <p class="p-labels">Serviço</p>
                    <select
                      class="inputs margin-bottom-30"
                      v-model="selectResponsability"
                    >
                      <option
                        v-for="option in selectResponsabilityOptions"
                        :key="option.value"
                        :value="option.value"
                      >
                        {{ option.label }}
                      </option>
                    </select>
                  </div>
                  <div class="w-32">
                    <p class="p-labels">Percentual da retenção</p>
                    <input
                      v-model="selectedRow.retention"
                      class="inputs margin-bottom-30"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex justify-center gap-4">
            <button class="button hover-primary bg-primary flex align-center">
              Alterar <i class="q-ml-sm fa-solid fa-edit"></i>
            </button>
            <button
              class="button hover-secondary bg-secondary flex align-center"
            >
              Excluir <i class="q-ml-sm fa-solid fa-trash"></i>
            </button>
            <button class="button hover-tertiary bg-tertiary flex align-center">
              Imprimir <i class="q-ml-sm fa-solid fa-print"></i>
            </button>
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

export default {
  name: "BudgetUnit",
  components: {
    MenuApp,
    CompanyTag,
    DataTable,
    Column,
  },
  data() {
    return {
      selectedRow: null,
      selected: [],
      selectActivity: null,
      selectActivityOptions: [
        { label: "Cemitério", value: "2" },
        { label: "Entidade filantrópica", value: "4" },
        { label: "Entidade religiosa", value: "5" },
        { label: "Escola", value: "1" },
        { label: "Hospital", value: "6" },
        { label: "Não é possível informar", value: "0" },
        { label: "Praça", value: "3" },
      ],
      selectResponsability: null,
      selectResponsabilityOptions: [
        { label: "Estadual", value: "1" },
        { label: "Estadual Administração Direta / Indireta", value: "4" },
        { label: "Federal", value: "2" },
        { label: "Municipal", value: "3" },
        { label: "Municipal Administração Direta / Indireta", value: "5" },
      ],
      columns: [
        {
          name: "budget",
          required: true,
          label: "Orçamentário",
          align: "left",
          field: "budget",
        },
        {
          name: "budgetName",
          required: true,
          label: "Nome do orçamentário",
          align: "left",
          field: "budgetName",
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
          name: "phone",
          required: true,
          label: "Fone",
          align: "left",
          field: "phone",
        },
        {
          name: "contact",
          required: true,
          label: "Contato",
          align: "left",
          field: "contact",
        },
        {
          name: "extention",
          required: true,
          label: "Ramal",
          align: "left",
          field: "extention",
        },
        {
          name: "cep",
          required: true,
          label: "CEP",
          align: "left",
          field: "cep",
        },
        {
          name: "cgccnpj",
          required: true,
          label: "CGC / CNPJ",
          align: "left",
          field: "cgccnpj",
        },
        {
          name: "activity",
          required: true,
          label: "Atividade",
          align: "left",
          field: "activity",
        },
        {
          name: "activity2",
          required: true,
          label: "Atividade",
          align: "left",
          field: "activity2",
        },
        {
          name: "responsability",
          required: true,
          label: "Responsabilidade",
          align: "left",
          field: "responsability",
        },
        {
          name: "responsability2",
          required: true,
          label: "Responsabilidade",
          align: "left",
          field: "responsability2",
        },
        {
          name: "dueDate",
          required: true,
          label: "Vencimento",
          align: "left",
          field: "dueDate",
        },
        {
          name: "service",
          required: true,
          label: "Serviço",
          align: "left",
          field: "service",
        },
        {
          name: "service2",
          required: true,
          label: "Serviço",
          align: "left",
          field: "service2",
        },
        {
          name: "retention",
          required: true,
          label: "% Retenção",
          align: "left",
          field: "retention",
        },
      ],

      budgetUnitTable: [
        {
          id: 6001,
          budget: "6001",
          budgetName: "UFJF - mês 05/2023 - suplementar",
          address: null,
          number: null,
          phone: null,
          contact: null,
          extention: null,
          cep: null,
          cgccnpj: null,
          activity: null,
          activity2: null,
          responsability: null,
          responsability2: null,
          dueDate: "31",
          service: null,
          service2: null,
          retention: null,
        },
        {
          id: 6002,
          budget: "6002",
          budgetName: "Min.Exército 4/Dep.Suprimentos",
          address: null,
          number: null,
          phone: null,
          contact: null,
          extention: null,
          cep: null,
          cgccnpj: null,
          activity: null,
          activity2: null,
          responsability: null,
          responsability2: null,
          dueDate: "31",
          service: null,
          service2: null,
          retention: null,
        },
        {
          id: 6003,
          budget: "6003",
          budgetName: "Colégio Militar de Juiz de Fora",
          address: null,
          number: null,
          phone: null,
          contact: null,
          extention: null,
          cep: null,
          cgccnpj: null,
          activity: null,
          activity2: null,
          responsability: null,
          responsability2: null,
          dueDate: "31",
          service: null,
          service2: null,
          retention: null,
        },
        {
          id: 6004,
          budget: "6004",
          budgetName: "Polícia Civil do Estado de Minas Gerais",
          address: null,
          number: null,
          phone: null,
          contact: null,
          extention: null,
          cep: null,
          cgccnpj: null,
          activity: null,
          activity2: null,
          responsability: null,
          responsability2: null,
          dueDate: "31",
          service: null,
          service2: null,
          retention: null,
        },
        {
          id: 6005,
          budget: "6005",
          budgetName: "Universidade Federal de Juiz de Fora",
          address: null,
          number: null,
          phone: null,
          contact: null,
          extention: null,
          cep: null,
          cgccnpj: null,
          activity: null,
          activity2: null,
          responsability: null,
          responsability2: null,
          dueDate: "31",
          service: null,
          service2: null,
          retention: null,
        },
        {
          id: 6006,
          budget: "6006",
          budgetName: "CMD. 4A. Brigada de Inf. Motorizada",
          address: null,
          number: null,
          phone: null,
          contact: null,
          extention: null,
          cep: null,
          cgccnpj: null,
          activity: null,
          activity2: null,
          responsability: null,
          responsability2: null,
          dueDate: "31",
          service: null,
          service2: null,
          retention: null,
        },
        {
          id: 6007,
          budget: "6007",
          budgetName: "CMD.A. Bda. Inf. Motorizada - PNR ",
          address: null,
          number: null,
          phone: null,
          contact: null,
          extention: null,
          cep: null,
          cgccnpj: null,
          activity: null,
          activity2: null,
          responsability: null,
          responsability2: null,
          dueDate: "31",
          service: null,
          service2: null,
          retention: null,
        },
        {
          id: 6008,
          budget: "6008",
          budgetName: "Embratel",
          address: null,
          number: null,
          phone: null,
          contact: null,
          extention: null,
          cep: null,
          cgccnpj: null,
          activity: null,
          activity2: null,
          responsability: null,
          responsability2: null,
          dueDate: "31",
          service: null,
          service2: null,
          retention: null,
        },
      ],
      selectedOption: null,
    };
  },
  methods: {
    handleRowClick(event) {
      console.log(event.data);
      this.selectedRow = event.data;
    },
  },
  
};
</script>
