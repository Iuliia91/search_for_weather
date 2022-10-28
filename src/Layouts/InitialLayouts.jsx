import React, { useState, useCallback, useEffect, useMemo } from 'react'
import styled from 'styled-components'
import LoadingLayouts from './LoadingLayouts'
import useFetchingData from '../HOC/useFetchingData'
import useDebounce from '../HOC/useDebounce'
import WeatherCard from '../Components/WeatherCard'
const StyledInitialLayouts = styled.section`
justify-self: center;
grid-column: container-start/container-end;
  color: var(--color-primary);
 
  justify-content: center;
 
    display:flex;
    flex-wrap:wrap;
    gap:2rem;
    justify-content: space-between;
    align-content:center;
    width:90%;
  
  

  }

h1{
  text-align: center;
  width:50%;
  margin:auto;
}

  input {
    width:40%;
    height:5rem;
    padding:2rem 7rem 2rem 1rem;
    background-color:white;
    border-radius: 0.6rem;
    align-self: center;
    margin:auto;

  }

  @media screen and (max-width:1000px){
    input{
      width:500px;
    }

  }
  @media screen and (max-width:700px){
    h1{
      width:100%;
    }

  }

  @media screen and (max-width:550px){
    input{
      width:95%;
    }
    
  }
`

const InitialLayouts = () => {
  const [valueInput, setValueInput] = useState('')
  const [list, setList] = useState(null)
  const today = new Date()
  const date = `${today.getFullYear()}-${
    today.getMonth() + 1
  }-${today.getDate()}`
  const [selectDay, setSelectDay] = useState(date)
  const debouncedValue = useDebounce(valueInput, 2000)
  const { data } = useFetchingData(debouncedValue)

  const mainDay = useMemo(() => {
    if (list !== null) {
      return list.listDays.filter((item) => {
        return item.date === selectDay
      })
    }
  }, [data, selectDay, today])

  useEffect(() => {
    if (data !== 'error') {
      setList(data)
      setValueInput('')
    }
  }, [data, selectDay])

  const handleSelectDate = (item) => {
    setSelectDay(item.date)
  }
  console.log(mainDay, date, list)
  return (
    <StyledInitialLayouts>
      <input
        value={valueInput}
        placeholder="Search..."
        onChange={(e) => setValueInput(e.target.value)}
      />

      {list !== null && mainDay !== undefined ? (
        <WeatherCard
          mainDay={mainDay[0]}
          list={list}
          handleSelectDate={handleSelectDate}
          listDays={list.listDays}
        />
      ) : (
        <h1>You can find weather of any city.It's free...</h1>
      )}
    </StyledInitialLayouts>
  )
}

export default InitialLayouts
