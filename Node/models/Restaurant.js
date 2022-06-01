import db from '../database/db.js';
import { DataTypes } from 'sequelize';

const Restaurante = db.define('alimentos',{
    idAlimentos:{type:DataTypes.INTEGER,
    primaryKey:true },
    NombreAlimentos: { type: DataTypes.STRING },
    Categoria: { type: DataTypes.NUMBER },
    Horario: { type: DataTypes.NUMBER },
    Descripcion: { type: DataTypes.STRING },},
    { timestamps: false, createdAt: false, updatedAt: false,}
    )


export default Restaurante 