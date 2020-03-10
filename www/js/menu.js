(function(){
    // 菜单代码
    // 得到菜单触碰项a标签
    var menu_as = document.querySelectorAll('#v-menu a[data-n]');
    // 批量添加监听
    for(var i = 0 ; i<menu_as.length ; i++){
        (function(i){
            menu_as[i].onmouseenter = function(){
                // 触碰项的n
                var n = this.getAttribute('data-n');
                // 寻找相应的menu，让它显示
                var menu = document.querySelector('#menus .menu[data-n=' + n + ']');
                menu.className = "menu active";
            }
            menu_as[i].onmouseleave = function(){
                // 触碰项的n
                var n = this.getAttribute('data-n');
                // 寻找相应的menu，让它隐藏
                var menu = document.querySelector('#menus .menu[data-n=' + n + ']');
                menu.className = "menu";
            }
        })(i)
    }
})();