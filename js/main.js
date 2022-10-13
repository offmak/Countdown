// Define a data para a qual estamos em contagem regressiva
var countDownDate = new Date("december 5, 2022 15:37:25").getTime();

// Atualiza a contagem regressiva a cada 1 segundo
var x = setInterval(function() {

 // Obtém a data e hora de hoje
  var now = new Date().getTime();
    
  // Encontra a distância entre agora e a data da contagem regressiva
  var distance = countDownDate - now;
    
// Cálculos de tempo para dias, horas, minutos e segundos
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Saída do resultado em um elemento com id="demo"
  document.getElementById("demo").innerHTML = days + " : " + hours + " : "
  + minutes + " : " + seconds + "  ";
    
// Se a contagem regressiva acabou, escreva algum texto
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);