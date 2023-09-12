import React from 'react'
import { Layout, PageBlock, Button, PageHeader } from 'vtex.styleguide'

const ExtensionContentPageTwo = ({message}) => {

  return (
    <>
      <Layout pageHeader={<PageHeader title="Mis pedidos" />} style={{backgroundColor:"white"}}>
        <PageBlock>
          <p> HELLO WORLD 222!! </p>
        </PageBlock>
      </Layout>
    </>
  )
}

export default ExtensionContentPageTwo