import express from 'express'
import { IEquipment } from '../interfaces/equipment.interface';
import { equipmentModel } from '../models/equipment.model';
import { jewelModel } from '../models/jewel.model';
import { statModel } from '../models/stat.model';

const router = express.Router()

router.get('/get', async (req, res) => {
    //Put all of this into a function instead. 
    //Look into backend architecture and controllers

    if (!req.query.type) {
        res.status(404).json({text:'Equipment type not found.'});
    }

    try 
    {
        const type = req.query.type;

        if (type === "Jewel")
        {
            const jewels:IEquipment[] = await jewelModel.find({type: type});
            res.status(200).json(jewels);
        }
        else
        {
            const equipment:IEquipment[] = await equipmentModel.find({type: type});
            res.status(200).json(equipment);
        }
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({message:'Failed to complete GET EQUIPMENT operation.'});
    }
})

export { router as equipmentRouter }