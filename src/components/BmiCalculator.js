import React from 'react'

export default function BmiCalculator() {
  return (
    <div>      
      <div className="container">
          <h2>Bmi Calculator</h2>
          <form action="">
            <input type="text" className="my-2" placeholder="Weight in kg" />
            <input type="text" className="my-2" placeholder="Height in meter" />
            <button className='btn btn-primary'>Calculate</button>
          </form>
        </div>
    </div>
  )
}
