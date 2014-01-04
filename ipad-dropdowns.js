// iPad dropdowns
// use intent to determine whether a user wants to navigate to the page or show menu
(function() {
  var targets = [],
      menus = $('.navigation .wrapper > ul:first-child > li > a + ul');
      links = $('.navigation .wrapper > ul:first-child > li > a');

  $(links).each(function(e) {
    // Set up our objects
    var target = {
      key: $.trim($(this)[0].outerText),
      count: 0
    }

    // ...and add them to our targets array
    targets.push(target);

    // Watch for touch events
    $(this).bind('touchstart', function(e) {
      var id = $.trim(e.currentTarget.outerText),
          target_menu = $(this).find('+ ul');

      // Hide any menus currently visible
      $(menus).hide();

      // Loop over our target objects for
      // required functions (show, hide, reset, count)
      for(i = 0; i < targets.length; i++) {
        // Reset count on other links that have been touched
        if(id != targets[i].key && targets[i].count > 0) {
          targets[i].count = 0;
        }

        // Set count for current target and display menu
        if(id == targets[i].key && targets[i].count < 1) {
          targets[i].count++;

          e.preventDefault();
          $(target_menu).show();
        }

        if(id == targets[i].key && targets[i].count > 1) {
          // Navigate to selected page
        }
      }
    });
  });
})();