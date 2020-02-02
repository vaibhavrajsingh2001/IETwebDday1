$( document ).ready(function(){
    $("#font-list").css({
        "background-color" : "#510d51",
        "font-size" : "20px",
        "color" : "#FFF"

    });
    let fontItem="";
    for(var i=15;i<65;i++){
        fontItem='<li>I am font size:' + i + '</li>';
        console.log("#font"+i);
        $("#font"+i).css("background-color", "#F00");
        $("#font-list").append(fontItem);
    }

});