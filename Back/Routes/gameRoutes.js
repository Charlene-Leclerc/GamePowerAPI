const GameModel = require("../model/GameModal");

const express = require("express");
const cors = require("cors");
const router = express.Router();

router.use(cors());
// CREATE
router.post("/create", async (req, res) => {
  try {
    const { name, price } = req.body;

    const newGame = new GameModel({
      name,
      price,
      userId,
    });

    const createdGame = await newGame.save();

    res.status(201).json(createdGame);
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la création du jeu." });
  }
});

// READ
router.get("/", async (req, res) => {
  try {
    const allGames = await GameModel.find();
    res.json(allGames);
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la lecture." });
  }
});

// UPDATE
router.put("/update/:id", async (req, res) => {
  try {
    const itemId = req.params.id; // ID de l'élément à mettre à jour
    const updatedData = req.body; // Les nouvelles données
    const updatedGame = await GameModel.findByIdAndUpdate(itemId, updatedData, {
      new: true,
    });
    res.json(updatedGame);
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la mise à jour." });
  }
});

// DELETE
router.delete("/delete/:id", async (req, res) => {
  try {
    const itemId = req.params.id; // ID de l'élément à supprimer
    await GameModel.findByIdAndRemove(itemId);
    res.json({ message: "Jeu supprimé avec succès." });
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la suppression." });
  }
});

module.exports = router;
