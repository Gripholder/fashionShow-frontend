let validated = false;

const buildingLocation = {
  latitude: 38.99236740000001,
  longitude: -77.02689120000002,
}

const distance = 100;



function showPosition(position) {
    const d = calculateDistance(position.coords.latitude, position.coords.longitude, buildingLocation.latitude, buildingLocation.longitude)
    if(distance > d){
      validated = true
    } else {
    }
}

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    var R = 6371000; // Radius of the earth in km
    var dLat = deg2rad(lat2 - lat1); // deg2rad below
    var dLon = deg2rad(lon2 - lon1);
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    return d;
  }

    function deg2rad(deg) {
      return deg * (Math.PI / 180)
    }

    function validateLocation(valid) {
        if (navigator.geolocation) {
            navigator.geolocation.watchPosition(showPosition)
            setTimeout(function () {
              valid(validated)
            });
        } else {
            alert("Geolocation is not supported by this browser.");
        }
      }


export {validateLocation};
