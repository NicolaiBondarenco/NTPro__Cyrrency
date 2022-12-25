import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { dataTradingSlice } from '../../Redux/TradingSlice'
import { getModalInfo, toggleModal } from '../../Redux/ModalSlice'
import './Sell.css'

const Sell = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state) => state.dataCurrencySlice)
  const { item } = useSelector(dataTradingSlice)

  let newItem = item.sell

  function randomCurrency(min, max) {
    let currency = (min - 0.3 + Math.random() * (max - min + 0.3)).toFixed(4)
    if (currency <= 0) return
    newItem = currency
  }
  randomCurrency(item.sell - 0.3, item.sell + 0.3)

  const getInfo = () => {
    dispatch(toggleModal())
    dispatch(
      getModalInfo({
        operation: 'sell',
        sell: newItem,
        name: item.name,
      }),
    )
  }

  return (
    <div className="sell" onClick={() => getInfo()}>
      <h1 className="sell__title">Sell</h1>
      <p className="sell__value"> {newItem} </p>
    </div>
  )
}

export default Sell
