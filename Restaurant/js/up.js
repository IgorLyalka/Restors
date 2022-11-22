
import 'D:/Restors/Restaurant/SASS/style.sass'

const burger = document.querySelector ('#burger')
const menu = document.querySelector ('#menu')

burger.addEventListener('click',()=>{
    menu.classList.toggle('disp')
})

