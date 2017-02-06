$(function () {
  $('.tooltip--trigger').hover(function () {
    offset = $(this).position();
    $content = $('#' + $(this).data('tooltip-id'));

    $content.css('top', offset.top - 10);
    $content.css('left', offset.left - 10);
    $content.show();
  }, function () {
    $('#' + $(this).data('tooltip-id')).hide();
  });

  $('.tooltip--content').hover(function () {
    $(this).show();
  }, function () {
    $(this).hide();
  });
});