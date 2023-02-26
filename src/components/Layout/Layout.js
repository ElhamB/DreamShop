import {Fragment} from 'react';
import { Outlet } from "react-router-dom";
import Header from '../Header';
import Footer from '../Footer';
const Layout = (props) => {
  return (
    <Fragment>
         <Header/>
      <main> <Outlet /></main>
      <Footer/>
    </Fragment>
  )
}

export default Layout
