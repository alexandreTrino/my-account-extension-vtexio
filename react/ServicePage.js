import React, { Fragment } from 'react'
import { Route } from 'vtex.my-account-commons/Router'
import Category from './components/Category'
import Products from './components/Products'
import Service from './components/Service'

const ServicePage = () => (
  <Fragment>
    <Route exact path="/whirlpool-service" component={Service} />
    <Route exact path="/whirlpool-products" component={Products} />
    <Route exact path="/whirlpool-products/category" component={Category} />
    <Route exact path="/whirlpool-products/detail" component={Products} />
    <Route exact path="/whirlpool-products/confirmation" component={Products} />
  </Fragment>
)

export default ServicePage
