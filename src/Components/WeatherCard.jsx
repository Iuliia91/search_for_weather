import React from 'react'
import styled from 'styled-components'

const StyledWeatherCard = styled.div`
  height: 300px;
  width: 500px;
  background: #16394c;
  border: 4px solid #608094;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  padding: 3rem;
  margin: auto;
  text-align: center;
  & > h1 {
    font-size: 3rem;
    display: contents;
  }

  & > span {
    align-self: end;
    font-size: 1.5rem;
  }

  & > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    gap: 3rem;
    & > h2 {
      font-size: 2.5rem;
    }

    & > div:first-child {
      flex-basis: 30%;
      display: flex;
      flex-direction: column;
      text-align: center;
      span {
        font-size: 1.2rem;
      }
    }
    & > h2 {
      flex-basis: 30%;
    }
    & > div:last-child {
      flex-basis: 30%;
      text-align: end;
      display: flex;
      flex-direction: column;
      row-gap: 1rem;

      & > span {
        font-size: 1.2rem;
      }
    }
  }

  .active {
    width: 30%;
    background-color: hsla(0 0% 100% /0.5);
    padding: 1rem;
    border-radius: 1rem;
    text-align: center;
    & > h3 {
      color: white;
      text-align: center;
    }
  }
  .noactive {
    width: 30%;
    border: 1rem solid transparent;
    text-align: center;
  }

  @media screen and (max-width: 500px) {
    width: 95%;
    padding: 30rem 5rem;
    gap: 5rem;
    & > h1 {
      font-size: 1.5rem;
    }
    & > div {
      flex-wrap: wrap;
      justify-content: center;

      & > div:last-child,
      & > div:last-child,
      h2 {
        flex-basis: 100%;
        margin: auto;
        align-items: center;
      }

      & > div:last-child {
        flex-direction: row;
        justify-content: space-between;
      }
    }
    .buttons {
      width: 100%;
      gap: 0;

      & > button {
        font-size: 0.7rem;
      }
    }
  }
`
const WeatherCard = ({ handleSelectDate, list, listDays, mainDay }) => {
  return (
    <>
      <StyledWeatherCard>
        <span>{mainDay.date}</span>
        <h1>
          {list.name},{list.country}
        </h1>
        <div>
          <div>
            <figure>
              <img src={mainDay.day.condition.icon} />
            </figure>
            <span>{mainDay.day.condition.text}</span>
          </div>

          <h2>{mainDay.day.avgtemp_c} °c</h2>

          <div>
            <span>Wind: {mainDay.day.avgvis_miles} kmph</span>
            <span>Precip: {mainDay.day.daily_chance_of_rain} %</span>
            <span>Snow: {mainDay.day.daily_will_it_snow} </span>
          </div>
        </div>

        <div className="buttons">
          {listDays.map((item) => {
            return (
              <>
                <button
                  onClick={() => handleSelectDate(item)}
                  className={item.date === mainDay.date ? 'active' : 'noactive'}
                >
                  {item.date}
                </button>
              </>
            )
          })}
        </div>
      </StyledWeatherCard>
    </>
  )
}

export default WeatherCard
