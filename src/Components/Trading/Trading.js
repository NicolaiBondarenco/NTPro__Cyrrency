import React from 'react'
import Buy from '../Buy/Buy'
import CurrencySelect from '../CurrencySelect/CurrencySelect'
import Sell from '../Sell/Sell'
import Time from '../Time/Time'
import './Trading.css'

const Trading = () => {
  return (
    <div className="trading">
      <Time />
      <CurrencySelect />
      <div className="trading__inner">
        <Buy />
        <Sell />
      </div>
    </div>
  )
}

export default Trading
