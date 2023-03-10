const SHA256 = require('crypto-js/sha256')

class Block{
    constructor(index, data, previousHash = ''){
        this.index = index;
        this.date = new Date();
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.createHash();
        this.nonce = 0;
    }

    createHash(){
        return SHA256(this.index + this.date + this.data + this.previousHash +this. nonce).toString();
    }
}

module.exports = Block;