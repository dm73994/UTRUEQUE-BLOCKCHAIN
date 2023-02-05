class LastBlock{
    constructor(){

    }

    getLastBlock(BlockChain){
        return BlockChain.chain[BlockChain.chain.length-1]
    }
}
module.exports = LastBlock;