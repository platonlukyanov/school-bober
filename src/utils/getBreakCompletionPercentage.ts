import { Break } from "~/data";
import getMinutesBetweenTimestrings from "./getMinutesBetweenTimestrings";

export default function getBreakCompletionPercentage(schoolBreak: Break, currentTime: string) {
    const result = Math.round((getMinutesBetweenTimestrings(schoolBreak.start, currentTime) / getMinutesBetweenTimestrings(schoolBreak.start, schoolBreak.end)) * 100)

    if (result > 100) {
        return 0
    }

    return result
}
