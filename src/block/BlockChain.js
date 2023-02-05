const Block = require("./Block");
class BlockChain{
    constructor(genesis){
        this.chain = [this.createFirstBlock(genesis)]
        this.difficulty = '1990';
    }
    
    createFirstBlock(genesis){
        return new Block(0,genesis)
    }
}

module.exports = BlockChain;