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


const numeros=get(".card__number");
console.log(num[0].index);


//Boton para girar la tarjeta
const capaGirar=get(".giracion");
const btnGirar=get(".form__girar");
btnGirar.addEventListener("click",(e)=>{
	e.preventDefault();
	capaGirar.classList.toggle("boton__girar")});
