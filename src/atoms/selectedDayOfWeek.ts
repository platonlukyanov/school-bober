import { atom } from 'jotai';
import getNowTime from '~/utils/getNowTime';
import changeTimeZone from '~/utils/changeTimeZone';

const selectedDayOfWeekAtom = atom<number>(changeTimeZone(getNowTime()).getDay())

export default selectedDayOfWeekAtom;