import Day from './day';
import { eachDayOfInterval, isSameDay, startOfWeek, endOfWeek, startOfMonth, endOfMonth, subMonths, format, subDays } from 'date-fns';
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
     * Retrieves a list of Day objects representing the interval of days from the startDate until the present day (or until the endDate, if provided).
     * If startDate is a number, it represents the number of days before the current date.
     * @param startDate The start date of the interval, either as a Date object or a number representing the number of days.
     * @param endDate The end date of the interval (optional). If not provided, defaults to the current date.
     * @returns An array of Day objects representing the interval of days.
     */
    getIntervalOfDays(startDate: Date | number, endDate: Date | null = null): Day[] {
        let start: Date;
        if (startDate instanceof Date) {
            start = startDate;
        } else {
            start = subDays(new Date(), startDate);
        }

        const end = endDate ? endDate : new Date(); // Use endDate if provided, otherwise use the current date
        const dates = eachDayOfInterval({ start, end });

        const intervalDays: Day[] = [];

        for (const date of dates) {
            const day = this.getSpecificDay(date);
            if (day) {
                intervalDays.push(day);
            }
        }

        return intervalDays;
    }

    /**
     * Retrieves a list of Day objects representing all days from the current week (Monday to Sunday).
     * @returns An array of Day objects representing the days from the current week.
     */
    getDaysFromCurrentWeek(): Day[] {
        const today = new Date();
        const startOfWeekDate = startOfWeek(today, { weekStartsOn: 1 }); // Start of current week (Monday)
        const endOfWeekDate = endOfWeek(today, { weekStartsOn: 1 }); // End of current week (Sunday)
        
        const dates = eachDayOfInterval({ start: startOfWeekDate, end: endOfWeekDate });

        const weekDays: Day[] = [];

        for (const date of dates) {
            const day = this.getSpecificDay(date);
            if (day) {
                weekDays.push(day);
            }
        }

        return weekDays;
    }

    /**
     * Retrieves a list of Day objects representing all days from the specified number of past months.
     * @param numberOfMonths The number of past months to retrieve days from. 
     *                       For example, 1 for the previous month, 2 for two months ago, and so on.
     * @returns An array of Day objects representing the days from the specified past months.
     */
    getDaysFromPastMonths(numberOfMonths: number): Day[] {
        const today = new Date();
        const startOfCurrentMonth = startOfMonth(today); // Start of current month
        const pastMonthsDays: Day[] = [];

        for (let i = 0; i < numberOfMonths; i++) {
            const startOfPastMonth = subMonths(startOfCurrentMonth, i); // Start of each past month
            const endOfPastMonth = endOfMonth(startOfPastMonth); // End of each past month
            
            const dates = eachDayOfInterval({ start: startOfPastMonth, end: endOfPastMonth });

            for (const date of dates) {
                const day = this.getSpecificDay(date);
                if (day) {
                    pastMonthsDays.push(day);
                }
            }
        }

        return pastMonthsDays;
    }

    /**
     * Retrieves a list of Day objects representing all days from the current month.
     * @returns An array of Day objects representing the days from the current month.
     */
    getDaysFromCurrentMonth(): Day[] {
        return this.getDaysFromPastMonths(1);
    }

    /**
     * Retrieves a list of Day objects representing all days from the current year.
     * @returns An array of Day objects representing the days from the current year.
     */
    getDaysFromCurrentYear(): Day[] {
        return this.getDaysFromPastMonths(12);
    }

    /**A
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

    printDays(days: Day[] = null) {
        // If days parameter is not provided, use this.days
        if (days === null) {
            days = this.days;
        }
    
        console.log(days.length + " days listed:");
        console.log("\n");
    
        for (var i = 0; i < days.length; i++) {
            console.log("Day: " + days[i].dateString + ":")
            console.log("Crash Start: " + days[i].afternoonCrash.startTimeStringShort + " - Crash End: " + days[i].afternoonCrash.endTimeStringShort + " - Crash Duration: " + days[i].afternoonCrash.durationStringShort + " - Crash Score: " + days[i].afternoonCrash.crashScore);
            console.log("Sleep Start: " + days[i].sleep.startTimeStringShort + " - Sleep End: " + days[i].sleep.endTimeStringShort + " - Sleep Duration: " + days[i].sleep.durationStringShort + " - Sleep Score: " + days[i].sleep.sleepScore);
            console.log("\n");
        }
    }
    
}

export default User;
