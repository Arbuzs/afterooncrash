import Sleep from './sleep';
import AfternoonCrash from './afternoonCrash';

import { format } from 'date-fns';


class Day {

    date: Date;
    dateString: string;
    dayOfMonth: number;
    dayOfWeekNumber: number;
    dayOfWeekString: string;
    dayOfWeekShortString: string;

    sleep: Sleep;
    afternoonCrash: AfternoonCrash;

    constructor(date: Date) {
        this.date = date;

        this.dateString = format(date, 'dd/MM/yyyy');
        this.dayOfMonth = parseInt(format(date, 'd'));
        this.dayOfWeekNumber = parseInt(format(date, 'i'));

        this.dayOfWeekString = format(date, 'EEEE');
        this.dayOfWeekShortString = format(date, 'EE');

        this.sleep = null;
        this.afternoonCrash = null;
    }

    addSleep(sleep: Sleep) {
        this.sleep = sleep;
    }

    getSleep(): Sleep {
        return this.sleep;
    }

    hasSleep(): boolean {
        return this.sleep !== null;
    }

    setAfternoonCrash(afternoonCrash: AfternoonCrash) {
        this.afternoonCrash = afternoonCrash;
    }

    getAfternoonCrash(): AfternoonCrash {
        return this.afternoonCrash;
    }

    hasAfternoonCrash(): boolean {
        return this.afternoonCrash !== null;
    }
}

export default Day;