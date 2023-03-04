const allBtns = document.querySelectorAll(".size-btn")

for (let btn of allBtns) {
    btn.addEventListener("click", function(){
        let type = btn.getAttribute("view-size")
        let viewName = btn.getAttribute("view-name")
        let view = document.querySelector(`#${viewName}`)

        let computer = 'w-full'
        let laptop = 'w-5/6'
        let tablet = 'w-[30em]'
        let phone = 'w-[22em]'

        if (type === 'computer') {
            view.classList.add(computer)
            view.classList.remove(laptop)
            view.classList.remove(tablet)
            view.classList.remove(phone)
        }
        else if (type === 'laptop') {
            view.classList.add(laptop)
            view.classList.remove(computer)
            view.classList.remove(tablet)
            view.classList.remove(phone)
            
        } else if (type === 'tablet'){ 
            view.classList.add(tablet)
            view.classList.remove(computer)
            view.classList.remove(laptop)
            view.classList.remove(phone)
        } else {
            view.classList.add(phone)
            view.classList.remove(computer)
            view.classList.remove(tablet)
            view.classList.remove(laptop)
        }
    })
}

const allSiteBtns = document.querySelectorAll(".view-site-btn")

for (let btn of allSiteBtns) {
    btn.addEventListener("click", function(){
        let viewName = btn.getAttribute("site-name")
        let site = document.querySelector(`#${viewName}`)

        if (site.classList.contains("hidden")) {
            site.classList.remove("hidden")
            btn.textContent = "Hide Site"
        } else {
            site.classList.add("hidden")
            btn.textContent = "View Site"
        }
    })
}