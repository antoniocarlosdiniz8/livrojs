const frm = document.querySelector("form")
const resp1 = document.querySelector("h2")
const resp2 = document.querySelector("h3")

frm.addEventListener("submit", (e) =>{
   // const produto = frm.iremedio.value
    const valor = Number(frm.ipreco.value)
    


    
   

    e.preventDefault()
    resp2.innerText = valor
    
})
//resp1.innerText = `O valor do produto é: ${produto}`