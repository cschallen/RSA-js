function triggerDecryptedMethod() {
    var textToDecrypt = document.getElementById("inputPrimary").value;
    var textDecrypted = decrypt(textToDecrypt);
    setInputValue("inputPrimary", textDecrypted);
}

function decrypt(toDescrypt) {
    return "pegadinha do malandro";
}
