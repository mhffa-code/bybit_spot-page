// side bar
const sideBar = document.querySelector("aside");
const bars = document.querySelector("aside > i");
const asideLinkes = document.querySelectorAll("aside ul li");
const main = document.querySelector("main");
const overley = document.querySelector(".overley");

bars.addEventListener("click", () => {
    sideBar.classList.toggle("shrink");
    main.classList.toggle("m-sh");
    if (innerWidth < 991 && !(sideBar.classList.contains("shrink"))) {
        overley.style.display = "block"; 
    }else{
        overley.style.display = "none"; 
    }

});

if (innerWidth < 991)
    sideBar.className = "shrink";

asideLinkes.forEach((li) => {
    li.addEventListener("click", (e) => {
        asideLinkes.forEach((li) => {
            li.classList.remove("active");
        });
        li.classList.add("active");
    });
});


