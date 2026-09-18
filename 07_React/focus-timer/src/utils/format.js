// ISO문자열 -> "14:20"
export const formatClock = (iso) => {
    return new Date(iso).toLocaleTimeString('ko-KR', {hour: "2-digit", minute:"2-digit", hour12: false})
}

// 900 -> "15:00"
export const formatTime = (see) => {
    return `${String(Math.floor(see/60)).padStart(2, '0')}:${String(see%60).padStart(2, '0')}`;
}

//오늘날짜확인여부
export const isToday = (iso) => {
    return new Date(iso).toDateString() === new Date().toDateString();
}