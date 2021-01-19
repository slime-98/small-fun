'use strict';

(function (root) {
    function AudioMange() {
        this.audio = new Audio(); //创建一个audio实例；
        this.status = 'pause'; //歌曲的状态，默认为暂停；
    }
    AudioMange.prototype = {
        //加载音乐  
        load: function load(src) {
            this.audio.src = src; //设置音乐的路径
            this.audio.load(); //加载音乐
        },

        //播放音乐  
        play: function play() {
            this.audio.play(); //设置音乐的路径
            this.status = 'play'; //加载音乐
        },

        //暂停音乐  
        pause: function pause() {
            this.audio.pause(); //设置音乐的路径
            this.status = 'pause'; //加载音乐
        },

        //音乐播放完成事件
        end: function end(fn) {
            this.audio.onended = fn;
        },

        //跳到音乐的某个时间点
        playTo: function playTo(time) {
            this.audio.currentTime = time; //单位是秒
        },

        //音乐切换
        musicChange: function musicChange(c) {
            if (c == 'next') {
                this.audio;
            }
        }
    };
    root.music = new AudioMange(); //把实例对象暴露出去
})(window.player || (window.player = {}));