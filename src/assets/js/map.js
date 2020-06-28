function createMap(lat, lon) {
  const coordinates = [lat, lon];
  const initialZoomLevel = 15;

  const map = L.map("map").setView(coordinates, initialZoomLevel);

  L.tileLayer("https://{s}.tile.osm.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; Contribuidores do <a href="https://osm.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  const markerMessage = "Estamos localizados aqui!";

  L.marker(coordinates).addTo(map).bindPopup(markerMessage).openPopup();
}

createMap(-11.42673, -37.33045);
