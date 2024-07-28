
function validationCheck() {

    var isValid = true;
    if (isValid) {
        // If the connection is valid, you can submit it
        sendToWhatsApp();
    }
}

function sendToWhatsApp() {

    var phoneNumber = "+919767647421";
    var url = "https://wa.me/" + phoneNumber + "?text=" + " ";

    window.open(url, '_blank').focus();
}
