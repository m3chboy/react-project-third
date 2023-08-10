import React from 'react'

import '../style/features.css'

import { Featurebox } from '../components/featurebox'
import { features } from '../data/feature'

export const Features = () => {
  return (
    <div className='features max-width'>
        <div className="feature-header">
            <p className='text-head'>FEATURES</p>
            <h1>Your Experience Gets Better And Better Over Time.</h1>
            <p className="text-para">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
        </div>
        <div className="feature-boxes">
        {features?.map(feature => <Featurebox feature={feature} />)}
        </div>
    </div>
  )
}
