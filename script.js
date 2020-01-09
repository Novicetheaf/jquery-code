$(document).ready(function() {
    $("#stream1_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream1").addClass('highlight_stream');
   });
   $("#stream2_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream2").addClass('highlight_stream');
   });
   $("#stream3_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream3").addClass('highlight_stream');
   });
    $("a").click(function(){
         $("p").toggle();
    });
    $("h2").mouseenter(function(){
        $(this).addClass("h2-hover");
    });
    $("h2").mouseleave(function(){
        $(this).removeClass("h2-hover");
    });
   
    $("a").mouseenter(function(){
        $(this).fadeTo("slow", 0.50);
    })
    $("a").mouseleave(function(){
        $(this).fadeTo("slow", 1.00);
    })

}); 