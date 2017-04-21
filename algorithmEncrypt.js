function encrypt() {
    var textToEncrypt = document.getElementById("inputPrimary").value;
    var textEncrypted = "";

// C (cifragem) => M^E mod N
// arrumar aqui o for
    for(var i = 0; i < textToEncrypt.length; i++){
        var valueM = getValueByKey(textToEncrypt[i].toUpperCase());
        var charEncrypted;

        charEncrypted = (bigInt(valueM).pow(valueE)).divmod(valueN);
        textEncrypted += charEncrypted;
        // alert(charEncrypted);
    }
    // alert(valueE);

    setInputValue("inputPrimary", textEncrypted);
}

function getValueByKey(key) {
    return hashAlphabet[key];
}

function setInputValue(id, text) {
    document.getElementById(id).value = text;
}
