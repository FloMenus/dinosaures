const express = require("express");
const app = express();
const { Dinosaurs } = require("../models/index");

// GET all dinosaurs
app.get("/", async (req, res) => {
  try {
    const dinosaurs = await Dinosaurs.findAll({
      attributes: [
        "name",
        "scientificName",
        "apparitionYear",
        "disappearanceYear",
        "description",
        "color",
      ],
    });
    res.json(dinosaurs);
  } catch (error) {
    console.log(error);
    res.status(500).json("Internal server error");
  }
});

// GET one dinosaur
app.get("/:id", async (req, res) => {
  try {
    const dinosaur = await Dinosaurs.findOne({
      where: {
        id: req.params.id,
      },
      attributes: [
        "name",
        "scientificName",
        "apparitionYear",
        "disappearanceYear",
        "description",
        "color",
      ],
    });
    res.json(dinosaur);
  } catch (error) {
    console.log(error);
    res.status(500).json("Internal server error");
  }
});

// Add a new dinosaur
app.post("/", async (req, res) => {
  try {
    const dinosaur = await Dinosaurs.create(req.body);
    res.json(dinosaur);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Update a dinosaur
app.put("/:id", async (req, res) => {
  try {
    const dinosaur = await Dinosaurs.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json(dinosaur);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Delete a dinosaur
app.delete("/:id", async (req, res) => {
  try {
    const dinosaur = await Dinosaurs.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json(dinosaur);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = app;
