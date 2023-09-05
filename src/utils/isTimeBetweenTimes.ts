import isLater, { isEarlier } from "./isLater";

export default function isTimeBetweenTimes(time: string, timeStart: string, timeEnd: string) {
    return isEarlier(timeStart, time) && isLater(timeEnd, time);
}