import express, { Application } from 'express';
import userRoutes from '../routes/usuarios';
import cors from 'cors';
import db from '../db/connection';
//Exportar clase
//export class Server 
class Server {

    private app: Application;
    private port: string;
    private apiPaths = {
        usuarios: '/api/usuarios',

    }
    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000';
        //Metodos iniciales
        this.dbConnection();
        this.middlewares();
        //Definir rutas
        this.routes();

    }

    async dbConnection() {
        try {
            await db.authenticate();
            console.log('Base de datos en linea')
        }
        catch (error: any) {
            throw new Error(error);
        }


    }
    middlewares() {
        //Cors
        this.app.use(cors());

        //Lectura del body
        this.app.use(express.json());

        //Carpeta Publica
        this.app.use(express.static('public'));

    }

    routes() {
        this.app.use(this.apiPaths.usuarios, userRoutes);

    }
    listen() {

        this.app.listen(this.port, () => {

            console.log('Servidor corriendo en puerto: ' + this.port);
        })
    }
}

//Exportar clase
export default Server