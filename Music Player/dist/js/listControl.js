'use strict';

(function (root) {
    function listControl(data, wrap) {
        var list = document.createElement('div'),
            dl = document.createElement('dl'),
            dt = document.createElement('dt'),
            close = document.createElement('div'),
            musicList = []; //存储所有音乐对应的dom

        list.className = 'list';
        dt.innerHTML = '播放列表';
        close.className = 'close';
        close.innerHTML = '关闭';

        dl.appendChild(dt);
        data.forEach(function (item, index) {
            var dd = document.createElement('dd');
            dd.innerHTML = item.name;

            dd.addEventListener('touchend', function () {
                changeSelect(index);
            });

            dl.appendChild(dd);
            musicList.push(dd);
        });
        list.appendChild(dl);
        list.appendChild(close);
        wrap.appendChild(list);

        var disY = list.offsetHeight;
        list.style.transform = 'translateY(' + disY + 'px)';
        changeSelect(0);

        //关闭按钮点击
        close.addEventListener('touchend', slideDown);

        //列表滑动显示
        function slideUp() {
            list.style.transition = '.2s';
            list.style.transform = 'translateY(0)';
        }

        //列表滑动隐藏
        function slideDown() {
            list.style.transition = '.2s';
            list.style.transform = 'translateY(' + disY + 'px)';
        }

        //切换选中元素
        function changeSelect(index) {
            for (var i = 0; i < musicList.length; i++) {
                musicList[i].className = '';
            }
            musicList[index].className = 'active';
        }

        return {
            dom: list,
            musicList: musicList,
            slideUp: slideUp,
            slideDown: slideDown,
            changeSelect: changeSelect
        };
    }
    root.listControl = listControl;
})(window.player || (window.player = {}));