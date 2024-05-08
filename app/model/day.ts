import Sleep from './sleep';
import AfternoonCrash from './afternoonCrash';

import { format } from 'date-fns';


class Day {

    date: Date;
    dateString: string;
    dateStringDot: string;
    dayOfMonth: number;
    dayOfWeekNumber: number;
    dayOfWeekString: string;
    dayOfWeekShortString: string;

    sleep: Sleep;
    afternoonCrash: AfternoonCrash;

    constructor(date: Date, afternoonCrash: AfternoonCrash | null = null, sleep: Sleep | null = null) {
        this.date = date;

        this.dateString = format(date, 'dd/MM/yyyy');
        this.dateStringDot = format(date, 'dd.MM.yy');
        this.dayOfMonth = parseInt(format(date, 'd'));
        this.dayOfWeekNumber = parseInt(format(date, 'i'));

        this.dayOfWeekString = format(date, 'EEEE');
        this.dayOfWeekShortString = format(date, 'EE');

        this.sleep = sleep;
        this.afternoonCrash = afternoonCrash;
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