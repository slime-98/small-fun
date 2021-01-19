//基础库，放一些方法（继承，拓展，单例）

var tools = {
    //继承
    inherit(target, origin) {
        const F = function F() { };
        F.prototype = origin.prototype;
        target.prototype = new F();
        target.prototype.constructor = target;

    },

    //拓展
    extends(origin) {       //继承原函数的私有属性；
        const target = function () {
            origin.apply(this, arguments)
        }
        this.inherit(target, origin);
        return target;
    },

    //单例
    single(origin) {
        const target = (function () {
            let instance;
            return function(){
                if(typeof instance == 'object'){
                    return instance;
                }
                origin && origin.apply(this, arguments);
                instance = this;
            }
        })();

        origin && this.inherit(target, origin);
        return target;
    }
}

// function Square(x, y, width, height) {
//     this.x = x;
//     this.y = y;
//     this.width = width;
//     this.height = height;
// }
// Square.prototype.collide = function () {
//     console.log('collide')
// }

// const Food = tools.single(Square);
// const f1 = new Food(10, 20, 100, 100);
// const f2 = new Food(10, 20, 100, 100);
// f1.collide();
// console.log(f1 == f2)