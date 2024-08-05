<template>
  <MenuApp />
  <CompanyTag />
  <div class="container">
    <div class="content">
      <section>
        <div class="intro-services-to-be-billed">
          <h1 ref="title" class="title-page">Serviço de Atendimento</h1>
        </div>

        <div class="margin-top-30">
          <div v-if="isLoading" class="loading-overlay">
            <div class="spinner"></div>
          </div>
          <DataTable
            ref="dataTable"
            style="border-bottom-left-radius: 10px; border-bottom-right-radius: 10px !important;"
            :value="frmServAtendimentoTable"
            tableStyle="min-width: 50rem"
            :paginator="true"
            :rows="10"
            dataKey="TA_CODIGO"
            @row-click="handleRowClick"
            :rowClass="rowClass"
          >
            <Column
              v-for="col of columns"
              :key="col.field"
              :field="col.field"
              :header="col.label"
            ></Column>
          </DataTable>
          <div v-if="selectedRow && subTableData.length > 0" class="sub-table-container">
            <h2>Detalhes do Serviço de Atendimento</h2>
            <DataTable
              :value="subTableData"
              tableStyle="min-width: 50rem"
              :paginator="true"
              :rows="10"
              dataKey="AS_TIPO"
            >
              <Column
                v-for="col of subTableColumns"
                :key="col.field"
                :field="col.field"
                :header="col.label"
              ></Column>
            </DataTable>
          </div>
          <div class="flex justify-center mg-auto">
            <Button class="secondary-button flex align-center gap-10px" @click="printPDF">
              Imprimir <i class="pi pi-print"></i>
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
import Button from "primevue/button";
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import axios from "axios";
import jsPDF from 'jspdf';
import 'jspdf-autotable';

export default {
  name: "frmServAtendimento",
  components: {
    MenuApp,
    CompanyTag,
    DataTable,
    Column,
    Button,
  },
  data() {
    return {
      selectedRow: null,
      columns: [
        {
          name: "TA_CODIGO",
          required: true,
          label: "Código",
          align: "left",
          field: "TA_CODIGO",
        },
        {
          name: "TA_DESCRICAO",
          required: true,
          label: "Descrição",
          align: "left",
          field: "TA_DESCRICAO",
        },
        {
          name: "TA_ATIVO",
          required: true,
          label: "Ativo",
          align: "left",
          field: "TA_ATIVO",
        },
      ],
      frmServAtendimentoTable: [],
      subTableData: [],
      subTableColumns: [
        { name: "AS_TIPO", label: "Tipo", field: "AS_TIPO" },
        { name: "AS_SERVICO", label: "Serviço", field: "AS_SERVICO" },
        { name: "AS_DESCRICAO", label: "Descrição", field: "AS_DESCRICAO" },
        { name: "AS_META", label: "Meta", field: "AS_META" },
        { name: "AS_ATIVO", label: "Ativo", field: "AS_ATIVO" },
      ],
      isLoading: false,
      error: null,
    };
  },
  methods: {
    async handleRowClick(event) {
      this.selectedRow = event.data;
      await this.fetchSubTableData(event.data.TA_CODIGO);
    },
    rowClass(data) {
      return {
        'pointer-cursor': true,
        'active-row': this.selectedRow && this.selectedRow.TA_CODIGO === data.TA_CODIGO,
      };
    },
    async fetchData() {
      this.isLoading = true;
      try {
        const user = JSON.parse(localStorage.getItem('user') || '{}');
        const baseUrl = user.databaseUrl || 'http://localhost:3000';
        const response = await axios.get(`${baseUrl}/TIPO_ATENDIMENTO_ALL`);
        this.frmServAtendimentoTable = response.data; 
      } catch (error) {
        console.error('Erro:', error);
        this.error = error.toString();
      } finally {
        this.isLoading = false;
      }
    },
    async fetchSubTableData(tipoCodigo) {
      this.isLoading = true;
      try {
        const user = JSON.parse(localStorage.getItem('user') || '{}');
        const baseUrl = user.databaseUrl || 'http://localhost:3000';
        const response = await axios.get(`${baseUrl}/ATEND_SERVICO_BY_TIPO/${tipoCodigo}`);
        this.subTableData = response.data; 
      } catch (error) {
        console.error('Erro:', error);
        this.error = error.toString();
      } finally {
        this.isLoading = false;
      }
    },
    printPDF() {
      const doc = new jsPDF();
      const title = this.$refs.title.innerText || 'tabela';
      const user = JSON.parse(localStorage.getItem('user') || '{}');
      const databaseName = user.databaseName || 'Desconhecida';
      const currentDate = new Date().toLocaleDateString();

      doc.setFontSize(10);
      doc.text(`Data: ${currentDate}`, 10, 10);
      doc.text(`Base de Dados: ${databaseName}`, 10, 20);

      doc.autoTable({
        startY: 30,
        head: [this.columns.map(col => col.label)],
        body: this.frmServAtendimentoTable.map(row => this.columns.map(col => row[col.field])),
        theme: 'grid',
        styles: { fontSize: 10, fontweight: 'bold' }, 
      });

      doc.save(`${title}_${currentDate}.pdf`);
    }
  },
  async mounted() {
    await this.fetchData();
  },
};
</script>

