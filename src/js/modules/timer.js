const timer = (deadline) => {
    function getTimeRemaining (endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor(t / (1000 * 60* 60 * 24)),
            hours = Math.floor((t / (1000 * 60 * 60) % 24)),
            minutes = Math.floor((t / 1000 / 60) % 60),
            seconds = Math.floor((t / 1000) % 60);
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function setClock() {
        
    }
};

export default timer;