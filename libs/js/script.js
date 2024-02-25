var streets = L.tileLayer(
    "https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}",
    {
      attribution:
        "Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012"
    }
  );
  
  var satellite = L.tileLayer(
    "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    {
      attribution:
        "Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
    }
  );
  var basemaps = {
    "Streets": streets,
    "Satellite": satellite
  };
  
  var map = L.map("map", {
    layers: [streets]
  }).setView([54.5, -4], 6);
  
  var layerControl = L.control.layers(basemaps).addTo(map);

  
  L.easyButton("fa-info", function (btn, map) {
    $("#exampleModal").modal("show");
  }).addTo(map);

  L.easyButton("fa-info", function (btn, map) {
    $("#exampleModal").modal("show");
  }).addTo(map);

  L.easyButton("fa-info", function (btn, map) {
    $("#exampleModal").modal("show");
  }).addTo(map);

  L.easyButton("fa-info", function (btn, map) {
    $("#exampleModal").modal("show");
  }).addTo(map);

  L.easyButton("fa-info", function (btn, map) {
    $("#exampleModal").modal("show");
  }).addTo(map);


$(document).ready( () => {

  //get country ajax call
  $.ajax({
    url:"libs/php/getCountryName.php",
    method: "GET",
    success: function(result){
      // result = JSON.parse(result)
      if(result.status.code == 200){
        result.data.sort((a,b) => a.name.localeCompare(b.name))
       let countrySelectEl = document.getElementById('countrySelect')
        result.data.map( country => {
          let html = `
            <option value="">${country.name}</option>
          `
          countrySelectEl.innerHTML += html;

        })
      }
    }
  })

  





  //get user location
  //getUserLocation()
  console.log (map)
  map.locate({
    setView: true,
    maxZoom: 14
  })
})

function getUserLocation(){
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(handleUserPosition);
  }
}
function handleUserPosition(position) {

  console.log (position)
}

function getCountryInfo(country) {
  //getCountryInfo ajax call

  $.ajax({
    url:"libs/php/getCountryInfo.php",
    data: {country: country},
    method: "POST",
    success: function (result){
      console.log (result)
    },
    error: function (error){
      console.log ('error', error)
    }
  })
}