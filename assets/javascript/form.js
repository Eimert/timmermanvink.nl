
document.addEventListener("load", addListeners());

function addListeners() {
    let form = document.querySelector("#contactForm");
    form.addEventListener('submit', handleForm);
}

function handleForm(event) {
    event.preventDefault();
    console.log("submit clicked");
    document.querySelector("button[type=submit]").disabled = true

    document.querySelector(".lead").textContent = "Bedankt voor uw bericht, over het algemeen hoort u van ons binnen 48 uur."
    return false;
}

