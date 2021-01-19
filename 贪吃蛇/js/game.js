var game = new Game();
game.timer = null;
game.score = 0;
game.init = function () {
    ground.init();
    snake.init();

    createFood();

    document.onkeydown = function(e){
        if(e.which == 37 && snake.direction != directionNum.right){
            snake.direction = directionNum.left;
        }else if(e.which == 38 && snake.direction != directionNum.bottom){
            snake.direction = directionNum.top;
        }else if(e.which == 39 && snake.direction != directionNum.left){
            snake.direction = directionNum.right;
        }else if(e.which == 40 && snake.direction != directionNum.top){
            snake.direction = directionNum.bottom;
        }
    }

    var btn = document.querySelector('#btn');
    btn.onclick = function () {
        !game.timer && game.start();
    }
};
game.start = function () {
    this.timer = setInterval(function () {
        snake.getCollideSquare();
    }, intervalTime);
};
game.over = function () {
    clearInterval(this.timer);
    alert(this.score)
}

game.init();

//创建食物
function createFood() {
    var x = null;
    var y = null;

    var flag = true;
    while (flag) {  //排除食物出现在围墙身上
        x = Math.round(Math.random() * (28 - 1) + 1);
        y = Math.round(Math.random() * (28 - 1) + 1);
        
        var ok = true;
        for (var node = snake.head; node; node = node.next) {    //排除食物出现在蛇的身上
            if (x == node.x && y == node.y) {   //食物在蛇身上进入此判断
                ok = false;
                break;
            }
        }
        if (ok) {
            //如果ok为true，则证明食物在蛇的身上；反之则证明食物位置合理
            flag = false;
        }
    }
    
    //创建食物
    var food = SquareFactory.create('Food', x, y, 'red');
    ground.remove(food.x, food.y);
    ground.append(food);
}

