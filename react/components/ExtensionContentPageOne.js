import React from 'react'
import { Layout, PageBlock, Button, PageHeader } from 'vtex.styleguide'

const ExtensionContentPageOne = ({message}) => {

  return (
    <>
      <Layout pageHeader={<PageHeader title="Mis pedidos" />} style={{backgroundColor:"white"}}>
        <PageBlock>
          <p> HELLO WORLD!! </p>
        </PageBlock>
      </Layout>
    </>
  )
}

export default ExtensionContentPageOne