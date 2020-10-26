var data = new Date();
var dia = data.getDate();     
document.getElementById("dayNumber").innerHTML = dia;     
var dia_sem = data.toLocaleString('pt-BR', {weekday: 'long'});
document.getElementById("dayName").innerHTML = dia_sem;
var mes = data.toLocaleString('pt-BR', {month: 'long'});         
document.getElementById("monthName").innerHTML = mes;          
var ano = data.getFullYear();   
document.getElementById("year").innerHTML = ano;
     
function JSClock() {
    var tempo = new Date();
    var hora = tempo.getHours();
    var minutos = tempo.getMinutes();
    var segundos = tempo.getSeconds();
    var temp = "" + ((hora > 12) ? hora - 12 : hora);
    if (hora == 0)
      temp = "12";
    temp += ((minutos < 10) ? ":0" : ":") + minutos;
    temp += ((segundos < 10) ? ":0" : ":") + segundos;
    temp += (hora >= 12) ? " P.M." : " A.M.";
    return temp;
    
  }   
  document.getElementById("clock").innerHTML = JSClock();

