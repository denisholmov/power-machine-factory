import './App.css'
import { HomePage } from './pages/HomePage/HomePage'
import { Button } from './ui/Button/Button'

function App() {

  return (
    <>
      <HomePage/>

      <Button text="Подробнее" arrow={false}/>
      <Button text="Читать далее" arrow={true}/>
      <Button arrow={false}/>
    </>
  )
}

export default App
