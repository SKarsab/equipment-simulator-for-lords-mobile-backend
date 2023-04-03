import mongoose from 'mongoose';
import { IEquipment } from '../interfaces/equipment.interface';
import { IStat } from '../interfaces/stat.interface';
import { statSchema } from './stat.model';

const equipmentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    imgPath: {
        type: String,
        required: true
    },
    stats: {
        type: [statSchema],
        required: true
    }
}, { collection: 'equipment' });

export const equipmentModel = mongoose.model<IEquipment & mongoose.Document>('EquipmentSchema', equipmentSchema);