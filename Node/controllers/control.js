import db from "../database/db.js";
import Restaurante from "../models/Restaurant.js";

export const AllAlimentos = async (req, res) => {
    try {
        const yomyom = await Restaurante.findAll()
        res.json(yomyom)
    } catch (error) {
        res.json({mesagge: error.mesagge})
    }
}



export const AlimentoForId = async (req, res) => {
    try {
        const alimento = await Restaurante.findAll({
            where:{idAlimentos:req.params.idAlimentos}
        })
        res.json(alimento[0])
    } catch (error){
        res.json({mesagge: error.mesagge})
    }
}


export const InsertAlimento = async (req, res) => {
    try {
        await Restaurante.create(req.body)
        res.json({"mesagge":"registro creado correctamente!"})
    } catch (error) {
        res.json({mesagge: error.mesagge})
    }
}

export const UpdateAlimento = async (req, res) => {
    try {
        await Restaurante.update(req.body, {
            where: {idAlimentos:req.params.idAlimentos}
        })
        res.json({"mesagge":"registro Actualizado correctamente!"})
    } catch (error) {
        res.json({mesagge: error.mesagge})
    }
}

export const DeleteAlimento = async (req, res) => {
    try {
        await Restaurante.destroy({
            where: {idAlimentos:req.params.idAlimentos}
        })
        res.json({"mesagge":"registro Eliminado correctamente!"})
    } catch (error) {
        res.json({mesagge: error.mesagge})
    }
}

export const AlimentoForName = async (req, res) => {
    try {
        const alimento = await Restaurante.findAll({
            where:{NombreAlimentos:req.params.idAlimentos}
        })
        res.json(alimento)
    } catch (error){
        res.json({mesagge: error.mesagge})
    }
}

export const HorariosControlM = async (req, res) => {
    const hm = 1
    try {
        const alimento = await Restaurante.findAll({
            where:{
                Horario:hm
            }
        })
        res.json(alimento)
    } catch (error){
        res.json({mesagge: error.mesagge})
    }
}

export const HorariosControlT = async (req, res) => {
    const hm = 2
    try {
        const alimento = await Restaurante.findAll({
            where:{
                Horario:hm
            }
        })
        res.json(alimento)
    } catch (error){
        res.json({mesagge: error.mesagge})
    }
}

export const HorariosControlN = async (req, res) => {
    const hm = 3
    try {
        const alimento = await Restaurante.findAll({
            where:{
                Horario:hm
            }
        })
        res.json(alimento)
    } catch (error){
        res.json({mesagge: error.mesagge})
    }
}