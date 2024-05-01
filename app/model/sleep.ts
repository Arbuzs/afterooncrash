import { format, differenceInSeconds } from 'date-fns';

class Sleep {

    startTime: Date;
    endTime: Date;
    duration: number;

    startTimeString: string;
    endTimeString: string;
    durationString: string;

    startTimeStringShort: string;
    endTimeStringShort: string;
    durationStringShort: string;

    sleepScore: number;

    constructor(startTime: Date, endTime: Date, sleepScore: number) {
        if (sleepScore < 1 || sleepScore > 5) {
            throw new Error("Sleep score must be between 1 and 5");
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
        this.endTimeStringShort = format(startTime, 'HH:mm');
        this.durationStringShort = format(new Date(0, 0, 0, hours, minutes, seconds), 'HH:mm');

        this.sleepScore = sleepScore;
    }

    getStartTime() { return this.startTime; }
    getEndTime() { return this.endTime; }
    getSleepScore() { return this.sleepScore; }
}

export default Sleep;
