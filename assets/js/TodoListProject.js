$("input").on("keypress", function(event){
    if(event.which === 13){
        var TextContent = $(this).val();
        addTodo(TextContent);
        $(this).val('');
    }
})

$(document).on("click", 'li',function(){
    $(this).toggleClass("done");
})

$(document).on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        this.remove();
    });
    event.stopPropagation;
})

$(".fa-plus").on("click", function(){
    $("input").slideToggle("300");
})

function addTodo(TextContent){
   $("ul").append('<li><span><i class="fa fa-trash"></i></span> ' + TextContent + " </li>")
}