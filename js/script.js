// ------------------------MENU SLIDEBAR CATEGORY--------------------------------

const itemsSlideBar = document.querySelectorAll("category-left-li")
itemsSlideBar.forEach(function(menu,index){
    menu.addEventListener("click",function(){
        menu.classList.toggle("block")
    })
})