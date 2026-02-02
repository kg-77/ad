$(function () {
  //モーダルウィンドウを表示する
  $(".modal-img").click(function () {
    $(".modal").fadeIn();
    $(".modal-content").fadeIn();
    var imgSrc = $(this).attr("src");
    var imgAlt = $(this).attr("alt");
    var movSrc = imgSrc.replace(".png",".mp4");
    $(".modal-picture").html('<source id="videoSource" src="' + movSrc + '">');
    var video = document.getElementById("video");
    video.load();
    $('video').get(0).play();
    $(".alt-comment").text(imgAlt);
    //.modal_contentの高さを取得
    $("body").addClass("lock");
  });
  //モーダルウィンドウを閉じる
  $(".modal").click(function () {
    $(".modal").fadeOut();
    $(".modal-content").fadeOut();
    $("source").remove();
    $('video').get(0).currentTime = 0;
    //サイトの背景をスクロールさせる
    $("body").removeClass("lock");
    //.modal_contentのoverflow-y:scrollを削除
    $(".modal-content").css("overflow-y", "visible");
  });
});