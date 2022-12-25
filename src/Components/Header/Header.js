import React from 'react'
import { toggleTrading, toggleArchive } from '../../Redux/ButtonsSlice'
import { useSelector, useDispatch } from 'react-redux'
import './Header.css'
import Theme from '../Theme/Theme'

const Header = () => {
  const { archiveBtn, tradingBtn } = useSelector((state) => state.buttonsSlice)
  const dispatch = useDispatch()

  const toggleBtns = () => {
    dispatch(toggleTrading(!tradingBtn))
    dispatch(toggleArchive(!archiveBtn))
  }

  return (
    <div className="header">
      <button
        className={
          tradingBtn ? `${'header__trading-active'}` : `${'header__trading'}`
        }
        onClick={() => toggleBtns()}
      >
        Trading
      </button>
      <button
        className={
          archiveBtn ? `${'header__archive-active'}` : `${'header__archive'}`
        }
        onClick={() => toggleBtns()}
      >
        Archive
      </button>
      <div className="header__block">
        <Theme />
      </div>
    </div>
  )
}

export default Header
