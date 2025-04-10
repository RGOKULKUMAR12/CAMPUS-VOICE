document.addEventListener("DOMContentLoaded", function() {
    const statChanges = document.querySelectorAll(".stat-change");
    
    statChanges.forEach(change => {
        const value = parseFloat(change.textContent);
        if (value < 0) {
            change.classList.add("negative");
        } else {
            change.classList.add("positive");
        }
    });
});
