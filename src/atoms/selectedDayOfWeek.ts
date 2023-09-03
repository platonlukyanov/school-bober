import { atom } from 'jotai';
import getNowTime from '~/utils/getNowTime';
import changeTimeZone from '~/utils/changeTimeZone';

export const currentDatetimeAtom = atom(changeTimeZone(getNowTime()))

// Update it automatically every 10 sec
currentDatetimeAtom.onMount = (setAtom) => {
    const interval = setInterval(() => {
        setAtom(changeTimeZone(getNowTime()))
    }, 1000)
    return () => clearInterval(interval)
}

const selectedDayOfWeekAtom = atom<number>(changeTimeZone(getNowTime()).getDay())

export default selectedDayOfWeekAtom;