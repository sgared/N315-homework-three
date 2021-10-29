function initListeners(){
    $(".bars").click(function(e){
        $(".bars").toggleClass("active");
        $(".links").toggleClass("active");

    });
    $(".links a").click(function(e){
        $(".bars").toggleClass("active");
        $(".links").toggleClass("active");

    });
    $(".photo .view").click(function(e){
        $(".view").html("View Recipe");
    });
    $(".button-holder .edit").click(function(e){
        $(".edit").html("Edit Recipe");
    });
    $(".button-holder .delete").click(function(e){
        $(".delete").html("Delete Recipe");
    });
   
}



$(document).ready(function(){
    initListeners();

});