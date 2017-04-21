var valueN = 0;
var valueZ = 0;
var valueE = 0;
var valueD = 0;
var valueC = 0;
var valueM = 0;

var hashAlphabet = {A: 20,
					B: 21,
					C: 22,
					D: 23,
					E: 24,
					F: 25,
					G: 26,
					H: 27,
					I: 28,
					J: 29,
					K: 30,
					L: 31,
					M: 32,
					N: 33,
					O: 34,
					P: 35,
					Q: 36,
					R: 37,
					S: 38,
					T: 39,
					U: 40,
					V: 41,
					W: 42,
					X: 43,
					Y: 44,
					Z: 45}

// function generateHashAlphabet(){
//
// }

function getHashValues(value){
	var arrayValues = [];

	for(var key in hashAlphabet){
		if(value == "key"){
			arrayValues.push(key);
		}
		else if (value == "value") {
			arrayValues.push(hashAlphabet[key]);
		}
	}
	return arrayValues;
}

function generateAlphabetInHTML(){
	var lineAlphabet = document.getElementById('trAlphabet');
	var arrayKeysHash = getHashValues("key");
	// console.log(arrayKeysHash);

	for(var i in arrayKeysHash){
		var thLetter = document.createElement("th");
		thLetter.innerHTML = arrayKeysHash[i];
		lineAlphabet.appendChild(thLetter);
	}
}

function generateValuesInHTML(){
	var lineValues = document.getElementById('trValues');
	var arrayValuesHash = getHashValues("value");
	// console.log(arrayKeysHash);

	for(var i in arrayValuesHash){
		var thValue = document.createElement("th");
		thValue.innerHTML = arrayValuesHash[i];
		lineValues.appendChild(thValue);
	}

}

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

generateAlphabetInHTML();
generateValuesInHTML();

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
