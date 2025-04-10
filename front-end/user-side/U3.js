document.addEventListener("DOMContentLoaded", function() {
    const publicBtn = document.getElementById("public-btn");
    const privateBtn = document.getElementById("private-btn");
    const anonymousBtn = document.getElementById("anonymous-btn");

    const publicForm = document.getElementById("public-form");
    const privateForm = document.getElementById("private-form");
    const anonymousForm = document.getElementById("anonymous-form");

    function hideAllForms() {
        publicForm.classList.remove("active");
        privateForm.classList.remove("active");
        anonymousForm.classList.remove("active");
    }

    function resetButtons() {
        publicBtn.classList.remove("active");
        privateBtn.classList.remove("active");
        anonymousBtn.classList.remove("active");
    }

    function activateButton(button) {
        resetButtons(); // Remove active class from all buttons
        button.classList.add("active"); // Add active class to the clicked button
    }

    publicBtn.addEventListener("click", function() {
        hideAllForms();
        setTimeout(() => { // Delay for aesthetic effect
            publicForm.classList.add("active");
            activateButton(publicBtn);
        }, 200); // Delay before showing the form
    });

    privateBtn.addEventListener("click", function() {
        hideAllForms();
        setTimeout(() => {
            privateForm.classList.add("active");
            activateButton(privateBtn);
        }, 200);
    });

    anonymousBtn.addEventListener("click", function() {
        hideAllForms();
        setTimeout(() => {
            anonymousForm.classList.add("active");
            activateButton(anonymousBtn);
        }, 200);
    });

    // Initialize the first form (public) as active
    publicForm.classList.add("active");
    activateButton(publicBtn);
});
