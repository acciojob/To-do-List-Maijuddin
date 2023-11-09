//your code here
let list = document.getElementById("todoList");

function add(){
	let text = document.getElementById("newTodoInput");
	let l = document.createElement("li");
	if(text.value !== ""){
		l.innerHTML = text.value;
		list.appendChild(l);
		text.value = '';
	}
	
}