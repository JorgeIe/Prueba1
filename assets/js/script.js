$(document).ready(function () {

    $("a").click(function () {
     var smooth = this.hash

     $("html, body").animate(
         {
             scrollTop: $(smooth).offset().top - 40
         },
         800
     )
    })
})