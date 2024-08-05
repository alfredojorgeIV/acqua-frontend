<template>
    <MenuApp />
    <CompanyTag />
    <div class="container">
      <div class="content">
        <section>
          <div class="intro-services-to-be-billed">
            <h1 ref="title" class="title-page">Indicativo de Tabelas</h1>
          </div>
  
          <div class="margin-top-30">
            <div v-if="isLoading" class="loading-overlay">
              <div class="spinner"></div>
            </div>
            <DataTable ref="dataTable" style="border-bottom-left-radius: 10px; border-bottom-right-radius: 10px !important;"
              :value="frmSisIndicativoTable" tableStyle="min-width: 50rem" :paginator="true" :rows="10" dataKey="des_indicativo"
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
    name: "frmSisIndicativo",
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
            name: "des_tabela",
            required: true,
            label: "Tabela",
            align: "left",
            field: "des_tabela",
          },
          {
            name: "des_nome",
            required: true,
            label: "Nome",
            align: "left",
            field: "des_nome",
          },
          {
            name: "des_indicativo",
            required: true,
            label: "Indicativo",
            align: "left",
            field: "des_indicativo",
          },
          {
            name: "des_descricao",
            required: true,
            label: "Descrição",
            align: "left",
            field: "des_descricao",
          },
          {
            name: "ind_ativo",
            required: true,
            label: "Ativo",
            align: "left",
            field: "ind_ativo",
          },
        ],
        frmSisIndicativoTable: [],
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
          'active-row': this.selectedRow && this.selectedRow.des_indicativo === data.des_indicativo,
        };
      },
      async fetchData() {
        this.isLoading = true;
        try {
          const user = JSON.parse(localStorage.getItem('user') || '{}');
          const baseUrl = user.databaseUrl || 'http://localhost:3000';
          const response = await axios.get(`${baseUrl}/SIS_INDICATIVO_ALL`);
          this.frmSisIndicativoTable = response.data; 
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
          body: this.frmSisIndicativoTable.map(row => this.columns.map(col => row[col.field])),
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
  