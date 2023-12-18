// Write your script here

function changeText() {
  const element = document.querySelector("#status");
  const newElement = document.createElement("h1");
  newElement.innerHTML = element.innerHTML;
  element.parentNode.replaceChild(newElement, element);
  newElement.innerText = "Entered Metaverse";
}
