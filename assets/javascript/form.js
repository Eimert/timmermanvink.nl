document.querySelector("#contactForm").addEventListener('submit', handleForm);

function handleForm(event) {
    // event.preventDefault();
    console.log("submit clicked");
    document.querySelector("#contactForm").style.display = "none";
    document.querySelector(".loader").style.display = "block";

    setTimeout(function () {
        // hide loader
        document.querySelector(".loader").style.display = "none";
        // show
        document.querySelector("#dummyframe").style.display = "inline";
    }, 4000);
    // return false;
}
