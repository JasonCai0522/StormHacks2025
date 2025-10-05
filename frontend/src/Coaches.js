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
              <Button className = "coachButton" text="david goggins" onClick={() => handleCoach1()} />
              <Button className = "coachButton" text="master oogway" onClick={() => handleCoach2()} />
              <Button className = "coachButton" text="michael jordan" onClick={() => handleCoach3()} />
              <Button className = "coachButton" text="Faker" onClick={() => handleCoach4()} />
        </div>
    </coaches>
  )
}

export default Coaches