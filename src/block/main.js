const Adder = require("../functions/Adder");
const BlockChain = require("../block/BlockChain");
const validator = require("../functions/validator");

moneda = new BlockChain('primer bloque');
add = new Adder();
vali = new validator();

exports.addBlock = (registro) => {
    add.addBlock(moneda, registro);
    console.log(moneda.chain[1].data)
    return vali.isValid(moneda);
}
