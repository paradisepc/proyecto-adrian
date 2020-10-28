const btnBurger = document.getElementById("btnBurger")

const showSidebar = ()=>{
    
    document.querySelector(".sidebar").classList.toggle("open")
    document.querySelector(".sidebar").classList.toggle("animate__zoomInUp")
}
btnBurger.addEventListener("click", showSidebar)