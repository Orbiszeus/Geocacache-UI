<template>
  <div class="main-container">
    <div class="google_maps_rectangle" id="map"></div>
  </div>
  <div class="right-container">
    <div class="geocache-header"></div>
    <div class="sendButton">
      <button id="send-button" @click="uploadCaches">CHOOSE MY GAME AREA</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'; // adjust the path according to your project structure
export default {
  data() {
    return {
      rectangle: null,
      map: null,
      infoWindow: null,
      marker: null,
      pinnedPoints: []
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
  methods: {
    initMap() {
      this.map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 36.71211638269658, lng: -4.467360121576483 },
        zoom: 11,
      });

      this.marker = new google.maps.Marker({
        position: { lat: 36.71211638269658, lng: -4.467360121576483 },
        map: this.map,
        title: "I am a pin on this map!",
      });
      const bounds = {
        north: 36.75609433441271,
        south: 36.71119576113546,
        east: -4.397631997961093,
        west: -4.533594156164229,
      };


      this.infoWindow = new google.maps.InfoWindow();
      this.map.addListener("click", (event) => {
        const clickedLatLng = event.latLng.toJSON();

        // Create a new marker at the clicked location.
        const marker = new google.maps.Marker({
          position: event.latLng,
          map: this.map,
        });
        this.pinnedPoints.push(clickedLatLng);
        console.log(this.pinnedPoints);
        for (let i = 0; i < this.pinnedPoints.length; i++) {
          console.log("Lat: " + this.pinnedPoints[i].lat);
          console.log("Long: " + this.pinnedPoints[i].lng);
          console.log("------------------------------------");
        }
        this.infoWindow.setContent(`Latitude: ${clickedLatLng.lat}, Longitude: ${clickedLatLng.lng}`);
        this.infoWindow.open(this.map, this.pinnedPoints);

      });

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
  height: 55%;
  width: 58%;
  padding: 0px;
  border-width: 0px;
  margin: 0px;
  left: 20%;
  top: 50px;
  touch-action: pan-x pan-y;
  border-radius: 20px;
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
  padding-left: 130px;
  padding-top: 50px;
  position: absolute;
}

#send-button {

  display: absolute;

  margin-left: 30%;
  margin-top: 36%;
  font-weight: bolder;
  line-height: 1.7em;
  font-family: 'Maximum Impact', sans-serif;

  background-color: #55545d;
  border: none;
  color: white;
  padding: 30px 160px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  cursor: pointer;
  border-radius: 12px;
  transition-duration: 0.4s;
}
</style>