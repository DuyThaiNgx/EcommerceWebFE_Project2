// ------------------------MENU SLIDEBAR CATEGORY--------------------------------

const itemsSlideBar = document.querySelectorAll(".category-left-li")
itemsSlideBar.forEach(function(menu,index){
    menu.addEventListener("click",function(){
        console.log()
        menu.classList.toggle("block")
    })
})