<template>
  <MenuApp />
  <CompanyTag />
  <div class="container">
    <div class="content">
      <section>
        <div class="intro-services-to-be-billed">
          <h1 class="title-page">Unidade de Serviço</h1>
        </div>

        <div class="margin-top-30">
          <DataTable
            style="
              border-bottom-left-radius: 10px;
              border-bottom-right-radius: 10px !important;
            "
            :value="serviceUnitTable"
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
              <p class="p-labels">Unidade</p>
              <input
                v-model="selectedRow.unit"
                class="inputs margin-bottom-30"
              />
            </div>
            <div class="w-48">
              <p class="p-labels">Nome da unidade</p>
              <input
                v-model="selectedRow.unitName"
                class="inputs margin-bottom-30"
              />
            </div>
          </div>
          <div class="flex gap-5">
            <div class="w-30">
              <p class="p-labels">Sigla</p>
              <input
                v-model="selectedRow.acronym"
                class="inputs margin-bottom-30"
              />
            </div>
            <div class="w-30">
              <p class="p-labels">Local</p>
              <select class="inputs margin-bottom-30" v-model="selectLocal">
              <option v-for="option in selectLocalOptions" :key="option.value" :value="option.value">
                {{ option.label }}
              </option>
            </select>
            </div>
            <div class="w-30">
              <p class="p-labels">Função</p>
               <select class="inputs margin-bottom-30" v-model="selectFunction">
              <option v-for="option in selectFunctionOptions" :key="option.value" :value="option.value">
                {{ option.label }}
              </option>
            </select>
            </div>
          </div>
          <div class="flex gap-5">
            <div class="w-30">
              <p class="p-labels">Setor</p>
              <select class="inputs margin-bottom-30" v-model="selectSector">
              <option v-for="option in selectSectorOptions" :key="option.value" :value="option.value">
                {{ option.label }}
              </option>
            </select>
            </div>
            <div class="w-30">
              <p class="p-labels">Quantidade máxima de fotos</p>
              <input
                v-model="selectedRow.maxPicture"
                class="inputs margin-bottom-30"
              />
            </div>
            <div class="w-30">
              <p class="p-labels">Quantidade mínima de fotos</p>
              <input
                v-model="selectedRow.minPicture"
                class="inputs margin-bottom-30"
              />
            </div>
          </div>
          <div class="flex gap-5">
            <div class="w-30 flex align-end">
              <p class="p-labels"><input type="checkbox" class="q-mr-sm"/>Programa equipes empreiteira?</p>
              
            </div>
            <div class="w-30">
              <p class="p-labels">Contato</p>
              <input
                v-model="selectedRow.contact"
                class="inputs margin-bottom-30"
              />
            </div>
            <div class="w-30">
              <p class="p-labels">Fone</p>
              <input
                v-model="selectedRow.phone"
                class="inputs margin-bottom-30"
              />
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

