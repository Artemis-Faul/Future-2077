// $('.lmblock').click(function(){
// 	  $('#lm1').toggleClass('first');
// 	  $('#lm2').toggleClass('middle');
// 	  $('#lm3').toggleClass('last');
// 	});


(function() {

  "use strict";

  var toggles = document.querySelectorAll(".lmblock");

  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };

  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
    });
  }

})();
