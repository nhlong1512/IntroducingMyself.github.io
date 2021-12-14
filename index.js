const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const navbarContentAs = $$('.navbar-content-a')

console.log([navbarContentAs])

navbarContentAs.forEach((navbarContentA, index)=>{
    navbarContentA.onclick = function(){
        $('.navbar-content-a.active').classList.remove('active')
        this.classList.add('active')
    }
})
