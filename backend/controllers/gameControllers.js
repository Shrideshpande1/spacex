const Games=require("../model/gameModel")
const ApiFeatures = require("../utiles/apifeatures")

//create
exports.createGame=async(req,res)=>{
    const game=await Games.create(req.body)
    res.status(201).json({
        success:true,
        game
    })
}

//get all games

exports.getAllGames=async(req,res)=>{
   const apiFeature=new ApiFeatures(Games.find(),req.query).search().filter()
    const games=await apiFeature.query
res.status(200).json({
    success:true,
    games

})
}

//update game
exports.updateGame=async(req,res)=>{
    let game=await Games.findById(req.params.id);
    if (!game){
        return res.status(500).json({
            success:false,
            message:"game not found"
        })
    }
    game=await Games.findByIdAndUpdate(req.params.id,req.body,
        {new:true,runValidators:true,
            useFindAndModify:false
        })

    res.status(200).json({
        success:true,
        game
    
    })
}
//game details
exports.getGameDetails = async (req, res, next) => {
    const game = await Games.findById(req.params.id);
    if (!game) {
      return next(new ErrorHander("Product not found", 404));
    }
  
    res.status(200).json({
      success: true,
      game
      
    });
  };

//delete game

exports.deleteGame=async(req,res)=>{
    const game=await Games.findById(req.params.id);
    if (!game){
        return res.status(500).json({
            success:false,
            message:"game not found"
        })
    }
    await Games.findByIdAndRemove(req.params.id)

    res.status(200).json({
        success:true,
        message:"Game deleted successfully"
    
    })
}