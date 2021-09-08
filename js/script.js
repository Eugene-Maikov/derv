$(function () {
  $(".menu__burger-icon").on("click", function () {
    $(".menu__window").addClass('show');            // Запрет скролить сайт
  }),
    $(".close__menu-btn").on("click", function () {
    $(".menu__window").removeClass('show');            // Запрет скролить сайт
  }),
    $(".category__burger").on("click", function () {
    $(".category__window").addClass('show__category');            // Запрет скролить сайт
  }),
    $(".close__menu-btn ").on("click", function () {
    $(".category__window").removeClass('show__category');            // Запрет скролить сайт
  })
})