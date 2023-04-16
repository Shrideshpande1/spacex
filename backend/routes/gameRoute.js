const express=require("express")
const { getAllGames, createGame, updateGame, deleteGame, getGameDetails } = require("../controllers/gameControllers")

const router =express.Router()


router.route("/games").get(getAllGames)
router.route("/games/new").post(createGame)
router.route("/games/:id").put(updateGame)
router.route("/games/:id").delete(deleteGame)
router.route("/game/:id").get(getGameDetails);

module.exports=router