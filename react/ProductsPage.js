import React, { Fragment } from 'react'
import { Route } from 'vtex.my-account-commons/Router'
import WhirlpoolT from './components/WhirlpoolT'
// Your component pages
import Products from './components/Products'

const ProductsPage = () => (
  <Fragment>
     <Route exact path="/whirlpool-service" component={Service} />

    </Fragment>
)

export default ProductsPage
