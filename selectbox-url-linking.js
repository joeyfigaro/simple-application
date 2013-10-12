// Snippet from the head.js used for the new VCU site
// ...Allows users to select a link from a select/dropdown and navigate to it upon selection

head.ready('selectBox', function() {
  console.log('head.js: (selectBox) initialized');

  $('#search select[name="also-try"]').selectBoxIt({
    defaultText: 'Also try'
  });

  $('#search select[name="also-try"]').bind({
    "option-click": function(e, obj) {
      navigateTo(obj.dropdownOption[0].textContent);
    }
  });

  function navigateTo(url) {
    var url = url.toLowerCase();
    var destination;
    var destination_array = [];

    destination_array = {
      pubmed: 'http://www.ncbi.nlm.nih.gov/pubmed?otool=vculib',
      database: 'https://apps.library.vcu.edu/dblist',
      libguides: 'http://guides.library.vcu.edu/home',
      advanced: 'http://google.com',
      help: 'http://google.com',
    }

    destination = destination_array[url];

    window.location.href = destination;
  }
});
