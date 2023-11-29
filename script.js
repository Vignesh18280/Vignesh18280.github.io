let str = "";
let values  = document.querySelectorAll(".button");
Array.from(values).forEach((value)=>{
  value.addEventListener("click",(e) =>{
     if(e.target.innerHTML === 'OFF'){
        document.querySelector(".top").innerHTML = "";
        return;
     }
     if(e.target.innerHTML === 'AC'){
       str = "";
       document.querySelector("input").value = str;
       return;
     }
     if(e.target.innerHTML === 'C'){
        if(str.length > 1) str = str.substring(0,str.length - 1);
        else str = "";
        document.querySelector("input").value = str;
        return;
      }
     if(e.target.innerHTML === "="){
       str = eval(str);
       document.querySelector("input").value = str;
     }
     else if(e.target.innerHTML === 'X'){
        str  = str + '*';
        document.querySelector("input").value = str;
     }
     else{
       str = str + e.target.innerHTML;
        document.querySelector("input").value = str;
     }
  })
})