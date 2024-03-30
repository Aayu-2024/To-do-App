function addTask(){
    let newTask=document.getElementById('task').value;   
    let node=document.createElement('li');
    node.innerHTML=newTask;
    document.getElementById("task-container").appendChild(node);
}