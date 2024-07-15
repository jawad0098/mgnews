

function openTab(evt, tabName) {
    var i, tabContent, tabButtons;
    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = "none";
    }
    tabButtons = document.getElementsByClassName("tab-button");
    for (i = 0; i < tabButtons.length; i++) {
      tabButtons[i].className = tabButtons[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  window.openTab=openTab;
  

  function showTab(evt, sectionId) {
    var i, tabSection, tabBtns;
  
    tabSection = document.getElementsByClassName("tab-section");
    for (i = 0; i < tabSection.length; i++) {
      tabSection[i].style.display = "none";
    }
  
    tabBtns = document.getElementsByClassName("tab-btn");
    for (i = 0; i < tabBtns.length; i++) {
      tabBtns[i].className = tabBtns[i].className.replace(" active", "");
    }
  
    document.getElementById(sectionId).style.display = "block";
    evt.currentTarget.className += " active";
  }
  window.showTab=showTab
  

  $('button.navbar-toggler').click(()=>{
    $('div#navbarSupportedContent').slideToggle();
  })
  