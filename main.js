document.addEventListener("DOMContentLoaded", function(event) {
  document.querySelector(".hamburger").addEventListener("click", function(){
    toggleSecondaryHeader();
  });

  function toggleSecondaryHeader() {
    var subMenu = document.querySelector("#secondary-header");
    if(subMenu.classList.contains("toggle")) {
      subMenu.classList.remove("toggle");
    }
    else {
      subMenu.classList.add("toggle");
    }
  }
});