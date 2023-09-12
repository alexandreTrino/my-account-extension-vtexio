import React, { Fragment } from 'react'
import { Route } from 'vtex.my-account-commons/Router'
import ExtensionContentPageOne from './components/ExtensionContentPageOne'
import ExtensionContentPageTwo from './components/ExtensionContentPageTwo'

const MyAppPage = () => (
  <Fragment>
    <Route 
      exact 
      path="/page-one" 
      component={ExtensionContentPageOne} 
    />
    <Route 
      exact 
      path="/page-two" 
      component={ExtensionContentPageTwo} 
    />
  </Fragment>
)

export default MyAppPage
