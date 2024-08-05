<template>
    <MenuApp />
    <CompanyTag />
    <div class="container">
        <div class="content">
            <section>
                <div class="intro-services-to-be-billed">
                    <h1 class="title-page">Bairro</h1>
                </div>
                <div class="flex gap-4">
                    <div class="w-61 margin-top-30">
                        <p class="p-labels">Buscar bairros</p>
                        <div class="flex gap-4 align-baseline">
                            <div class="w-88">
                                <input class="inputs mb-30" />
                            </div>
                            <div>
                                <Button class="tertiary-button flex align-center gap-10px">
                                    <i class="pi pi-search"></i>
                                </Button>
                            </div>
                        </div>


                        <DataTable style="border-bottom-left-radius: 10px;border-bottom-right-radius: 10px !important;"
                            :value="neighborhoodTableTable" tableStyle="min-width: 50rem" :paginator="true" :rows="10"
                            dataKey="id" @row-click="handleRowClick" :selectionMode="'single'"
                            v-model:selection="selectedRow">
                            <Column v-for="col of columns" :key="col.field" :field="col.field" :header="col.label">
                            </Column>
                        </DataTable>
                        <div class="flex align-center justify-space-between w-61 mg-auto">
                            <Button class="secondary-button flex align-center gap-10px">
                                Imprimir <i class="pi pi-print"></i>
                            </Button>
                            <Button class="tertiary-button flex align-center gap-10px">
                                Adicionar <i class="pi pi-plus-circle"></i>
                            </Button>
                        </div>
                    </div>
                    <div class="w-35">
                        <div class="box-tables-info" v-if="selectedRow">
                            <p class="p-labels">Bairro</p>
                            <InputText v-model="selectedRow.neighborhood" class="inputs margin-bottom-30" />
                            <p class="p-labels">Local</p>
                            <InputText v-model="selectedRow.local" class="inputs margin-bottom-30" />
                            <p class="p-labels">Nome do bairro</p>
                            <InputText v-model="selectedRow.neighborhoodName" class="inputs margin-bottom-30" />
                            <p class="p-labels">Setor de abastecimento</p>
                            <select class="inputs">
                                <option v-for="option in selectedSupplySector" :key="option">
                                    {{ option }}
                                </option>
                            </select>
                            <p class="p-labels">Zona de atendimento</p>
                            <select class="inputs">
                                <option v-for="option in selectedServiceArea" :key="option">
                                    {{ option }}
                                </option>
                            </select>
                            <div class="flex justify-center gap-4 mt-40 mb-30">
                                <Button class="primary-button flex align-center gap-10px">
                                    Alterar <i class="pi pi-pencil"></i>
                                </Button>
                                <Button class="danger-button flex align-center gap-10px">
                                    Excluir <i class="pi pi-trash"></i>
                                </Button>
                            </div>
                            <Button class="secondary-button flex mg-auto align-center gap-10px"
                                @click="showDialog = true">
                                Ver logradouros <i class="pi pi-eye"></i>
                            </Button>
                            <Dialog v-model:visible="showDialog" :modal="true" :style="{ width: '50vw' }"
                                :closable="true">
                                <Button icon="pi pi-times" class="p-button-rounded p-button-danger p-button-outlined"
                                    @click="showDialog = false"
                                    style="position: absolute; right: 0; top: 0; color: red !important;"></Button>
                                <DataTable :value="streetConsultTable" tableStyle="min-width: 50rem" :paginator="true"
                                    :rows="10" dataKey="id" @row-click="handleRowClick" :selectionMode="'single'"
                                    v-model:selection="selectedRow">
                                    <Column v-for="col of columns2" :key="col.field" :field="col.field"
                                        :header="col.label">
                                    </Column>
                                </DataTable>
                            </Dialog>
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
import Dialog from 'primevue/dialog';
import Button from "primevue/button";
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
export default {
    name: "NeighborhoodTable",
    components: {
        MenuApp,
        CompanyTag,
        DataTable,
        Column,
        InputText,
        Button,
        Dialog
    },
    data() {
        return {
            showDialog: false,
            selectedRow: null,
            selected: [],
            selectedSupplySector: [
                "Juiz de Fora"
            ],
            selectedServiceArea: [
                "Regional Leste - 222",
                "Regional Norte - 223",
                "Regional Sul - 224",
            ],
            columns: [
                {
                    name: "neighborhood",
                    required: true,
                    label: "Bairro",
                    align: "left",
                    field: "neighborhood",
                },
                {
                    name: "neighborhoodName",
                    required: true,
                    label: "Nome do bairro",
                    align: "left",
                    field: "neighborhoodName",
                },
                {
                    name: "localName",
                    required: true,
                    label: "Nome do local",
                    align: "left",
                    field: "localName",
                },
                {
                    name: "local",
                    required: true,
                    label: "Local",
                    align: "left",
                    field: "local",
                }
            ],
            columns2: [
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
            neighborhoodTableTable: [
                {
                    id: 1,
                    neighborhood: "1",
                    neighborhoodName: "Aeroporto",
                    localName: "Juiz de Fora",
                    local: "1",
                },
                {
                    id: 2,
                    neighborhood: "2",
                    neighborhoodName: "Aracy",
                    localName: "Juiz de Fora",
                    local: "1",
                },
                {
                    id: 3,
                    neighborhood: "3",
                    neighborhoodName: "Bairu",
                    localName: "Juiz de Fora",
                    local: "1",
                },
                {
                    id: 4,
                    neighborhood: "4",
                    neighborhoodName: "Vila dos Bandeirantes",
                    localName: "Juiz de Fora",
                    local: "1",
                },
                {
                    id: 5,
                    neighborhood: "5",
                    neighborhoodName: "Barbosa Lage",
                    localName: "Juiz de Fora",
                    local: "1",
                },
                {
                    id: 6,
                    neighborhood: "6",
                    neighborhoodName: "Barreira do Triunfo",
                    localName: "Juiz de Fora",
                    local: "1",
                },
                {
                    id: 7,
                    neighborhood: "7",
                    neighborhoodName: "Benfica",
                    localName: "Juiz de Fora",
                    local: "1",
                },
                {
                    id: 8,
                    neighborhood: "8",
                    neighborhoodName: "Boa Vista",
                    localName: "Juiz de Fora",
                    local: "1",
                },
                {
                    id: 9,
                    neighborhood: "9",
                    neighborhoodName: "Lote Bom Jardim",
                    localName: "Juiz de Fora",
                    local: "1",
                },
                {
                    id: 10,
                    neighborhood: "10",
                    neighborhoodName: "Bom Pastor",
                    localName: "Juiz de Fora",
                    local: "1",
                },
                {
                    id: 11,
                    neighborhood: "11",
                    neighborhoodName: "Bonfim",
                    localName: "Juiz de Fora",
                    local: "1",
                },
                {
                    id: 12,
                    neighborhood: "12",
                    neighborhoodName: "Carlos Chagas",
                    localName: "Juiz de Fora",
                    local: "1",
                },
                {
                    id: 13,
                    neighborhood: "13",
                    neighborhoodName: "Jardins Imperiais",
                    localName: "Juiz de Fora",
                    local: "1",
                },
                {
                    id: 14,
                    neighborhood: "14",
                    neighborhoodName: "Centenário",
                    localName: "Juiz de Fora",
                    local: "1",
                },
                {
                    id: 15,
                    neighborhood: "15",
                    neighborhoodName: "Centro",
                    localName: "Juiz de Fora",
                    local: "1",
                }

            ],
            streetConsultTable: [
                {
                    id: 1,
                    code: "1",
                    description: "Rua 1",
                }
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