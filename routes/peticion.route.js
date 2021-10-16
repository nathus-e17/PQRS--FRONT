const express = require("express");
const peticionRoute = express.Router();

// Modelo de producto
let modeloPeticion = require("../models/Peticion");

peticionRoute.route("/").get((req, res) => {
  modeloPeticion.find((error, data, next) => {
    if (error) {
      return next(error);
    } else {
      console.log(error);
      res.json(data);
    }
  });
});

peticionRoute.route("/agregar").post((req, res, next) => {
  modeloPeticion.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

peticionRoute.route("/editar/:id").get((req, res) => {
  modeloPeticion.findById(req.params.id, (error, data, next) => {
    if (error) {
      console.log(error);
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Actualizar Peticion
peticionRoute.route("/actualizar/:id").put((req, res, next) => {
  modeloPeticion.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        console.log(error);
        return next(error);
      } else {
        res.json(data);
        console.log("Petición Actualizada!!");
      }
    }
  );
});

// Borrar Producto
peticionRoute.route("/borrar/:id").delete((req, res, next) => {
  modeloPeticion.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});

module.exports = peticionRoute;
