import React,{Component,useState} from 'react'
import axios from 'axios'
import {useQuery,useMutation} from 'react-apollo'
import { Layout,PageBlock,Button,PageHeader,Input,Dropdown,DatePicker  } from 'vtex.styleguide'
import PROFILE from '../graphql/getSession.graphql'
import MUTATION from '../graphql/createDocument.graphql'

export default function Category() {
    
    const {data:profileData} = useQuery(PROFILE);
    const [category,setCategory] =  useState("");
    const [modelo,setModelo] =  useState("");
    const [numeroSerie,setNumeroSerie] =  useState("");
    const [lugarCompra,setLugarCompra] =  useState("");
    const [comprobante,setComprobante] =  useState("");
    const [fechaCompra,setFechaCompra] =  useState("");
    const [createDocument] = useMutation(MUTATION);


    const options = [
        { value: 'Minisplits', label: 'Aire' },
        { value: 'mastercard', label: 'Cocine' },
        { value: 'elo', label: 'Lavanderia' },
        { value: 'diners', label: 'Accesorios' },
        { value: 'giftcard', label: 'Gift Card' },
        { value: 'amex', label: 'American Express' },
    ]


    function saveInformation(){
        createDocument({
           variables:{
               acronym:"PR",
               document:
               {
                   fields:[
                    {
                        key:"modelo",
                        value:"KUIX505ESS"
                    }
                    
                ]
               }
               
           }
       })
    }

    return (
        <div style={{backgroundColor:"white"}}>
        <Layout pageHeader={<PageHeader title="Agregar nuevo producto" />} style={{backgroundColor:"white"}}>
          <PageBlock>
           
            <div className="mb5">
                <Dropdown
                label="Categoria"
                options={options}
                placeholder="Lavanderia"
                value={category}
                onChange={(_, v) => setCategory(_.target.value)}
                onFocus={() => console.log('onFocus fired!')}
                onBlur={() => console.log('onBlur fired!')}
                onMouseEnter={() => console.log('onMouseEnter fired!')}
                onMouseLeave={() => console.log('onMouseLeave fired!')}
                />
            </div>
            <div className="mb5">
                <Input
                placeholder="KUIX505ESS"
                value={modelo}
                onChange={(e) => setModelo(e.target.value)}
                dataAttributes={{ 'hj-white-list': true, test: 'string' }}
                label="Modelo"
                />
            </div>
            <div className="mb5">
                <Input
                placeholder="27492749024"
                onChange={(e) => setNumeroSerie(e.target.value)}
                value={numeroSerie}
                dataAttributes={{ 'hj-white-list': true, test: 'string' }}
                label="Numero de serie"
                />
            </div>
            <div className="mb5">
                <DatePicker
                label="Fecha de compra"
                value={fechaCompra}
                placeholder="2022-01-01"
                onChange={date => setFechaCompra(date )}
                locale="es-MX"
                />
            </div>
            <div className="mb5">
                <Input
                placeholder="SEARS Anahuac"
                onChange={(e) => setLugarCompra(e.target.value)}
                value={lugarCompra}
                dataAttributes={{ 'hj-white-list': true, test: 'string' }}
                label="Lugar de compra"
                />
            </div>
            <div className="mb5">
                <Input
                type="file"
                placeholder="File..."
                value={comprobante}
                onChange={(e) => setComprobante(e.target.value)}
                dataAttributes={{ 'hj-white-list': true, test: 'string' }}
                label="Comprobante"
                />
            </div>
            <div className="mb4">
                <Button variation="primary" onClick={() => saveInformation()}>Guardar</Button>
            </div>
          </PageBlock>
          
        </Layout>
      </div>
    )
}
