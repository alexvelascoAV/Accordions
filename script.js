
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    var symbol = this.getElementsByClassName("accordion-symbol")[0]; // Selecciona el símbolo dentro del acordeón actual
    if (panel.style.display === "block") {
      panel.style.display = "none";
      symbol.innerHTML = '+';
      symbol.style.color = '#fff'; // Cambia el color del símbolo a blanco
      symbol.style.fontSize = '28px'; 
      symbol.style.fontWeight = '100';
    } else {
      panel.style.display = "block";
      symbol.innerHTML = '—';
      symbol.style.color = '#F3103F'; // Cambia el color del símbolo a rojo (el color original)
      symbol.style.fontSize = '18px'; 
      symbol.style.fontWeight = '700';
    }
  });
}
