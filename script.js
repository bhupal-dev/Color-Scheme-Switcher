const buttons = document.querySelectorAll(".box-collection")
const body = document.querySelector("body")

buttons.forEach(function(button){
    button.addEventListener("click", function(event){
        if(event.target.id==="box01"){
            body.style.backgroundColor = "#D3D3D3"
        }
         if(event.target.id==="box02"){
            body.style.backgroundColor = "#00FF00"
        }    
        if(event.target.id==="box03"){
            body.style.backgroundColor = "#1E90FF"
        }    
        if(event.target.id==="box04"){
            body.style.backgroundColor = "#ffff84ff"
        }        
    })
})




