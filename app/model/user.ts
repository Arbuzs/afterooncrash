import Day from './day';
import { eachDayOfInterval, isSameDay, format } from 'date-fns';
import AfternoonCrash from './afternoonCrash';
import Sleep from './sleep';


class User {
    id: number;
    name: string;
    email: string;
    password: string;
    days: Array<Day>;

    constructor(id: number, name: string, email: string, password: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.days = [];
    }

    addDay(day: Day) {
        this.days.push(day);
    }

    getNumberOfDays(): number {
        return this.days.length;
    }

    getCurrentDay(): Day {
        if (this.getNumberOfDays() === 0) {
            return null;
        }
        return this.days[this.days.length - 1];
    }

    getSpecificDay(date: Date): Day {
        const formattedDate = format(date, 'dd/MM/yyyy');
        return this.days.find(day => day.dateString === formattedDate);
    }

    /**
     * Populates the user's days array with Day objects for each day from the last recorded date until the current time.
     * If the user's days array is empty, it populates days starting from the current time.
     * Each Day object represents a single day and contains information about that day.
     * @param currentTime The current time used as the end date for populating days if there is no last recorded date.
     */
    populateDays(currentTime: Date) {
        
        const getLastRecordedDate = () => {
            if (this.getNumberOfDays() === 0) {
                return null;
            }
            const sortedDays = this.days.slice().sort((a, b) => b.date.getTime() - a.date.getTime());
            return sortedDays[0].date;
        };

        const lastRecordedDate = getLastRecordedDate();

        const datesToPopulate = eachDayOfInterval({
            start: lastRecordedDate || currentTime,
            end: currentTime
        });

        datesToPopulate.forEach(date => {
            const exists = this.days.some(day => isSameDay(day.date, date));

            if (!exists) {
                var day = new Day(date);
                this.addDay(day);
            }
        });
    }

    generateRandomDays(startDate: Date) {
        let currentDate = startDate;
        let today = new Date();
    
        while (currentDate <= today) {
            const maxAfternoonCrashDuration = 300; // Maximum duration in minutes (5 hours)
            const minAfternoonCrashDuration = 30; // Minimum duration in minutes
    
            // Generate random afternoon crash start time between 12:00 PM and 4:59 PM
            const afternoonCrashStartHour = Math.floor(Math.random() * 5) + 12;
            const afternoonCrashStartMinute = Math.floor(Math.random() * 60);
            const afternoonCrashStart = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), afternoonCrashStartHour, afternoonCrashStartMinute, 0);
    
            const afternoonCrashDuration = (Math.floor(Math.random() * (maxAfternoonCrashDuration - minAfternoonCrashDuration)) + minAfternoonCrashDuration); // Random duration between 30 to 300 minutes
    
            // Generate random afternoon crash end time between start time and up to 5 hours later
            const afternoonCrashEnd = new Date(afternoonCrashStart.getTime() + afternoonCrashDuration * 60000);
    
            // Generate random sleep start time between 08:00 PM and 11:59 PM
            const sleepStartHour = Math.floor(Math.random() * 4) + 20;
            const sleepStartMinute = Math.floor(Math.random() * 60);
            const sleepStart = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), sleepStartHour, sleepStartMinute, 0);
    
            // Generate random duration for sleep (between 2 to 9 hours)
            const minSleepDuration = 120; // 2 hours in minutes
            const maxSleepDuration = 540; // 9 hours in minutes
            const sleepDuration = (Math.floor(Math.random() * (maxSleepDuration - minSleepDuration)) + minSleepDuration); // Random duration between 2 to 9 hours
    
            // Calculate sleep end time
            const sleepEnd = new Date(sleepStart.getTime() + sleepDuration * 60000);
    
            // Generate random scores between 1 and 5 for afternoon crash and sleep
            const afternoonCrashScore = Math.round((afternoonCrashDuration / maxAfternoonCrashDuration) * 5);
            const sleepScore = Math.round((sleepDuration / maxSleepDuration) * 5);
    
            // Ensure scores are between 1 and 5
            const clampedAfternoonCrashScore = Math.max(1, Math.min(5, afternoonCrashScore));
            const clampedSleepScore = Math.max(1, Math.min(5, sleepScore));
    
            // Create new day with random afternoon crash and sleep
            const newDay = new Day(currentDate,
                new AfternoonCrash(afternoonCrashStart, afternoonCrashEnd, clampedAfternoonCrashScore, "Test"),
                new Sleep(sleepStart, sleepEnd, clampedSleepScore)
            );
    
            // Add the new day to the user
            this.addDay(newDay);
    
            // Move to next day
            currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 1);
        }
    }

    printUserDays() {
        console.log(this.days.length + " days listed:");
        console.log("\n");
    
        for (var i = 0; i < this.days.length; i++) {
            console.log("Day: " + this.days[i].dateString + ":")
            console.log("Crash Start: " + this.days[i].afternoonCrash.startTimeStringShort + " - Crash End: " + this.days[i].afternoonCrash.endTimeStringShort + " - Crash Duration: " + this.days[i].afternoonCrash.durationStringShort + " - Crash Score: " + this.days[i].afternoonCrash.crashScore);
            console.log("Sleep Start: " + this.days[i].sleep.startTimeStringShort + " - Sleep End: " + this.days[i].sleep.endTimeStringShort + " - Sleep Duration: " + this.days[i].sleep.durationStringShort + " - Sleep Score: " + this.days[i].sleep.sleepScore);
            console.log("\n");
        }
    }
    
}

export default User;
