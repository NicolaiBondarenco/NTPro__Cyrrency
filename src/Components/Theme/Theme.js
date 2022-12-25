import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { onChangeTheme } from '../../Redux/ThemeSlice'
import './Theme.css'

const Theme = () => {
  const dispatch = useDispatch()
  const { theme } = useSelector((state) => state.themeSlice)
  const findBody = document.querySelector('body')

  if (!theme) {
    findBody.style.backgroundColor = '#e2e3cb'
  } else {
    findBody.style.backgroundColor = '#1e476b'
  }

  return (
    <button className="theme" onClick={() => dispatch(onChangeTheme(!theme))}>
      Theme
      {theme ? (
        <span className="material-symbols-outlined">light_mode</span>
      ) : (
        <span className="material-symbols-outlined">dark_mode</span>
      )}
    </button>
  )
}

export default Theme
