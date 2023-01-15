function get(cadena) {
	return document.querySelector(cadena);
}
function getAll(cadena) {
	return document.querySelectorAll(cadena);
}


//Funcion para que los inputs se dibujen en la card
const num=getAll(".form__number input");
const numCard=getAll(".back-card__numero");

num.forEach((n,i)=>{n.addEventListener("blur",()=>{
	if (n.value>=0 && n.value<=9999 && n.value!="") {
		let buff="000"+n.value;
		numCard[i].textContent=buff.slice(-4);}
		else numCard[i].textContent="xxxx";
})
});


//const numeros=get(".card__number");



//Boton para girar la tarjeta
const capaGirar=get(".giracion");
const btnGirar=get(".form__girar");
btnGirar.addEventListener("click",(e)=>{
	e.preventDefault();
	capaGirar.classList.toggle("boton__girar")});


//Inputs de fecha
const fecha=getAll(".form__date input");
const cardFecha=getAll(".card__fecha-hasta");
fecha.forEach((elem,i)=>{
	elem.addEventListener("blur",()=>{
		if (elem.value>0 && elem.value<100) {
			let cad= "0"+ elem.value;
			cardFecha[i].textContent=cad.slice(-2);
		} else cardFecha[i].textContent="xx";
	})
});


//inputs de nombre y apellido
const nombreForm=get(".form__nombre");
const nombreCard=get(".card__nombre");
nombreForm.addEventListener("blur",()=>nombreCard.textContent=nombreForm.value);

const apellidoForm=get(".form__apellido");
const apellidoCard=get(".card__apellido");
apellidoForm.addEventListener("blur",()=>apellidoCard.textContent=apellidoForm.value);




const seguridadForm=get(".form__seguridad");
const seguridadCard=get(".back-card__seguridad");
seguridadForm.addEventListener("blur",()=>{
	if (seguridadForm.value>0 && seguridadForm.value<999) {}
		let cad="00"+seguridadForm.value;
		seguridadCard.textContent=cad.slice(-3);
});