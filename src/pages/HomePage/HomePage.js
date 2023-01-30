import React,{Fragment} from 'react'
import Slideshow from '../../components/Slideshow/Slideshow'
import TopDeal from '../../components/TopDeal/TopDeal'
import LatestProducts from '../../components/LatestProducts/LatestProducts'
import Collection from '../../components/Collection/Collection'
import Whyus from '../../components/Whyus/Whyus'
export const HomePage = () => {
  return (
    <Fragment>
      <Slideshow/>
      <TopDeal/>
      <LatestProducts/>
      <Collection/>
      <Whyus/>
    </Fragment>
  )
}

