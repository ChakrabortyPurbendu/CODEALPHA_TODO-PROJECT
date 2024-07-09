let input=document.querySelector("#Input-box");
let listcontainer = document.querySelector("#list-container");

function addtask()
{
    if(input.value=== '')
    {
        alert("!!You must write something!!");
    }
    else
    {
        let li=document.createElement("li");
        li.innerHTML=input.value;
        listcontainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7"
        li.appendChild(span);
        

    }
    input.value="";

   

}

listcontainer.addEventListener("click",function(e)
{
   if(e.target.tagName === "LI")
   {
     e.target.classList.toggle("checked");
   }
   else if(e.target.tagName === "SPAN")
   {
      e.target.parentElement.remove();
   }
});
