const hourHand   = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');
function getTime() {
    const now = new Date();
    const hours   = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const hoursInDegrees   = (hours / 24) * 360 + 90;
    const minutesInDegrees = (minutes / 60) * 360 + 90;
    const secondsInDegrees = (seconds / 60) * 360 + 90;
    hourHand.style.transform = `rotate(${hoursInDegrees}deg)`
    minuteHand.style.transform = `rotate(${minutesInDegrees}deg)`
    secondHand.style.transform = `rotate(${secondsInDegrees}deg)`
}
setInterval(getTime, 1000);
