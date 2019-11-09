function myfunction() {
    var width = window.innerWidth;
    console.log(width);
    if (width <= 1024) {
        var x = document.getElementById("content-message");
        var y = document.getElementById("tabs");
        var z = document.getElementById("search");
        var a = document.getElementById("all-chat");
        a.style.display = "block";
        z.style.display = "none";
        a.style.marginLeft = "-5rem"
        y.style.display = 'none';
        x.style.marginLeft;
        x.style.display = "block";
        x.style.marginLeft = "-22%";
        x.style.marginTop = "-87vh";
        x.style.width = "115%";
    }
}
$(document).ready(function() {

    window.onresize = function() { location.reload(); }
    var check = false;

    $('#icon-bars').click(function() {
        var x = document.getElementById("mobile-menu");
        var y = document.getElementById("mobile-menu-icon");
        if (check) {

            x.style.display = "none";
            y.style.display = "none";
            check = false;
        } else {
            x.style.display = "block";
            y.style.display = "block";
            check = true;
        }

    })

});