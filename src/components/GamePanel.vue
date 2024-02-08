<template>
     <!-- <button @click="deselectRows">deselect rows</button> -->
     <div id="header">
          <h1>Game Panel</h1>
     </div>
     <div id="play_game">
          <router-link to="/login" class="h-btn h-btn-green h-btn-m">Play Game</router-link>
     </div>
     <ag-grid-vue class="ag-theme-alpine"
          style="height:550px;font-size: larger;width:980px; padding-top: 48px;padding-left: 380px;"
          :columnDefs="columnDefs.value" :rowData="rowData.value" :defaultColDef="defaultColDef" rowSelection="multiple"
          animateRows="true" @cell-clicked="cellWasClicked" @grid-ready="onGridReady">
     </ag-grid-vue>
     <div>
          <router-link to="/map" id="create_game_button" class="h-btn h-btn-green h-btn-m">Create Game</router-link>
     </div>
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
          const user_info = ref(null);

          const onGridReady = (params) => {
               gridApi.value = params.api;
          };

          const getUrlParameter = (id) => {
               try {
                    const urlParams = new URLSearchParams(window.location.search);
                    return urlParams.get(id);
               } catch (error) {
                    console.error("Error parsing URL parameters:", error);
                    return null;
               }
          };


          const rowData = reactive({
               value: [
                    { GameID: "Vauxhall", Status: "Corsa", WinnerID: 17300 },
                    { GameID: "Ford", Status: "Fiesta", WinnerID: 18000 },
                    { GameID: "Volkswagen", Status: "Golf", WinnerID: 26000 },
               ],
          });
          const columnDefs = reactive({
               value: [{ field: "GameID" }, { field: "Status" }, { field: "WinnerID" }],
          });

          const defaultColDef = {
               sortable: true,
               filter: true,
          };

          const onRowSelected = (event) => {
               console.log("row was selected", event);
          };

          onMounted(async () => {
               fetch("http://127.0.0.1:8000/game_panel")
                    .then((result) => result.json())
                    .then((remoteRowData) => (rowData.value = remoteRowData));
          });


          // const onCellClicked = (event) => {
          //      console.log("cell was clicked", event);
          // };

          return {
               onGridReady,
               columnDefs,
               rowData,
               defaultColDef,
               onRowSelected,
               // onCellClicked,
               deselectRows: e => {
                    gridApi.value.deselectAll()
               }
          };
     },


};
</script>

<style scoped>
#header {
     padding-left: 544px;
     margin-top: 18px;

     font-size: 25px;
     color: #666f67;
}

#play_game {
     padding-left: 570px;
     margin-top: 40px;
     font-size: 25px;
     color: #666f67;
}


.h-btn {

     padding: 25px 80px;
     font-size: 16px;
     align-items: center;
     align-self: center;
     color: #fff;
     background-color: #4caf50;
     border: none;
     border-radius: 4px;
     text-decoration: none;
     transition: background-color 0.3s ease;
}

.h-btn:hover {
     background-color: #538356;
}

.h-btn:active {
     background-color: #388e3c;
}

.h-btn-green {
     background-color: #4caf50;
}

.h-btn-m {
     font-size: 14px;
}
</style>