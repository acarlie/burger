const events = {
    submit: function(){
        event.preventDefault();
        let burger = $('#burgerInput').val().trim();
        let regex = /^[a-z][a-z\s]*$/gi;

        if (burger.match(regex)){
            $('#error').removeClass('visible');
            let body = { name: burger };
            
            $.ajax("/api/burgers", {
                type: 'POST',
                data: body
            }).then(function(){
                location.reload();
            });
        } else {
            $('#error').addClass('visible');
        }
    },
    update: function(){
        event.preventDefault();
        let id = $(this).data("burger-id");
        let body = { eaten: true };

        $.ajax(`api/burgers/${id}`, {
            type: 'PUT',
            data: body
        }).then(function(){
            location.reload();
        });
    },
    delete: function(){
        event.preventDefault();
        let id = $(this).data("burger-id");

        $.ajax(`api/burgers/${id}`, {
            type: 'DELETE'
        }).then(function(){
            location.reload();
        });
    }
}

$(document).ready(function(){

    $('#burger').on('submit', events.submit);
    $(document).on("click", ".btn-eat", events.update);
    $(document).on("click", ".btn-delete", events.delete);

});