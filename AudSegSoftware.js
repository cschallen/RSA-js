var valueN = 0;
var valueZ = 0;
var valueE = 0;
var valueD = 0;

var hashAlphabet = {"A": [Math.floor(Math.random() * 2) + 10, 0],
					"B": [Math.floor(Math.random() * 5) + 15, 0],
					"C": [Math.floor(Math.random() * 5) + 20, 0],
					"D": [Math.floor(Math.random() * 5) + 25, 0],
					"E": [Math.floor(Math.random() * 2) + 30, 0],
					"F": [Math.floor(Math.random() * 5) + 35, 0],
					"G": [Math.floor(Math.random() * 5) + 40, 0],
					"H": [Math.floor(Math.random() * 5) + 45, 0],
					"I": [Math.floor(Math.random() * 5) + 50, 0],
					"J": [Math.floor(Math.random() * 5) + 55, 0],
					"K": [Math.floor(Math.random() * 2) + 60, 0],
					"L": [Math.floor(Math.random() * 5) + 65, 0],
					"M": [Math.floor(Math.random() * 5) + 70, 0],
					"N": [Math.floor(Math.random() * 5) + 75, 0],
					"O": [Math.floor(Math.random() * 3) + 80, 0],
					"P": [Math.floor(Math.random() * 3) + 83, 0],
					"Q": [Math.floor(Math.random() * 3) + 86, 0],
					"R": [Math.floor(Math.random() * 2) + 89, 0],
					"S": [Math.floor(Math.random() * 2) + 91, 0],
					"T": [Math.floor(Math.random() * 2) + 93, 0],
					"U": [Math.floor(Math.random() * 2) + 95, 0],
					"V": [Math.floor(Math.random() * 2) + 97, 0],
					"W": [Math.floor(Math.random() * 5) + 99, 0],
					"X": [Math.floor(Math.random() * 3) + 12, 0],
					"Y": [Math.floor(Math.random() * 3) + 32, 0],
					"Z": [Math.floor(Math.random() * 3) + 62, 0]}

function alterHashAlphabetValueEncrypted(letter, value) {
	hashAlphabet[letter][1] = value;
}

function getHashValues(value){
	var arrayValues = [];

	for(var key in hashAlphabet){
		if(value == "key"){
			arrayValues.push(key);
		}
		else if (value == "value") {
			arrayValues.push(hashAlphabet[key][0]);
		}
		else if (value == "encrypted") {
			arrayValues.push(hashAlphabet[key][1]);
		}
	}
	return arrayValues;
}

function generateAlphabetInHTML(){
	var lineAlphabet = document.getElementById('trAlphabet');
	var arrayKeysHash = getHashValues("key");

	for(var i in arrayKeysHash){
		var thLetter = document.createElement("th");
		thLetter.innerHTML = arrayKeysHash[i];
		lineAlphabet.appendChild(thLetter);
	}
}

function generateValuesInHTML(){
	var lineValues = document.getElementById('trValues');
	var arrayValuesHash = getHashValues("value");

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
