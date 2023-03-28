import './App.css'
import Header from './Components/Header/Header'
import Shop from './Components/Shop/Shop'

function App() {
  // const number = [10, 20, 30, 40, 50, 60];
  // const output = number.reduce((prev, curr) => prev + curr, 0)
  // console.log(output)
  // const items = [
  //   { name: 'x', price: 10 },
  //   { name: 'y', price: 20 },
  //   { name: 'z', price: 30 }
  // ]
  // const total = items.reduce((prev, curr) => prev + curr.price, 0)
  // console.log(total)
  return (
    <>
      <Header></Header>
      <Shop></Shop>
    </>
  )
}

export default App
