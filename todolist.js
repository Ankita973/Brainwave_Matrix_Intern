let input = document.getElementById("inp");
let text = document.querySelector(".text");

function Add(){
    if(input.value == ""){
        alert("please enter the task")
    }else{
        let newEle =document.createElement("ul");
        newEle.innerHTML=`${input.value} <i class="fa-solid fa-trash"></i>`;
        text.appendChild(newEle);
        input.value = "";
        newEle.querySelector("i").addEventListener("click",remove);
        function remove(){
            newEle.remove()
        }
    }
}