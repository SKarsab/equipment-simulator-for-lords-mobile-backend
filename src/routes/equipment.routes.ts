import express from 'express'
import { IEquipment } from '../interfaces/equipment.interface';
import { equipmentModel } from '../models/equipment.model';
import { statModel } from '../models/stat.model';

const router = express.Router()

//Initial test
router.get('/test', async (req, res) => {
    res.status(200).json({text:'Initial Test Passed'});
})

export { router as equipmentRouter }