let modal = null

const onpenmodal = function(e){
    e.preventDefault()
    const target = document.querySelector(e.target.getAttribute("href"))
    target.style.display= null
    target.removeAttribute("aria-hidden")
    target.setAttribute("aria-modal","true" )
    modal = target
    modal.addEventListener("click", closemodal)
    modal.querySelector(".js-close-modal").addEventListener("click", closemodal)
    modal.querySelector(".js-modal-stop").addEventListener("click", stopPropagation)



}

const closemodal = function(e){
    if (modal == null) return
    e.preventDefault()
    modal.style.display= "none"
    modal.removeAttribute("aria-modal")
    modal.setAttribute("aria-hidden","true" )
    modal.removeEventListener("click", closemodal)
    modal.querySelector(".js-close-modal").removeEventListener("click", closemodal)
    modal.querySelector(".js-modal-stop").removeEventListener("click", stopPropagation)

    modal = null

}

const stopPropagation = function(e){
    e.stopPropagation()
}

const focusInModal = function(e){
    e.preventDefault()
    
}

document.querySelectorAll(".js-modal").forEach(a => {
    a.addEventListener("click", onpenmodal)
    
})


window.addEventListener("keydown", function(e){
    if(e.key == "Escape" || e.key === "Esc"){
        closemodal(e)
    }

    if(e.key === "Tab" && modal !== null){
        focusInModal(e)
    }
})