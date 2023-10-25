const express = require("express");
const router = express.Router();

const cors = require("cors");
router.use(cors());
// const User = require("../Model/user");

// Inscription
router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = new User({ username, email, password });
    await user.save();
    res.status(201).json({ message: "Utilisateur enregistré avec succès." });
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de l'inscription." });
  }
});

// Connexion
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    if (!user) {
      res.status(401).json({ message: "Email ou mot de passe incorrect." });
    } else {
      res.status(200).json({ message: "Connexion réussie." });
    }
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la connexion." });
  }
});

module.exports = router;
