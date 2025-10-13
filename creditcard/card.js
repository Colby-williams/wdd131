function isCardNumberValid(number) {
    // normally we would contact a credit card service...but we don't know how to do that yet. So to keep things simple we will only accept one number
    return number === '1234567891011020';
}

function displayError(msg) {
    // Display error message
    const errorDiv = document.querySelector('.errorMsg');
    errorDiv.textContent = msg;
}

function submitHandler(event) {
    event.preventDefault();
    let errorMsg = '';
    const cardNumber = this.cardNumber.value.replace(/\s/g, '');
    displayError('');
    if (isNaN(cardNumber) || cardNumber.length < 16) {
        errorMsg += 'Card number is not valid.\n';
    } else if (!isCardNumberValid(cardNumber)) {
        errorMsg += 'Card number is not accepted.\n';
    }
    if (errorMsg !== '') {
        displayError(errorMsg);
        return false;
    } else {
        alert('Payment Successful!');
        this.reset();
    }
}

document.querySelector('.card-form').addEventListener('submit', submitHandler);