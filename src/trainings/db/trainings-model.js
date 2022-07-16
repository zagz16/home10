import { v4 as uuidV4 } from 'uuid';
import {format} from "date-fns";

export default class TrainingsModel {
    constructor({ dateString, distance }) {
        const date = dateString.match(/[0-9]{2}/g).map(x => parseInt(x, 10));
        this.dateObject = new Date(
            (date[2] < 100) ? date[2] + 2000 : date[2],
            date[1] - 1, date[0]); // [date, month, year]
        this.date = format(this.dateObject, 'dd.MM.yy');
        this.dateLong = format(this.dateObject, 'dd.MM.yyyy');
        this.distance = distance;
        this.id = uuidV4();
    }
}
