<template>
  <MenuApp />
  <CompanyTag />
  <div class="container">
    <div class="content">
      <section>
        <div class="intro-services-to-be-billed">
          <h1 ref="title" class="title-page">Tipo de Controle</h1>
        </div>

        <div class="margin-top-30">
          <div v-if="isLoading" class="loading-overlay">
            <div class="spinner"></div>
          </div>
          <DataTable ref="dataTable" style="border-bottom-left-radius: 10px; border-bottom-right-radius: 10px !important;"
            :value="frmTipoControleTable" tableStyle="min-width: 50rem" :paginator="true" :rows="10" dataKey="TC_CODIGO"
            @row-click="handleRowClick" :rowClass="rowClass">
            <Column v-for="col of columns" :key="col.field" :field="col.field" :header="col.label"></Column>
          </DataTable>
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
  name: "frmTipoControle",
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
          name: "TC_CODIGO",
          required: true,
          label: "Código",
          align: "left",
          field: "TC_CODIGO",
        },
        {
          name: "TC_DESCRICAO",
          required: true,
          label: "Descrição",
          align: "left",
          field: "TC_DESCRICAO",
        },
      ],
      frmTipoControleTable: [],
      isLoading: false,
      error: null,
    };
  },
  methods: {
    handleRowClick(event) {
      this.selectedRow = event.data;
    },
    rowClass(data) {
      return {
        'pointer-cursor': true,
        'active-row': this.selectedRow && this.selectedRow.TC_CODIGO === data.TC_CODIGO,
      };
    },
    async fetchData() {
      this.isLoading = true;
      try {
        const user = JSON.parse(localStorage.getItem('user') || '{}');
        const baseUrl = user.databaseUrl || 'http://localhost:3000';
        const response = await axios.get(`${baseUrl}/TIPO_CONTROLE_ALL`);
        this.frmTipoControleTable = response.data; 
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
        body: this.frmTipoControleTable.map(row => this.columns.map(col => row[col.field])),
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
