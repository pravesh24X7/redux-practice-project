import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, incrementByAmount } from './redux/counter/counterSlice'
import { incrementBonus, decrementBonus } from './redux/bonus/bonusSlice'
import Navbar from './components/Navbar'

function App() {

  const count = useSelector(
    (state) => state.master.init  
  )

  const bonusValue = useSelector(
    (state) => state.bonus.points
  )

  const dispatch = useDispatch();

  return (
    <>
    <Navbar />
      <div>
        <button
          onClick={() => dispatch(decrement())}
        > - </button> {" "}
          Current Value is {count} {" "}
        <button
          onClick={() => dispatch(increment())}
        > + </button>
      </div>
<br/>
      <div>
        <button
          onClick={() => dispatch(decrementBonus())}
        > - </button> {" "}
          Bonus Value is {bonusValue} {" "}
        <button
          onClick={() => dispatch(incrementBonus())}
        > + </button>
      </div>
    </>
  )
}

export default App
