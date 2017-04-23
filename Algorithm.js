function setValueC(m, e, n) {
    var valueC = (bigInt(m).pow(e)).divmod(n);
    valueC = valueC.remainder.value;
    return valueC;
}

function setValueD(){
    valueD = searchValueD();
    refreshValues("D", valueD);
}

function setValueN(p, q){
    valueN = parseInt(p.value) * parseInt(q.value);
    refreshValues("N", valueN);
}

function setValueZ(p, q){
    valueZ = (parseInt(p.value) - 1) * (parseInt(q.value) - 1);
    refreshValues("Z", valueZ);
}

function setValueP(p){
    valueP = parseInt(p.value);
    refreshValues("P", valueP);
}

function setValueQ(q){
    valueQ = parseInt(q.value);
    refreshValues("Q", valueQ);
}

function setValueE(){
    var e = document.getElementById("selectE");
    valueE = parseInt(e.value);
    refreshValues("E", valueE);
}

function setInputValue(id, text) {
    document.getElementById(id).value = text;
}

function searchValueD(){
    for(var i = valueZ; i < 1000; i += valueZ){
        var isValidValueForD = algorithmForDValue(i);

        if(isValidValueForD){
            return isValidValueForD;
        }
    }
    return i;
}

function algorithmForDValue(num){
    var resultExpression = ((num + 1) / valueE);
    if(Number.isInteger(resultExpression)){
        return resultExpression;
    }
}

function generateEValues(){
    var valueP = document.getElementById("selectP");
    var valueQ = document.getElementById("selectQ");

    setValueP(valueP);
    setValueQ(valueQ);
    setValueN(valueP, valueQ);
    setValueZ(valueP, valueQ);

    var selectE = document.getElementById("selectE");
    var valuesE = [];
    valuesE = returnArrayPrimeRelativeToZ(valueZ);

    for(var i = 0; i < valuesE.length; i++){
        var option3 = document.createElement("option");
        option3.setAttribute("class", "btn btn-default dropdown-toggle");
        option3.value = valuesE[i];
        option3.text = valuesE[i];
        selectE.appendChild(option3);
    }
}

function returnArrayPrimeRelativeToZ(Zvalue){
    var arrayE = [];
    for(var i = 2; i < 1000; i++){
        var primeRelative = false;
        primeRelative = isPrimeRelative(Zvalue, i);

        if(primeRelative){
            arrayE.push(i);
        }
    }
    return arrayE;
}

function isPrimeRelative(num1, num2){
    var array1 = [];
    var array2 = [];
    var isPrime = true;
    array1 = returnFactors(num1);
    array2 = returnFactors(num2);

    for(var i = 0; i < array1.length; i++){
        for(var j = 0; j < array2.length; j++){
            if(array1[i] == array2[j]){
                isPrime = false;
            }
        }
    }
    return isPrime;
}

function returnFactors(num){
    var factors = [];
    for(var i = 2; i <= num; i++){
        if(num % i == 0){
            factors.push(i);
        }
    }
    return factors;
}
