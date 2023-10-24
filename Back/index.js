const express = require("express");
const mongoose = require("mongoose");

const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://HerbillonMia:68Nr575aB7iSJnxd@herbillonmia.vsxvity.mongodb.net/GamePowerAPI",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const gameRoutes = require("./Routes/gameRoutes");
const userRoutes = require("./Routes/userRoutes");
app.use(gameRoutes);
app.use(userRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`👩🏻‍💻 Server is running on port ${PORT}`);
});
