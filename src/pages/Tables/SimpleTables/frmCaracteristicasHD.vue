<template>
    <MenuApp />
    <CompanyTag />
    <div class="container">
        <div class="content">
            <section>
                <div class="intro-services-to-be-billed">
                    <h1 class="title-page">Características do HD</h1>
                </div>
                <div class="flex gap-4">
                    <div class="w-61 margin-top-30">
                        <div v-if="isLoading" class="loading-overlay">
                            <div class="spinner"></div>
                        </div>
                        <DataTable style="border-bottom-left-radius: 10px; border-bottom-right-radius: 10px !important;"
                            :value="frmCaracteristicasHdTable" tableStyle="min-width: 50rem" :paginator="true"
                            :rows="10" dataKey="CARACT_HD" @row-click="handleRowClick" :rowClass="rowClass">
                            <Column v-for="col of columns" :key="col.field" :field="col.field" :header="col.label">
                            </Column>
                        </DataTable>
                        <div class="flex justify-center gap-4 mt-40 w-48 mg-auto">
                            <Button class="mg-auto tertiary-button flex align-center">
                                Imprimir <i class="ml-10 pi pi-print"></i>
                            </Button>
                            <Button class="mg-auto quaternary-button flex align-center"
                                @click="showAddBox = true; selectedRow = null">
                                Adicionar <i class="ml-10 pi pi-plus-circle"></i>
                            </Button>
                        </div>
                    </div>
                    <div class="w-35">
                        <div class="box-tables-info" v-if="selectedRow && !showAddBox">
                            <p class="p-labels">Código</p>
                            <input v-model="selectedRow.CARACT_HD" @input="validateNumber"
                                class="inputs margin-bottom-30" :disabled="!isEditing" />
                            <p class="p-labels">Capacidade do HD</p>
                            <input v-model="selectedRow.CAPAC_HD" @input="validateNumber"
                                class="inputs margin-bottom-30" :disabled="!isEditing" />
                            <p class="p-labels">Descrição</p>
                            <input v-model="selectedRow.DESC_CAPAC_HD" class="inputs margin-bottom-30"
                                :disabled="!isEditing" />
                            <p class="p-labels">Diâmetro</p>
                            <input v-model="selectedRow.DIAMETRO_HD" @input="validateNumber"
                                class="inputs margin-bottom-30" :disabled="!isEditing" />
                            <p class="p-labels">Descrição do diâmetro</p>
                            <input v-model="selectedRow.DESC_DIAMETRO_HD" class="inputs margin-bottom-30"
                                :disabled="!isEditing" />
                            <div class="flex justify-center gap-4 mt-40">
                                <Button v-if="!isEditing" class="primary-button flex align-center"
                                    @click="toggleEditing">
                                    Alterar <i class="ml-10 pi pi-pencil"></i>
                                </Button>
                                <Button v-if="isEditing" class="save-button flex align-center" @click="saveUpdate">
                                    Salvar <i class="ml-10 pi pi-pencil"></i>
                                </Button>
                                <Button class="danger-button flex align-center gap-10px" @click="confirmDelete">
                                    Excluir <i class="pi pi-trash"></i>
                                </Button>
                            </div>
                        </div>

                        <div class="box-tables-info" v-if="showAddBox && !selectedRow">
                            <p class="p-labels">Código</p>
                            <input class="inputs margin-bottom-30" @input="validateNumber" v-model="addCaractHd" />
                            <p class="p-labels">Capacidade do HD</p>
                            <input class="inputs margin-bottom-30" @input="validateNumber" v-model="addCapacHd" />
                            <p class="p-labels">Descrição</p>
                            <input class="inputs margin-bottom-30" v-model="addDescCapacHd" />
                            <p class="p-labels">Diâmetro</p>
                            <input class="inputs margin-bottom-30" @input="validateNumber" v-model="addDiametroHd" />
                            <p class="p-labels">Descrição do diâmetro</p>
                            <input class="inputs margin-bottom-30" v-model="addDescDiametroHD" />
                            <div class="flex justify-center gap-4 mt-40">
                                <Button class="primary-button flex align-center" @click="addToTable">
                                    Inserir <i class="ml-10 pi pi-pencil"></i>
                                </Button>
                                <Button class="danger-button flex align-center gap-10px" @click="showAddBox = false">
                                    Cancelar <i class="pi pi-cancel"></i>
                                </Button>

                            </div>
                        </div>
                    </div>
                    <Dialog header="Confirmar exclusão" :visible="showDeleteConfirmation"
                        @hide="showDeleteConfirmation = false">
                        <p>Tem certeza que deseja excluir este item da tabela?</p>
                        <div class="flex justify-center mt-30 gap-5">

                            <Button @click="showDeleteConfirmation = false" class="primary-button">Não <i
                                    class="pi pi-cancel"></i></Button>
                            <Button class="danger-button" @click="deleteFromTable">Excluir</Button>
                        </div>
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
import Button from "primevue/button";
import Dialog from 'primevue/dialog';
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import axios from "axios";
export default {
    name: "frmCaracteristicasHD",
    components: {
        MenuApp,
        CompanyTag,
        DataTable,
        Column,
        Button,
        Dialog,
    },

    data() {
        return {
            isEditing: false,
            showDeleteConfirmation: false,
            showAddBox: false,
            data: null,
            error: null,
            isLoading: false,
            selectedRow: null,
            columns: [
                {
                    name: "CARACT_HD",
                    required: true,
                    label: "Código",
                    align: "left",
                    field: "CARACT_HD",
                },
                {
                    name: "CAPAC_HD",
                    required: true,
                    label: "Capacidade do HD",
                    align: "left",
                    field: "CAPAC_HD",
                },
                {
                    name: "DESC_CAPAC_HD",
                    required: true,
                    label: "Descrição",
                    align: "left",
                    field: "DESC_CAPAC_HD",
                },
                {
                    name: "DIAMETRO_HD",
                    required: true,
                    label: "Diâmetro",
                    align: "left",
                    field: "DIAMETRO_HD",
                },
                {
                    name: "DESC_DIAMETRO_HD",
                    required: true,
                    label: "Descrição do diâmetro",
                    align: "left",
                    field: "DESC_DIAMETRO_HD",
                },
            ],
            frmCaracteristicasHdTable: []
        };
    },

    methods: {
        handleAddRowClick(event) {
            this.addRow = event.data;
            this.addCaractHd = '';
            this.addCapacHd = '';
            this.addDiametroHd = '';
            this.addDescDiametroHD = '';
            this.addDescCapacHd = '';

        },

        handleRowClick(event) {
            this.selectedRow = event.data;
            this.isEditing = false;
            this.showAddBox = false;
        },

        rowClass(data) {
            return {
                'pointer-cursor': true,
                'active-row': this.selectedRow && this.selectedRow.CARACT_HD === data.CARACT_HD
            };
        },

        confirmDelete() {
            this.showDeleteConfirmation = true;
        },

        async addToTable() {
            this.isLoading = true;
            try {
                const response = await axios.post('http://localhost:3000/CARACTERISTICA_HD_ADD', {
                    CARACT_HD: Number(this.addCaractHd),
                    CAPAC_HD: Number(this.addCapacHd),
                    DESC_CAPAC_HD: this.addDescCapacHd,
                    DIAMETRO_HD: Number(this.addDiametroHd),
                    DESC_DIAMETRO_HD: this.addDescDiametroHD,
                    NOME_ATUALIZ: "Luiza"
                });
                console.log(response.data);
                await this.fetchData();
                this.addCaractHd = '';
                this.addCapacHd = '';
                this.addDescCapacHd = '';
                this.addDiametroHd = '';
                this.addDescDiametroHD = '';
                this.showAddBox = false;
            } catch (error) {
                console.error('Erro:', error);
                this.error = error.toString();
            } finally {
                this.isLoading = false;
            }
        },

        async fetchData() {
            this.isLoading = true;
            try {
                const response = await axios.get('http://localhost:3000/CARACTERISTICA_HD_ALL');
                this.data = response.data;
                this.frmCaracteristicasHdTable = this.data;
            } catch (error) {
                console.error('Erro:', error);
                this.error = error.toString();
            } finally {
                this.isLoading = false;
            }
        },
        async deleteFromTable() {
            this.isLoading = true;
            try {
                const response = await axios.delete(`http://localhost:3000/CARACTERISTICA_HD_DELETE/${this.selectedRow.CARACT_HD}`);
                console.log(response.data);
                await this.fetchData();
                this.showDeleteConfirmation = false;
                this.selectedRow = null;
            } catch (error) {
                console.error('Erro:', error);
                this.error = error.toString();
            } finally {
                this.isLoading = false;
            }
        },
        async toggleEditing() {
            this.isEditing = !this.isEditing;

        },

        async saveUpdate() {
            this.isLoading = true;
            this.isEditing = false;
            try {
                const response = await axios.post(`http://localhost:3000/CARACTERISTICA_HD_UPDATE`, {
                    CARACT_HD: Number(this.selectedRow.CARACT_HD),
                    CAPAC_HD: Number(this.selectedRow.CAPAC_HD),
                    DESC_CAPAC_HD: this.selectedRow.DESC_CAPAC_HD,
                    DIAMETRO_HD: Number(this.selectedRow.DIAMETRO_HD),
                    DESC_DIAMETRO_HD: this.selectedRow.DESC_DIAMETRO_HD,
                    NOME_ATUALIZ: "Luiza"
                });

                if (response.status === 200) {
                    this.frmCaracteristicasHdTable = this.frmCaracteristicasHdTable.map(row => row.CARACT_HD === this.selectedRow.CARACT_HD ? this.selectedRow : row);
                    this.isEditing = false;
                } else {
                    console.error("Erro ao atualizar a Características do HD");
                }
            } catch (error) {
                console.error('Erro:', error);
                this.error = error.toString();
            } finally {
                this.isLoading = false;
            }
        },
        validateNumber(event) {
            event.target.value = event.target.value.replace(/[^0-9]/g, '');
        }

    },

    async mounted() {
        await this.fetchData();
    },

};
</script>