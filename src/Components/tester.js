//Get sunrise-sunset.org times
fetch(`https://api.sunrise-sunset.org/json?lat=38.254238&lng=-85.759407&date=today`)
    .then(function(response) {
        return response.json();
    })
    .then (function(data) {
        console.log(data);
    });