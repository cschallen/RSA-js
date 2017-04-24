function triggerEncryptedMethod() {
    var textToEncrypt = document.getElementById("inputPrimary").value;
    var textEncrypted = encrypt(textToEncrypt);
    setValuesEncryptedInHash();
    // createEncryptedValuesInHTML();
    // função futura para mostrar na tela os valores criptografados, pra auxiliar
    // na hora de editar o input
    setInputValue("inputPrimary", textEncrypted);
}

function encrypt(toEncrypt) {
    var textEncrypted = "";
    for(var i = 0; i < toEncrypt.length; i++){
        var valueM = getValueByKey(toEncrypt[i].toUpperCase());
        var charEncrypted;

        charEncrypted = setValueC(valueM, valueE, valueN);
        textEncrypted += charEncrypted;
    }
    return textEncrypted;
}

function getValueByKey(key) {
    return hashAlphabet[key][0];
}

function setValuesEncryptedInHash() {
    var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    for(var i in alphabet){
        var key = getValueByKey(alphabet[i]);
        var valueEncrypted = setValueC(key, valueE, valueN);
        alterHashAlphabetValueEncrypted(alphabet[i], valueEncrypted);
        console.log(hashAlphabet[alphabet[i]], hashAlphabet[alphabet[i]][1]);
    }
}
