import React,{Component,useState} from 'react'
import axios from 'axios'
import { Layout,PageBlock,Button,PageHeader ,Progress,Table,Tag } from 'vtex.styleguide'
import PROFILE from '../graphql/getSession.graphql'

export default function Products() {

  const sampleData = {items:[
    {
      modelo:"KUIX505ESS",
      categoria:"Minisplits",
      serie:"8630683063",
      nickname:"Minisplit recamara",
      informacion:"Completa"
    },
    {
      modelo:"KUIX505ESS",
      categoria:"Minisplits",
      serie:"8630683063",
      nickname:"Minisplit recamara",
      informacion:"Incompleta"
    }
  ]};
  const itemsCopy = sampleData.items
  const defaultSchema = {
    properties: {
      modelo: {
        title: 'Modelo',
      },
      categoria: {
        title: 'Categoría',
      },
      serie: {
        title: 'Número de serie',
      },
      nickname: {
        title: 'Nickname del producto',
      },
      informacion:{
        title:"Información",
        cellRenderer: ({ cellData }) => {
          return (
            <Tag bgColor={(cellData=="Completa")?"green":"lightgray"} color="black">
              <span className="nowrap">{cellData}</span>
            </Tag>
          )
        }
      }
    },
  };

  function customColorTagProperty(index) {
    return {
      title: `Color${index ? ` ${index}` : ''}`,
      cellRenderer: ({ cellData }) => {
        return (
          <Tag bgColor={cellData.color} color="#fff">
            <span className="nowrap">{cellData.label}</span>
          </Tag>
        )
      },
    }
  }

  const lineActions = [
    {
      label: ({ rowData }) => `Action for ${rowData.name}`,
      onClick: ({ rowData }) => alert(`Executed action for ${rowData.name}`),
    },
    {
      label: ({ rowData }) => `DANGEROUS action for ${rowData.name}`,
      isDangerous: true,
      onClick: ({ rowData }) =>
        alert(`Executed a DANGEROUS action for ${rowData.name}`),
    },
  ]
  
;  

    return (
        <div style={{backgroundColor:"white"}}>
        <Layout pageHeader={<PageHeader title="Mis Productos" />} style={{backgroundColor:"white"}}>
          <PageBlock>
            {/*<Progress type="steps" steps={['completed', 'inProgress', 'toDo']} />*/}
            <div>
              <div className="mb5">
                <Table
                  fullWidth
                  schema={defaultSchema}
                  items={itemsCopy}
                  lineActions={lineActions}
                  toolbar={{newLine: {
                    label: 'New',
                    handleCallback: () => window.location="/account/#/whirlpool-products/category",
                  }}}
                />
              </div>
            </div>
          </PageBlock>
          
        </Layout>
      </div>
    )
}
