btn1=document.querySelector("#btn1");
display=document.querySelector("#display")
btn1.addEventListener("click",function(evt){
    evt.preventDefault();
    btn1.classList.toggle("btn-danger")

    console.log(users);


    users.forEach(elem => {
        display.innerHTML +='<tr>';
        elem.forEach(mniej =>{
            display.innerHTML+= '<td>'+mniej+'</td>';
        })
        display.innerHTML+='</tr>'
    })
})