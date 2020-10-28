const btnBurger = document.getElementById("btnBurger")

const showSidebar = ()=>{
    
    document.querySelector(".sidebar").classList.toggle("open")
    document.querySelector(".sidebar").classList.toggle("animate__zoomInUp")
}
btnBurger.addEventListener("click", showSidebar)

class BarraHeader{

    constructor(selector) {
        
        this.eventListeners()
    }

    eventListeners(){
        document.addEventListener("scroll", this.animateScroll)
    }

    animateScroll(){
        if (scrollY > 300) {
            document.querySelector(".barra-header").classList.add("animate-barra")
        }else{
            document.querySelector(".barra-header").classList.remove("animate-barra")
        }
    }
}

(()=>{
    new BarraHeader
})()