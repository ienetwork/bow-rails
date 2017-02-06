$(function () {
  $('.card-expandable .card--face').click(function () {
    $(this).next('.card--content').toggle(200);
  });

  $('.card-expandable a').click(function (e) {
    e.stopPropagation();
  });
});
