const descriptions = document.querySelectorAll(".description");
const buttons = document.querySelectorAll(".description-btn button");
buttons.forEach((element) => {
    element.addEventListener("click", (e) => {
        buttons.forEach((button) => button.classList.remove("border-btn"))
        e.target.classList.add("border-btn");
        const targetTabContent = element.dataset.tabTarget;
        descriptions.forEach((description) => {
            description.classList.remove("active");
            description.classList.add("hidden");
            if (targetTabContent === description.id) {
                description.classList.replace("hidden", "active")
            }  
        });
    })
});