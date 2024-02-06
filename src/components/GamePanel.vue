<template>
     <!-- <button @click="deselectRows">deselect rows</button> -->

     <ag-grid-vue class="ag-theme-alpine"
          style="height:700px;font-size: larger;width: 730px; padding-top: 48px;padding-left: 130px;"
          :columnDefs="columnDefs.value" :rowData="rowData.value" :defaultColDef="defaultColDef" rowSelection="multiple"
          animateRows="true" @cell-clicked="cellWasClicked" @grid-ready="onGridReady">
     </ag-grid-vue>
</template>
   
<script>
import { AgGridVue } from "ag-grid-vue3";
import { reactive, onMounted, ref } from "vue";

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

export default {
     name: "App",
     components: {
          AgGridVue,
     },
     setup() {
          const gridApi = ref(null);

          const onGridReady = (params) => {
               gridApi.value = params.api;
          };

          const rowData = reactive({
               value: [
                    { make: "Vauxhall", model: "Corsa", price: 17300 },
                    { make: "Ford", model: "Fiesta", price: 18000 },
                    { make: "Volkswagen", model: "Golf", price: 26000 },
               ],
          });
          const columnDefs = reactive({
               value: [{ field: "make" }, { field: "model" }, { field: "price" }],
          });

          const defaultColDef = {
               sortable: true,
               filter: true,
          };
          onMounted(() => {
               fetch("https://www.ag-grid.com/example-assets/row-data.json")
                    .then((result) => result.json())
                    .then((remoteRowData) => (rowData.value = remoteRowData));
          });

          return {
               onGridReady,
               columnDefs,
               rowData,
               defaultColDef,
               cellWasClicked: (event) => {
                    console.log("cell was clicked", event);
               },
               deselectRows: e => {
                    gridApi.value.deselectAll()
               }
          };
     },
};
</script>

<style></style>