
const rez = document.querySelector('.rezultat')
const btn = document.querySelector('.btn')

btn.addEventListener('click',(ev)=>{
    const nr1 = document.querySelector('.nr1')
    const nr2 = document.querySelector('.nr2')
    console.log(nr1)
    let rezultat = 0;
    rezultat = +nr1.value + +nr2.value;
    rez.textContent = rezultat
})