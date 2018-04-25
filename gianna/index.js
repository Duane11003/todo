// add state

function newItem() {
let li = document.createElement('li');
let formValue = document.getElementById('list').value;
let content = document.createTextNode(formValue);
li.appendChild(content);
console.log(li);
if (formValue === '') {
  alert("You must write something!");
} else {
  document.getElementById("listItems").appendChild(li);
}
document.getElementById("list").value = "";
};

// edit state

function editItem(position, newValue) {
  listItems[position] = newValue;

};


// delete state

// completed state
