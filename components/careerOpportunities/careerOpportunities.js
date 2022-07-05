const descriptions = document.querySelectorAll(".description");
const buttons = document.querySelectorAll(".description-btn button");
console.log(buttons)
descriptions.forEach((element) => {
    element.addEventListener("click", (e) => {
        descriptions.forEach((description) => description.classList.remove("active"));
        e.classList.add("active");
    })
});