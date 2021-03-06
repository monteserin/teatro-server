import express from 'express';
import http from 'http';
import Middlewares from './application/middlewares';
import Controllers from './controllers';
import Documentation from './application/documentation';
import ConnectDatabase from './application/database';
import { asyncHandler } from "@Middlwares/error-handler";


const app = express();
const router = express.Router();

/*
Heroku utiliza la variable de entorno process.env.port para asignar el puerto donde se va ejecutar el servidor,
por eso la hemos definido en esta plantilla
*/
const port = process.env.PORT || 3005;

Documentation(app);
Middlewares(app);
Controllers(app);
ConnectDatabase(() => {
    const server = http.createServer(app);
    server.listen(port, () => console.log(`Server listening to http://localhost:${port}`));
});

router.get("/", asyncHandler(async (req, res) => {
    res.send(`working ٩(^‿^)۶`);
}));
