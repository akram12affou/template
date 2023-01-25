const ayeh = document.querySelector('.ayeeh')
const light = document.querySelector('.light')
const up = document.querySelector('.up')
let open = true
ayeh.addEventListener('click' , () => {
    if(open){
        light.classList.add('tfa')
        open = false
    }else{
        light.classList.remove('tfa')
        open= true
    }
    
})
up.addEventListener('click' , () => {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
})
window.addEventListener('scroll' , ()=> {
   if(scrollY>100){
    up.classList.add('show')
   }else{
    up.classList.remove('show')
   }
})
  
