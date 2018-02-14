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

document.addEventListener("scroll", function(event){
  var scroll = event.pageY;
  var header = document.getElementById("main-header");
  var secondaryHeader = document.getElementById("secondary-header");

  if(scroll >= 50) {
    if(!header.classList.contains("scroll-header")){
      header.classList.add("scroll-header");
    }

    // if(!secondaryHeader.classList.contains("scroll-header")){
    //   secondaryHeader.classList.add("scroll-header");
    // }
  }
  else {
    header.classList.remove("scroll-header");
    // secondaryHeader.classList.remove("scroll-header");
  }
});