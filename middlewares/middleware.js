const { Dinosaurs } = require("../models/index");
const express = require("express");
const app = express();

// middleware to check if the dinosaur exists

const checkDinosaurExists = async (req, res, next) => {
  const dinosaur = await Dinosaurs.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!dinosaur) {
    return res.status(404).json({
      error: "Dinosaur not found",
    });
  }
  next();
};

// middleware to check if the dinosaur exists, and if it does, return an error
const checkDinosaurAlreadyExists = async (req, res, next) => {
  const dinosaur = await Dinosaurs.findOne({
    where: {
      name: req.body.name,
    },
  });
  if (dinosaur) {
    return res.status(400).json({
      error: "Dinosaur already exists",
    });
  }
  next();
};

module.exports = {
  checkDinosaurExists: checkDinosaurExists,
  checkDinosaurAlreadyExists: checkDinosaurAlreadyExists,
};
