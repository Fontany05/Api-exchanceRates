import "reflect-metadata";
import express from "express";
import { AppDataSource } from "./data-source";
import itemRouter from "./modules/items/items.router";

const app = express();

app.use(express.json());
app.use(itemRouter);

const PORT = process.env.PORT || 3000;

AppDataSource.initialize()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`el servidor esta corriendo en el puerto ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Se produjo un error al conectar la base de datos", error);
  });
