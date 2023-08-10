import React from 'react'
import './brand.css'
import './imports'
import { google, slack, atlassian, shopify} from './imports'

const Brand = () => {
  return (
    <div>
      <div className='gpt3__brand section__padding' >
        <div className='gpt3__brand-img__wrapper'>
          <img src={google} alt="google"/>
          <img src={slack} alt="slack"/>
          <img src={atlassian} alt="atlassian"/>
          <img src={shopify} alt="shopify"/>
        </div>
      </div>
    </div>
  )
}

export default Brand
