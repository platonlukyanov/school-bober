interface ActiveScheduleItemIndicatorProps {
    active?: boolean
}

function ActiveScheduleItemIndicator({ active }: ActiveScheduleItemIndicatorProps) {
    return (
        <div className={`rounded-full p-3 mr-6 ${active ? 'bg-red-500 shadow-lg animate-pulse' : 'bg-slate-300'}`}/>
    )
}

export default ActiveScheduleItemIndicator