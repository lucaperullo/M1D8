function addItem() {
  let ul = document.getElementsByTagName("ul")[0];
  let li = document.createElement("li");
  let input = document.getElementById("inputText");
  li.innerText = input.value;
  ul.appendChild(li);
  input.value = "";
}

function removeItem() {
  let ul = document.getElementsByTagName("ul")[0];
  let li = document.getElementsByTagName("li")[0];
  ul.removeChild;
}
