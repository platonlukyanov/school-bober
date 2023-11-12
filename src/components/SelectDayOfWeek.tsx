'use client'
import { Suspense } from "react";
import toCapitalized from "~/utils/toCapitalized";
import { SkeletonSelect, SkeletonSelectContent, SkeletonSelectItem, SkeletonSelectTrigger, SkeletonSelectValue } from "./ui/skeleton-select";
import { useAtom } from "jotai";
import russianDaysOfTheWeek, { russianDaysToEnglishDayNumbers } from "~/data/russianDaysOfWeek";
import selectedDayOfWeekAtom from "~/atoms/selectedDayOfWeek";

export default function SelectDayOfWeek() {
    const [selectedDayOfWeek, setSelectedDayOfWeek] = useAtom(selectedDayOfWeekAtom)

    const handleNewDayOfWeekSelected = (newValue: string) => {
        setSelectedDayOfWeek(Number(newValue))
    }

    return <SkeletonSelect value={selectedDayOfWeek.toString()} onValueChange={handleNewDayOfWeekSelected}>
        <SkeletonSelectTrigger className="text-2xl font-bold -ml-3 focus:ring-0 focus:shadow-none">
            <SkeletonSelectValue placeholder="День..." />
        </SkeletonSelectTrigger>
        <SkeletonSelectContent >
            {russianDaysOfTheWeek.map((day, index) => (
                <SkeletonSelectItem key={index} value={russianDaysToEnglishDayNumbers[day].toString()}>
                    {toCapitalized(day)}
                </SkeletonSelectItem>
            ))}
        </SkeletonSelectContent>
    </SkeletonSelect>
}