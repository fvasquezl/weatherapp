import { CurrentWeather, Forecast } from "../models/wheather"


const apiKey = "0050d91bae2b0da38504bc3ec9ac7663"
const baseUrl = "https://api.openweathermap.org/data/2.5"


const fetchWeatherData = async (city: string): Promise<{ currentWeather: CurrentWeather, forecast: Forecast[] }> => {
    const currentWeatherResponse = await fetch(`${baseUrl}/weather?q=${city}&units=metric&appid=${apiKey}`);
    const currentWeatherData = await currentWeatherResponse.json()


    if (currentWeatherData.cod !== 200) {
        throw new Error(currentWeatherData.message)
    }


    const forecastForecast = await fetch(`${baseUrl}/forecast?q=${city}&units=metric&appid=${apiKey}`)
    const forecastData = await forecastForecast.json()


    if (forecastData.cod !== '200') {
        throw new Error(forecastData.message)
    }


    const currentWeather: CurrentWeather = {
        city: currentWeatherData.name,
        country: currentWeatherData.sys.country,
        temperature: currentWeatherData.main.temp,
        description: currentWeatherData.weather[0].description,
        icon: currentWeatherData.weather[0].icon
    }

    const forecast: Forecast[] = forecastData.list
        .filter((item: any, index: number) => index % 8 === 0)
        .slice(0, 5)
        .map((item: any) => ({
            date: new Date(item.dt_txt),
            temperature: item.main.temperature,
            description: currentWeatherData.weather[0].description,
            icon: currentWeatherData.weather[0].icon
        }))

    return { currentWeather, forecast }
}
export default fetchWeatherData