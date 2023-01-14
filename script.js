function get(cadena) {
	return document.querySelector(cadena);
}
function getAll(cadena) {
	return document.querySelectorAll(cadena);
}

const num=getAll(".form__number input");
const numCard=getAll(".back-card__numero");

num.forEach((n,i)=>{n.addEventListener("blur",()=>{
	if (n.value>=0 && n.value<=9999) 
		{numCard[i].textContent=n.value;}
	
})
});


const numeros=get(".card__number");

console.log(num[0].index);

