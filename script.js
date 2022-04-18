let stars = document.getElementById('stars')
let moon = document.getElementById('moon')
let mountains3 = document.getElementById('mountain3')
let mountain4 = document.getElementById('mountain4')
let river = document.getElementById('river')
let boat = document.getElementById('boat6')
let night = document.querySelector('.night')

window.onscroll = function (){

let value = scrollY
stars.style.left = value + 'px'
moon.style.top = value * 3 +'px'
mountains3.style.top = value * 1.5 +'px'
mountain4.style.top = value * 1.2 +'px'
river.style.top = value * 1.2 +'px'
boat.style.left = value * 3 +'px'
boat.style.top = value +'px'
night.style.fontSize = value +'px'

if (scrollY >= 67){
    night.style.fontSize = 67 +'px'
    night.style.postion = 'fixed'
}

if(scrollY >= 172){
  let main =   document.querySelector('.main')
  main.style.background = 'linear-gradient(to top, #376281, #10001f)'
}else{
    let main =   document.querySelector('.main')
    main.style.background =   'linear-gradient(#200016, #10001f)'
}

}