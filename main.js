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

(function(win, doc){
  function changeHeaderOnScroll(scrollTop) {
    var header = doc.getElementById("main-header");
    var secondaryHeader = doc.getElementById("secondary-header");

    if(scrollTop >= 100) {
      if(!header.classList.contains("scroll-header")) {
        header.classList.add('scroll-header');
      }
    }
    else {
      header.classList.remove("scroll-header");
    }
  }

  win.onscroll = function(evt) {
    changeHeaderOnScroll(doc.scrollingElement.scrollTop);
  }

})(window, document);