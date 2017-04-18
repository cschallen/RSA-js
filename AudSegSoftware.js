var valueN = 0;
var valueZ = 0;
var valueE = 0;
var valueD = 0;
var valueC = 0;
var valueM = 0;


function refreshValues(idValue, value){
	var newValue = document.getElementById(idValue);

	newValue.innerHTML = value;
}

// Aqui começa a função que enche os dropdowns
function getPrimes(max) {
	var sieve = [], i, j, primes = [];
	// sieve = peneira
	for(i = 2; i <= max; ++i) {
		if (!sieve[i]) {
			primes.push(i);
			for (j = i << 1; j <= max; j += i) {
				sieve[j] = true;
			}
		}
	}
	return primes;
}


var myDiv = document.getElementById("myDiv");
var arrayNumberPrimes = [];

arrayNumberPrimes = getPrimes(1000);

var selectList = document.createElement("select");
selectList.setAttribute("class", "btn btn-default dropdown-toggle");
selectList.id = "selectP";
myDiv.appendChild(selectList);
var optionDefault = document.createElement("option");
optionDefault.text = "Escolha P";
selectList.appendChild(optionDefault);

var selectList2 = document.createElement("select");
selectList2.style.margin = "10px";
selectList2.setAttribute("class", "btn btn-default dropdown-toggle");
selectList2.id = "selectQ";
myDiv.appendChild(selectList2);
var optionDefault2 = document.createElement("option");
optionDefault2.text = "Escolha Q";
selectList2.appendChild(optionDefault2);


for(var i = 0; i < arrayNumberPrimes.length; i++){
	var option = document.createElement("option");
	option.setAttribute("class", "btn btn-default dropdown-toggle");
	option.value = arrayNumberPrimes[i];
	option.text = arrayNumberPrimes[i];
	selectList.appendChild(option);
}
for(var i = 0; i < arrayNumberPrimes.length; i++){
	var option2 = document.createElement("option");
	option2.setAttribute("class", "btn btn-default dropdown-toggle");
	option2.value = arrayNumberPrimes[i];
	option2.text = arrayNumberPrimes[i];
	selectList2.appendChild(option2);
}
// fim
