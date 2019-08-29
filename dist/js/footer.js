"use strict";

// var displayAccordion = function() {
//   var accordionItem = document.querySelectorAll(".accordion-item");
//   var accordionContent = document.querySelectorAll(".accordion-content");
//   accordionItem.forEach(function(item) {
//     item.addEventListener("click", function(e) {
//       console.log("Hello");
//       accordionContent.forEach(item => {
//         item.classList.toggle("show-accordion");
//       });
//     });
//   });
// };
// displayAccordion();
var acc = document.querySelectorAll(".accordion-item label");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("show-accordion");
    var panel = this.nextElementSibling;

    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}