/**
 * 这个文件里存放的是一些全局性的东西
 * 1、常用的一些变量
 * 2、创建一个最基础的方块的构造函数
 * 3、根据方块构造函数，创造各个函数对象
 * 4、存储蛇头与其它格子碰撞后的处理信息
 */

var td = 30;
var tr = 30;


//给每个方块的尺寸
var squareWidth = 20;

//游戏区域一开始的坐标
var positionX = 200;
var positionY = 100;

//蛇的移动时间间隔
var intervalTime = 200;


//创建一个最基础的方块的构造函数
function Square(x, y, width, height, dom) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.viewContent = dom || document.createElement('div');
}

Square.prototype.upDate = function (x, y) {
    this.x = x;
    this.y = y;
    this.viewContent.style.left = x * squareWidth + 'px';
    this.viewContent.style.top = y * squareWidth + 'px';
}

//创建各元素对象
var Ground = tools.single(Square);  //整个游戏场景
var Floor = tools.extends(Square);  //地板是由多个小方块组成
var Wall = tools.extends(Square);   //围墙

var SnakeHead = tools.single(Square);   //蛇头
var SnakeBody = tools.extends(Square);   //蛇身
var Snake = tools.single();   //蛇尾

var Game = tools.single();  //游戏
var Food = tools.single(Square);    //食物

//方块身上要打的标签
var collideType = {
    move: 'move',
    eat: 'eat',
    die: 'die'
}