const SHA256 = require('crypto-js/sha256')

class creatorHash{
    constructor(){

    }
    
    createHash(block){
        return SHA256(block.index + block.date + block.data + block.previousHash +block. nonce).toString();
    }
}
