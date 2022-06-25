window.addEventListener("load", function() {
    document.getElementById("units").addEventListener("submit", function(e) {
      e.preventDefault();
      var num = parseInt(document.getElementById("temp").value, 10);
      if (document.getElementById("c").checked) {
        document.getElementById("result").innerHTML = num + "°C = " + (Math.round(num * 9 / 5) + 32) + " °F";
      } 
      else if (document.getElementById("f").checked) {
        document.getElementById("result").innerHTML = num + "°F = " + (Math.round((num - 32) * 5 / 9)) + " °C";
      }
    });
  });