const { addBlock } = require("../../block/main");

exports.blockRegister = async (req, res, next) => {
    try{
        const {usuario, plata, receptor} = req.body;
        if(
        addBlock(usuario) &&
        addBlock(plata) &&
        addBlock(receptor)){
            res.status(200).json({
                status: true,
                data: {
                    response: 'data'
                }
            });
            return;
        }
        throw new Error("Error")
    }catch(err){
        console.log(err)
        res.status(200).json({
            status: false,
            data: err
        });
    }
}

exports.funcion = async (req, res, next) => {
    try{
    }catch(err){
    }
}