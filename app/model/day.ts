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
    }

    addSleep(sleep: Sleep) {
        this.sleep = sleep;
    }

    addAfternoonCrash(afternoonCrash: AfternoonCrash) {
        this.afternoonCrash = afternoonCrash;
    }

    getSleep() {
        return this.sleep;
    }

    getAfternoonCrash() {
        return this.afternoonCrash;
    }
}

export default Day;