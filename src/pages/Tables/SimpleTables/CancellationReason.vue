<template>
  <MenuApp />
  <CompanyTag />
  <div class="container">
    <div class="content">
      <section>
        <div class="intro-services-to-be-billed">
          <h1 class="title-page">Motivo do cancelamento</h1>
        </div>
        <div class="flex gap-4">
          <div class="w-61 margin-top-30">
            <DataTable
              style="
                border-bottom-left-radius: 10px;
                border-bottom-right-radius: 10px !important;
              "
              :value="cancellationReasonTable"
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
          <div class="w-35">
            <div class="box-tables-info" v-if="selectedRow">
              <p class="p-labels">Código</p>
              <InputText
                v-model="selectedRow.code"
                class="inputs margin-bottom-30"
              />
              <p class="p-labels">Descrição</p>
              <InputText
                v-model="selectedRow.description"
                class="inputs margin-bottom-30"
              />
              <p class="p-labels">Local de uso</p>
              <select
                class="inputs margin-bottom-30"
                v-model="selectResponsability"
              >
                <option
                  v-for="option in placeOfUse"
                  :key="option.value"
                  :value="option.value"
                >
                  {{ option.label }}
                </option>
              </select>
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
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
export default {
  name: "CancellationReason",
  components: {
    MenuApp,
    CompanyTag,
    DataTable,
    Column,
    InputText,
    Button,
  },
  data() {
    return {
      selectedRow: null,
      selected: [],
      placeOfUse: [
        { label: "Inativo", value: "0" },
        { label: "Refaturamento", value: "1" },
        { label: "Cancelamento / reabertura", value: "2" },
        { label: "Refaturamento e cancelamento / reabertura", value: "3" },
        { label: "Confirmação / cancelamento da guia", value: "4" },
      ],
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

      cancellationReasonTable: [
        {
          id: 1,
          code: "01",
          description: "Cancelamento - tarifa (água e / ou esgoto)",
          checkbox: null,
        },
        {
          id: 2,
          code: "02",
          description: "Lançamento de consumo real",
          checkbox: null,
        },
        {
          id: 3,
          code: "03",
          description: "Alteração de economias",
          checkbox: null,
        },
        {
          id: 4,
          code: "04",
          description: "Erro de leitura",
          checkbox: null,
        },
        {
          id: 5,
          code: "05",
          description: "Abatimento de PM",
          checkbox: null,
        },
        {
          id: 6,
          code: "06",
          description: "Resolução 0657/97",
          checkbox: null,
        },
        {
          id: 7,
          code: "07",
          description: "Hidrômetro (atrasado, irregular, parado)",
          checkbox: null,
        },
        {
          id: 8,
          code: "08",
          description: "Perda de arquivo",
          checkbox: null,
        },
        {
          id: 9,
          code: "09",
          description: "Erro de lançamento",
          checkbox: null,
        },
        {
          id: 10,
          code: "10",
          description: "Parcelamento",
          checkbox: null,
        },
        {
          id: 11,
          code: "11",
          description: "Análise da DF",
          checkbox: null,
        },
        {
          id: 12,
          code: "12",
          description: "Cancelamento de cobranças indevidas",
          checkbox: null,
        },
        {
          id: 13,
          code: "13",
          description: "Valor recebido diferente da cobrança",
          checkbox: null,
        },
        {
          id: 14,
          code: "14",
          description: "Contas antecipadas",
          checkbox: null,
        },
        {
          id: 15,
          code: "15",
          description: "Código 84",
          checkbox: null,
        },
        {
          id: 16,
          code: "16,",
          description: "Recalculado o valor do m3",
          checkbox: null,
        },
        {
          id: 17,
          code: "17",
          description: "Água cortada",
          checkbox: null,
        },
        {
          id: 18,
          code: "18",
          description: "Por decisão judicial",
          checkbox: null,
        },
        {
          id: 19,
          code: "19",
          description: "Cancelamento de tarifa (torreoes)",
          checkbox: null,
        },
        {
          id: 20,
          code: "20",
          description: "Por ordem judicial",
          checkbox: null,
        },
        {
          id: 21,
          code: "21",
          description: "Análise GFC",
          checkbox: null,
        },
        {
          id: 22,
          code: "22",
          description: "Acerto de valor de fatura antecipada",
          checkbox: null,
        },
        {
          id: 23,
          code: "23",
          description: "Nova projeção utilizando média anterior",
          checkbox: null,
        },
        {
          id: 24,
          code: "24",
          description: "Decreto 8115 - chuvas de janeiro de 2004",
          checkbox: null,
        },
        {
          id: 25,
          code: "25",
          description: "Retorno de água retrocedendo a leitura do hidrômetro",
          checkbox: null,
        },
        {
          id: 26,
          code: "26",
          description: "Acordo feito pela PJ",
          checkbox: null,
        },
        {
          id: 27,
          code: "27",
          description: "Incusão de déitos",
          checkbox: null,
        },
        {
          id: 28,
          code: "28",
          description: "Acerto do valor da multa",
          checkbox: null,
        },
        {
          id: 29,
          code: "29",
          description: "Acordo judicial",
          checkbox: null,
        },
        {
          id: 30,
          code: "30",
          description: "Remissão multa / juros conforme resolução 001/2004",
          checkbox: null,
        },
        {
          id: 31,
          code: "31",
          description: "Cancelamento de pedido de remissão de multa / juros",
          checkbox: null,
        },
        {
          id: 32,
          code: "32",
          description: "Cancelamento de remissão de multa / desparcelamento",
          checkbox: null,
        },
        {
          id: 33,
          code: "33",
          description: "Aplicação da resolução 007/2005",
          checkbox: null,
        },
        {
          id: 34,
          code: "34",
          description: "Corte técnico",
          checkbox: null,
        },
        {
          id: 35,
          code: "35",
          description: "Prescrição de débitos - res. 23/05",
          checkbox: null,
        },
        {
          id: 36,
          code: "36",
          description: "Conforme autorização do prefeito",
          checkbox: null,
        },
        {
          id: 37,
          code: "37",
          description: "Remissão da multa / juros conforme resolução 008/2006",
          checkbox: null,
        },
        {
          id: 38,
          code: "38",
          description: "Juros indevidos / erro rot. prescrição de débito",
          checkbox: null,
        },
        {
          id: 39,
          code: "39",
          description:
            "Erro de retenção economia pública federal - restituição",
          checkbox: null,
        },
        {
          id: 40,
          code: "40",
          description: "Recálculo m3 (resolução 07/07) 14/06/2007",
          checkbox: null,
        },
        {
          id: 41,
          code: "41",
          description:
            "Valor pago para usuario diferente valor devido no sistema",
          checkbox: null,
        },
        {
          id: 42,
          code: "42",
          description: "Inversão de hidrômetro",
          checkbox: null,
        },
        {
          id: 43,
          code: "43",
          description: "Inversão de leitura",
          checkbox: null,
        },
        {
          id: 44,
          code: "44",
          description: "Voltar valor da conta original (usuário)",
          checkbox: null,
        },
        {
          id: 45,
          code: "45",
          description:
            "Débito lançado com taxa próxima referência fatura global PFJ",
          checkbox: null,
        },
        {
          id: 46,
          code: "46",
          description: "Hidrômetro invertido",
          checkbox: null,
        },
        {
          id: 47,
          code: "47",
          description:
            "Cancelamento recálculo - rateio consumo resolução 07/07",
          checkbox: null,
        },
        {
          id: 48,
          code: "48",
          description: "Res. 009/09 vazamento inv ramal subterrâneo",
          checkbox: null,
        },
        {
          id: 49,
          code: "49",
          description: "Lançamento média conforme procedimento GFC",
          checkbox: null,
        },
        {
          id: 50,
          code: "50",
          description: "Transferência de valores para outra matrícula",
          checkbox: null,
        },
        {
          id: 51,
          code: "51",
          description: "Resolução 05/2014 - ARSAE",
          checkbox: null,
        },
        {
          id: 52,
          code: "52",
          description: "Aplicação da resolução 05/2013",
          checkbox: null,
        },
        {
          id: 53,
          code: "53",
          description: "Tarifa social",
          checkbox: null,
        },
        {
          id: 54,
          code: "54",
          description: "Restituição",
          checkbox: null,
        },
        {
          id: 55,
          code: "55",
          description: "Fatura zerada",
          checkbox: null,
        },
        {
          id: 56,
          code: "56",
          description: "Remissão de multa conforme resolução 013/2015",
          checkbox: null,
        },
        {
          id: 57,
          code: "57",
          description: "Pagamento de débito através de guia",
          checkbox: null,
        },
        {
          id: 58,
          code: "58",
          description: "Remissão multa / juros conforme resolução 0XX/2019",
          checkbox: null,
        },
        {
          id: 59,
          code: "59",
          description: "Transferência de valores para outro CPF",
          checkbox: null,
        },
        {
          id: 60,
          code: "60",
          description: "Deliberação 127/2021 cancelamento de tarifa fixa",
          checkbox: null,
        },
        {
          id: 61,
          code: "61",
          description: "Deliberação 433 - lançamento da média por enchente",
          checkbox: null,
        },
        {
          id: 62,
          code: "62",
          description: "Desconto por vazamento resolução 002/2022",
          checkbox: null,
        },
        {
          id: 63,
          code: "63",
          description: "Retida CRT",
          checkbox: null,
        },
        {
          id: 64,
          code: "64",
          description: "Conta cancelada - valor menor",
          checkbox: null,
        },
        {
          id: 65,
          code: "65",
          description: "Débitos",
          checkbox: null,
        },
        {
          id: 66,
          code: "66",
          description: "Aferição",
          checkbox: null,
        },
        {
          id: 67,
          code: "67",
          description: "Análise de consumo",
          checkbox: null,
        },
        {
          id: 68,
          code: "68",
          description: "Contestação de multa",
          checkbox: null,
        },
        {
          id: 69,
          code: "69",
          description: "Parcelamento revogado",
          checkbox: null,
        },
        {
          id: 70,
          code: "70",
          description: "Conta com consumo final",
          checkbox: null,
        },
        {
          id: 71,
          code: "71",
          description: "Retirada de multa por infração - res. contestação",
          checkbox: null,
        },
        {
          id: 72,
          code: "AF",
          description: "Fatura paga",
          checkbox: null,
        },
        {
          id: 73,
          code: "73",
          description: "Retorno CTA antecipado",
          checkbox: null,
        },
        {
          id: 74,
          code: "CV",
          description: "Cancelamento na vistoria",
          checkbox: null,
        },
        {
          id: 75,
          code: "ED",
          description: "Erro de cadastramento",
          checkbox: null,
        },
        {
          id: 76,
          code: "GN",
          description: "Guia não pertence à matrícula",
          checkbox: null,
        },
        {
          id: 77,
          code: "NG",
          description: "Renegociação",
          checkbox: null,
        },
        {
          id: 78,
          code: "PC",
          description: "A pedido do cliente",
          checkbox: null,
        },
        {
          id: 79,
          code: "RD",
          description: "Redatamento de fatura",
          checkbox: null,
        },
        {
          id: 80,
          code: "SD",
          description: "Duplicidade de solicitação",
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
