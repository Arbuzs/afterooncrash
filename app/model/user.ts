import Day from './day';
import { eachDayOfInterval, isSameDay, format } from 'date-fns';


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
}

export default User;
