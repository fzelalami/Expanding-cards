const panels = document.querySelectorAll(".panel");

panels.forEach(panel => {
    panel.addEventListener("click", () => {
        removeAllTheActiveClasses();
        panel.classList.add("active")
    })
})

function removeAllTheActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove("active");
    })
}