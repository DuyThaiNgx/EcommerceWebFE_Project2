// ------------------------MENU SLIDEBAR CATEGORY--------------------------------

const itemsSlideBar = document.querySelectorAll(".category-left-li")
itemsSlideBar.forEach(function(menu,index){
    menu.addEventListener("click",function(){
        console.log()
        menu.classList.toggle("block")
    })
})



// ------------------------PRODUCT--------------------------------
//Phần hiển thị ảnh sản phẩm
const bigImg = document.querySelector(".product-content-left-big-img img")
const smallImg = document.querySelectorAll(".product-content-left-small-img img")
smallImg.forEach(function(imgItem, X){
    imgItem.addEventListener("click",function(){
        bigImg.src = imgItem.src
    })
})


// Phần chi tiết và bảo quản
const baoquan = document.querySelector(".baoquan")
const chitiet = document.querySelector(".chitiet")
if(baoquan){
    baoquan.addEventListener("click", function(){
        document.querySelector(".product-content-right-bottom-content-chitiet").style.display = "none"
        document.querySelector(".product-content-right-bottom-content-baoquan").style.display = "block"
    })
}

if(chitiet){
    chitiet.addEventListener("click", function(){
        document.querySelector(".product-content-right-bottom-content-chitiet").style.display = "block"
        document.querySelector(".product-content-right-bottom-content-baoquan").style.display = "none"
    })
}
// Phần nhấn nút để hiển thị phần chi tiết, bảo quản, hướng dẫn size
const butTon = document.querySelector(".product-content-right-bottom-top")
if(butTon){
    butTon.addEventListener("click", function(){
        document.querySelector(".product-content-right-bottom-content-big").classList.toggle("activeB")
        
    })
}