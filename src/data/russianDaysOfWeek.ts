const russianDaysOfTheWeek = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'] as const

export const russianDaysToEnglishDayNumbers = {
    'понедельник': 1,
    'вторник': 2,
    'среда': 3,
    'четверг': 4,
    'пятница': 5,
    'суббота': 6,
    'воскресенье': 0,
} as const

export default russianDaysOfTheWeek;
