var closeButtons = document.querySelectorAll(".close-button");
closeButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    var listItem = this.parentElement; 
    listItem.remove(); 
  });
});

function addItem() {
// Add
    var li  = document.createElement("li");
    li.className = "item";
    var item = document.getElementById("newtasks").value;
    var addition = document.createTextNode(item);

// Close
    var closeButton = document.createElement("span");
    closeButton.className = "close-button";

    closeButton.addEventListener("click", function () {
        li.remove(); 
      });

// Comeplete
    var completionIcon = document.createElement("span");
    completionIcon.className = "completion-icon";

    completionIcon.addEventListener("click", function () {
        toggleCompletion(this);
      });

// Date
      var date = document.createElement("input");
      date.className = "due-date";
      date.type = "date";

      
      li.appendChild(completionIcon);
      li.appendChild(closeButton); 
      li.appendChild(addition);
      li.appendChild(date);

      var itemList = document.querySelector(".list1");
      itemList.appendChild(li);
    
      document.getElementById("newtasks").value = "";
    
      

}
// Alert Test
// document.getElementById("mybutton").addEventListener("click", myFunction);
// function myFunction() {
//     alert ("New Task has been added!");
//   }

function toggleCompletion(element) {
    element.classList.toggle("completed");

    if (element.classList.contains("completed")) {
        element.nextElementSibling.textContent = "Completed - ";
        alert("Congratulations! This task has been completed");

    } else {
        element.nextElementSibling.textContent = "";
    }
  }
  
