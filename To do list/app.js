// function to add to do 
function toDo(){
    const toDoValue = document.getElementById('inputToDo').value;

    let htmlList = document.querySelector("ol");
    let listItem = document.createElement('li')
    let deleteBtn = document.createElement('button')
     deleteBtn.innerHTML  ="Delete";
  

    listItem.innerHTML = toDoValue ;
    
    
    htmlList.appendChild(listItem );
    htmlList.appendChild(deleteBtn);

    // for(let i =0; i< listItem;i ++){
    //     let newClass= createClass("delete"[i])
       
    // }

}










