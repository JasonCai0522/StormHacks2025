import React from 'react'
import Button from './Button'

const Coaches = () => {
  const handleCoach1 = () => {
  }

  const handleCoach2 = () => {
  }

  const handleCoach3 = () => {
  }

  const handleCoach4 = () => {
  }

  return (
    <coaches>
        <h1>Coaches</h1>
        <div className ="coaches">
              <Button className = "coachButton" text="David Goggins" onClick={() => handleCoach1()} />
              <Button className = "coachButton" text="Master Oogway" onClick={() => handleCoach2()} />
              <Button className = "coachButton" text="Michelle Obama" onClick={() => handleCoach3()} />
              <Button className = "coachButton" text="Faker" onClick={() => handleCoach4()} />
        </div>
    </coaches>
  )
}

export default Coaches