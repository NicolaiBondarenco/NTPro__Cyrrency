import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeMainTime } from '../../Redux/TimeSlice'
import Loader from '../Loader/Loader'
import './Time.css'

const Time = () => {
  const { fullTime } = useSelector((state) => state.timeSlice)
  const dispatch = useDispatch()

  setInterval(() => {
    let now = new Date()
    let hourTime = now.getHours().toString()
    let minutesTime = now.getMinutes().toString()
    let secondTime = now.getSeconds().toString()
    dispatch(changeMainTime({ hourTime, minutesTime, secondTime }))
  }, 1000)

  return fullTime ? <div className="time"> {fullTime} </div> : <Loader />
}

export default Time
