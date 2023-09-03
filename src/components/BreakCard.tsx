import LessonCard from "./LessonCard";

interface BreakCardProps extends Omit<React.ComponentProps<typeof LessonCard>, 'lessonName' | 'lessonCaption'> {
    breakDuration: string
    breakCaption: string
}

function BreakCard(props: BreakCardProps) {
    return <LessonCard
        lessonName={props.breakDuration}
        lessonCaption={props.breakCaption}
        className="border-green-400 border-2 text-green-400"
        {...props}
    />
}

export default BreakCard;