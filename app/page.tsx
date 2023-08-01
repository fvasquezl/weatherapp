'use client'

import React from 'react'
import { CurrentWeather as CurrentWeatherType } from './models/wheather'
import CurrentWeather from './components/CurrentWeather'

const home: React.FC = () => {
  const sampleCurrentWeather: CurrentWeatherType = {
    city: "Oslo",
    country: "No",
    temperature: 10,
    description: "clear sky",
    icon: "01d"
  }
  return (
    <div>
      <CurrentWeather currentWeather={sampleCurrentWeather} />
    </div>
  )
}

export default home


