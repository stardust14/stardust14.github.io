/*
    var title;  // 用于临时存放原来的title内容
    window.onblur = function(){
      // onblur时先存下原来的title,再更改title内容
      title = document.title;
      document.title = " （╯‵□′）╯︵┴─┴ 快回来";
    };
    window.onfocus = function () {
      // onfocus时原来的title不为空才替换回去
      // 防止页面还没加载完成且onblur时title=undefined的情况
      if(title) { 
        document.title = title;
      }
    }
*/

// 可爱的Title
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        $('[rel="icon"]').attr('href', "/img/favicon.ico");
        document.title = '(つェ⊂) 看不到我哦~~';
        clearTimeout(titleTime);
    } else {
        $('[rel="icon"]').attr('href', "/img/favicon.ico");
        document.title = 'w(ﾟДﾟ)w 被你发现啦~~' + OriginTitle;
        titleTime = setTimeout(function() {
            document.title = OriginTitle;
        }, 2000);
    }
});