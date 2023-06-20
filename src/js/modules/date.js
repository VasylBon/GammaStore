const date = (id, deadline) => {
    function convertDateToWord() {
        const parts = deadline.split("-"),
            month = parts[1],
            days = parts[2];
        let monthsWord = [
            "січня",
            "лютого",
            "березня",
            "квітня",
            "травня",
            "червня",
            "липня",
            "серпня",
            "вересня",
            "жовтня",
            "листопада",
            "грудня",
        ];
        const monthWord = monthsWord[month - 1];
        return [monthWord, days];
    }

    function showPromotionPeriod(date) {
        const promotionDate = document.querySelector(".sale_subtitle"),
            [month, day] = convertDateToWord(date);

        promotionDate.textContent = `Встигни заощадити на склінні! Тільки до ${day} ${month}!`;
    }

    function getTimerRemaining(endTime) {
        let days = 0,
            hours = 0,
            minutes = 0,
            seconds = 0;
        const time = Date.parse(endTime) - Date.parse(new Date());

        if (time > 0) {
            days = Math.floor(time / 86400000);
            hours = Math.floor((time / 3600000) % 24);
            minutes = Math.floor((time / 60000) % 60);
            seconds = Math.floor((time / 1000) % 60);
            showPromotionPeriod(endTime);
        }

        return { time, days, hours, minutes, seconds };
    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        }

        return num;
    }

    function setClock(selector, endTime) {
        const time = document.querySelector(selector),
            days = document.querySelector("#days"),
            hours = document.querySelector("#hours"),
            minutes = document.querySelector("#minutes"),
            seconds = document.querySelector("#seconds"),
            timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const dateTime = getTimerRemaining(endTime);

            days.textContent = getZero(dateTime.days);
            hours.textContent = getZero(dateTime.hours);
            minutes.textContent = getZero(dateTime.minutes);
            seconds.textContent = getZero(dateTime.seconds);

            if (dateTime.time <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock(id, deadline);
};

export default date;
