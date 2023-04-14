var elements =[];
window.onload = function(){

    if (JSON.parse(localStorage.getItem("todo-elements")) != null){
    
    elements = JSON.parse(localStorage.getItem("todo-elements"));
    console.log("elements: " + elements);
    display();
    
    
    }
    
    
    
    }


function addElement(){

    if(document.querySelector(".addtext").value.trim()!= " "){

 elements.push(document.querySelector(".addtext").value.trim());
 
 if(localStorage.getItem("todo-elements") == null){

    localStorage.setItem("todo-elements",JSON.stringify(elements));

 }
 else

 {

    localStorage.setItem("todo-elements",JSON.stringify(elements));
 }

display();
    }
}
function display(){
 
    document.querySelector(".list").innerHTML = " ";
    for(var i=0 ; i < elements.length; i++)
    document.querySelector(".list").innerHTML += "<center><div class= 'element'>"+elements[i]+ " <i class='gg-check-r' onclick= 'strike("+i+")'> </i> <i class='gg-trash' onclick = 'del("+ i + ")' ></i> </div></center>";
}

function del(todo){
elements.splice(todo,1);

if(localStorage.getItem("todo-elements") == null){

    localStorage.setItem("todo-elements",JSON.stringify(elements));

 }
 else

 {

    localStorage.setItem("todo-elements",JSON.stringify(elements));
 }

display();

}

function strike(todo){
    if(elements[todo].includes("<strike>")){


elements [todo] = elements[todo].replace("<strike>"," ");
elements [todo] = elements[todo].replace("</strike>"," ");

    }

    else{

    elements[todo] = "<strike>" + elements[todo] + "</strike>"
    }

    if(localStorage.getItem("todo-elements") == null){

        localStorage.setItem("todo-elements",JSON.stringify(elements));
    
     }
     else
    
     {
    
        localStorage.setItem("todo-elements",JSON.stringify(elements));
     }

    display();
    }


