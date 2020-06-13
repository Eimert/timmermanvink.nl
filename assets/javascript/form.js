document.querySelector("#contactForm").addEventListener('submit', handleForm);

function handleForm(event) {
    // event.preventDefault();
    console.log("submit clicked");
    document.querySelector("#contactForm").style.display = "none";
    document.querySelector("#dummyframe").style.display = "inline";
    // return false;
}
