function fnCalcular(){
	var showResults = document.querySelector(".script__show-results");

	var alto = prompt("Alto: ");
	var ancho = prompt("Ancho: ");
	var area = (alto*ancho);

	showResults.innerHTML = "El área de la pared es de: " + area + "m2";
}