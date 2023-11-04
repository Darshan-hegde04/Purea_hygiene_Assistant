$(".sidebar ul li").on('click', function () {
    $(".sidebar ul li.active").removeClass('active');
    $(this).addClass('active');
});

$('.open-btn').on('click', function () {
    $('.sidebar').addClass('active');

});


$('.close-btn').on('click', function () {
    $('.sidebar').removeClass('active');

})
function copyCopy(element) {
    var copyText = element.textContent;
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val(copyText);
    $temp.select();
    document.execCommand("copy");
    $temp.remove();
    alert("Text copied!");
  }
  
  
