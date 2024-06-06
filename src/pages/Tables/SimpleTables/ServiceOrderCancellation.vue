<template>
  <MenuApp />
  <CompanyTag />
  <div class="container">
    <div class="content">
      <section>
        <div class="intro-services-to-be-billed">
          <h1 class="title-page">Cancelamento de Ordem de Serviço</h1>
        </div>
        <div class="flex gap-4">
          <div class="w-61 margin-top-30">
            <DataTable style="
                border-bottom-left-radius: 10px;
                border-bottom-right-radius: 10px !important;
              " :value="serviceOrderCancellationTable" tableStyle="min-width: 50rem" :paginator="true" :rows="10"
              dataKey="id" @row-click="handleRowClick" :selectionMode="'single'" v-model:selection="selectedRow">
              <Column v-for="col of columns" :key="col.field" :field="col.field" :header="col.label"></Column>
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
          <div class="w-35">
            <div class="box-tables-info" v-if="selectedRow">
              <p class="p-labels">Código</p>
              <input v-model="selectedRow.code" class="inputs margin-bottom-30" />
              <p class="p-labels">Descrição</p>
              <input v-model="selectedRow.description" class="inputs margin-bottom-30" />
              <div class="mt-30">
                <p class="p-labels mb-20">Opções de cancelamento</p>
                <div class="flex gap-5">
                  <div>
                    <div class="flex  align-center">
                      <input type="checkbox" class="checkbox" />
                      <p class="R-15-1-4">Cancelamento</p>
                    </div>
                    <div class="flex">
                      <input type="checkbox" class="checkbox" />
                      <p class="R-15-1-4">Baixa</p>
                    </div>

                  </div>
                  <div>


                    <div class="flex">
                      <input type="checkbox" class="checkbox" />
                      <p class="R-15-1-4">Atribuição do sistema</p>
                    </div>
                    <div class="flex">
                      <input type="checkbox" class="checkbox" />
                      <p class="R-15-1-4">Baixa e Cancelamento</p>
                    </div>
                  </div>
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
import Button from "primevue/button";
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

export default {
  name: "ServiceOrderCancellation",
  components: {
    MenuApp,
    CompanyTag,
    DataTable,
    Column,
    Button,
  },
  data() {
    return {
      selected: [],
      selectedRow: null,
      columns: [
        {
          name: "code",
          required: true,
          label: "Código",
          align: "left",
          field: "code",
        },
        {
          name: "description",
          required: true,
          label: "Descrição",
          align: "left",
          field: "description",
        },
      ],

      serviceOrderCancellationTable: [
        {
          id: 1,
          code: "1",
          description: "Serviço executado diferente do solicitado",
          checkbox: null,
        },
        {
          id: 2,
          code: "2",
          description: "Cancelamento a pedido do cliente - atendimento",
          checkbox: null,
        },
        {
          id: 3,
          code: "3",
          description: "Cancelamento a pedido do cliente em campo",
          checkbox: null,
        },
        {
          id: 4,
          code: "4",
          description: "Erro na digitação dos dados da OS",
          checkbox: null,
        },
        {
          id: 5,
          code: "5",
          description: "Solicitação em duplicidade",
          checkbox: null,
        },
        {
          id: 6,
          code: "6",
          description: "Outra equipe já executou o serviço",
          checkbox: null,
        },
        {
          id: 7,
          code: "7",
          description: "Serviço não solicitado pelo cliente",
          checkbox: null,
        },
        {
          id: 8,
          code: "8",
          description: "Serviço não pertence a Cesama",
          checkbox: null,
        },
        {
          id: 9,
          code: "9",
          description: "Arruamento não definido pela prefeitura",
          checkbox: null,
        },
        {
          id: 10,
          code: "10",
          description: "Área crítica de abastecimento",
          checkbox: null,
        },
        {
          id: 11,
          code: "11",
          description: "Área de manobra",
          checkbox: null,
        },
        {
          id: 12,
          code: "12",
          description: "Cancelamento por entrada de pagamento",
          checkbox: null,
        },
        {
          id: 13,
          code: "13",
          description: "Inviabilidade para execução",
          checkbox: null,
        },
        {
          id: 14,
          code: "14",
          description: "Nada consta de anormal",
          checkbox: null,
        },
        {
          id: 15,
          code: "15",
          description: "Cancelamento por falta de material",
          checkbox: null,
        },
        {
          id: 16,
          code: "16",
          description: "Não existe rede de água ou esgoto no local",
          checkbox: null,
        },
        {
          id: 17,
          code: "17",
          description: "Cliente não permitiu a execução do serviço",
          checkbox: null,
        },
        {
          id: 18,
          code: "18",
          description: "Terreno público",
          checkbox: null,
        },
        {
          id: 19,
          code: "19",
          description: "Área de invasão",
          checkbox: null,
        },
        {
          id: 20,
          code: "20",
          description: "Outros motivos",
          checkbox: null,
        },
        {
          id: 21,
          code: "21",
          description: "Não aprovado na vistoria",
          checkbox: null,
        },
        {
          id: 22,
          code: "22",
          description: "Outro serviço",
          checkbox: null,
        },
        {
          id: 23,
          code: "23",
          description: "Reparo de água",
          checkbox: null,
        },
        {
          id: 24,
          code: "24",
          description: "Reparo de esgoto",
          checkbox: null,
        },
        {
          id: 26,
          code: "26",
          description: "Falta de regularização padrão",
          checkbox: null,
        },
        {
          id: 27,
          code: "27",
          description: "A pedido da fiscalização",
          checkbox: null,
        },
        {
          id: 28,
          code: "28",
          description: "Cancelado por termo de acordo de execução fiscal",
          checkbox: null,
        },
        {
          id: 29,
          code: "29",
          description: "Cancelamento a pedido da Demc.",
          checkbox: null,
        },
        {
          id: 30,
          code: "30",
          description: "Cad. de esgoto regularizado",
          checkbox: null,
        },
        {
          id: 31,
          code: "31",
          description: "Prazo",
          checkbox: null,
        },
      ],
    };
  },
  methods: {
    handleRowClick(event) {
      this.selectedRow = event.data;
    },
  },
};
</script>
