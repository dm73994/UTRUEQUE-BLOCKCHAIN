class validator{
    constructor(){

    }

    isValid(BlockChain){
        for(let i=1 ; i<BlockChain.chain.length;i++){
            let prevBlock = BlockChain.chain[i-1]
            let currentBlock = BlockChain.chain[i];

            if(currentBlock.previousHash != prevBlock.hash){
                return false;
            }
            if(currentBlock.createHash() != currentBlock.hash){
                return false;
            }
            return true;
        }
    }
}

module.exports = validator;