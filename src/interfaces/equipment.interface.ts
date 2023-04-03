import { IStat } from './stat.interface';

export interface IEquipment {
    name: string;
    imgPath: string,
    stats: IStat[]
}