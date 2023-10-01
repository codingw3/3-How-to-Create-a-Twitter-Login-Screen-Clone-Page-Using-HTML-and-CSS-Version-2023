const listButtonCloseModal =
  document.getElementsByClassName("button-close-modal");

for (var button of listButtonCloseModal) {
  button.addEventListener("click", function (e) {
    console.log(this);
    var containerDiv = this.parentElement;
    var container = containerDiv.parentElement
    
    containerDiv.classList.add("hidden");
    container.classList.add("hidden");
  });
}


