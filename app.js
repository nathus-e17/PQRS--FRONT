let express = require("express"),
  cors = require("cors"),
  mongoose = require("mongoose"),
  database = require("./database"),
  bodyParser = require("body-parser");

// Conectarse a mongoDB
mongoose.Promise = global.Promise;
mongoose
  .connect(database.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(
    () => {
      console.log("Conectado a Base de Datos...");
    },
    (error) => {
      console.log("No se ha conectado a la base de datos: " + error);
    }
  );

const peticionAPI = require("./routes/peticion.route");
const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(cors());

// API
app.use("/api", peticionAPI);

// Creando el puerto
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log("Conectado al puerto " + port);
});

// Error 404
app.use((req, res, next) => {
  next(createError(404));
});

// error 
app.use(function(err, req, res) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
