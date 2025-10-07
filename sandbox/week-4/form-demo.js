function validateForm(event) {
  const theForm = event.target;
  const errors = [];
  let isValid = true;

  if (theForm.paymentMethod.value === "creditCard") {
    // FIXED: Corrected typo 'theFor' to 'theForm' and referenced the input by its name 'creditCardNumber'
    if (theForm.creditCardNumber.value !== "1234123412341234") {
      isValid = false;
      errors.push("Invalid Credit Card Number");
    }
  }

  // FIXED: Corrected property from '.Value' to '.value' (it's case-sensitive)
  if (theForm.fullName.value !== "Bob") {
    isValid = false;
    errors.push("Your name is not Bob");
  }

  if (!isValid) {
    event.preventDefault();
    showErrors(errors);
    return false;
  }
}

function togglePaymentDetails(e) {
  const theForm = document.querySelector("#checkoutForm");
  const creditCardContainer = document.getElementById(
    "creditCardNumberContainer"
  );
  const paypalContainer = document.getElementById("paypalUsernameContainer");

  creditCardContainer.classList.add("hide");
  paypalContainer.classList.add("hide");

  // FIXED: Referenced the input fields by their 'name' attribute ('creditCardNumber', 'paypalUsername')
  theForm.creditCardNumber.required = false;
  theForm.paypalUsername.required = false;

  if (theForm.paymentMethod.value === "creditCard") {
    creditCardContainer.classList.remove("hide");
    // FIXED: Referenced the correct input field
    theForm.creditCardNumber.required = true;
  } else if (theForm.paymentMethod.value === "paypal") {
    paypalContainer.classList.remove("hide");
    // FIXED: Referenced the correct input field
    theForm.paypalUsername.required = true;
  }
}

// helper function to display our errors.
function showErrors(errors) {
  const errorEl = document.querySelector(".errors");
  const html = errors.map((error) => `<p>${error}</p>`);
  errorEl.innerHTML = html.join("");
}

// attach a change event handler to the paymentMethod input
document
  .querySelector("#paymentMethod")
  .addEventListener("change", togglePaymentDetails);

// attach a submit event handler to the form
document.querySelector("#checkoutForm").addEventListener("submit", validateForm);