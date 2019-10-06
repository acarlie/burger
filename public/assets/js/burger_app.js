$(document).ready(function(){

    $('#burger').on('submit', function(e){
        event.preventDefault();

        let burger = $('#burgerInput').val().trim();
        let body = { name: burger };

        $.ajax("/api/burgers", {
            type: 'POST',
            data: body
        }).then(function(){
            location.reload();
        })
    });


});