import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getItems } from '../../Redux/DataCurrencySlice'
import CurrencyPopup from '../CurencyPopup/CurrencyPopup'
import { dataTradingSlice, changePopup } from '../../Redux/TradingSlice'
import './CurrencySelect.css'

const CurrencySelect = () => {
  const { item, activePopup } = useSelector(dataTradingSlice)

  const dispatch = useDispatch()

  useEffect(() => {
    let getDate = setInterval(() => {
      fetch('http://localhost:3000/dataCurrency.json')
        .then((res) => res.json())
        .then((body) => dispatch(getItems(body.currency)))
        .catch((err) => {
          console.log('Error', err)
        })
    }, 3500)
    return () => {
      clearInterval(getDate)
    }
  }, [])

  const openPopup = () => {
    dispatch(changePopup(!activePopup))
  }

  return (
    <div className="currencySelect">
      <div className="currencySelect__value"> {item.name} </div>
      <button className="currencySelect__btn" onClick={openPopup}>
        <span className="material-symbols-outlined">arrow_drop_down</span>
      </button>

      <CurrencyPopup />
    </div>
  )
}

export default CurrencySelect
