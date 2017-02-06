$(function () {
  $('.toolbar--search').keypress(function () {
    var $this = $(this);
    var search_string = $this.find('input').val();

    if (search_string.length > 2) {
      var resources = $this.data('resources') || [];
      var $container = $this.find('.toolbar--search--autocomplete');
      var $scrim = $this.find('.toolbar--search--scrim')

      $scrim.show();
      $scrim.click(function () {
        $container.hide();
        $scrim.hide();
      });

      $container.empty().show();

      $(resources.sort()).each(function (i, resource) {
        if (resource.label.toLowerCase().indexOf(search_string.toLowerCase()) > -1) {
          $container.append('<a href="' + resource.link + '">' + resource.label + '</a>');
        }
      });
    }
  });
});