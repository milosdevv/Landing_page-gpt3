import React from 'react'
import './feature.css'

const Feature = ({ title, text }) => {
  return (

        <div className="gpt3__features-container__feature">
            <div className="gpt3__features-container__feature-title">
              <div className='gradient__bar'></div>
              <h1>{title}</h1>
              <div className="gpt3__features-container_feature-text">
                <p>{text}</p>
              </div>
            </div>
        </div>
  
  )
}

export default Feature
