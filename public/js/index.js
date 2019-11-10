function myfunction() {
    var width = window.innerWidth;
    console.log(width);
    if (width <= 1024) {
        var message = document.getElementById("content-message");
        var tabs = document.getElementById("tabs");
        var search = document.getElementById("search");
        var chat = document.getElementById("all-chat");
        chat.style.display = "block";
        search.style.display = "none";
        chat.style.marginLeft = "-5rem"
        tabs.style.display = 'none';
        message.style.marginLeft;
        message.style.display = "block";
        message.style.marginLeft = "-22%";
        message.style.marginTop = "-87vh";
        message.style.width = "115%";
    }
}
$(document).ready(function() {

    window.onresize = function() { location.reload(); }
    var check = false;

    $('#icon-bars').click(function() {
        var menu = document.getElementById("mobile-menu");
        var icon = document.getElementById("mobile-menu-icon");
        var menuicon = document.getElementById('menu-icon');
        if (check) {

            menu.style.display = "none";
            icon.style.display = "none";
            menuicon.style.marginTop = "-0.2rem"

            check = false;
        } else {
            menu.style.display = "block";
            icon.style.display = "block";
            check = true;
            menuicon.style.marginTop = "-4.2rem"

        }

    })

});