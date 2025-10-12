function isCardNumberValid(number) {
    return number === '1234123412341234'
}

function displayError(msg) {
    document.querySelector('.errorMsg').innerHTML = msg
}

function submitHandler(event) {
    event.preventDefault()
    displayError('')

    const number = this.cardNumber.value
    const year = parseInt(this.year.value)
    const month = parseInt(this.month.value)
    let errorMsg = ''

    if (isNaN(number)) {
        errorMsg += 'Card number is not a valid number<br>'
    } else if (!isCardNumberValid(number)) {
        errorMsg += 'Card number is not a valid card number<br>'
    }

    const current = new Date()
    const entered = new Date(year, month - 1)
    if (entered <= current) {
        errorMsg += 'Expiration date must be in the future<br>'
    }

    if (errorMsg !== '') {
        displayError(errorMsg)
        return false
    }

    alert('Form submitted successfully!')
    return true
}

document.querySelector('#credit-card').addEventListener('submit', submitHandler)