import React,{Fragment} from 'react'
import Slideshow from '../../components/Slideshow/Slideshow'
import TopDeal from '../../components/TopDeal/TopDeal'
import LatestProducts from '../../components/LatestProducts/LatestProducts'
import Collection from '../../components/Collection'
import Whyus from '../../components/Whyus/Whyus'
import Title from "../../components/Title/Title";

export const HomePage = () => {
  const title = "Dream Shop";
  return (
    <Fragment>
        <Title title={title} />
      <Slideshow/>
      <TopDeal/>
      <LatestProducts/>
      <Collection/>
      <Whyus/>
    </Fragment>
  )
}

