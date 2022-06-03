import React,{Component,useState} from 'react'
import axios from 'axios'
import { Layout,PageBlock,Button,PageHeader  } from 'vtex.styleguide'

export default function Service() {


    console.log("SERVICES")

    return (
        <div style={{backgroundColor:"white"}}>
        <Layout pageHeader={<PageHeader title="Mis Servicios" />} style={{backgroundColor:"white"}}>
          <PageBlock>
           
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada ut neque id pharetra. Suspendisse tortor eros, sagittis at molestie at, semper mollis urna. Sed porta ipsum ac vulputate ultrices. Mauris sed libero quis risus rutrum efficitur in nec justo.</p>

          </PageBlock>
          
        </Layout>
      </div>
    )
}
