import mongoose from 'mongoose';
import { IStat } from '../interfaces/stat.interface';

export const statSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    value: {
        type: Number,
        required: true
    }
}, { collection: 'equipment' });

export const statModel = mongoose.model<IStat & mongoose.Document>('StatSchema', statSchema);