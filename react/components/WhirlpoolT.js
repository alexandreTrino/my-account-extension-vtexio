import React,{Component,useState} from 'react'
import axios from 'axios'
import { Layout,PageBlock,Button,PageHeader  } from 'vtex.styleguide'

export default function WhirlpoolT() {

    const [order, setOrder] = useState([]);


    function clickH (){
        var data = JSON.stringify({
            "external_reference": "1128030207051-01_CIF"
          });
      
          console.log("fetch");
          var config = {
            method: 'get',
            //url: 'https://s88hx8maul.execute-api.us-east-1.amazonaws.com/default/Customers_ConsultarPedido',
            url:"https://store--whirlpoolmxlab.myvtex.com/_v/whirlpool_tracker/track/1128030207051-01",
            headers: {
              Accept: "application/vnd.vtex.ds.v10+json",
              'Content-Type': 'application/json',
              "Access-Control-Allow-Origin": "*"
            },
            data : data
          };
      
          axios(config)
          .then(function (response) {
            console.log(response.data.producto);
            setOrder(response.data.producto);

          })
          .catch(function (error) {
            console.log(error);
          });
      
    }

    return (
        <div style={{backgroundColor:"white"}}>
        <Layout pageHeader={<PageHeader title="Mis pedidos" />} style={{backgroundColor:"white"}}>
          <PageBlock>
            <Button onClick={() => clickH()}>GET DATA</Button>
            
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada ut neque id pharetra. Suspendisse tortor eros, sagittis at molestie at, semper mollis urna. Sed porta ipsum ac vulputate ultrices. Mauris sed libero quis risus rutrum efficitur in nec justo.</p>

          </PageBlock>
          <PageBlock>
            <h4>Last Order status</h4>
            <div>{order.map((product,index)=>(
              <div key={index}>
                  <h5>{product.material}</h5>
                  <p>{product.Estatus}</p>
                  <p>{product.Descripcion}</p>
                  
            </div>
            ))}</div>
          </PageBlock>
        </Layout>
      </div>
    )
}
