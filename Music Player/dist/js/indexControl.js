"use strict";

(function (root) {
    function Index(len) {
        this.index = 0; //当前的索引值
        this.len = len; //数据的长度，用于做判断
    }
    Index.prototype = {
        //这个方法用来取上一个索引
        prev: function prev() {
            return this.get(-1); //切换到上一首
        },
        next: function next() {
            return this.get(1); //切换到下一首
        },
        get: function get(val) {
            this.index = (this.index + val + this.len) % this.len;
            return this.index;
        }
    };
    root.controlIndex = Index; //把构造函数暴露出去，因为实例对象需要传参，所以不能暴露出去
})(window.player || (window.player = {}));