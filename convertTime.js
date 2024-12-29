
function convertMsToHoursAndMinutes(ms) {
    const totalMinutes = Math.floor(ms / 60000);
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return { hours, minutes };
}

// Example usage:
const ms = 3600000; // 1 hour in milliseconds
const time = convertMsToHoursAndMinutes(ms);
console.log(`${time.hours} hours and ${time.minutes} minutes`);