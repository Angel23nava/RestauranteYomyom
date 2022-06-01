import express from 'express';
import { AlimentoForId, AllAlimentos, DeleteAlimento, InsertAlimento, UpdateAlimento, AlimentoForName, HorariosControlT, HorariosControlM, HorariosControlN } from "../controllers/control.js";

const router = express.Router()

router.get('/', AllAlimentos)
router.get('/horario/', HorariosControlM)
router.get('/horarioT/', HorariosControlT)
router.get('/horarioN/', HorariosControlN)
router.get('/:idAlimentos', AlimentoForId)
router.get('/NombreAlimento/:NombreAlimentos', AlimentoForName)
router.post('/', InsertAlimento)
router.put('/:idAlimentos', UpdateAlimento)
router.delete('/:idAlimentos', DeleteAlimento)

export default router

