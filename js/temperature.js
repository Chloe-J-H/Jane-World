function celsiusToFahrenheit(celsius) {
    var fahrenheit = celsius * 9 / 5 + 32
    ;
  console.log(celsius+"°C is "+fahrenheit+"°F");
  }

  function fahrenheitToCelsius(fahrenheit){
  var celsius = (fahrenheit - 32) * 5 / 9
  ;
  document.write(fahrenheit+"°F is "+celsius+"°C");
  }
  celsiusToFahrenheit(0);
  fahrenheitToCelsius(32);