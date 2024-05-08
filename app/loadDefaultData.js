import { format, parse, differenceInSeconds } from 'date-fns';
import Sleep from './model/sleep';
import AfternoonCrash from './model/afternoonCrash';
import Day from './model/day';
import Program from './model/program';

function loadDefaultData(user) {

    // user.addDay(new Day(new Date(2024, 3, 8)), new AfternoonCrash(new Date(2024, 3, 8, 17, 47, 0), new Date(2024, 3, 8, 18, 46, 0), 4, "Test"), new Sleep(new Date(2024, 3, 7, 22, 34, 0), new Date(2024, 3, 8, 7, 6, 0), 4))

    console.log("Test");

    user.addDay(
        new Day(new Date(2024, 2, 8)), 
        new AfternoonCrash(new Date(2024, 2, 8, 17, 47, 0), new Date(2024, 2, 8, 18, 46, 0), 4, "Test"), 
        new Sleep(new Date(2024, 2, 7, 22, 34, 0), new Date(2024, 2, 8, 7, 6, 0), 4)
    );

    // user.addDay(
    //     new Day(new Date(2024, 2, 9)), 
    //     new AfternoonCrash(new Date(2024, 2, 9, 15, 27, 0), new Date(2024, 2, 9, 16, 7, 0), 4, "Test"), 
    //     new Sleep(new Date(2024, 2, 8, 22, 10, 0), new Date(2024, 2, 9, 7, 15, 0), 5)
    // );

    // user.addDay(
    //     new Day(new Date(2024, 2, 10)), 
    //     new AfternoonCrash(new Date(2024, 2, 10, 15, 14, 0), new Date(2024, 2, 10, 16, 27, 0), 4, "Test"), 
    //     new Sleep(new Date(2024, 2, 9, 23, 55, 0), new Date(2024, 2, 10, 7, 32, 0), 4)
    // );

    // user.addDay(
    //     new Day(new Date(2024, 2, 11)), 
    //     new AfternoonCrash(new Date(2024, 2, 11, 16, 52, 0), new Date(2024, 2, 11, 17, 31, 0), 2, "Test"), 
    //     new Sleep(new Date(2024, 2, 10, 23, 4, 0), new Date(2024, 2, 11, 7, 13, 0), 4)
    // );

    // user.addDay(
    //     new Day(new Date(2024, 2, 12)), 
    //     new AfternoonCrash(new Date(2024, 2, 12, 15, 13, 0), new Date(2024, 2, 12, 15, 16, 0), 3, "Test"), 
    //     new Sleep(new Date(2024, 2, 11, 22, 15, 0), new Date(2024, 2, 12, 7, 56, 0), 3)
    // );

    // user.addDay(
    //     new Day(new Date(2024, 2, 13)), 
    //     new AfternoonCrash(new Date(2024, 2, 13, 17, 26, 0), new Date(2024, 2, 13, 18, 32, 0), 4, "Test"), 
    //     new Sleep(new Date(2024, 2, 12, 22, 49, 0), new Date(2024, 2, 13, 8, 13, 0), 2)
    // );

    // user.addDay(
    //     new Day(new Date(2024, 2, 14)), 
    //     new AfternoonCrash(new Date(2024, 2, 14, 16, 47, 0), new Date(2024, 2, 14, 18, 10, 0), 3, "Test"), 
    //     new Sleep(new Date(2024, 2, 13, 23, 21, 0), new Date(2024, 2, 14, 8, 39, 0), 5)
    // );

    // user.addDay(
    //     new Day(new Date(2024, 2, 15)), 
    //     new AfternoonCrash(new Date(2024, 2, 15, 15, 11, 0), new Date(2024, 2, 15, 16, 22, 0), 2, "Test"), 
    //     new Sleep(new Date(2024, 2, 14, 22, 12, 0), new Date(2024, 2, 15, 6, 55, 0), 1)
    // );

    // user.addDay(
    //     new Day(new Date(2024, 2, 16)), 
    //     new AfternoonCrash(new Date(2024, 2, 16, 17, 17, 0), new Date(2024, 2, 16, 18, 38, 0), 2, "Test"), 
    //     new Sleep(new Date(2024, 2, 15, 23, 34, 0), new Date(2024, 2, 16, 7, 53, 0), 1)
    // );

    // user.addDay(
    //     new Day(new Date(2024, 2, 17)), 
    //     new AfternoonCrash(new Date(2024, 2, 17, 16, 47, 0), new Date(2024, 2, 17, 18, 37, 0), 1, "Test"), 
    //     new Sleep(new Date(2024, 2, 16, 22, 59, 0), new Date(2024, 2, 17, 7, 2, 0), 3)
    // );

    // user.addDay(
    //     new Day(new Date(2024, 2, 18)), 
    //     new AfternoonCrash(new Date(2024, 2, 18, 15, 19, 0), new Date(2024, 2, 18, 15, 36, 0), 4, "Test"), 
    //     new Sleep(new Date(2024, 2, 17, 23, 16, 0), new Date(2024, 2, 18, 8, 57, 0), 4)
    // );

    // user.addDay(
    //     new Day(new Date(2024, 2, 19)), 
    //     new AfternoonCrash(new Date(2024, 2, 19, 15, 16, 0), new Date(2024, 2, 19, 15, 58, 0), 3, "Test"), 
    //     new Sleep(new Date(2024, 2, 18, 23, 10, 0), new Date(2024, 2, 19, 8, 19, 0), 3)
    // );

    // user.addDay(
    //     new Day(new Date(2024, 2, 20)), 
    //     new AfternoonCrash(new Date(2024, 2, 20, 16, 33, 0), new Date(2024, 2, 20, 17, 23, 0), 5, "Test"), 
    //     new Sleep(new Date(2024, 2, 19, 23, 52, 0), new Date(2024, 2, 20, 7, 55, 0), 2)
    // );

    // user.addDay(
    //     new Day(new Date(2024, 2, 21)), 
    //     new AfternoonCrash(new Date(2024, 2, 21, 16, 33, 0), new Date(2024, 2, 21, 18, 2, 0), 4, "Test"), 
    //     new Sleep(new Date(2024, 2, 20, 22, 32, 0), new Date(2024, 2, 21, 6, 26, 0), 1)
    // );

    // user.addDay(
    //     new Day(new Date(2024, 2, 22)), 
    //     new AfternoonCrash(new Date(2024, 2, 22, 17, 7, 0), new Date(2024, 2, 22, 18, 46, 0), 5, "Test"), 
    //     new Sleep(new Date(2024, 2, 21, 22, 0, 0), new Date(2024, 2, 22, 6, 51, 0), 5)
    // );

    // user.addDay(
    //     new Day(new Date(2024, 2, 23)), 
    //     new AfternoonCrash(new Date(2024, 2, 23, 16, 12, 0), new Date(2024, 2, 23, 17, 50, 0), 2, "Test"), 
    //     new Sleep(new Date(2024, 2, 22, 22, 46, 0), new Date(2024, 2, 23, 8, 15, 0), 1)
    // );

    // user.addDay(
    //     new Day(new Date(2024, 2, 24)), 
    //     new AfternoonCrash(new Date(2024, 2, 24, 16, 26, 0), new Date(2024, 2, 24, 17, 4, 0), 2, "Test"), 
    //     new Sleep(new Date(2024, 2, 23, 23, 18, 0), new Date(2024, 2, 24, 8, 3, 0), 4)
    // );

    // user.addDay(
    //     new Day(new Date(2024, 2, 25)), 
    //     new AfternoonCrash(new Date(2024, 2, 25, 17, 4, 0), new Date(2024, 2, 25, 17, 31, 0), 3, "Test"), 
    //     new Sleep(new Date(2024, 2, 24, 23, 6, 0), new Date(2024, 2, 25, 7, 6, 0), 2)
    // );

    // user.addDay(
    //     new Day(new Date(2024, 2, 26)), 
    //     new AfternoonCrash(new Date(2024, 2, 26, 15, 14, 0), new Date(2024, 2, 26, 16, 9, 0), 4, "Test"), 
    //     new Sleep(new Date(2024, 2, 25, 23, 37, 0), new Date(2024, 2, 26, 6, 35, 0), 3)
    // );

    // user.addDay(
    //     new Day(new Date(2024, 2, 27)), 
    //     new AfternoonCrash(new Date(2024, 2, 27, 15, 14, 0), new Date(2024, 2, 27, 16, 36, 0), 1, "Test"), 
    //     new Sleep(new Date(2024, 2, 26, 22, 16, 0), new Date(2024, 2, 27, 6, 20, 0), 2)
    // );

    // user.addDay(
    //     new Day(new Date(2024, 2, 28)), 
    //     new AfternoonCrash(new Date(2024, 2, 28, 17, 31, 0), new Date(2024, 2, 28, 18, 43, 0), 2, "Test"), 
    //     new Sleep(new Date(2024, 2, 27, 23, 12, 0), new Date(2024, 2, 28, 6, 8, 0), 1)
    // );

    // user.addDay(
    //     new Day(new Date(2024, 2, 29)), 
    //     new AfternoonCrash(new Date(2024, 2, 29, 16, 10, 0), new Date(2024, 2, 29, 18, 0, 0), 3, "Test"), 
    //     new Sleep(new Date(2024, 2, 28, 23, 46, 0), new Date(2024, 2, 29, 8, 5, 0), 1)
    // );

    // user.addDay(
    //     new Day(new Date(2024, 2, 30)), 
    //     new AfternoonCrash(new Date(2024, 2, 30, 15, 58, 0), new Date(2024, 2, 30, 17, 38, 0), 2, "Test"), 
    //     new Sleep(new Date(2024, 2, 29, 22, 30, 0), new Date(2024, 2, 30, 7, 28, 0), 3)
    // );

    // user.addDay(
    //     new Day(new Date(2024, 2, 31)), 
    //     new AfternoonCrash(new Date(2024, 2, 31, 15, 58, 0), new Date(2024, 2, 31, 16, 23, 0), 2, "Test"), 
    //     new Sleep(new Date(2024, 2, 30, 22, 36, 0), new Date(2024, 2, 31, 6, 28, 0), 5)
    // );

    // user.addDay(
    //     new Day(new Date(2024, 3, 1)), 
    //     new AfternoonCrash(new Date(2024, 3, 1, 16, 31, 0), new Date(2024, 3, 1, 17, 57, 0), 1, "Test"), 
    //     new Sleep(new Date(2024, 2, 31, 22, 19, 0), new Date(2024, 3, 1, 8, 7, 0), 5)
    // );

    // user.addDay(
    //     new Day(new Date(2024, 3, 2)), 
    //     new AfternoonCrash(new Date(2024, 3, 2, 17, 22, 0), new Date(2024, 3, 2, 18, 52, 0), 4, "Test"), 
    //     new Sleep(new Date(2024, 3, 1, 22, 41, 0), new Date(2024, 3, 2, 6, 15, 0), 4)
    // );

    // user.addDay(
    //     new Day(new Date(2024, 3, 3)), 
    //     new AfternoonCrash(new Date(2024, 3, 3, 15, 50, 0), new Date(2024, 3, 3, 17, 14, 0), 4, "Test"), 
    //     new Sleep(new Date(2024, 3, 2, 23, 6, 0), new Date(2024, 3, 3, 7, 21, 0), 2)
    // );

    // user.addDay(
    //     new Day(new Date(2024, 3, 4)), 
    //     new AfternoonCrash(new Date(2024, 3, 4, 17, 30, 0), new Date(2024, 3, 4, 18, 9, 0), 5, "Test"), 
    //     new Sleep(new Date(2024, 3, 3, 23, 21, 0), new Date(2024, 3, 4, 8, 26, 0), 5)
    // );

    // user.addDay(
    //     new Day(new Date(2024, 3, 5)), 
    //     new AfternoonCrash(new Date(2024, 3, 5, 17, 49, 0), new Date(2024, 3, 5, 19, 0, 0), 3, "Test"), 
    //     new Sleep(new Date(2024, 3, 4, 23, 22, 0), new Date(2024, 3, 5, 8, 18, 0), 2)
    // );

    // user.addDay(
    //     new Day(new Date(2024, 3, 6)), 
    //     new AfternoonCrash(new Date(2024, 3, 6, 17, 23, 0), new Date(2024, 3, 6, 17, 40, 0), 4, "Test"), 
    //     new Sleep(new Date(2024, 3, 5, 22, 27, 0), new Date(2024, 3, 6, 8, 11, 0), 5)
    // );

    // user.addDay(
    //     new Day(new Date(2024, 3, 7)), 
    //     new AfternoonCrash(new Date(2024, 3, 7, 15, 10, 0), new Date(2024, 3, 7, 15, 51, 0), 5, "Test"), 
    //     new Sleep(new Date(2024, 3, 6, 22, 53, 0), new Date(2024, 3, 7, 6, 53, 0), 4)
    // );

    // user.addDay(
    //     new Day(new Date(2024, 3, 8)), 
    //     new AfternoonCrash(new Date(2024, 3, 8, 17, 4, 0), new Date(2024, 3, 8, 17, 17, 0), 1, "Test"), 
    //     new Sleep(new Date(2024, 3, 7, 23, 6, 0), new Date(2024, 3, 8, 6, 27, 0), 5)
    // );

    // user.addDay(
    //     new Day(new Date(2024, 2, 8)), 
    //     new AfternoonCrash(new Date(2024, 2, 8, 17, 47, 0), new Date(2024, 2, 8, 18, 46, 0), 4, "Test"), 
    //     new Sleep(new Date(2024, 2, 7, 22, 34, 0), new Date(2024, 2, 8, 7, 6, 0), 4)
    // );

    // user.addDay(
    //     new Day(new Date(2024, 2, 9)), 
    //     new AfternoonCrash(new Date(2024, 2, 9, 15, 27, 0), new Date(2024, 2, 9, 16, 7, 0), 4, "Test"), 
    //     new Sleep(new Date(2024, 2, 8, 22, 10, 0), new Date(2024, 2, 9, 7, 15, 0), 5)
    // );

    // user.addDay(
    //     new Day(new Date(2024, 2, 10)), 
    //     new AfternoonCrash(new Date(2024, 2, 10, 15, 14, 0), new Date(2024, 2, 10, 16, 27, 0), 4, "Test"), 
    //     new Sleep(new Date(2024, 2, 9, 23, 55, 0), new Date(2024, 2, 10, 7, 32, 0), 4)
    // );

    // user.addDay(
    //     new Day(new Date(2024, 2, 11)), 
    //     new AfternoonCrash(new Date(2024, 2, 11, 16, 52, 0), new Date(2024, 2, 11, 17, 31, 0), 2, "Test"), 
    //     new Sleep(new Date(2024, 2, 10, 23, 4, 0), new Date(2024, 2, 11, 7, 13, 0), 4)
    // );

    // user.addDay(
    //     new Day(new Date(2024, 2, 12)), 
    //     new AfternoonCrash(new Date(2024, 2, 12, 15, 13, 0), new Date(2024, 2, 12, 15, 16, 0), 3, "Test"), 
    //     new Sleep(new Date(2024, 2, 11, 22, 15, 0), new Date(2024, 2, 12, 7, 56, 0), 3)
    // );

    // user.addDay(
    //     new Day(new Date(2024, 2, 13)), 
    //     new AfternoonCrash(new Date(2024, 2, 13, 17, 26, 0), new Date(2024, 2, 13, 18, 32, 0), 4, "Test"), 
    //     new Sleep(new Date(2024, 2, 12, 22, 49, 0), new Date(2024, 2, 13, 8, 13, 0), 2)
    // );

    // user.addDay(
    //     new Day(new Date(2024, 2, 14)), 
    //     new AfternoonCrash(new Date(2024, 2, 14, 16, 47, 0), new Date(2024, 2, 14, 18, 10, 0), 3, "Test"), 
    //     new Sleep(new Date(2024, 2, 13, 23, 21, 0), new Date(2024, 2, 14, 8, 39, 0), 5)
    // );

    // user.addDay(
    //     new Day(new Date(2024, 2, 15)), 
    //     new AfternoonCrash(new Date(2024, 2, 15, 15, 11, 0), new Date(2024, 2, 15, 16, 22, 0), 2, "Test"), 
    //     new Sleep(new Date(2024, 2, 14, 22, 12, 0), new Date(2024, 2, 15, 6, 55, 0), 1)
    // );

    // user.addDay(
    //     new Day(new Date(2024, 2, 16)), 
    //     new AfternoonCrash(new Date(2024, 2, 16, 17, 17, 0), new Date(2024, 2, 16, 18, 38, 0), 2, "Test"), 
    //     new Sleep(new Date(2024, 2, 15, 23, 34, 0), new Date(2024, 2, 16, 7, 53, 0), 1)
    // );

    // user.addDay(
    //     new Day(new Date(2024, 2, 17)), 
    //     new AfternoonCrash(new Date(2024, 2, 17, 16, 47, 0), new Date(2024, 2, 17, 18, 37, 0), 1, "Test"), 
    //     new Sleep(new Date(2024, 2, 16, 22, 59, 0), new Date(2024, 2, 17, 7, 2, 0), 3)
    // );

    // user.addDay(
    //     new Day(new Date(2024, 2, 18)), 
    //     new AfternoonCrash(new Date(2024, 2, 18, 15, 19, 0), new Date(2024, 2, 18, 15, 36, 0), 4, "Test"), 
    //     new Sleep(new Date(2024, 2, 17, 23, 16, 0), new Date(2024, 2, 18, 8, 57, 0), 4)
    // );

    // user.addDay(
    //     new Day(new Date(2024, 2, 19)), 
    //     new AfternoonCrash(new Date(2024, 2, 19, 15, 16, 0), new Date(2024, 2, 19, 15, 58, 0), 3, "Test"), 
    //     new Sleep(new Date(2024, 2, 18, 23, 10, 0), new Date(2024, 2, 19, 8, 19, 0), 3)
    // );

    // user.addDay(
    //     new Day(new Date(2024, 2, 20)), 
    //     new AfternoonCrash(new Date(2024, 2, 20, 16, 33, 0), new Date(2024, 2, 20, 17, 23, 0), 5, "Test"), 
    //     new Sleep(new Date(2024, 2, 19, 23, 52, 0), new Date(2024, 2, 20, 7, 55, 0), 2)
    // );

    // user.addDay(
    //     new Day(new Date(2024, 2, 21)), 
    //     new AfternoonCrash(new Date(2024, 2, 21, 16, 33, 0), new Date(2024, 2, 21, 18, 2, 0), 4, "Test"), 
    //     new Sleep(new Date(2024, 2, 20, 22, 32, 0), new Date(2024, 2, 21, 6, 26, 0), 1)
    // );

    // user.addDay(
    //     new Day(new Date(2024, 2, 22)), 
    //     new AfternoonCrash(new Date(2024, 2, 22, 17, 7, 0), new Date(2024, 2, 22, 18, 46, 0), 5, "Test"), 
    //     new Sleep(new Date(2024, 2, 21, 22, 0, 0), new Date(2024, 2, 22, 6, 51, 0), 5)
    // );

    // user.addDay(
    //     new Day(new Date(2024, 2, 23)), 
    //     new AfternoonCrash(new Date(2024, 2, 23, 16, 12, 0), new Date(2024, 2, 23, 17, 50, 0), 2, "Test"), 
    //     new Sleep(new Date(2024, 2, 22, 22, 46, 0), new Date(2024, 2, 23, 8, 15, 0), 1)
    // );

    // user.addDay(
    //     new Day(new Date(2024, 2, 24)), 
    //     new AfternoonCrash(new Date(2024, 2, 24, 16, 26, 0), new Date(2024, 2, 24, 17, 4, 0), 2, "Test"), 
    //     new Sleep(new Date(2024, 2, 23, 23, 18, 0), new Date(2024, 2, 24, 8, 3, 0), 4)
    // );

    // user.addDay(
    //     new Day(new Date(2024, 2, 25)), 
    //     new AfternoonCrash(new Date(2024, 2, 25, 17, 4, 0), new Date(2024, 2, 25, 17, 31, 0), 3, "Test"), 
    //     new Sleep(new Date(2024, 2, 24, 23, 6, 0), new Date(2024, 2, 25, 7, 6, 0), 2)
    // );

    // user.addDay(
    //     new Day(new Date(2024, 2, 26)), 
    //     new AfternoonCrash(new Date(2024, 2, 26, 15, 14, 0), new Date(2024, 2, 26, 16, 9, 0), 4, "Test"), 
    //     new Sleep(new Date(2024, 2, 25, 23, 37, 0), new Date(2024, 2, 26, 6, 35, 0), 3)
    // );

    // user.addDay(
    //     new Day(new Date(2024, 2, 27)), 
    //     new AfternoonCrash(new Date(2024, 2, 27, 15, 14, 0), new Date(2024, 2, 27, 16, 36, 0), 1, "Test"), 
    //     new Sleep(new Date(2024, 2, 26, 22, 16, 0), new Date(2024, 2, 27, 6, 20, 0), 2)
    // );

    // user.addDay(
    //     new Day(new Date(2024, 2, 28)), 
    //     new AfternoonCrash(new Date(2024, 2, 28, 17, 31, 0), new Date(2024, 2, 28, 18, 43, 0), 2, "Test"), 
    //     new Sleep(new Date(2024, 2, 27, 23, 12, 0), new Date(2024, 2, 28, 6, 8, 0), 1)
    // );

    // user.addDay(
    //     new Day(new Date(2024, 2, 29)), 
    //     new AfternoonCrash(new Date(2024, 2, 29, 16, 10, 0), new Date(2024, 2, 29, 18, 0, 0), 3, "Test"), 
    //     new Sleep(new Date(2024, 2, 28, 23, 46, 0), new Date(2024, 2, 29, 8, 5, 0), 1)
    // );

    // user.addDay(
    //     new Day(new Date(2024, 2, 30)), 
    //     new AfternoonCrash(new Date(2024, 2, 30, 15, 58, 0), new Date(2024, 2, 30, 17, 38, 0), 2, "Test"), 
    //     new Sleep(new Date(2024, 2, 29, 22, 30, 0), new Date(2024, 2, 30, 7, 28, 0), 3)
    // );

    // user.addDay(
    //     new Day(new Date(2024, 2, 31)), 
    //     new AfternoonCrash(new Date(2024, 2, 31, 15, 58, 0), new Date(2024, 2, 31, 16, 23, 0), 2, "Test"), 
    //     new Sleep(new Date(2024, 2, 30, 22, 36, 0), new Date(2024, 2, 31, 6, 28, 0), 5)
    // );

    // user.addDay(
    //     new Day(new Date(2024, 3, 1)), 
    //     new AfternoonCrash(new Date(2024, 3, 1, 16, 31, 0), new Date(2024, 3, 1, 17, 57, 0), 1, "Test"), 
    //     new Sleep(new Date(2024, 2, 31, 22, 19, 0), new Date(2024, 3, 1, 8, 7, 0), 5)
    // );

    // user.addDay(
    //     new Day(new Date(2024, 3, 2)), 
    //     new AfternoonCrash(new Date(2024, 3, 2, 17, 22, 0), new Date(2024, 3, 2, 18, 52, 0), 4, "Test"), 
    //     new Sleep(new Date(2024, 3, 1, 22, 41, 0), new Date(2024, 3, 2, 6, 15, 0), 4)
    // );

    // user.addDay(
    //     new Day(new Date(2024, 3, 3)), 
    //     new AfternoonCrash(new Date(2024, 3, 3, 15, 50, 0), new Date(2024, 3, 3, 17, 14, 0), 4, "Test"), 
    //     new Sleep(new Date(2024, 3, 2, 23, 6, 0), new Date(2024, 3, 3, 7, 21, 0), 2)
    // );

    // user.addDay(
    //     new Day(new Date(2024, 3, 4)), 
    //     new AfternoonCrash(new Date(2024, 3, 4, 17, 30, 0), new Date(2024, 3, 4, 18, 9, 0), 5, "Test"), 
    //     new Sleep(new Date(2024, 3, 3, 23, 21, 0), new Date(2024, 3, 4, 8, 26, 0), 5)
    // );

    // user.addDay(
    //     new Day(new Date(2024, 3, 5)), 
    //     new AfternoonCrash(new Date(2024, 3, 5, 17, 49, 0), new Date(2024, 3, 5, 19, 0, 0), 3, "Test"), 
    //     new Sleep(new Date(2024, 3, 4, 23, 22, 0), new Date(2024, 3, 5, 8, 18, 0), 2)
    // );

    // user.addDay(
    //     new Day(new Date(2024, 3, 6)), 
    //     new AfternoonCrash(new Date(2024, 3, 6, 17, 23, 0), new Date(2024, 3, 6, 17, 40, 0), 4, "Test"), 
    //     new Sleep(new Date(2024, 3, 5, 22, 27, 0), new Date(2024, 3, 6, 8, 11, 0), 5)
    // );

    // user.addDay(
    //     new Day(new Date(2024, 3, 7)), 
    //     new AfternoonCrash(new Date(2024, 3, 7, 15, 10, 0), new Date(2024, 3, 7, 15, 51, 0), 5, "Test"), 
    //     new Sleep(new Date(2024, 3, 6, 22, 53, 0), new Date(2024, 3, 7, 6, 53, 0), 4)
    // );

    // user.addDay(
    //     new Day(new Date(2024, 3, 8)), 
    //     new AfternoonCrash(new Date(2024, 3, 8, 17, 4, 0), new Date(2024, 3, 8, 17, 17, 0), 1, "Test"), 
    //     new Sleep(new Date(2024, 3, 7, 23, 6, 0), new Date(2024, 3, 8, 6, 27, 0), 5)
    // );

    // user.addDay(
    //     new Day(new Date(2024, 3, 9)),
    //     new AfternoonCrash(new Date(2024, 3, 9, 16, 51, 0), new Date(2024, 3, 9, 18, 35, 0), 2, "Test"),
    //     new Sleep(new Date(2024, 3, 8, 22, 48, 0), new Date(2024, 3, 9, 8, 7, 0), 1)
    // );

    // user.addDay(
    //     new Day(new Date(2024, 3, 10)),
    //     new AfternoonCrash(new Date(2024, 3, 10, 15, 55, 0), new Date(2024, 3, 10, 16, 33, 0), 3, "Test"),
    //     new Sleep(new Date(2024, 3, 9, 22, 13, 0), new Date(2024, 3, 10, 8, 46, 0), 5)
    // );

    // user.addDay(
    //     new Day(new Date(2024, 3, 11)),
    //     new AfternoonCrash(new Date(2024, 3, 11, 15, 1, 0), new Date(2024, 3, 11, 16, 11, 0), 1, "Test"),
    //     new Sleep(new Date(2024, 3, 10, 23, 36, 0), new Date(2024, 3, 11, 6, 27, 0), 1)
    // );

    // user.addDay(
    //     new Day(new Date(2024, 3, 12)),
    //     new AfternoonCrash(new Date(2024, 3, 12, 16, 20, 0), new Date(2024, 3, 12, 18, 8, 0), 2, "Test"),
    //     new Sleep(new Date(2024, 3, 11, 23, 22, 0), new Date(2024, 3, 12, 8, 3, 0), 1)
    // );

    // user.addDay(
    //     new Day(new Date(2024, 3, 13)),
    //     new AfternoonCrash(new Date(2024, 3, 13, 17, 33, 0), new Date(2024, 3, 13, 18, 3, 0), 1, "Test"),
    //     new Sleep(new Date(2024, 3, 12, 22, 51, 0), new Date(2024, 3, 13, 7, 28, 0), 5)
    // );

    // user.addDay(
    //     new Day(new Date(2024, 3, 14)),
    //     new AfternoonCrash(new Date(2024, 3, 14, 17, 39, 0), new Date(2024, 3, 14, 18, 18, 0), 4, "Test"),
    //     new Sleep(new Date(2024, 3, 13, 23, 47, 0), new Date(2024, 3, 14, 8, 27, 0), 1)
    // );

    // user.addDay(
    //     new Day(new Date(2024, 3, 15)),
    //     new AfternoonCrash(new Date(2024, 3, 15, 16, 31, 0), new Date(2024, 3, 15, 17, 49, 0), 5, "Test"),
    //     new Sleep(new Date(2024, 3, 14, 23, 27, 0), new Date(2024, 3, 15, 8, 36, 0), 3)
    // );

    // user.addDay(
    //     new Day(new Date(2024, 3, 16)),
    //     new AfternoonCrash(new Date(2024, 3, 16, 16, 8, 0), new Date(2024, 3, 16, 16, 24, 0), 5, "Test"),
    //     new Sleep(new Date(2024, 3, 15, 23, 35, 0), new Date(2024, 3, 16, 8, 32, 0), 5)
    // );

    // user.addDay(
    //     new Day(new Date(2024, 3, 17)),
    //     new AfternoonCrash(new Date(2024, 3, 17, 17, 7, 0), new Date(2024, 3, 17, 17, 58, 0), 5, "Test"),
    //     new Sleep(new Date(2024, 3, 16, 22, 44, 0), new Date(2024, 3, 17, 6, 55, 0), 5)
    // );

    // user.addDay(
    //     new Day(new Date(2024, 3, 18)),
    //     new AfternoonCrash(new Date(2024, 3, 18, 17, 33, 0), new Date(2024, 3, 18, 19, 19, 0), 3, "Test"),
    //     new Sleep(new Date(2024, 3, 17, 23, 47, 0), new Date(2024, 3, 18, 7, 42, 0), 5)
    // );

    // user.addDay(
    //     new Day(new Date(2024, 3, 19)),
    //     new AfternoonCrash(new Date(2024, 3, 19, 16, 42, 0), new Date(2024, 3, 19, 18, 14, 0), 2, "Test"),
    //     new Sleep(new Date(2024, 3, 18, 22, 37, 0), new Date(2024, 3, 19, 7, 20, 0), 1)
    // );

    // user.addDay(
    //     new Day(new Date(2024, 3, 20)),
    //     new AfternoonCrash(new Date(2024, 3, 20, 17, 31, 0), new Date(2024, 3, 20, 18, 15, 0), 3, "Test"),
    //     new Sleep(new Date(2024, 3, 19, 23, 52, 0), new Date(2024, 3, 20, 7, 59, 0), 4)
    // );

    // user.addDay(
    //     new Day(new Date(2024, 3, 21)),
    //     new AfternoonCrash(new Date(2024, 3, 21, 17, 59, 0), new Date(2024, 3, 21, 18, 55, 0), 4, "Test"),
    //     new Sleep(new Date(2024, 3, 20, 22, 2, 0), new Date(2024, 3, 21, 7, 56, 0), 2)
    // );

    // user.addDay(
    //     new Day(new Date(2024, 3, 22)),
    //     new AfternoonCrash(new Date(2024, 3, 22, 17, 30, 0), new Date(2024, 3, 22, 17, 30, 0), 2, "Test"),
    //     new Sleep(new Date(2024, 3, 21, 23, 36, 0), new Date(2024, 3, 22, 6, 27, 0), 2)
    // );

    // user.addDay(
    //     new Day(new Date(2024, 3, 23)),
    //     new AfternoonCrash(new Date(2024, 3, 23, 17, 34, 0), new Date(2024, 3, 23, 18, 12, 0), 3, "Test"),
    //     new Sleep(new Date(2024, 3, 22, 22, 19, 0), new Date(2024, 3, 23, 6, 35, 0), 2)
    // );

    // user.addDay(
    //     new Day(new Date(2024, 3, 24)),
    //     new AfternoonCrash(new Date(2024, 3, 24, 16, 29, 0), new Date(2024, 3, 24, 17, 30, 0), 2, "Test"),
    //     new Sleep(new Date(2024, 3, 23, 23, 14, 0), new Date(2024, 3, 24, 8, 55, 0), 3)
    // );

    // user.addDay(
    //     new Day(new Date(2024, 3, 25)),
    //     new AfternoonCrash(new Date(2024, 3, 25, 16, 33, 0), new Date(2024, 3, 25, 17, 19, 0), 4, "Test"),
    //     new Sleep(new Date(2024, 3, 24, 22, 56, 0), new Date(2024, 3, 25, 6, 30, 0), 5)
    // );

    // user.addDay(
    //     new Day(new Date(2024, 3, 26)),
    //     new AfternoonCrash(new Date(2024, 3, 26, 16, 4, 0), new Date(2024, 3, 26, 17, 58, 0), 5, "Test"),
    //     new Sleep(new Date(2024, 3, 25, 22, 55, 0), new Date(2024, 3, 26, 6, 30, 0), 1)
    // );

    // user.addDay(
    //     new Day(new Date(2024, 3, 27)),
    //     new AfternoonCrash(new Date(2024, 3, 27, 15, 33, 0), new Date(2024, 3, 27, 17, 21, 0), 1, "Test"),
    //     new Sleep(new Date(2024, 3, 26, 22, 24, 0), new Date(2024, 3, 27, 7, 58, 0), 5)
    // );

    // user.addDay(
    //     new Day(new Date(2024, 3, 28)),
    //     new AfternoonCrash(new Date(2024, 3, 28, 16, 38, 0), new Date(2024, 3, 28, 17, 59, 0), 2, "Test"),
    //     new Sleep(new Date(2024, 3, 27, 23, 34, 0), new Date(2024, 3, 28, 6, 18, 0), 3)
    // );

    // user.addDay(
    //     new Day(new Date(2024, 3, 29)),
    //     new AfternoonCrash(new Date(2024, 3, 29, 15, 52, 0), new Date(2024, 3, 29, 15, 55, 0), 4, "Test"),
    //     new Sleep(new Date(2024, 3, 28, 22, 19, 0), new Date(2024, 3, 29, 8, 38, 0), 4)
    // );

    // user.addDay(
    //     new Day(new Date(2024, 3, 30)),
    //     new AfternoonCrash(new Date(2024, 3, 30, 15, 24, 0), new Date(2024, 3, 30, 16, 21, 0), 4, "Test"),
    //     new Sleep(new Date(2024, 3, 29, 22, 39, 0), new Date(2024, 3, 30, 7, 7, 0), 2)
    // );

    // user.addDay(
    //     new Day(new Date(2024, 4, 1)),
    //     new AfternoonCrash(new Date(2024, 4, 1, 15, 22, 0), new Date(2024, 4, 1, 16, 34, 0), 2, "Test"),
    //     new Sleep(new Date(2024, 3, 30, 23, 37, 0), new Date(2024, 4, 1, 8, 40, 0), 4)
    // );

    // user.addDay(
    //     new Day(new Date(2024, 4, 2)),
    //     new AfternoonCrash(new Date(2024, 4, 2, 16, 31, 0), new Date(2024, 4, 2, 17, 14, 0), 4, "Test"),
    //     new Sleep(new Date(2024, 5, 1, 23, 31, 0), new Date(2024, 5, 2, 7, 19, 0), 4)
    // );

    // user.addDay(
    //     new Day(new Date(2024, 4, 3)),
    //     new AfternoonCrash(new Date(2024, 4, 3, 16, 41, 0), new Date(2024, 4, 3, 16, 57, 0), 1, "Test"),
    //     new Sleep(new Date(2024, 5, 2, 23, 16, 0), new Date(2024, 5, 3, 8, 52, 0), 4)
    // );

    // user.addDay(
    //     new Day(new Date(2024, 4, 4)),
    //     new AfternoonCrash(new Date(2024, 4, 4, 17, 30, 0), new Date(2024, 4, 4, 18, 19, 0), 3, "Test"),
    //     new Sleep(new Date(2024, 5, 3, 23, 21, 0), new Date(2024, 5, 4, 8, 26, 0), 5)
    // );

    // user.addDay(
    //     new Day(new Date(2024, 4, 5)),
    //     new AfternoonCrash(new Date(2024, 4, 5, 17, 49, 0), new Date(2024, 4, 5, 19, 0, 0), 3, "Test"),
    //     new Sleep(new Date(2024, 5, 4, 23, 22, 0), new Date(2024, 5, 5, 8, 18, 0), 2)
    // );

    // user.addDay(
    //     new Day(new Date(2024, 4, 6)),
    //     new AfternoonCrash(new Date(2024, 4, 6, 17, 23, 0), new Date(2024, 4, 6, 17, 40, 0), 4, "Test"),
    //     new Sleep(new Date(2024, 5, 5, 22, 27, 0), new Date(2024, 5, 6, 8, 11, 0), 5)
    // );

    // user.addDay(
    //     new Day(new Date(2024, 4, 7)),
    //     new AfternoonCrash(new Date(2024, 4, 7, 15, 10, 0), new Date(2024, 4, 7, 15, 51, 0), 5, "Test"),
    //     new Sleep(new Date(2024, 5, 6, 22, 53, 0), new Date(2024, 5, 7, 6, 53, 0), 4)
    // );

    // user.addDay(
    //     new Day(new Date(2024, 4, 8)),
    //     new AfternoonCrash(new Date(2024, 4, 8, 17, 4, 0), new Date(2024, 4, 8, 17, 17, 0), 1, "Test"),
    //     new Sleep(new Date(2024, 5, 7, 23, 6, 0), new Date(2024, 5, 8, 6, 27, 0), 5)
    // );
}


