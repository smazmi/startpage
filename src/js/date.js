
const dateElement = document.getElementById("date");

function showTime() {
    const date = new Date();

    const options = {
        weekday: "long",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
    };

    const formattedDate = date.toLocaleString("en-GB", options);
    const [dayOfWeek, dateStr, time] = formattedDate.split(", ");

    // Get hours in 12-hour format
    let hours = date.getHours();
    const amPm = hours >= 12 ? "PM" : "AM";
    hours = (hours % 12) || 12; // Convert to 12-hour format

    dateElement.innerHTML = `${dayOfWeek}, ${hours}:${date.getMinutes()}:${date.getSeconds()} ${amPm} | ${dateStr}`;
}

setInterval(showTime, 1000);
showTime();
