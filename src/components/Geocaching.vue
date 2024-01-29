<template>
  <div class="main-container">
    <div class= "google_maps_rectangle" id="map"></div>
  </div>
<div class="right-container">
  <div class="geocache-header">Choose your playground!</div>
  <div class="sendButton">
      <button class="send-button" @click="uploadRectangle_Coordinates">Choose</button>
  </div>
</div>


  
</template>

<script>

import axios from 'axios'; // adjust the path according to your project structure

export default {
  data() {
    return{
      rectangle: null,
      map: null,
      infoWindow: null
    }
  }
  ,
  mounted() {
    window.initMap = this.initMap;
    const polyfillScript = document.createElement('script');
    polyfillScript.src = "https://polyfill.io/v3/polyfill.min.js?features=default";
    polyfillScript.defer = true;
    document.head.appendChild(polyfillScript);

    const script = document.createElement('script');
    script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDhWfM69vUtYrMVD_ZbsenzHdrcDAuRO_c&callback=window.initMap&v=weekly";
    script.defer = true;
    document.head.appendChild(script);
    
  },
  
  methods : {
    initMap() {
    this.map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 36.71211638269658, lng: -4.467360121576483 },
    zoom: 9,
  });

  const bounds = {
    north: 36.75609433441271,
    south: 36.71119576113546,
    east: -4.397631997961093,
    west: -4.533594156164229,
  };

  // Define the rectangle and set its editable property to true.
  this.rectangle = new google.maps.Rectangle({
    bounds: bounds,
    editable: true,
    draggable: true,
  });
  this.rectangle.setMap(this.map);
  // Add an event listener on the rectangle.
  this.rectangle.addListener("bounds_changed", this.showNewRect);
  // Define an info window on the map.
  this.infoWindow = new google.maps.InfoWindow();
},
showNewRect() {
  const ne = this.rectangle.getBounds().getNorthEast();
  const sw = this.rectangle.getBounds().getSouthWest();
  const contentString =
    "<b>Rectangle moved.</b><br>" +
    "New north-east corner: " +
    ne.lat() +
    ", " +
    ne.lng() +
    "<br>" +
    "New south-west corner: " +
    sw.lat() +
    ", " +
    sw.lng();

  // Set the info window's content and position.
  this.infoWindow.setContent(contentString);
  this.infoWindow.setPosition(ne);
  this.infoWindow.open(this.map);
},

uploadRectangle_Coordinates() {
  const ne = this.rectangle.getBounds().getNorthEast();
  const sw = this.rectangle.getBounds().getSouthWest();
  console.log("lat north: " + ne.lat());
  console.log("lng north: " + ne.lng());
  console.log("lat south: " + sw.lat());
  console.log("lng south: " + sw.lng());
  this.$router.push('/caches');


}
    }
  }

</script>

<style scoped>
.main-container {
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
}

.google_maps_rectangle {
  z-index: 3;
  position: absolute;
  height: 100%;
  width: 50%;
  padding: 0px;
  border-width: 0px;
  margin: 0px;
  left: 0px;
  top: 0px;
  touch-action: pan-x pan-y;
  border-radius: 8px;
  color: black;
}
.right-container {
  flex: 1;
   /* Adjust background color as needed */
}

.geocache-header {
  font-family: 'Maximum Impact', sans-serif;
  font-size: 40px;
  text-align: center;
  font-weight: bolder;
  line-height: 1.7em;
  align-items: center;
  padding-left : 130px;
  padding-top: 50px;
  position: absolute;
}

.send-button {
  position: absolute;
  top: 300px;
  right: 300px;
  font-weight: bolder;
  line-height: 1.7em;
  font-family: 'Maximum Impact', sans-serif;
  font-size: 40px;
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  border-radius: 12px;
  transition-duration: 0.4s;
}
</style>
