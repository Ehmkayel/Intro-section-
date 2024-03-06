const dropdowns = document.querySelectorAll(".sub-list");
const arrow = document.querySelectorAll(".sub-menu");
const dropdownMenus = document.querySelectorAll(".dropdown"); 


dropdowns.forEach((dropdown, i) => {
    dropdown.addEventListener("click", () => {
        dropdown.classList.toggle("active");
        arrow[i].classList.toggle("active");

        if (dropdown.classList.contains("active")) {
            // Toggle the display of the corresponding dropdownMenu
            dropdownMenus[i].style.display = "flex";
            
        } else {
            dropdownMenus[i].style.display = "none";
            
        }
    });
});

 
