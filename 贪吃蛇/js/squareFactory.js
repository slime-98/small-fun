
//创建管理者
function SquareFactory() { };

//封装创建方块的构造函数（流水线，子工厂）
SquareFactory.prototype.init = function(square, color, action){
    //这个方法是用来设置所有流水线生成小方块
    square.viewContent.style.position = "absolute";
    square.viewContent.style.width = square.width + 'px';
    square.viewContent.style.height = square.width + 'px';
    square.viewContent.style.backgroundColor = color;


    square.viewContent.style.left = square.x * squareWidth + 'px';
    square.viewContent.style.top = square.y * squareWidth + 'px';

    square.collide = action;
    // console.log(square.collide)
}

//生成地板
SquareFactory.prototype.Floor = function (x, y, color) {
    let floor = new Floor(x, y, squareWidth, squareWidth);
    this.init(floor, color, collideType.move);
    return floor;
}

//生成围墙
SquareFactory.prototype.Wall = function (x, y, color) {
    let wall = new Wall(x, y, squareWidth, squareWidth);
    this.init(wall, color, collideType.die);
    return wall;
}

//生成蛇头
SquareFactory.prototype.SnakeHead = function (x, y, color) {
    let snakeHead = new SnakeHead(x, y, squareWidth, squareWidth);
    this.init(snakeHead, color, collideType.die);
    snakeHead.upDate(x, y); //更新单例对象位置
    return snakeHead;
}

//生成蛇身
SquareFactory.prototype.SnakeBody = function (x, y, color) {
    let snakeBody = new SnakeBody(x, y, squareWidth, squareWidth);
    this.init(snakeBody, color, collideType.die);
    return snakeBody;
}

//生成食物
SquareFactory.prototype.Food = function (x, y, color) {
    let food = new Food(x, y, squareWidth, squareWidth);
    this.init(food, color, collideType.eat);
    food.upDate(x, y);
    return food;
}

//提供对外接口
SquareFactory.create = function (type, x, y, color) {
    if (typeof SquareFactory.prototype[type] == 'undefined') {
        throw 'no this type';
    }

    //继承父工厂的方法（子工厂继承父工厂）
    SquareFactory.prototype[type].prototype = new SquareFactory();

    //通过子工厂的构造函数创建实例对象
    return new SquareFactory.prototype[type](x, y, color);
}

let newSquare = SquareFactory.create('Floor', 10, 10, 'black');

// console.log(newSquare)
