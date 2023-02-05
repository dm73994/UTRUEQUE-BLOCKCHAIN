const LastBlock = require("./LastBlock");
const Block = require("../block/Block")
const Minelayer = require("./Minelayer")

class Adder{
    constructor(){

    }

    addBlock(BlockChain,data){
        let getLast = new LastBlock();
        let prevBlock = getLast.getLastBlock(BlockChain);
        let block = new Block(prevBlock.index+1,data,prevBlock.hash)
        let minator = new Minelayer();
        minator.mine(block,BlockChain.difficulty);
        console.log('Minado ' + block.hash + ' con nonce: ' + block.nonce);
        BlockChain.chain.push(block)
    }
}
module.exports = Adder