import React,{Fragment} from 'react'
import Slideshow from '../components/Slideshow/Slideshow'
import TopDeal from '../components/TopDeal/TopDeal'
export const HomePage = () => {
  return (
    <Fragment>
      <Slideshow/>
      <TopDeal/>
    </Fragment>
  )
}

