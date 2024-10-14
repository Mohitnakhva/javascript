let inputs=document.getElementById("inp");
let text=document.querySelector(".text");

function Add()
{
    if(inputs.value == "")
    {
        alert("Please Enter Task")
    }
    else
    {
        let nele=document.createElement("ul")
        nele.innerHTML=`${inputs.value} <i class="fa-solid fa-trash"></i>`;
        text.appendChild(nele);
        inputs.value="";
        nele.querySelector("i").addEventListener("click",remove);
        function remove()
        {
            nele.remove()
        }
    }
}