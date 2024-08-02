const button = document.getElementById("search-button")
const input = document.getElementById("city-input")

const cityName = document.getElementById("city-name")
const cityTime = document.getElementById("city-time")
const cityTemp = document.getElementById("city-temp")
const humidity = document.getElementById("humidity")
const cloud = document.getElementById("cloud")


async function getData(cityName){
    const promise = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=bc28e6eda4e243909e4121537242807&q=${cityName}&aqi=yes`
    )
    return await promise.json();
}
button.addEventListener("click",async () => {
    const value = input.value
    const result = await getData(value)
    
    cityName.innerText = `${result.location.name},${result.location.region} - ${result.location.country}`
    cityTime.innerText = result.location.localtime
    cityTemp.innerText = result.current.temp_c
    humidity.innerText = result.current.humidity
    cloud.innerText = result.current.cloud
})

