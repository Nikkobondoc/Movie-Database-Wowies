window.addEventListener("DOMContentLoaded", (event) => {
    const customSelect = document.querySelector(".custom-select");
    const selectBtn = document.querySelector(".select-button");
    if (customSelect && selectBtn) {
        selectBtn.addEventListener("click", () => {
        // add/remove active class on the container element
        customSelect.classList.toggle("active");
        // update the aria-expanded attribute based on the current state
        selectBtn.setAttribute(
            "aria-expanded",
            selectBtn.getAttribute("aria-expanded") === "true" ? "false" : "true"
        );
        });
    }
});
    
    // const customSelect = document.querySelector(".custom-select");
    // const selectBtn = document.querySelector(".select-button");

    // // add a click event to select button
    // selectBtn.addEventListener("click", () => {
    // // add/remove active class on the container element
    // customSelect.classList.toggle("active");
    // // update the aria-expanded attribute based on the current state
    // selectBtn.setAttribute(
    //     "aria-expanded",
    //     selectBtn.getAttribute("aria-expanded") === "true" ? "false" : "true"
    // );
    // });


