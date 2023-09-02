export default function changeTimeZone(date: Date, timeZone: string = 'Europe/Moscow') {
    return new Date(
        date.toLocaleString('en-US', {
            timeZone,
        }),
    );
}