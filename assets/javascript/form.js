
document.addEventListener("load", addListeners());

function addListeners() {
    let form = document.querySelector("#contactForm");
    form.addEventListener('submit', handleForm);
}

function handleForm(event) {
    // event.preventDefault();
    console.log("submit clicked");
    
    // document.querySelector("form").remove();
    // document.querySelector("button[type=submit]").disabled = true

    document.querySelector(".lead").textContent = "Bedankt voor uw bericht, over het algemeen hoort u van ons binnen 48 uur."
    // return false;
}

// todo: handle form with ajax to prevent reloading the page
// $(function() {
//     $('form').submit(function() {
//         $.ajax({
//             type: 'POST',
//             url: 'submit.php',
//             data: { username: $(this).name.value, 
//                     password: $(this).password.value }
//         });
//         return false;
//     }); 
// })

