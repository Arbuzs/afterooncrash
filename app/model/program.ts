import { isSameDay } from 'date-fns';
import User from "./user";

type Dict = {
    [key: string]: any;
}

class Program {

    static #program: Program;
    #currentUser: User | null;
    #currentTime: Date;
    #lastDate: Date;
    #tempParams: Dict;


    private constructor() {
        this.#currentTime = new Date();
        this.#currentUser = null;
        this.#lastDate = new Date();
        this.#tempParams = null;

        // Update currentTime every second
        setInterval(() => {
            const currentDate = new Date();

            // Check if it's a new day
            if (!isSameDay(currentDate, this.#lastDate)) {
                this.#lastDate = currentDate;

                // Call populateDays for the current user (if exists)
                if (this.#currentUser) {
                    this.#currentUser.populateDays(currentDate);
                }
            }
            // Update currentTime
            this.#currentTime = currentDate;
        }, 1000);
    }

    static getInstance(): Program {
        if (!this.#program) {
            this.#program = new Program();
        }
        return this.#program;
    }

    getCurrentTime(): Date {
        return this.#currentTime;
    }

    setCurrentUser(user: User) {
        this.#currentUser = user;
        this.#currentUser.populateDays(this.#currentTime);
    }

    getCurrentUser(): User | null {
        return this.#currentUser;
    }

    setTempParams(params: Dict) {
        this.#tempParams = params;
    }

    getTempParams(reset=true) {
        const temp = this.#tempParams;
        if (reset)
            this.#tempParams = null;
        return temp;
    }
}

export default Program;
