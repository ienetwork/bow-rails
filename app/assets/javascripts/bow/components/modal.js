$(function () {
  $('.modal--trigger').on('click', function () {
    $('#' + $(this).data('modal-id')).addClass('modal-show');
  });

  $('.modal--close').on('click', function () {
    $('#' + $(this).data('modal-id')).removeClass('modal-show');
  })
});