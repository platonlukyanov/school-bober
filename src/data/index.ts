export interface ScheduleItem {
    start: string;
    end: string;
}

export interface Lesson extends ScheduleItem {
    code: SubjectCode
    lessonName: string;
    // teacher: string;
    // room: string;
}

export interface Break extends ScheduleItem {}

interface SchoolDay {
    dayOfTheWeek: number;
    lessons: Lesson[];
    breaks: Break[];
}

// Понедельник:
//         1. Разговор о важном 🪖
//         2. Физкультура ⛹️‍♀️
//          3. История ⌛️
//          4. Обществознание 🧍
//          5. Биология 🌱
//          6. Право ⚖️
//          7. Английский язык 🇬🇧
// Вторник:
//          1. Русский язык 📚
//          2. Литература 📚
//          3. Алгебра 📈
//          4. Алгебра 📈
//          5. Физкультура ⛹️‍♀️
//          6. Математика(Внеурочка для профиля)📈 
//          7. Английский язык 🇬🇧
// Среда:
//          1. Алгебра 📈
//          2. Геометрия 📐
//          3. Обществознание 🧍
//          4. Физика ⚛️
//          5. Астрономия
//          6. Английский язык 🇬🇧
// Четверг:
//          1. Химия 👩‍🔬
//          2. История ⌛️
//          3. Геометрия 📐
//          4. География 🌍
//          5. Информатика 💾
//          6. МХК 🎨
//          7. Профориентация 🪖
// Пятница:
//          1. Русский язык 📚
//          2. Физкультура ⛹️‍♀️
//          3. Литература 📚
//          4. Экономика 💸
//          5. Биология 🌱
//          6. Алгебра 📈
//          7. Литература 📚
// Суббота:
//         1. Физика ⚛️
//         2. Алгебра 📈
//         3. Химия 👩‍🔬
//        4.  Русский язык (Внеурочка к ЕГЭ) 📚
//        5. ОБЖ 🦺
//        6. История ⌛️

const tradionalBreaksStartsAndEnds: ScheduleItem[] = [
    {
        start: "9:15",
        end: "9:25",
    },
    {
        start: "10:10",
        end: "10:30",
    },
    {
        start: "11:15",
        end: "11:35",
    },
    {
        start: "12:20",
        end: "12:30",
    },
    {
        start: "13:15",
        end: "13:35",
    },
    {
        start: "14:20",
        end: "14:30",
    },
]
// TODO: link them
const tradionalLessonsStartsAndEnds: ScheduleItem[] = [
    {
        start: "8:30",
        end: "9:15",
    },
    {
        start: "9:25",
        end: "10:10",
    },
    {
        start: "10:30",
        end: "11:15",
    },
    {
        start: "11:35",
        end: "12:20",
    },
    {
        start: "12:30",
        end: "13:15",
    },
    {
        start: "13:35",
        end: "14:20",
    },
    {
        start: "14:30",
        end: "15:15",
    },
]

const saturdayBreaksStartsAndEnds: ScheduleItem[] = [
    {
        start: "9:15",
        end: "9:25"
    },
    {
        start: "10:10",
        end: "10:20"
    },
    {
        start: "11:05",
        end: "11:15"
    },
    {
        start: "12:00",
        end: "12:10"
    },
    {
        start: "12:55",
        end: "13:05"
    }
]

const saturdayLessonsStartsAndEnds: ScheduleItem[] = [
    {
        start: "8:30",
        end: "9:15",
    },
    {
        start: "9:25",
        end: "10:10"
    },
    {
        start: "10:20",
        end: "11:05"
    },
    {
        start: "11:15",
        end: "12:00"
    },
    {
        start: "12:10",
        end: "12:55"
    },
    {
        start: "13:05",
        end: "13:50"
    }
]

export const subjectsDict = {
    'conversation-about-important': 'Разговор о важном 🪖',
    'physical-education':'Физкультура ⛹️‍♀️',
    'history': 'История ⌛️',
    'social-studies': 'Обществознание 🧍',
    'biology': 'Биология 🌱',
    'law': 'Право ⚖️',
    'english': 'Английский язык 🇬🇧',
    'russian': 'Русский язык 📚',
    'russian-2': 'Русский язык (Внеурочка к ЕГЭ) 📚',
    'literature': 'Литература 📚',
    'algebra': 'Алгебра 📈',
    'mathematics': 'Математика (проф.)📈',
    'geometry': 'Геометрия 📐',
    'physics': 'Физика ⚛️',
    'astronomy': 'Астрономия',
    'chemistry': 'Химия 👩‍🔬',
    'geography': 'География 🌍',
    'informatics': 'Информатика 💾',
    'mhc': 'МХК 🎨',
    'career-guidance': 'Профориентация 🪖',
    'economics': 'Экономика 💸',
    'obzh': 'ОБЖ 🦺',
}

