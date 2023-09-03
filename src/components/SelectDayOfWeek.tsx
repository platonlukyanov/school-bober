'use client'
import { Suspense } from "react";
import toCapitalized from "~/utils/toCapitalized";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { useAtom } from "jotai";
import russianDaysOfTheWeek, { russianDaysToEnglishDayNumbers } from "~/data/russianDaysOfWeek";
import selectedDayOfWeekAtom from "~/atoms/selectedDayOfWeek";

export default function SelectDayOfWeek() {
    const [selectedDayOfWeek, setSelectedDayOfWeek] = useAtom(selectedDayOfWeekAtom)

    const handleNewDayOfWeekSelected = (newValue: string) => {
        setSelectedDayOfWeek(Number(newValue))
    }

    return <Select value={selectedDayOfWeek.toString()} onValueChange={handleNewDayOfWeekSelected}>
        <SelectTrigger className="text-2xl font-bold -ml-3 focus:ring-0 focus:shadow-none">
            <SelectValue placeholder="День..." />
        </SelectTrigger>
        <SelectContent >
            {russianDaysOfTheWeek.map((day, index) => (
                <SelectItem key={index} value={russianDaysToEnglishDayNumbers[day].toString()}>
                    {toCapitalized(day)}
                </SelectItem>
            ))}
        </SelectContent>
    </Select>
}