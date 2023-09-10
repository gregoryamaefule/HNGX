function setTime(){
    const UTCDay = document.querySelector('#UTCDay')
    const UTCTime = document.querySelector('#UTCTime')

    const now = new Date()

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    const currentDay = days[now.getUTCDay()]

    const currentYear = now.getFullYear().toString()
    const currentDate = now.getDate().toString().padStart(2, "0")
    const currentMonth = now.getMonth()
    const currentHour = now.getUTCHours().toString().padStart(2, "0")
    const currentMin = now.getUTCMinutes().toString().padStart(2, "0")
    const currentSeconds = now.getUTCSeconds().toString().padStart(2, "0")
    const currentMSeconds = now.getUTCMilliseconds().toString().padStart(3, "0")

    const currentTime = now.getTime()



    UTCDay.textContent = `${currentDay}`
    UTCTime.textContent = `${currentYear}-${currentMonth + 1}-${currentDate} ${currentHour}:${currentMin}:${currentSeconds}:${currentMSeconds}`

    setInterval(setTime, 1000)


}

setTime()