export default {
  name: "ServiceUnit",
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
      contractor: null,
      selectLocal: null,
      selectFunction: null,
      selectFunctionOptions: [
        { label: 'Assessoria de comunicação e ouvidoria', value: '182' },
        { label: 'Assessoria de gestão da qualidade', value: '156' },
        { label: 'Assessoria de tecnologia da informação', value: '145' },
        {
          label: 'Assessoria planejamento estrat / controladoria',
          value: '117',
        },
        { label: 'Assessoria prog. e controle de serviços', value: '116' },
        { label: 'Auditoria interna', value: '201' },
        { label: 'DECO - APOIO', value: '250' },
        { label: 'DECO - RETORNO', value: '251' },
        {
          label: 'Departamento de saúde e segurança do trabalho',
          value: '210',
        },
        {
          label: 'Departamento de serviços gerais e documentação',
          value: '211',
        },
        { label: 'Departamento comercial', value: '110' },
        { label: 'Departamento de automação', value: '220' },
        { label: 'Departamento de compras e estoque', value: '141' },
        { label: 'Departamento de contabilidade e custos', value: '183' },
        { label: 'Departamento de faturamento e corte', value: '111' },
        { label: 'Departamento de fiscalização de obras', value: '204' },
        { label: 'Departamento de operação do sistema', value: '154' },
        { label: 'Departamento de projetos', value: '206' },
        { label: 'Departamento de recursos humanos', value: '209' },
        { label: 'Departamento de tratamento de água', value: '152' },
        { label: 'Departamento de tratamento de esgoto', value: '153' },
        { label: 'Departamento de equipamentos e veículos', value: '212' },
        { label: 'Departamento de manutenção eletromecânica', value: '221' },
        { label: 'Departamento operacional', value: '222' },
        { label: 'Diretoria de desenvolvimento e expansão', value: '207' },
        { label: 'Diretoria financeira e administrativa', value: '25' },
        { label: 'Diretoria técnico operacional', value: '233' },
        { label: 'ETA Castelo Branco / João Penido', value: '225' },
        { label: 'ETA CDI', value: '226' },
        { label: 'ETA Compacta terrões', value: '227' },
        { label: 'ETA Compacta valadares', value: '228' },
        { label: 'ETA São pedro', value: '229' },
        { label: 'ETE Barbosa Lage', value: '230' },
        { label: 'ETE Barreira do Triúnfo', value: '231' },
        { label: 'GEDE - Gerência de desenvolvimento', value: '253' },
        { label: 'Gerência administrativa e recursos humanos', value: '144' },
        { label: 'Gerência comercial', value: '216' },
        { label: 'Gerência de automação e telecomunicações', value: '150' },
        { label: 'Gerência de manutenção', value: '234' },
        { label: 'Gerência de obras', value: '120' },
        { label: 'Gerência de operações', value: '157' },
        { label: 'Gerência financeira e contábil', value: '217' },
        { label: 'Gerência técnica', value: '122' },
        { label: 'Licitações e assessoria de contratos', value: '113' },
        { label: 'Medição de cadastro técnico', value: '115' },
        { label: 'Pessoal à disposição de outros órgãos', value: '218' },
        { label: 'Presidência', value: '160' },
        { label: 'Procuradoria jurídica', value: '130' },
        { label: 'Secretaria de governança', value: '170' },
        {
          label: 'Supervisão de compras e cadastro de materiais',
          value: '143',
        },
        { label: 'Supervisão de equipamentos e veículos', value: '149' },
        {
          label: 'Supervisão de estação de tratamento de esgoto',
          value: '232',
        },
        {
          label:
            'Supervisão de manutenção de redes e equipamentos de informática',
          value: '202',
        },
        {
          label: 'Supervisão de manutenção de equipamentos de automação',
          value: '219',
        },
        {
          label: 'Supervisão de treinamento e desenvolvimento de pessoas',
          value: '208',
        },
        {
          label: 'Supervisão administrativa de pessoal e benefícios',
          value: '142',
        },
        { label: 'Supervisão de atendimento', value: '112' },
        { label: 'Supervisão de cadastro comercial', value: '118' },
        { label: 'Supervisão de cadastro técnico', value: '205' },
        { label: 'Supervisão de fiscalização e corte', value: '214' },
        { label: 'Supervisão de leitura', value: '215' },
        { label: 'Supervisão de ligações', value: '203' },
        { label: 'Supervisão de manutenção civil', value: '155' },
        { label: 'Supervisão de recuperação de receitas', value: '132' },
        { label: 'Supervisão de recuperação de receitas', value: '213' },
        { label: 'Supervisão de terouraria', value: '114' },
        { label: 'Vistoria de ligações', value: '200' },

      ],
      selectLocalOptions: [{ label: 'Juiz de Fora', value: '1' }],
      selectSector: null,
      selectSectorOptions: [
        { label: 'Cesama ', value: '1' },

      ],
      columns: [
        {
          name: 'unit',
          required: true,
          label: 'Unidade',
          align: 'left',
          field: 'unit',
        },
        {
          name: 'unitName',
          required: true,
          label: 'Nome da unidade',
          align: 'left',
          field: 'unitName',
        },
        {
          name: 'acronym',
          required: true,
          label: 'Sigla',
          align: 'left',
          field: 'acronym',
        },
        {
          name: 'local',
          required: true,
          label: 'Local',
          align: 'left',
          field: 'local',
        },
        {
          name: 'function',
          required: true,
          label: 'Função',
          align: 'left',
          field: 'function',
        },
        {
          name: 'sector',
          required: true,
          label: 'Setor',
          align: 'left',
          field: 'sector',
        },
        {
          name: 'contractor',
          required: true,
          label: 'Progr. Empreiteira?',
          align: 'left',
          field: 'contractor',
        },
        {
          name: 'minPicture',
          required: true,
          label: 'Qtd mínima de fotos',
          align: 'left',
          field: 'minPicture',
        },
        {
          name: 'maxPicture',
          required: true,
          label: 'Qtd máxima de fotos',
          align: 'left',
          field: 'maxPicture',
        },
      ],
      serviceUnitTable: [
        {
          id: 1,
          unit: '110',
          unitName: 'Departamento comercial',
          acronym: 'DECO',
          local: 'Juiz de fora - 1',
          function: 'Departamento comercial - 110',
          sector: 'Cesama - 1',
          contractor: false,
          minPicture: '0',
          maxPicture: '0',
        },
        {
          id: 2,
          unit: '111',
          unitName: 'Departamento de faturamento e corte',
          acronym: 'DEFC',
          local: 'Juiz de fora - 1',
          function: 'Departamento de faturamento e corte - 111',
          sector: 'Cesama - 1',
          contractor: false,
          minPicture: '1',
          maxPicture: '6',
        },
        {
          id: 3,
          unit: '112',
          unitName: 'Supervisão de atendimento',
          acronym: 'SUA',
          local: 'Juiz de fora - 1',
          function: 'Supervisão de atendimento - 112',
          sector: 'Cesama - 1',
          contractor: false,
          minPicture: '0',
          maxPicture: '0',
        },
        {
          id: 4,
          unit: '113',
          unitName: 'Licitações e assessoria de contratos',
          acronym: 'DELC',
          local: 'Juiz de fora - 1',
          function: 'Licitações e assessoria de contratos - 113',
          sector: 'Cesama - 1',
          contractor: false,
          minPicture: '0',
          maxPicture: '0',
        },
        {
          id: 5,
          unit: '114',
          unitName: 'Supervisão de terouraria',
          acronym: 'SUT',
          local: 'Juiz de fora - 1',
          function: 'Supervisão de terouraria - 114',
          sector: 'Cesama - 1',
          contractor: false,
          minPicture: '0',
          maxPicture: '0',
        },
        {
          id: 6,
          unit: '114',
          unitName: 'Departamento de medição e cadastro técnico',
          acronym: 'DEMC',
          local: 'Juiz de fora - 1',
          function: 'Medição e cadastro técnico - 115',
          sector: 'Cesama - 1',
          contractor: false,
          minPicture: '1',
          maxPicture: '6',
        },
        {
          id: 7,
          unit: '116',
          unitName: 'Assessoria prog. e controle de serviços',
          acronym: 'ACS',
          local: 'Juiz de fora - 1',
          function: 'Assessoria prog. e controle de serviços - 116',
          sector: 'Cesama - 1',
          contractor: false,
          minPicture: '0',
          maxPicture: '0',
        },
        {
          id: 8,
          unit: '117',
          unitName: 'Assessoria de planejamento estrat. / controladoria',
          acronym: 'APC',
          local: 'Juiz de fora - 1',
          function: 'Assessoria de planejamento estrat. / controladoria - 117',
          sector: 'Cesama - 1',
          contractor: false,
          minPicture: '1',
          maxPicture: '6',
        },
        {
          id: 9,
          unit: '118',
          unitName: 'Supervisão de cadastro comercial',
          acronym: 'SCC',
          local: 'Juiz de fora - 1',
          function: 'Supervisão de cadastro comercial - 118',
          sector: 'Cesama - 1',
          contractor: false,
          minPicture: '0',
          maxPicture: '0',
        },
        {
          id: 10,
          unit: '120',
          unitName: 'Gerência de obras',
          acronym: 'GEOB',
          local: 'Juiz de fora - 1',
          function: 'Gerência de obras - 120',
          sector: 'Cesama - 1',
          contractor: false,
          minPicture: '0',
          maxPicture: '0',
        },
        {
          id: 11,
          unit: '122',
          unitName: 'Gerência técnica',
          acronym: 'GETE',
          local: 'Juiz de fora - 1',
          function: 'Gerência técnica - 122',
          sector: 'Cesama - 1',
          contractor: false,
          minPicture: '0',
          maxPicture: '0',
        },
        {
          id: 12,
          unit: '130',
          unitName: 'Procuradoria jurídica',
          acronym: 'PRJ',
          local: 'Juiz de fora - 1',
          function: 'Procuradoria jurídica - 130',
          contractor: false,
          minPicture: '0',
          maxPicture: '0',
        },
        {
          id: 13,
          unit: '132',
          unitName: 'Supervisão de recuperação de receitas',
          acronym: 'SRR',
          local: 'Juiz de fora - 1',
          function: 'Supervisão de recuperação de receitas - 132',
          sector: 'Cesama - 1',
          contractor: false,
          minPicture: '0',
          maxPicture: '0',
        },
        {
          id: 14,
          unit: '140',
          unitName: 'Diretoria financeira e administrativa',
          acronym: 'DRFA',
          local: 'Juiz de fora - 1',
          function: 'Diretoria financeira e administrativa - 140',
          sector: 'Cesama - 1',
          contractor: false,
          minPicture: '0',
          maxPicture: '0',
        },
        {
          id: 15,
          unit: '141',
          unitName: 'Departamento de compras e estoque',
          acronym: 'DECE',
          local: 'Juiz de fora - 1',
          function: 'Departamento de compras e estoque - 141',
          sector: 'Cesama - 1',
          contractor: false,
          minPicture: '0',
          maxPicture: '0',
        },
        {
          id: 16,
          unit: '142',
          unitName: 'Supervisão administrativa de pessoal e benefícios',
          acronym: 'SAB',
          local: 'Juiz de fora - 1',
          function: 'Supervisão administrativa de pessoal e benefícios - 142',
          sector: 'Cesama - 1',
          contractor: false,
          minPicture: '0',
          maxPicture: '0',
        },
        {
          id: 17,
          unit: '143',
          unitName: 'Supervisão de compras e cadastro de materiais',
          acronym: 'SCM',
          local: 'Juiz de fora - 1',
          function: 'Supervisão de compras e cadastro de materiais - 143',
          sector: 'Cesama - 1',
          contractor: false,
          minPicture: '0',
          maxPicture: '0',
        },
        {
          id: 18,
          unit: '144',
          unitName: 'Gerência administrativa e recursos humanos',
          acronym: 'SIN',
          local: 'Juiz de fora - 1',
          function: 'Gerência administrativa e recursos humanos - 144',
          sector: 'Cesama - 1',
          contractor: false,
          minPicture: '0',
          maxPicture: '0',
        },
        {
          id: 19,
          unit: '145',
          unitName: 'Gerência de inovação técnica e informática',
          acronym: 'SPA',
          local: 'Juiz de fora - 1',
          function: 'Acessoria de tecnologia da informação - 145',
          sector: 'Cesama - 1',
          contractor: false,
          minPicture: '0',
          maxPicture: '0',
        },
        {
          id: 20,
          unit: '149',
          unitName: 'Supervisão e controle de equipamentos e veículos',
          acronym: 'SSG',
          local: 'Juiz de fora - 1',
          function: 'Supervisão e controle de equipamentos e veículos - 149',
          sector: 'Cesama - 1',
          contractor: false,
          minPicture: '0',
          maxPicture: '0',
        },
        {
          id: 21,
          unit: '150',
          unitName: 'Gerência de automação e telecomunicações',
          acronym: 'STR',
          local: 'Juiz de fora - 1',
          function: 'Gerência de automação e telecomunicações - 150',
          sector: 'Cesama - 1',
          contractor: false,
          minPicture: '0',
          maxPicture: '0',
        },
        {
          id: 22,
          unit: '152',
          unitName: 'Departamento de tratamento de água',
          acronym: 'DETA',
          local: 'Juiz de fora - 1',
          function: 'Departamento de tratamento de água - 152',
          sector: 'Cesama - 1',
          contractor: false,
          minPicture: '0',
          maxPicture: '0',
        },
        {
          id: 23,
          unit: '153',
          unitName: 'Departamento de tratamento de esgoto',
          acronym: 'DETE',
          local: 'Juiz de fora - 1',
          function: 'Departamento de tratamento de esgoto - 153',
          sector: 'Cesama - 1',
          contractor: false,
          minPicture: '0',
          maxPicture: '0',
        },
        {
          id: 24,
          unit: '154',
          unitName: 'Departamento de operação do sistema',
          acronym: 'DOS',
          local: 'Juiz de fora - 1',
          function: 'Departamento de operação do sistema - 154',
          sector: 'Cesama - 1',
          contractor: false,
          minPicture: '1',
          maxPicture: '1',
        },
        {
          id: 25,
          unit: '155',
          unitName: 'Supervisão de manutenção civil',
          acronym: 'SMC',
          local: 'Juiz de fora - 1',
          function: 'Supervisão de manutenção civil - 155',
          sector: 'Cesama - 1',
          contractor: false,
          minPicture: '0',
          maxPicture: '0',
        },
        {
          id: 26,
          unit: '156',
          unitName: 'Acessoria de gestão da qualidade',
          acronym: 'AGQ',
          local: 'Juiz de fora - 1',
          function: 'Acessoria de gestão da qualidade - 156',
          sector: 'Cesama - 1',
          contractor: false,
          minPicture: '0',
          maxPicture: '0',
        },
        {
          id: 27,
          unit: '157',
          unitName: 'Gerência de operações',
          acronym: 'GEOP',
          local: 'Juiz de fora - 1',
          function: 'Gerência de operações - 157',
          sector: 'Cesama - 1',
          contractor: false,
          minPicture: '0',
          maxPicture: '0',
        },
        {
          id: 28,
          unit: '160',
          unitName: 'Presidência',
          acronym: 'DP',
          local: 'Juiz de fora - 1',
          function: 'Presidência - 160',
          sector: 'Cesama - 1',
          contractor: false,
          minPicture: '0',
          maxPicture: '0',
        },
        {
          id: 29,
          unit: '170',
          unitName: 'Secretaria de governança',
          acronym: 'SEG',
          local: 'Juiz de fora - 1',
          function: 'Secretaria de governança - 170',
          sector: 'Cesama - 1',
          contractor: false,
          minPicture: '0',
          maxPicture: '0',
        },
        {
          id: 30,
          unit: '182',
          unitName: 'Acessoria de comunicação e ouvidoria',
          acronym: 'ACO',
          local: 'Juiz de fora - 1',
          function: 'Acessoria de comunicação e ouvidoria - 182',
          sector: 'Cesama - 1',
          contractor: false,
          minPicture: '0',
          maxPicture: '0',
        },
        {
          id: 31,
          unit: '183',
          unitName: 'Departamento de contabilidade e custos',
          acronym: 'DECC',
          local: 'Juiz de fora - 1',
          function: 'Departamento de contabilidade e custos - 183',
          sector: 'Cesama - 1',
          contractor: false,
          minPicture: '0',
          maxPicture: '0',
        },
        {
          id: 32,
          unit: '200',
          unitName: 'Suervisão de ligações - vistoria',
          acronym: 'SLV',
          local: 'Juiz de fora - 1',
          function: 'Suervisão de ligações - vistoria - 200',
          sector: 'Cesama - 1',
          contractor: false,
          minPicture: '0',
          maxPicture: '2',
        },
        {
          id: 33,
          unit: '201',
          unitName: 'Auditoria interna',
          acronym: 'AUD',
          local: 'Juiz de fora - 1',
          function: 'Auditoria interna - 201',
          sector: 'Cesama - 1',
          contractor: false,
          minPicture: '0',
          maxPicture: '0',
        },
        {
          id: 34,
          unit: '202',
          unitName:
            'Supervisão de manutenção de redes e equipamentos de informática',
          acronym: 'SMR',
          local: 'Juiz de fora - 1',
          function:
            'Supervisão de manutenção de redes e equipamentos de informática - 202',
          sector: 'Cesama - 1',
          contractor: false,
          minPicture: '0',
          maxPicture: '0',
        },
        {
          id: 35,
          unit: '203',
          unitName: 'Supervisão de ligações',
          acronym: 'SLI',
          local: 'Juiz de fora - 1',
          function: 'Supervisão de ligações - 203',
          sector: 'Cesama - 1',
          contractor: false,
          minPicture: '0',
          maxPicture: '0',
        },
        {
          id: 36,
          unit: '204',
          unitName: 'Departamento de fiscalização de obras',
          acronym: 'DEFO',
          local: 'Juiz de fora - 1',
          function: 'Departamento de fiscalização de obras - 204',
          sector: 'Cesama - 1',
          contractor: false,
          minPicture: '0',
          maxPicture: '0',
        },
        {
          id: 37,
          unit: '205',
          unitName: 'Supervisão de cadastro técnico',
          acronym: 'STC',
          local: 'Juiz de fora - 1',
          function: 'Supervisão de cadastro técnico - 205',
          sector: 'Cesama - 1',
          contractor: false,
          minPicture: '0',
          maxPicture: '0',
        },
        {
          id: 38,
          unit: '206',
          unitName: 'Departamento de projetos',
          acronym: 'DEPO',
          local: 'Juiz de fora - 1',
          function: 'Departamento de projetos - 206',
          sector: 'Cesama - 1',
          contractor: false,
          minPicture: '0',
          maxPicture: '0',
        },
        {
          id: 39,
          unit: '207',
          unitName: 'Diretoria de desenvolvimento e expansão',
          acronym: 'DRDE',
          local: 'Juiz de fora - 1',
          function: 'Diretoria de desenvolvimento e expansão - 207',
          sector: 'Cesama - 1',
          contractor: false,
          minPicture: '0',
          maxPicture: '0',
        },
        {
          id: 40,
          unit: '208',
          unitName: 'Supervisão de treinamento e desenvolvimento de pessoas',
          acronym: 'STD',
          local: 'Juiz de fora - 1',
          function:
            'Supervisão de treinamento e desenvolvimento de pessoas - 208',
          sector: 'Cesama - 1',
          contractor: false,
          minPicture: '0',
          maxPicture: '0',
        },
        {
          id: 41,
          unit: '209',
          unitName: 'Departamento de recursos humanos',
          acronym: 'DERH',
          local: 'Juiz de fora - 1',
          function: 'Departamento de recursos humanos - 209',
          sector: 'Cesama - 1',
          contractor: false,
          minPicture: '0',
          maxPicture: '0',
        },
        {
          id: 42,
          unit: '210',
          unitName: 'Departamento de saúde e segurança do trabalho',
          acronym: 'DEST',
          local: 'Juiz de fora - 1',
          function: 'Departamento de saúde e segurança do trabalho - 210',
          sector: 'Cesama - 1',
          contractor: false,
          minPicture: '0',
          maxPicture: '0',
        },
        {
          id: 43,
          unit: '211',
          unitName: 'Departamento de serviços gerais e documentação',
          acronym: 'DSGD',
          local: 'Juiz de fora - 1',
          function: 'Departamento de serviços gerais e documentação - 211',
          sector: 'Cesama - 1',
          contractor: false,
          minPicture: '0',
          maxPicture: '0',
        },
        {
          id: 44,
          unit: '212',
          unitName: 'Departamento de equipamentos e veículos',
          acronym: 'DEEV',
          local: 'Juiz de fora - 1',
          function: 'Departamento de equipamentos e veículos - 212',
          sector: 'Cesama - 1',
          contractor: false,
          minPicture: '0',
          maxPicture: '0',
        },
        {
          id: 45,
          unit: '213',
          unitName: 'Supervisão de recuperação de receitas',
          acronym: 'SRR',
          local: 'Juiz de fora - 1',
          function: 'Supervisão de recuperação de receitas - 213',
          sector: 'Cesama - 1',
          contractor: false,
          minPicture: '0',
          maxPicture: '0',
        },
        {
          id: 46,
          unit: '214',
          unitName: 'Supervisão de fiscalização e corte',
          acronym: 'SFC',
          local: 'Juiz de fora - 1',
          function: 'Supervisão de fiscalização e corte - 214',
          sector: 'Cesama - 1',
          contractor: false,
          minPicture: '0',
          maxPicture: '0',
        },
        {
          id: 47,
          unit: '215',
          unitName: 'Supervisão de leitura',
          acronym: 'SUL',
          local: 'Juiz de fora - 1',
          function: 'Supervisão de leitura - 215',
          sector: 'Cesama - 1',
          contractor: false,
          minPicture: '0',
          maxPicture: '0',
        },
        {
          id: 48,
          unit: '216',
          unitName: 'Gerência comercial',
          acronym: 'GECO',
          local: 'Juiz de fora - 1',
          function: 'Gerência comercial - 216',
          sector: 'Cesama - 1',
          contractor: false,
          minPicture: '0',
          maxPicture: '0',
        },
        {
          id: 49,
          unit: '217',
          unitName: 'Gerência financeira e contábil',
          acronym: 'GEFC',
          local: 'Juiz de fora - 1',
          function: 'Gerência financeira e contábil - 217',
          sector: 'Cesama - 1',
          contractor: false,
          minPicture: '0',
          maxPicture: '0',
        },
        {
          id: 50,
          unit: '218',
          unitName: 'Pessoal à disposição de outros orgãos',
          acronym: 'DOO',
          local: 'Juiz de fora - 1',
          function: 'Pessoal à disposição de outros orgãos - 218',
          sector: 'Cesama - 1',
          contractor: false,
          minPicture: '0',
          maxPicture: '0',
        },
        {
          id: 51,
          unit: '219',
          unitName: 'Supervisão de manutenção de equipamentos de automação',
          acronym: 'SME',
          local: 'Juiz de fora - 1',
          function:
            'Supervisão de manutenção de equipamentos de automação - 219',
          sector: 'Cesama - 1',
          contractor: false,
          minPicture: '0',
          maxPicture: '0',
        },
        {
          id: 52,
          unit: '220',
          unitName: 'Departamento de automação',
          acronym: 'DEAU',
          local: 'Juiz de fora - 1',
          function: 'Departamento de automação - 220',
          sector: 'Cesama - 1',
          contractor: false,
          minPicture: '0',
          maxPicture: '0',
        },
        {
          id: 53,
          unit: '221',
          unitName: 'Departamento de manutenção eletromecânica',
          acronym: 'DEME',
          local: 'Juiz de fora - 1',
          function: 'Departamento de manutenção eletromecânica - 221',
          sector: 'Cesama - 1',
          contractor: false,
          minPicture: '0',
          maxPicture: '0',
        },

        {
          id: 54,
          unit: '222',
          unitName: 'Departamento regional leste',
          acronym: 'DERL',
          local: 'Juiz de fora - 1',
          function: 'Departamento regional leste - 222',
          sector: 'Cesama - 1',
          contractor: false,
          minPicture: '0',
          maxPicture: '0',
        },
        {
          id: 55,
          unit: '223',
          unitName: 'Departamento regional norte',
          acronym: 'DERN',
          local: 'Juiz de fora - 1',
          function: 'Departamento regional norte - 223',
          sector: 'Cesama - 1',
          contractor: false,
          minPicture: '0',
          maxPicture: '0',
        },
        {
          id: 56,
          unit: '224',
          unitName: 'Departamento regional sul',
          acronym: 'DERS',
          local: 'Juiz de fora - 1',
          function: 'Departamento regional sul - 224',
          sector: 'Cesama - 1',
          contractor: false,
          minPicture: '0',
          maxPicture: '0',
        },
        {
          id: 57,
          unit: '225',
          unitName: 'ETA Castelo Branco / João Penido',
          acronym: 'DETA',
          local: 'Juiz de fora - 1',
          function: 'ETA Castelo Branco / João Penido - 225',
          sector: 'Cesama - 1',
          contractor: false,
          minPicture: '0',
          maxPicture: '0',
        },
        {
          id: 58,
          unit: '226',
          unitName: 'ETA CDI',
          acronym: 'DETA',
          local: 'Juiz de fora - 1',
          function: 'ETA CDI - 226',
          sector: 'Cesama - 1',
          contractor: false,
          minPicture: '0',
          maxPicture: '0',
        },
        {
          id: 59,
          unit: '227',
          unitName: 'ETA compacta valadares',
          acronym: 'DETA',
          local: 'Juiz de fora - 1',
          function: 'ETA compacta valadares - 227',
          sector: 'Cesama - 1',
          contractor: false,
          minPicture: '0',
          maxPicture: '0',
        },
        {
          id: 60,
          unit: '227',
          unitName: 'ETA compacta terrões',
          acronym: 'DETA',
          local: 'Juiz de fora - 1',
          function: 'ETA compacta terrões - 227',
          sector: 'Cesama - 1',
          contractor: false,
          minPicture: '0',
          maxPicture: '0',
        },
        {
          id: 61,
          unit: '229',
          unitName: 'ETA São Pedro',
          acronym: 'DETA',
          local: 'Juiz de fora - 1',
          function: 'ETA São Pedro - 229',
          sector: 'Cesama - 1',
          contractor: false,
          minPicture: '0',
          maxPicture: '0',
        },
        {
          id: 62,
          unit: '230',
          unitName: 'ETE Barbosa Lage',
          acronym: 'DETE',
          local: 'Juiz de fora - 1',
          function: 'ETE Barbosa Lage - 230',
          sector: 'Cesama - 1',
          contractor: false,
          minPicture: '0',
          maxPicture: '0',
        },
        {
          id: 63,
          unit: '231',
          unitName: 'ETE Barreira do triunfo',
          acronym: 'DETE',
          local: 'Juiz de fora - 1',
          function: 'ETE Barreira do triunfo - 231',
          sector: 'Cesama - 1',
          contractor: false,
          minPicture: '0',
          maxPicture: '0',
        },
        {
          id: 64,
          unit: '232',
          unitName: 'Supervisão de estação de tratamento de esgoto',
          acronym: 'STE',
          local: 'Juiz de fora - 1',
          function: 'Supervisão de estação de tratamento de esgoto - 232',
          sector: 'Cesama - 1',
          contractor: false,
          minPicture: '0',
          maxPicture: '0',
        },
        {
          id: 65,
          unit: '233',
          unitName: 'Diretoria técnico operacional',
          acronym: 'DRTO',
          local: 'Juiz de fora - 1',
          function: 'Diretoria técnico operacional - 233',
          sector: 'Cesama - 1',
          contractor: false,
          minPicture: '0',
          maxPicture: '0',
        },
        {
          id: 66,
          unit: '234',
          unitName: 'Gerência de manutenção',
          acronym: 'GEMT',
          local: 'Juiz de fora - 1',
          function: 'Gerência de manutenção - 234',
          sector: 'Cesama - 1',
          contractor: false,
          minPicture: '0',
          maxPicture: '0',
        },
        {
          id: 67,
          unit: '250',
          unitName: 'DECO - APOIO',
          acronym: 'APOI',
          local: 'Juiz de fora - 1',
          function: 'DECO - APOIO - 250',
          sector: 'Cesama - 1',
          contractor: false,
          minPicture: '0',
          maxPicture: '0',
        },
        {
          id: 68,
          unit: '251',
          unitName: 'DECO - RETORNO',
          acronym: 'RETO',
          local: 'Juiz de fora - 1',
          function: 'DECO - RETORNO - 251',
          sector: 'Cesama - 1',
          contractor: false,
          minPicture: '0',
          maxPicture: '0',
        },
        {
          id: 69,
          unit: '252',
          unitName: 'DECO - CERTIDÕES',
          acronym: 'CERT',
          local: 'Juiz de fora - 1',
          function: 'DECO - CERTIDÕES - 252',
          sector: 'Cesama - 1',
          contractor: false,
          minPicture: '0',
          maxPicture: '0',
        },
        {
          id: 68,
          unit: '253',
          unitName: 'Gerência de desenvolvimento',
          acronym: 'GEDE',
          local: 'Juiz de fora - 1',
          function: 'Gerência de desenvolvimento - 253',
          sector: 'Cesama - 1',
          contractor: false,
          minPicture: '0',
          maxPicture: '0',
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
