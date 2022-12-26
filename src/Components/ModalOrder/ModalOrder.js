import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleModal, toggleTextError } from '../../Redux/ModalSlice'
import { addOperation, changeValue, eraseValue } from '../../Redux/ArchiveSlice'
import './ModalOrder.css'

let idx = 100

const ModalOrder = () => {
  const dispatch = useDispatch()
  const { activeModal, infoModal, textError } = useSelector(
    (state) => state.modalSlice,
  )
  const { modalValue } = useSelector((state) => state.archiveSlice)
  const arr = infoModal.split(' ')
  const operation = arr[0]
  const addInfo = arr[1] + ' ' + arr[2]

  const submitOrder = (e) => {
    e.preventDefault()
    if (modalValue <= 0) return dispatch(toggleTextError(true))
    dispatch(toggleTextError(false))
    const time = new Date()
    let year = time.getFullYear().toString()
    let month = (time.getMonth() + 1).toString()
    let day = time.getDate().toString()
    let hourTime = time.getHours().toString()
    let minutesTime = time.getMinutes().toString()
    let secondTime = time.getSeconds().toString()
    const fullTime =
      year +
      '.' +
      month +
      '.' +
      +day +
      ' ' +
      hourTime +
      ':' +
      minutesTime +
      ':' +
      secondTime
    const newObj = infoModal + modalValue + ' ' + fullTime + ' ' + idx
    dispatch(addOperation(newObj))
    dispatch(toggleModal())
    idx = idx + 1
  }

  const cancelInput = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault()
      return false
    }
  }

  const closeModal = (e) => {
    e.preventDefault()
    dispatch(toggleModal())
    dispatch(toggleTextError(false))
    dispatch(eraseValue())
  }

  return (
    <div className={activeModal ? `${'modalOrder-active'}` : `${'modalOrder'}`}>
      <div className="modalOrder__popup">
        <div className="modalOrder__inner">
          <div className="modalOrder__top">
            <h3 className="modalOrder__title">Make order</h3>

            <button
              className="modalOrder__btn"
              onClick={() => dispatch(toggleModal())}
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
          <div className="modalOrder__bottom">
            <p className="modalOrder__text">
              <span>{operation}</span> {addInfo}
            </p>
            <form className="modalOrder__form" onSubmit={(e) => submitOrder(e)}>
              <div className="modalOrder__value">
                <p className="modalOrder__value-text">Value</p>
                <input
                  type="number"
                  value={modalValue}
                  onChange={(e) => dispatch(changeValue(e.target.value))}
                  onKeyDown={(e) => cancelInput(e)}
                  placeholder="value"
                />
              </div>
              {textError && (
                <div className="modalOrder__textError">Неверное значение!</div>
              )}
              <div className="modalOrder__buttons">
                <button
                  className="modalPrder__buttons-cancel"
                  onClick={(e) => closeModal(e)}
                >
                  Cancel
                </button>
                <button className="modalPrder__buttons-save">Ok</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalOrder
