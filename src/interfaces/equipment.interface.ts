import { IStat } from './stat.interface';

export interface IEquipment {
    type: string,
    rarity: string,
    name: string;
    imgPath: string,
    stats: IStat[]
}