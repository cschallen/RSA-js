function encrypt() {
    var textToEncrypt = document.getElementById("inputPrimary").value;
    var textEncrypted = "";

    for(var i = 0; i < textToEncrypt.length; i++){
        var valueM = getValueByKey(textToEncrypt[i].toUpperCase());
        var charEncrypted;

        charEncrypted = (bigInt(valueM).pow(valueE));
        charEncrypted = charEncrypted.divmod(valueN);
        textEncrypted += charEncrypted.remainder;
        alert(charEncrypted);
    }

    setInputValue("inputPrimary", textEncrypted);
}

function getValueByKey(key) {
    return hashAlphabet[key];
}

function setInputValue(id, text) {
    document.getElementById(id).value = text;
}
