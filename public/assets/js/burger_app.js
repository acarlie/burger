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

    $(document).on("click", ".btn-eat", function(){
        event.preventDefault();
        let id = $(this).data("burger-id");
        let body = { eaten: true };
        $.ajax(`api/burgers/${id}`, {
            type: 'PUT',
            data: body
        }).then(function(){
            location.reload();
        });
    })

});