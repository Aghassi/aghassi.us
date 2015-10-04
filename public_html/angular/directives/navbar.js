angular.module("mainPageApp", [])
  .directive("navbar", function() { 
  return {
    restrict: "E",         
    replace: true,         
    transclude: true,      
    templateUrl: "/angular/directives/bootstrapNavbar.html",    
    compile: function(element, attrs) {  
      var li, liElements, links, index, length;

      liElements = $(element).find("#navigation-tabs li");   
      for (index = 0, length = liElements.length; index < length; index++) {
        li = liElements[index];
        links = $(li).find("a");  
        if (links[0].textContent === attrs.currentTab) $(li).addClass("active"); 
      }
    }
  }});
 ;
