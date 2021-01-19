var snake = new Snake();

snake.head = null;
snake.tail = null;

//存储蛇的走向
var directionNum = {
    left: {
        x: -1,
        y: 0
    },
    right: {
        x: 1,
        y: 0
    },
    top: {
        x: 0,
        y: -1
    },
    bottom: {
        x: 0,
        y: 1
    }
}

snake.init = function () {
    var snakeHead = SquareFactory.create('SnakeHead', 3, 1, 'deeppink');
    var snakeBody1 = SquareFactory.create('SnakeBody', 2, 1, 'green');
    var snakeBody2 = SquareFactory.create('SnakeBody', 1, 1, 'green');

    //初始蛇头蛇尾
    snake.head = snakeHead;
    snake.tail = snakeBody2;

    //删除地板，添加蛇
    ground.remove(snakeHead.x, snakeHead.y);
    ground.append(snakeHead);
    ground.remove(snakeBody1.x, snakeBody1.y);
    ground.append(snakeBody1);
    ground.remove(snakeBody2.x, snakeBody2.y);
    ground.append(snakeBody2);

    /**  链表  */
    snakeHead.next = snakeBody1;
    snakeHead.last = null;

    snakeBody1.next = snakeBody2;
    snakeBody1.last = snakeHead;

    snakeBody2.next = null;
    snakeBody2.last = snakeBody1;

    //蛇初始走的方向
    this.direction = directionNum.right;

}

snake.getCollideSquare = function () {
    var nextSquare = ground.squareTable[this.head.y + this.direction.y][this.head.x + this.direction.x];
    this.collideMethod[nextSquare.collide](nextSquare);
}

snake.collideMethod = {
    move(square, boolean) {
        //在旧蛇头的位置创建一个新的身体
        var newBody = SquareFactory.create('SnakeBody', snake.head.x, snake.head.y, 'green');

        //更新链表关系
        newBody.next = snake.head.next;
        newBody.last = null;
        newBody.next.last = newBody;


        ground.remove(snake.head.x, snake.head.y);
        ground.append(newBody);

        //在碰撞方块的下一个位置创建一个新蛇头
        var newHead = SquareFactory.create('SnakeHead', square.x, square.y, 'deeppink');
        //更新链表关系
        newBody.last = newHead;
        newHead.next = newBody;
        newHead.last = null;

        ground.remove(square.x, square.y);
        ground.append(newHead);

        //判断删除蛇的尾部
        if(!boolean){
            var newFloor = SquareFactory.create('Floor', snake.tail.x, snake.tail.y, 'gray');
            ground.remove(snake.tail.x, snake.tail.y);
            ground.append(newFloor)
            snake.tail = snake.tail.last;
        }
    },
    eat(square) {
        this.move(square, true);
        game.score++;
        createFood();
    },
    die() {
        game.over()
    }
}

// snake.init();
// snake.getCollideSquare();

