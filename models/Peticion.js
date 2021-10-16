const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let peticionSchema = new Schema(
  {
    nombre: {
      type: String,
    },
    tipo: {
      type: String,
    },
    asunto: {
      type: String,
    },
    fecha: {
      type: Date,
    },
  },
  {
    collection: "peticiones",
  }
);

module.exports = mongoose.model("Peticion", peticionSchema);
