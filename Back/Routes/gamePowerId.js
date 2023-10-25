const express = require("express");
const cors = require("cors");
const router = express.Router();
const axios = require("axios");

router.use(cors());

router.get("/giveaway/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const response = await axios.get(
      `https://www.gamerpower.com/api/giveaway?id=${id}`
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
