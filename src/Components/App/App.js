import Header from '../Header/Header'
import Trading from '../Trading/Trading'
import Archive from '../Archive/Archive'
import { useSelector } from 'react-redux'
import ModalOrder from '../ModalOrder/ModalOrder'
import '../App/App.css'

const App = () => {
  const { tradingBtn } = useSelector((state) => state.buttonsSlice)

  return (
    <div className="app">
      <Header />
      {tradingBtn ? <Trading /> : <Archive />}
      <ModalOrder />
    </div>
  )
}

export default App
