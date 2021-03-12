var mobile_sidebar_menus = document.getElementById("mobile-sidebar-menus");
    var menus_item_child = document.getElementsByClassName(
        "menus_item_child"
    );
    var menus_expand = document.getElementsByClassName("menus-expand");
    for (var i = 0; i < menus_item_child.length; i++) {
        menus_item_child[i].style.display = "none";
        menus_expand[i].className += " menus-closed";
    }