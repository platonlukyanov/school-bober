import LessonCard from "./LessonCard";

interface BreakCardProps extends Omit<React.ComponentProps<typeof LessonCard>, 'lessonName' | 'lessonCaption'> {
    breakDuration: string
    breakCaption: string
}

function BreakCard({ progressClassname, breakDuration, breakCaption, ...rest }: BreakCardProps) {
    return <LessonCard
        lessonName={breakDuration}
        lessonCaption={breakCaption}
        className="border-green-400 border-2 text-green-400"
        progressClassname={`bg-green-400 opacity-10 ${progressClassname}`}
        {...rest}
    />
}

export default BreakCard;