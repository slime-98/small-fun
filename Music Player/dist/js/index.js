'use strict';

(function ($, player) {
    function MusicPlayer(dom) {
        this.wrap = dom; //播放器的容器，用于加载listCOntrol模块
        this.dataList = []; // 存储请求到的数据
        this.indexObj = null;
        this.rotateTimer = null; //图片旋转定时器
        this.curIndex = 0; //当前播放歌曲的索引值
        this.list = null; //列表切歌对象（在listPlay里赋了值）

        this.progress = player.progress.pro();
    }
    MusicPlayer.prototype = {
        init: function init() {
            this.getDom(); //获取元素
            this.getData('../mock/data.json'); //请求数据
        },
        getDom: function getDom() {
            //获取页面里的元素
            this.record = document.querySelector('.songImg img'); //旋转图片
            this.controlBtns = document.querySelectorAll('.control li'); //底部导航里的按钮
        },
        getData: function getData(url) {
            var that = this;
            $.ajax({
                url: url,
                method: 'get',
                success: function success(data) {
                    that.dataList = data; //存储请求过来的数据

                    that.listPlay(); //列表切歌，要在loadMusic里使用，需要放在loadMusic之前

                    that.indexObj = new player.controlIndex(data.length);

                    that.loadMusic(that.indexObj.index); //加载音乐

                    that.musiControl(); //添加音乐操作功能

                    that.dragProgress(); //拖拽功能
                },
                error: function error() {
                    console.log('数据请求失败');
                }
            });
        },
        loadMusic: function loadMusic(index) {
            //加载音乐
            player.render(this.dataList[index]);
            player.music.load(this.dataList[index].audioSrc);

            this.progress.renderAlltime(this.dataList[index].duration);

            //音乐状态为play时播放音乐
            if (player.music.status == 'play') {
                player.music.play();
                this.controlBtns[2].className = 'playing'; //按钮状态变为播放状态
                this.imgRotate(0);

                this.progress.move(0);
            }

            this.list.changeSelect(index); //切换歌曲列表选中状态
            this.curIndex = index; //存储对应的索引值
        },
        musiControl: function musiControl() {
            //控制音乐
            var that = this;
            //上一首
            this.controlBtns[1].addEventListener('touchend', function () {
                player.music.status = 'play';
                that.loadMusic(that.indexObj.prev());
            });
            //下一首
            this.controlBtns[3].addEventListener('touchend', function () {
                player.music.status = 'play';
                that.loadMusic(that.indexObj.next());
            });
            //暂停
            this.controlBtns[2].addEventListener('touchend', function () {
                if (player.music.status == 'play') {
                    player.music.pause();
                    this.className = '';
                    clearInterval(that.rotateTimer);

                    that.progress.stop(); //暂停进度
                } else {
                    player.music.play();
                    this.className = 'playing';
                    //每次播放加上上一次的角度，但第一次没有角度，做了一个容错处理
                    var deg = that.record.dataset.rotate || 0;
                    that.imgRotate(deg);

                    that.progress.move(); //进度条移动
                }
            });
        },
        imgRotate: function imgRotate(deg) {
            //旋转唱片
            var that = this;
            clearInterval(this.rotateTimer);
            this.rotateTimer = setInterval(function () {
                deg = +deg + 0.2;
                that.record.style.transform = 'rotate(' + deg + 'deg)';
                that.record.dataset.rotate = deg; //把旋转角度存到标签身上，为了暂停后继续播放能取到
            }, 1000 / 60);
        },
        listPlay: function listPlay() {
            //列表切歌
            var that = this;
            this.list = player.listControl(this.dataList, this.wrap);
            this.controlBtns[4].addEventListener('touchend', function () {
                that.list.slideUp();
            });

            this.list.musicList.forEach(function (item, index) {
                item.addEventListener('touchend', function () {
                    if (that.curIndex == index) {
                        //歌曲索引 that.indexObj.index也行
                        return;
                    }

                    player.music.status = 'play'; //歌曲变成播放状态
                    that.indexObj.index = index; //更新索引值对象的当前索引
                    that.loadMusic(index); //加载对应索引值歌曲
                    that.list.slideDown(); //列表消失
                });
            });
        },

        //进度条拖拽功能
        dragProgress: function dragProgress() {
            var that = this;
            var circle = player.progress.drag(document.querySelector('.circle'));

            //按下圆点，进度条停止
            circle.start = function () {
                that.progress.stop();
            };

            //拖拽圆点
            circle.move = function (per) {
                that.progress.update(per);
            };

            //抬起圆点
            circle.end = function (per) {
                var cutTime = per * that.dataList[that.indexObj.index].duration;

                player.music.playTo(cutTime);
                player.music.play();

                that.progress.move(per);

                var deg = that.record.dataset.rotate || 0;
                that.imgRotate(deg); //旋转图片

                that.controlBtns[2].className = 'playing'; //按钮状态变成播放状态
            };
        }
    };
    var musicPlayer = new MusicPlayer(document.getElementById('wrap'));
    musicPlayer.init();
})(window.Zepto, window.player);