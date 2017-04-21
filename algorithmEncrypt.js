function encrypt() {
    var textToEncrypt = document.getElementById("inputPrimary").value;
    var textEncrypted = "";

    for(var i = 0; i < textToEncrypt.length; i++){
        var charEncrypted = getValueByKey(textToEncrypt[i].toUpperCase());
        textEncrypted += charEncrypted;
    }

    setInputValue("inputPrimary", textEncrypted);
}

function getValueByKey(key) {
    return hashAlphabet[key].toString();
}

function setInputValue(id, text) {
    document.getElementById(id).value = text;
}
