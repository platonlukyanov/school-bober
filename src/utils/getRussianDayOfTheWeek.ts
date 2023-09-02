export default function getRussianDayOfTheWeek(date: Date): string {
    return date.toLocaleString('ru', { weekday: 'long' });
}
