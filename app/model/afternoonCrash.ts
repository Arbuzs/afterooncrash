import { format, differenceInSeconds } from 'date-fns';
import { COLORS } from '../../constants';

class AfternoonCrash {

    startTime: Date;
    endTime: Date;
    duration: number;

    startTimeString: string;
    endTimeString: string;
    durationString: string;

    startTimeStringShort: string;
    endTimeStringShort: string;
    durationStringShort: string;

    crashScore: number;
    description: string;

    constructor(startTime: Date, endTime: Date, crashScore: number, description: string) {
        if (crashScore < 1 || crashScore > 5) {
            throw new Error("Crash score must be between 1 and 5");
        }
        this.startTime = startTime;
        this.endTime = endTime;
        this.duration = differenceInSeconds(endTime, startTime);

        const hours = Math.floor(this.duration / 3600);
        const minutes = Math.floor((this.duration % 3600) / 60);
        const seconds = this.duration % 60;

        this.startTimeString = format(startTime, 'HH:mm:ss');
        this.endTimeString = format(endTime, 'HH:mm:ss');
        this.durationString = format(new Date(0, 0, 0, hours, minutes, seconds), 'HH:mm:ss');

        this.startTimeStringShort = format(startTime, 'HH:mm');
        this.endTimeStringShort = format(endTime, 'HH:mm');
        this.durationStringShort = format(new Date(0, 0, 0, hours, minutes, seconds), 'HH:mm');

        this.crashScore = crashScore;
        this.description = description;
    }

    getStartTime() { return this.startTime; }
    getEndTime() { return this.endTime; }
    getCrashScore() { return this.crashScore; }
    getDescription() { return this.description; }

    getCrashColor() {
        switch (this.crashScore) {
            case 1:
                return COLORS.gradient_1;
            case 2:
                return COLORS.gradient_2;
            case 3:
                return COLORS.gradient_3;
            case 4:
                return COLORS.gradient_4;
            case 5:
                return COLORS.gradient_5;
        }
    }
}

export default AfternoonCrash;
