setInterval(() => {
    let date = new Date()
    let hour = date.getHours()
    let minute = date.getMinutes()
    let second = date.getSeconds()
    let hourRotaion = (hour * 30) + minute / 2
    let minuteRotaion = minute * 6
    let secondRotaion = second * 6

    document.querySelector(".hour").style.transform = `rotate(${hourRotaion}deg)`
    document.querySelector(".second").style.transform = `rotate(${secondRotaion}deg)`
    document.querySelector(".minutes").style.transform = `rotate(${minuteRotaion}deg)`
}, 1000)