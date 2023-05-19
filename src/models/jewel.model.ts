import mongoose from 'mongoose';
import { IEquipment } from '../interfaces/equipment.interface';
import { IStat } from '../interfaces/stat.interface';
import { statSchema } from './stat.model';

const jewelSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    rarity: {
        type: String,
        required: true
    },
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
}, { collection: 'jewels' });

export const jewelModel = mongoose.model<IEquipment & mongoose.Document>('JewelSchema', jewelSchema);