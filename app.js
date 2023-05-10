const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const userRoutes = require("./routes/user");
const bookRoutes = require("./routes/book");
const app = express();

app.use((req, res, next) => {
     res.setHeader("Access-Control-Allow-Origin", "*");
     res.setHeader(
          "Access-Control-Allow-Headers",
          "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
     );
     res.setHeader(
          "Access-Control-Allow-Methods",
          "GET, POST, PUT, DELETE, PATCH, OPTIONS"
     );
     next();
});

app.use("/images", express.static(path.join(__dirname, "images")));
app.use("/api/books", bookRoutes);
app.use("/api/auth", userRoutes);

async function connect() {
     try {
          await mongoose.connect(
               "mongodb+srv://jpgroove:test@cluster0.co9mvvb.mongodb.net/?retryWrites=true&w=majority",
               { useNewUrlParser: true, useUnifiedTopology: true }
          );
          console.log("Connexion à MongoDB réussie !");
     } catch (error) {
          console.log("Connexion à MongoDB échouée !");
     }
}
connect();

module.exports = app;
