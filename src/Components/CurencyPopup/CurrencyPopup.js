import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  dataTradingSlice,
  changeItem,
  changePopup,
} from '../../Redux/TradingSlice'
import './CurrencyPopup.css'

const CurrencyPopup = () => {
  const { items } = useSelector((state) => state.dataCurrencySlice)
  const { activePopup } = useSelector(dataTradingSlice)
  const dispatch = useDispatch()

  const togglePopup = (el) => {
    dispatch(changeItem(el))
    dispatch(changePopup(!activePopup))
  }

  return (
    <div
      className={
        activePopup ? `${'currencyPopup__active'}` : `${'currencyPopup'}`
      }
    >
      {items.map((el) => {
        return (
          <div className="currencyPopup__item" key={el.id}>
            <p className="currencyPopup__name" onClick={() => togglePopup(el)}>
              {el.name}
            </p>
          </div>
        )
      })}
    </div>
  )
}

export default CurrencyPopup
