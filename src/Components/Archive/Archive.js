import React from 'react'
import { useSelector } from 'react-redux'
import './Archive.css'

const Archive = () => {
  const { archiveOperations } = useSelector((state) => state.archiveSlice)

  return (
    <div className="archive">
      <div className="archive__inner">
        <ul className="archive__list">
          <li className="archive__list-item">Side</li>
          <li className="archive__list-item">Price</li>
          <li className="archive__list-item">Instrument</li>
          <li className="archive__list-item">Volume</li>
          <li className="archive__list-item">Timestamp</li>
        </ul>
      </div>
      {archiveOperations.length >= 1 ? (
        archiveOperations.map(
          ({ side, price, instrument, valume, timeStamp, id }) => {
            return (
              <ul className="archive__operation" key={id}>
                <li className="archive__operation-item"> {side} </li>
                <li className="archive__operation-item"> {price} </li>
                <li className="archive__operation-item"> {instrument} </li>
                <li className="archive__operation-item"> {valume} </li>
                <li className="archive__operation-item"> {timeStamp} </li>
              </ul>
            )
          },
        )
      ) : (
        <p className="archive__empty">
          You have not performed a single operation.
        </p>
      )}
    </div>
  )
}

export default Archive
