export default function isLater(time1: string, time2: string): boolean {
    const [hours1, minutes1] = time1.split(':').map((time) => parseInt(time, 10));
    const [hours2, minutes2] = time2.split(':').map((time) => parseInt(time, 10));
    return hours1 > hours2 || (hours1 === hours2 && minutes1 > minutes2);
}

export function isEarlier(time1: string, time2: string): boolean {
    const [hours1, minutes1] = time1.split(':').map((time) => parseInt(time, 10));
    const [hours2, minutes2] = time2.split(':').map((time) => parseInt(time, 10));
    return hours1 < hours2 || (hours1 === hours2 && minutes1 < minutes2);
}