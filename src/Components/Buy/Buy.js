import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { dataTradingSlice } from '../../Redux/TradingSlice'
import { getModalInfo, toggleModal } from '../../Redux/ModalSlice'
import './Buy.css'

const Buy = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state) => state.dataCurrencySlice)
  const { item } = useSelector(dataTradingSlice)

  let newItem = item.buy

  function randomCurrency(min, max) {
    let currency = (min - 0.5 + Math.random() * (max - min + 1)).toFixed(4)
    if (currency <= 0) return
    newItem = currency
  }
  randomCurrency(item.buy - 1, item.buy + 1)

  const getInfo = () => {
    dispatch(toggleModal())
    dispatch(
      getModalInfo({
        operation: 'buy',
        buy: newItem,
        name: item.name,
      }),
    )
  }

  return (
    <div className="buy" onClick={() => getInfo()}>
      <h1 className="buy__title">Buy</h1>
      <p className="buy__value"> {newItem} </p>
    </div>
  )
}

export default Buy