// function loadDefaultData(user) {
//     // Read the CSV file
//     RNFS.readFileAssets('data/Afternoon_Fake.csv', 'utf8')
//         .then((contents) => {
//             // Parse CSV data line by line
//             contents
//                 .trim() // Remove leading/trailing whitespace
//                 .split('\n') // Split into lines
//                 .slice(1) // Skip the header line
//                 .forEach((line) => {
//                     // Parse each CSV line
//                     const [
//                         dateString,
//                         crashStartString,
//                         crashDurationString,
//                         crashEndString,
//                         crashScoreString,
//                         description,
//                         sleepStartString,
//                         sleepDurationString,
//                         sleepScoreString
//                     ] = line.split(',');

//                     // Parse dates and times
//                     const date = parse(dateString, 'yyyy-MM-dd', new Date());
//                     const crashStart = parse(crashStartString, 'HH:mm', new Date());
//                     const crashEnd = parse(crashEndString, 'HH:mm', new Date());
//                     const sleepStart = parse(sleepStartString, 'HH:mm', new Date());
//                     // Sleep start is always one day before the date
//                     const sleepEnd = parse(sleepStartString, 'HH:mm', new Date(date.getTime() + (24 * 60 * 60 * 1000)));

//                     // Convert duration strings to seconds
//                     const crashDuration = crashDurationString.split(':').reduce((acc, val, i) => acc + parseInt(val) * [3600, 60, 1][i], 0);
//                     const sleepDuration = sleepDurationString.split(':').reduce((acc, val, i) => acc + parseInt(val) * [3600, 60, 1][i], 0);

//                     // Create Sleep and AfternoonCrash objects
//                     const sleep = new Sleep(sleepStart, sleepEnd, parseInt(sleepScoreString));
//                     const crash = new AfternoonCrash(crashStart, crashEnd, parseInt(crashScoreString), description);

//                     // Create Day object
//                     const day = new Day(date, crash, sleep);

//                     // Add the day to the user's program
//                     user.addDay(day);
//                 });
//         })
//         .catch((error) => {
//             console.error('Error reading CSV file:', error);
//         });
// }


export default loadDefaultData;