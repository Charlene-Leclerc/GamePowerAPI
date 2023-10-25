const express = require("express");
const cors = require("cors");
const router = express.Router();
const axios = require("axios");

router.use(cors());

router.get("/giveaways", async (req, res) => {
  try {
    const response = await axios.get(
      "https://www.gamerpower.com/api/giveaways"
    );
    const data = response.data;
    res.send(data);
  } catch (error) {
    console.error(
      "Une erreur s'est produite lors de la récupération des données:",
      error
    );
    res.status(500).send("Erreur de serveur");
  }
});

module.exports = router;
