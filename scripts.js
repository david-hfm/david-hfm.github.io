const ayaya_audio = new Audio("ayaya.mp3"); 

document.querySelector('input[type=button]').addEventListener('click', ayaya);


function ayaya() {
	printAyaya();
	playAyaya();
}

function playAyaya() {
	ayaya_audio.play();	
}

function printAyaya() {
	let ayaya_p = document.querySelector("#ayaya-text p");
	let red = Math.floor(Math.random() * 256);
	let green = Math.floor(Math.random() * 256);
	let blue = Math.floor(Math.random() * 256);
	ayaya_p.style.color = "rgb(" + red +
												","    + green +
												","    + blue + ")";
}
