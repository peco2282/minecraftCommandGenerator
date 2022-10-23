function GethashID(hashIDName) {
  if (hashIDName) {
    // TODO タブ設定
    $('.tab li').find('a').each(function () {
      const idName = $(this).attr('href');
      if (idName === hashIDName) {
        const parentElm = $(this).parent();
        $('.tab li').removeClass("active");
        $(parentElm).addClass("active");
        $(".area").removeClass("is-active");
        $(hashIDName).addClass("is-active");
      }
    });
  }
}

$('.tab a').on('click', function () {
  const idName = $(this).attr('href');
  GethashID(idName);
  return false;
});


$(window).on('load', function () {
  $('.tab li:first-of-type').addClass("active");
  $('.area:first-of-type').addClass("is-active");
  const hashName = location.hash;
  GethashID(hashName);
});