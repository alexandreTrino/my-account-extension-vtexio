import React, { Fragment } from 'react'
import { Route } from 'vtex.my-account-commons/Router'
import WhirlpoolT from './components/WhirlpoolT'
// Your component pages
import WhirlpoolTracker from './components/WhirlpoolTracker'

const MyAppPage = () => (
  <Fragment>
    <Route exact path="/whirlpool-tracker" component={WhirlpoolT} />
  </Fragment>
)

export default MyAppPage
