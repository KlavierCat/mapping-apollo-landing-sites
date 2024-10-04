document.addEventListener("DOMContentLoaded", function () {
  const mapIcon = document.getElementById("map-icon");
  const fileIcon = document.getElementById("file-icon");
  const front = document.querySelector(".front");

  // Function to change background color
  function changeBackgroundColor(color) {
    front.style.transition = "background-color 0.5s ease-in-out"; // Change duration as needed
    front.style.backgroundColor = color;
  }

  // Mouse enter and focus event for map-icon
  mapIcon.addEventListener("mouseenter", function () {
    changeBackgroundColor("#0971b2");
  });
  mapIcon.addEventListener("focus", function () {
    changeBackgroundColor("#0971b2");
  });

  // Mouse leave and blur event for map-icon
  mapIcon.addEventListener("mouseleave", function () {
    changeBackgroundColor("#000000");
  });
  mapIcon.addEventListener("blur", function () {
    changeBackgroundColor("#000000");
  });

  // Mouse enter and focus event for file-icon
  fileIcon.addEventListener("mouseenter", function () {
    changeBackgroundColor("#b21212");
  });
  fileIcon.addEventListener("focus", function () {
    changeBackgroundColor("#b21212");
  });

  // Mouse leave and blur event for file-icon
  fileIcon.addEventListener("mouseleave", function () {
    changeBackgroundColor("#000000");
  });
  fileIcon.addEventListener("blur", function () {
    changeBackgroundColor("#000000");
  });
});
