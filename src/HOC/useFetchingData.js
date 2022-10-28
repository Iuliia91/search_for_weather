import { useContext, useEffect, useState } from 'react'

import axios from 'axios'
import { ModalContext } from './GlobalModalProvider'
const fetchingData = async (query) => {
  const options = {
    method: 'GET',
    url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
    params: { q: `${query}`, days: '3' },
    headers: {
      'X-RapidAPI-Key': 'd891d3ad3cmshd44c450c381af3fp14e2fcjsn300b575d9d12',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
    },
  }

  return axios
    .request(options)
    .then(function (response) {
      return response.data
    })
    .catch(function (error) {
      return error
    })
}

const useFetchingData = (query) => {
  const [data, setData] = useState(null)

  const setModalContext = useContext(ModalContext)

  useEffect(() => {
    if (query !== '') {
      fetchingData(query).then((data) => {
        console.log(data)
        if (data.current) {
          setData({
            data: true,
            time: data.location.localtime,
            name: data.location.name,
            country: data.location.country,
            img: data.current.condition.icon,
            conditionText: data.current.condition.text,
            temp: data.current.temp_c,
            wind: data.current.wind_kph,
            precip: data.current.precip_mm,
            pressure: data.current.pressure_mb,
            listDays: data.forecast.forecastday,
          })
        } else if (data.message) {
          setData('error')
          setModalContext(
            <h1 style={{ fontSize: '18px' }}>Please, Try again...</h1>
          )
        }
      })
    }
  }, [query])

  return { data }
}

export default useFetchingData
