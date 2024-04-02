import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Navbar = () => {

    const bonusValue = useSelector(
        (state) => state.bonus.points
    )

    const count = useSelector(
        (state) => state.master.init
    )

    return (
        <>
            <h1>
                The Bonus Value : {bonusValue} and The Value of Counter is : {count}
            </h1>
        </>
    )
}

export default Navbar