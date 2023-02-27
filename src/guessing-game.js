class GuessingGame {
    constructor() {
        // this.min = null;
        // this.max = null;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        
        if(this.min<=this.max){
        return Math.floor((this.min + this.max) / 2)
        } else {
            return this.min
        }
    }

    lower() {
        if(number===this.max){
            return this.min = this.max;
        }else{
        return this.max = Math.floor((this.min + this.max) / 2) -1
        }
    }

    greater() {
        if (number===this.min){
            return this.max=this.min;
        }
        return this.min = Math.floor((this.min + this.max) / 2) +1
    }
}

module.exports = GuessingGame;
// console.log("Ytllo");
// const number = 279;
// const game = new GuessingGame();
// game.setRange(0, 3445)

// let result = game.guess();
// console.log(game.min, game.max);
// console.log(result);
// game.lower();
// console.log(game.min, game.max);
// console.log(result);
// result = game.guess();
// console.log(result);
// game.lower();
// result = game.guess();
// game.lower();
// result = game.guess();
// game.greater();
// result = game.guess();
// game.lower();
// result = game.guess();
// game.greater();
// result = game.guess();
// game.lower();
// result = game.guess();
// game.lower();
// result = game.guess();
// console.log(game.min, game.max);
// console.log(result);
// game.greater();
// result = game.guess();
// game.lower();
// result = game.guess();
// console.log(game.min, game.max);
// console.log(result);