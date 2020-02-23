   
    let fas = Array.from(document.querySelectorAll(".fa-heart"))
    for (let el of fas)
    el.addEventListener("click", () => {

        el.classList.toggle("fa");
    })

  let sup=Array.from(document.querySelectorAll(".sup"))
    let qte = Array.from(document.getElementsByClassName("num"))
    let btnplus = Array.from(document.querySelectorAll(".plus"))
    let btnminus = Array.from(document.querySelectorAll(".minus"))
    let price = Array.from(document.querySelectorAll('.price'))
    let tot = document.querySelector(".tot") // return onlyyy the first element  with the selector 

    for (let [i , el] of sup.entries())
        el.addEventListener("click", () => {
           qte[i].innerText = 0
           el.parentNode.remove()
           total()
                
        })




    for (let el of btnplus)
        el.addEventListener("click", () => {
            (el.nextElementSibling.innerText = Number(el.nextElementSibling.innerText) + 1)
           total()
           
          
        })
    for (let el of btnminus)
        el.addEventListener("click", () => {
            if (el.previousElementSibling.innerHTML > 0)
                (el.previousElementSibling.innerText = Number(el.previousElementSibling.innerText) - 1)
                total()
                
        })
    const total = ()=>{
        let sum = 0;
      for (let i=0;i<price.length; i++){
            sum += qte[i].innerHTML * price[i].innerHTML;
            
        }
        console.log (sum)
    
       tot.innerText = sum
    }
    

    