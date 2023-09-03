import { Lesson } from "~/data";
import getMinutesBetweenTimestrings from "./getMinutesBetweenTimestrings";

export default function getLessonCompletionPercentage(lesson: Lesson, currentTime: string) {
    const result = Math.round((getMinutesBetweenTimestrings(lesson.start, currentTime) / getMinutesBetweenTimestrings(lesson.start, lesson.end)) * 100)

    if (result > 100) {
        return 0
    }

    return result
}