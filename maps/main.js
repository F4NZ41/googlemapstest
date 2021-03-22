const loader = new Loader({
    apiKey: "AIzaSyDMUO4OQDR8BcNbYAlZYJkhO739kebvKq8",
    version: "weekly",
    ...additionalOptions,
  });
  loader.load().then(() => {
    map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    });
  });