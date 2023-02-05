
class Minelayer{
    constructor(){

    }

    mine(block , difficulty){
        while(!block.hash.startsWith(difficulty)){
            block.nonce++;
            block.hash = block.createHash();
        }
    }
}
module.exports = Minelayer;