const lessonNames = new Map(Object.entries(subjectsDict))

export type SubjectCode = keyof typeof subjectsDict;

export const schedule: SchoolDay[] = [
    {
        dayOfTheWeek: 1,
        lessons: [
            {
                code: 'conversation-about-important',
                lessonName: lessonNames.get('conversation-about-important')!,
                start: tradionalLessonsStartsAndEnds[0].start,
                end: tradionalLessonsStartsAndEnds[0].end
            },
            {
                code: 'physical-education',
                lessonName: lessonNames.get('physical-education')!,
                start: tradionalLessonsStartsAndEnds[1].start,
                end: tradionalLessonsStartsAndEnds[1].end
            },
            {
                code: 'history',
                lessonName: lessonNames.get('history')!,
                start: tradionalLessonsStartsAndEnds[2].start,
                end: tradionalLessonsStartsAndEnds[2].end
            },
            {
                code: 'social-studies',
                lessonName: lessonNames.get('social-studies')!,
                start: tradionalLessonsStartsAndEnds[3].start,
                end: tradionalLessonsStartsAndEnds[3].end
            },
            {
                code: 'biology',
                lessonName: lessonNames.get('biology')!,
                start: tradionalLessonsStartsAndEnds[4].start,
                end: tradionalLessonsStartsAndEnds[4].end
            },
            {
                code: 'social-studies',
                lessonName: lessonNames.get('law')!,
                start: tradionalLessonsStartsAndEnds[5].start,
                end: tradionalLessonsStartsAndEnds[5].end
            },
            {
                code: 'english',
                lessonName: lessonNames.get('english')!,
                start: tradionalLessonsStartsAndEnds[6].start,
                end: tradionalLessonsStartsAndEnds[6].end
            }
        ],
        breaks: tradionalBreaksStartsAndEnds,
    },
    {
        dayOfTheWeek: 2,
        lessons: [
            {
                code: 'literature',
                lessonName: lessonNames.get('literature')!,
                start: tradionalLessonsStartsAndEnds[0].start,
                end: tradionalLessonsStartsAndEnds[0].end
            },
            {
                code: 'literature',
                lessonName: lessonNames.get('literature')!,
                start: tradionalLessonsStartsAndEnds[1].start,
                end: tradionalLessonsStartsAndEnds[1].end
            },
            {
                code: 'algebra',
                lessonName: lessonNames.get('algebra')!,
                start: tradionalLessonsStartsAndEnds[2].start,
                end: tradionalLessonsStartsAndEnds[2].end
            },
            {
                code: 'algebra',
                lessonName: lessonNames.get('algebra')!,
                start: tradionalLessonsStartsAndEnds[3].start,
                end: tradionalLessonsStartsAndEnds[3].end
            },
            {
                code: 'physical-education',
                lessonName: lessonNames.get('physical-education')!,
                start: tradionalLessonsStartsAndEnds[4].start,
                end: tradionalLessonsStartsAndEnds[4].end
            },
            {
                code: 'mathematics',
                lessonName: lessonNames.get('mathematics')!,
                start: tradionalLessonsStartsAndEnds[5].start,
                end: tradionalLessonsStartsAndEnds[5].end
            },
            {
                code: 'english',
                lessonName: lessonNames.get('english')!,
                start: tradionalLessonsStartsAndEnds[6].start,
                end: tradionalLessonsStartsAndEnds[6].end
            }
        ],
        breaks: tradionalBreaksStartsAndEnds,
    },
    {
        dayOfTheWeek: 3,
        lessons: [
            {
                code: 'algebra',
                lessonName: lessonNames.get('algebra')!,
                start: tradionalLessonsStartsAndEnds[0].start,
                end: tradionalLessonsStartsAndEnds[0].end
            },
            {
                code: 'geometry',
                lessonName: lessonNames.get('geometry')!,
                start: tradionalLessonsStartsAndEnds[1].start,
                end: tradionalLessonsStartsAndEnds[1].end
            },
            {
                code: 'social-studies',
                lessonName: lessonNames.get('social-studies')!,
                start: tradionalLessonsStartsAndEnds[2].start,
                end: tradionalLessonsStartsAndEnds[2].end
            },
            {
                code: 'physics',
                lessonName: lessonNames.get('physics')!,
                start: tradionalLessonsStartsAndEnds[3].start,
                end: tradionalLessonsStartsAndEnds[3].end
            },
            {
                code: 'astronomy',
                lessonName: lessonNames.get('astronomy')!,
                start: tradionalLessonsStartsAndEnds[4].start,
                end: tradionalLessonsStartsAndEnds[4].end
            },
            {
                code: 'english',
                lessonName: lessonNames.get('english')!,
                start: tradionalLessonsStartsAndEnds[5].start,
                end: tradionalLessonsStartsAndEnds[5].end
            }
        ],
        breaks: tradionalBreaksStartsAndEnds,
    },
    {
        dayOfTheWeek: 4,
        lessons: [
            {
                code: 'chemistry',
                lessonName: lessonNames.get('chemistry')!,
                start: tradionalLessonsStartsAndEnds[0].start,
                end: tradionalLessonsStartsAndEnds[0].end
            },
            {
                code: 'history',
                lessonName: lessonNames.get('history')!,
                start: tradionalLessonsStartsAndEnds[1].start,
                end: tradionalLessonsStartsAndEnds[1].end
            },
            {
                code: 'geometry',
                lessonName: lessonNames.get('geometry')!,
                start: tradionalLessonsStartsAndEnds[2].start,
                end: tradionalLessonsStartsAndEnds[2].end
            },
            {
                code: 'geography',
                lessonName: lessonNames.get('geography')!,
                start: tradionalLessonsStartsAndEnds[3].start,
                end: tradionalLessonsStartsAndEnds[3].end
            },
            {
                code: 'informatics',
                lessonName: lessonNames.get('informatics')!,
                start: tradionalLessonsStartsAndEnds[4].start,
                end: tradionalLessonsStartsAndEnds[4].end
            },
            {
                code: 'mhc',
                lessonName: lessonNames.get('mhc')!,
                start: tradionalLessonsStartsAndEnds[5].start,
                end: tradionalLessonsStartsAndEnds[5].end
            },
            {
                code: 'career-guidance',
                lessonName: lessonNames.get('career-guidance')!,
                start: tradionalLessonsStartsAndEnds[6].start,
                end: tradionalLessonsStartsAndEnds[6].end
            }
        ],
        breaks: tradionalBreaksStartsAndEnds,
    },
    {
        dayOfTheWeek: 5,
        lessons: [
            {
                code: 'russian',
                lessonName: lessonNames.get('russian')!,
                start: tradionalLessonsStartsAndEnds[0].start,
                end: tradionalLessonsStartsAndEnds[0].end
            },
            {
                code: 'physical-education',
                lessonName: lessonNames.get('physical-education')!,
                start: tradionalLessonsStartsAndEnds[1].start,
                end: tradionalLessonsStartsAndEnds[1].end
            },
            {
                code: 'russian',
                lessonName: lessonNames.get('russian')!,
                start: tradionalLessonsStartsAndEnds[2].start,
                end: tradionalLessonsStartsAndEnds[2].end
            },
            {
                code: 'economics',
                lessonName: lessonNames.get('economics')!,
                start: tradionalLessonsStartsAndEnds[3].start,
                end: tradionalLessonsStartsAndEnds[3].end
            },
            {
                code: 'biology',
                lessonName: lessonNames.get('biology')!,
                start: tradionalLessonsStartsAndEnds[4].start,
                end: tradionalLessonsStartsAndEnds[4].end
            },
            {
                code: 'algebra',
                lessonName: lessonNames.get('algebra')!,
                start: tradionalLessonsStartsAndEnds[5].start,
                end: tradionalLessonsStartsAndEnds[5].end
            },
            {
                code: 'literature',
                lessonName: lessonNames.get('literature')!,
                start: tradionalLessonsStartsAndEnds[6].start,
                end: tradionalLessonsStartsAndEnds[6].end
            }
        ],
        breaks: tradionalBreaksStartsAndEnds,
    },
    {
        dayOfTheWeek: 6,
        lessons: [
            {
                code: 'physics',
                lessonName: lessonNames.get('physics')!,
                start: saturdayLessonsStartsAndEnds[0].start,
                end: saturdayLessonsStartsAndEnds[0].end
            },
            {
                code: 'algebra',
                lessonName: lessonNames.get('algebra')!,
                start: saturdayLessonsStartsAndEnds[1].start,
                end: saturdayLessonsStartsAndEnds[1].end
            },
            {
                code: 'chemistry',
                lessonName: lessonNames.get('chemistry')!,
                start: saturdayLessonsStartsAndEnds[2].start,
                end: saturdayLessonsStartsAndEnds[2].end
            },
            {
                code: 'russian-2',
                lessonName: lessonNames.get('russian-2')!,
                start: saturdayLessonsStartsAndEnds[3].start,
                end: saturdayLessonsStartsAndEnds[3].end
            },
            {
                code: 'obzh',
                lessonName: lessonNames.get('obzh')!,
                start: saturdayLessonsStartsAndEnds[4].start,
                end: saturdayLessonsStartsAndEnds[4].end
            },
            {
                code: 'history',
                lessonName: lessonNames.get('history')!,
                start: saturdayLessonsStartsAndEnds[5].start,
                end: saturdayLessonsStartsAndEnds[5].end
            }
        ],
        breaks: saturdayBreaksStartsAndEnds,
    }
];
