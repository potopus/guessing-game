class GuessingGame {
    constructor() {
       this.number=null;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        
    
        return this.number=Math.round((this.min + this.max) / 2)
      
    }

    lower() {
        
         this.max = this.number;
       
    }

    greater() {
       
         this.min = this.number;
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