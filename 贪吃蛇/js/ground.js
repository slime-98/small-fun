let ground = new Ground(positionX, positionY, tr * squareWidth, td * squareWidth);
ground.init = function () {
    this.viewContent.style.position = 'absolute';
    this.viewContent.style.left = this.x + 'px';
    this.viewContent.style.top = this.y + 'px';
    this.viewContent.style.width = this.width + 'px';
    this.viewContent.style.height = this.height + 'px';
    this.viewContent.style.backgroundColor = 'orange';

    document.body.appendChild(this.viewContent)

    //存储表格信息
    this.squareTable = [];

    //行对应 y，列对应 x
    for (let y = 0; y < tr; y++) {
        this.squareTable[y] = new Array(td);
        for (let x = 0; x < td; x++) {
            if (x == 0 || y == 0 || x == td - 1 || y == tr - 1) {
                var newSquare = new SquareFactory.create('Wall', x, y, 'black')
            } else {
                var newSquare = new SquareFactory.create('Floor', x, y, 'gray')
            }

            this.squareTable[y][x] = newSquare;
            this.viewContent.appendChild(newSquare.viewContent);
        }
    }

}

// ground.init()

ground.remove = function (x, y) {
    var curSquare = this.squareTable[y][x];
    this.viewContent.removeChild(curSquare.viewContent);
    this.squareTable[y][x] = null;
}

ground.append = function (square) {
    this.viewContent.appendChild(square.viewContent);
    this.squareTable[square.y][square.x] = square;
}
// ground.remove(2,2)
// ground.remove(2,4)

// var square = SquareFactory.create('Floor', 2, 4, 'blue')
// ground.append(square)