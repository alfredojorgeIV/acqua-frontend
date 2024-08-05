<template>
  <MenuApp />
  <CompanyTag />
  <div class="container">
    <div class="content">
      <section>
        <div class="intro-services-to-be-billed">
          <h1 class="title-page">Tipo de Faturamento Especial</h1>
        </div>
        <div class="margin-top-30">
          <div v-if="isLoading" class="loading-overlay">
            <div class="spinner"></div>
          </div>
          <DataTable style="border-bottom-left-radius: 10px; border-bottom-right-radius: 10px !important;"
            :value="frmFatEspecialTable" tableStyle="min-width: 50rem" :paginator="true" :rows="10"
            dataKey="TF_CODIGO" @row-click="handleRowClick" :rowClass="rowClass">
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
  name: "frmFatEspecial",
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
        { name: "TF_CODIGO", required: true, label: "Código", align: "left", field: "TF_CODIGO" },
        { name: "TF_DESCRICAO", required: true, label: "Descrição", align: "left", field: "TF_DESCRICAO" },
        { name: "TF_ATIVO", required: true, label: "Ativo", align: "left", field: "TF_ATIVO" },
        { name: "TF_COMENTARIO", required: true, label: "Comentário", align: "left", field: "TF_COMENTARIO" },
      ],
      frmFatEspecialTable: [],
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
        'active-row': this.selectedRow && this.selectedRow.TF_CODIGO === data.TF_CODIGO,
      };
    },
    async fetchData() {
      this.isLoading = true;
      try {
        const response = await axios.get('http://localhost:3000/TIPO_FATURAMENTO_ESPECIAL_ALL');
        this.frmFatEspecialTable = response.data;
      } catch (error) {
        console.error('Erro:', error);
        this.error = error.toString();
      } finally {
        this.isLoading = false;
      }
    },
    printPDF() {
      const doc = new jsPDF('landscape');
      const currentDate = new Date().toLocaleDateString();

      doc.setFontSize(10);
      doc.text(`Data: ${currentDate}`, 10, 10);

      doc.autoTable({
        startY: 20,
        head: [this.columns.map(col => col.label)],
        body: this.frmFatEspecialTable.map(row => this.columns.map(col => row[col.field])),
        theme: 'grid',
        styles: { fontSize: 10, fontWeight: 'bold' },
      });

      doc.save(`Tipo_de_Faturamento_Especial_${currentDate}.pdf`);
    }
  },
  async mounted() {
    await this.fetchData();
  },
};
</script>

