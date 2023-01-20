const frm = document.querySelector("form")
const resp1 = document.querySelector(".mostrar")
//const resp2 = document.querySelector("h3")

frm.addEventListener("submit", (e) =>{
   // const produto = frm.iremedio.value
    const nome = frm.iremedio.value



    resp1.innerText = `o nome é ${nome}`

    

    e.preventDefault()
    
    
    
})

//resp1.innerText = `O valor do produto é: ${produto}`