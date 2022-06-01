import express from "express";
import cors from "cors";
import db from "./database/db.js";
import YomRoutes from './routes/routes.js'

const app = express();

app.use(cors());
app.use(express.json())
app.use('/yomyom', YomRoutes)

try {
    await db.authenticate()
    console.log("Conexion Exitosa!")
} catch (error) {
    console.log(`El error de conexión es: ${error}`)
}

app.get('/', (req, res) =>{
    res.send('wasap')
})

app.listen(8000, () =>{
    console.log('server up running in http://localhost:8000/')
})