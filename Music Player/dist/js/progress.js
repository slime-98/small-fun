'use strict';

(function (root) {
    function Progress() {
        this.durTime = 0; //总时间
        this.frameTime = null; //定时器
        this.startTime = 0; //开始播放的时间
        this.lastPercent = 0; //存储进度

        this.init();
    }

    Progress.prototype = {
        init: function init() {
            this.getDom();
        },
        getDom: function getDom() {
            //获取操作元素
            this.curTime = document.querySelector('.curTime');
            this.circle = document.querySelector('.circle');
            this.frontBg = document.querySelector('.frontBg');
            this.totalTime = document.querySelector('.totalTime');
        },
        renderAlltime: function renderAlltime(time) {
            //渲染总时间
            this.durTime = time;
            time = this.formatTime(time);
            this.totalTime.innerHTML = time;
        },
        formatTime: function formatTime(time) {
            //整理时间格式

            time = Math.round(time); //将update传来的小数四舍五入

            var m = Math.floor(time / 60);
            var s = time % 60;

            m = m < 10 ? '0' + m : m;
            s = s < 10 ? '0' + s : s;
            return m + ':' + s;
        },
        move: function move(per) {
            //进度条移动事件    
            var that = this;
            this.lastPercent = per === undefined ? this.lastPercent : per;

            this.startTime = new Date().getTime();

            function frame() {
                //进度条定时器
                var curTime = new Date().getTime();
                var per = that.lastPercent + (curTime - that.startTime) / (that.durTime * 1000); //百分比

                if (per <= 1) {
                    that.update(per);
                } else {
                    cancelAnimationFrame(that.frameId);
                }
                that.frameId = requestAnimationFrame(frame);
            }

            frame();
        },
        update: function update(per) {
            //进度条更新事件
            var time = this.formatTime(per * this.durTime);
            this.curTime.innerHTML = time;

            this.frontBg.style.width = per * 100 + '%';
            var l = per * this.circle.parentNode.offsetWidth;
            this.circle.style.transform = 'translateX(' + l + 'px)';
        },
        stop: function stop() {
            //进度条停止事件
            cancelAnimationFrame(this.frameId);

            //记录停止时的时间
            var stopTime = new Date().getTime();
            this.lastPercent += (stopTime - this.startTime) / (this.durTime * 1000);
        }
    };

    function instancesProgress() {
        return new Progress();
    }

    //进度条拖拽事件
    function Drag(obj) {
        this.obj = obj;
        this.startPointX = 0; //进度的坐标
        this.startLeft = 0; //较上次的移动
        this.percent = 0; //拖拽的百分比

        this.init();
    };
    Drag.prototype = {
        init: function init() {
            var that = this;
            this.obj.style.transform = 'translateX(0)'; //初始位置

            //拖拽开始
            this.obj.addEventListener('touchstart', function (ev) {
                that.startPointX = ev.changedTouches[0].pageX; //获取第一根摁下手指的坐标
                that.startLeft = parseFloat(this.style.transform.split('(')[1]); //获取translateX的值

                that.start && that.start(); //提供一个对外的方法
            });

            //拖拽进行中
            this.obj.addEventListener('touchmove', function (ev) {
                that.disPointX = ev.changedTouches[0].pageX - that.startPointX;
                var l = that.disPointX + that.startLeft;

                if (l < 0) {
                    l = 0;
                } else if (l > this.offsetParent.offsetWidth) {
                    l = this.offsetParent.offsetWidth;
                }

                this.style.transform = 'translateX(' + l + 'px)';
                that.percent = l / this.offsetParent.offsetWidth;

                that.move && that.move(that.percent);

                ev.preventDefault(); //取消默认事件    
            });

            this.obj.addEventListener('touchend', function () {
                that.end && that.end(that.percent);
            });
        }
    };

    function instancesDrag(obj) {
        return new Drag(obj);
    };

    root.progress = {
        pro: instancesProgress,
        drag: instancesDrag
    };
})(window.player || (window.player = {}));