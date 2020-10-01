document.querySelector("div.min-sec").style.display = 'none';
document.querySelector("div.hrs-min").style.display = 'none';
document.querySelector("div#m-cm").style.display = 'none';
document.querySelector("div#ft-inch").style.display = 'none';


let distDiv = document.querySelector("div.distance");//
let speedSect = document.querySelector("section.speed");
let finalSpeeddDiv = document.querySelector("div.final-speed");//
let forceSect = document.querySelector("section.force");
  
distDiv.style.display = 'none';
forceSect.style.display = 'none';
function unflex(div){
	div.style.display = 'none';
	if (div.classList.contains("is-flex")) {
		div.classList.remove('is-flex');
	} 
}

function flex(div) {
	div.style.display = 'block';
	div.classList.add("is-flex");
}

document.querySelector("select#given").onchange=({currentTarget})=>{

	document.getElementById('selectGiven').innerHTML = currentTarget.value;
    document.querySelectorAll("input").forEach(e=>e.value='');
	if (currentTarget.value == "Distance Traveled") {
        speedSect.style.display = 'block';
		forceSect.style.display = 'none';
        flex(distDiv);
        unflex(finalSpeeddDiv);
	} else if (currentTarget.value == "Mass and force") {

		forceSect.style.display = 'block';
		speedSect.style.display = 'none';
 
	}else if (currentTarget.value == "Speed Difference") {
		speedSect.style.display = 'block';
		forceSect.style.display = 'none';
		flex(finalSpeeddDiv)
		unflex(distDiv);
	}
}

